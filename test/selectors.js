var jsdom  = require('jsdom');
var fs     = require('fs');
var sizzle = fs.readFileSync("./node_modules/sizzle/sizzle.js").toString();
var rdfstore = require('rdfstore');
var LinkedVis = require('../src/vis.js').LinkedVis;


var Selectors = {};

