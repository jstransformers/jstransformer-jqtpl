'use strict'

const jqtpl = require('jqtpl')

exports.name = 'jqtpl'
exports.outputFormat = 'html'

exports.compile = jqtpl.build
