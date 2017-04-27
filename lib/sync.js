const coroutine = require('coroutine');
const co = require('co');

function cb(fn) {
  return function callbackSync(...argvs) {
    return sync(fn)(...argvs);
  };
};

function pr(fn) {
  return function promiseSync(...argvs) {
    const event = new coroutine.Event();
    let res, error;
    setTimeout(() => {
      fn(...argvs)
        .then(r => {
          res = r;
          event.set();
        })
        .catch(e => {
          error = e;
          event.set();
        });
    }, 1);
    event.wait();
    if (error) throw error;
    return res;
  };
};

function ge(fn) {
  return function generatorSync(...argvs) {
    const event = new coroutine.Event();
    let res, error;
    coroutine.start(() => {
      co(function* () {
        try {
          res = yield fn(...argvs);
        } catch (e) {
          error = e;
        } finally {
          event.set();
        }
      });
    });
    event.wait();
    if (error) throw error;
    return res;
  };
};

function aa(fn) {
  return function aaSync(...argvs) {
    const event = new coroutine.Event();
    let res, error;
    coroutine.start(() => {
      (async function() {
        try {
          res = await fn(...argvs);
        } catch (e) {
          error = e;
        } finally {
          event.set();
        }
      })();
    });
    event.wait();
    if (error) throw error;
    return res;
  };
};

module.exports.cb = cb;
module.exports.pr = pr;
module.exports.ge = ge;
module.exports.aa = aa;
