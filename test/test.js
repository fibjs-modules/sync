const sync = require('../');
const test = require('test');
const assert = require('assert');

test.setup();

describe("sync", () => {
  describe("callback", () => {
    it('should get result ok', () => {
      function cb(callback) {
        callback(null, 'this is cb');
      }
      const newCb = sync.cb(cb);
      assert(newCb() === 'this is cb');
    });

    it('should throw ok', () => {
      function cb(callback) {
        callback(new Error('this is cb error!'));
      }
      const newCb = sync.cb(cb);
      assert.throws(newCb, 'should throw error');
    });
  });

  describe("promise", () => {
    it('should get result ok', () => {
      function pr() {
        return new Promise((resovle, reject) => {
          resovle('this is pr');
        });
      }
      const newPr = sync.pr(pr);
      assert(newPr() === 'this is pr');
    });

    it('should throw ok', () => {
      function pr() {
        return new Promise((resovle, reject) => {
          reject('this is pr error!');
        });
      }
      const newPr = sync.pr(pr);
      assert.throws(newPr, 'should throw error');
    });
  });

  describe("generator", () => {
    it('should get result ok', () => {
      function* ge() {
        return 'this is ge';
      }
      const newGe = sync.ge(ge);
      assert(newGe() === 'this is ge');
    });

    it('should throw ok', () => {
      function* ge() {
        throw new Error('this is ge error!');
      }
      const newGe = sync.ge(ge);
      assert.throws(newGe, 'should throw error');
    });
  });

  describe("async await", () => {
    it('should get result ok', () => {
      async function aa() {
        return 'this is aa';
      }
      const newAa = sync.aa(aa);
      assert(newAa() === 'this is aa');
    });

    it('should throw ok', () => {
      async function aa() {
        throw new Error('this is aa error!');
      }
      const newAa = sync.aa(aa);
      assert.throws(newAa, 'should throw error');
    });
  });
});

process.exit(test.run(console.DEBUG));
