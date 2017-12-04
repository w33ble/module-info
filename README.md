# module-info

Get information about your module from your package.json file and any git information.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/w33ble/module-info/master/LICENSE)
[![Build Status](https://travis-ci.org/w33ble/module-info.svg?branch=master)](https://travis-ci.org/w33ble/module-info)
[![Coverage](https://img.shields.io/codecov/c/github/w33ble/module-info.svg)](https://codecov.io/gh/w33ble/module-info)
[![npm](https://img.shields.io/npm/v/@w33bletools/module-info.svg)](https://www.npmjs.com/package/@w33bletools/module-info)
[![Project Status](https://img.shields.io/badge/status-experimental-orange.svg)](https://nodejs.org/api/documentation.html#documentation_stability_index)

# Usage

```
yarn add @w33bletools/module-info
```

And in your code:

```
const moduleInfo = require('@w33bletools/module-info');

const info = moduleInfo();

/*
{
  pkg: {
    name: 'your-repo',
    version: '1.0.0',
    main: 'index.js',
    dependencies: {}
  },
  git: {
    branch: 'master',
    tag: null,
    commit: {
      sha: 'ac2d0c4c19b7ab77bce0678fb304427c77d138db',
      message: 'initial commit',
      author: 'Commit Author <author@email>',
      date: '2017-12-04T20:42:52.000Z'
    }
  }
}
*/
```

#### License

MIT © [w33ble](https://github.com/w33ble)