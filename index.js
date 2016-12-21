'use strict'

var jqtpl = require('jqtpl')

exports.name = 'jqtpl'
exports.outputFormat = 'html'

exports.compile = jqtpl.build
