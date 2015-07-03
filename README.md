# jstransformer-jqtpl

[JQTPL](https://github.com/kof/jqtpl) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jqtpl/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jqtpl)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-jqtpl/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-jqtpl?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jqtpl/master.svg)](http://david-dm.org/jstransformers/jstransformer-jqtpl)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jqtpl.svg)](https://www.npmjs.org/package/jstransformer-jqtpl)

## Installation

    npm install jstransformer-jqtpl

## API

```js
var jqtpl = require('jstransformer')(require('jstransformer-jqtpl'))

jqtpl.render('Hello, ${name}!', {name: 'World'}).body
//=> 'Hello, World!'
```

## License

MIT
