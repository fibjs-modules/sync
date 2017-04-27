# @fibjs/sync

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@fibjs/sync.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fibjs/sync
[travis-image]: https://img.shields.io/travis/fibjs-modules/sync.svg?style=flat-square
[travis-url]: https://travis-ci.org/fibjs-modules/sync
[codecov-image]: https://img.shields.io/codecov/c/github/fibjs-modules/sync.svg?style=flat-square
[codecov-url]: https://codecov.io/github/fibjs-modules/sync?branch=master
[david-image]: https://img.shields.io/david/fibjs-modules/sync.svg?style=flat-square
[david-url]: https://david-dm.org/fibjs-modules/sync
[snyk-image]: https://snyk.io/test/npm/@fibjs/sync/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@fibjs/sync
[download-image]: https://img.shields.io/npm/dm/@fibjs/sync.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fibjs/sync

Synchronize all kinds of async function, make the world peace and quiet!

## Install

```bash
$ npm i @fibjs/sync --save
```

## Usage

```js
const sync = require('@fibjs/sync');

function cb(callback) {
  callback(null, 'this is cb');
}

function pr() {
  return new Promise((resovle, reject) => {
    resovle('this is pr');
  });
}

function* ge() {
  return 'this is ge';
}

async function aa() {
  return 'this is aa';
}

const newCb = sync.cb(cb);
const newPr = sync.pr(pr);
const newGe = sync.ge(ge);
const newAa = sync.aa(aa);

```

Now you can use `newCb`,`newPr`,`newGe`,`newAa` as a normal sync function and use try/catch to handle the error.

## Questions & Suggestions

Please open an issue [here](https://github.com/fibjs-modules/sync/issues).

## License

[MIT](LICENSE)