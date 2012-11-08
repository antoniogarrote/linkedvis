var rdfstore = require('rdfstore');
var LinkedVis = require('../src/vis.js').LinkedVis;
var xmlparser = require('libxml-to-js');

exports.LinkedList1 = function(test) {
    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");
	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {
	    var vis = new LinkedVis(graph);

	    var list = new LinkedVis.List(vis);
	    
	    list.select("SELECT ?node { ?node a gg:Diamond }", function(success, results){
		test.ok(success);
		test.ok(list.nodes.length === results.length);
		test.ok(list.nodes.length === 917);
		for(var i=0; i<list.nodes.length; i++) {
		    var node = list.nodes[i];
		    test.ok(node.constructor === LinkedVis.Resource);
		    test.ok(node.uri.indexOf("http://ggplot.org/diamonds/") === 0);
		}
		test.done();
	    });
	});
    });
};


exports.LinkedListGrouped1 = function(test) {
    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");
	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {
	    var vis = new LinkedVis(graph);

	    var list = new LinkedVis.List(vis);
	    
	    list.groupBy("gg:color");
	    list.select("SELECT ?node { ?node a gg:Diamond }", function(success, results){
		test.ok(success);
		test.ok(list.nodes.length === results.length);
		test.ok(list.nodes.length === 7);		
		var repeatedGroups = {};
		var repatedValues = {};
		for(var i=0; i<list.nodes.length; i++) {
		    var group = list.nodes[i];
		    test.ok(group.constructor === LinkedVis.Group);
		    test.ok(repeatedGroups[group.uri] === undefined);
		    test.ok(repeatedGroups[group.value] === undefined);
		    repeatedGroups[group.uri] = true;
		    repeatedGroups[group.value] = true;
		    test.ok(group.property === "http://ggplot.org/diamonds/color");
		    for(var j=0; j<group.nodes.length; j++) {
			var node = group.nodes[j];
			test.ok(node.constructor === LinkedVis.Resource);
			var values = node.getValueOfProperty("gg:color");
			test.ok(values.length === 1);
			test.ok(values[0] === group.value);
		    }
		}
		test.done();
	    });
	});
    });
};


exports.Rendered1 = function(test) {
    var bounds = {x:0, y:0, width:500, height: 500};
    var bindings = {'$mark': 'rect', height: {rdfProperty: 'gg:y'}};

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");
	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {
	    var vis = new LinkedVis(graph);

	    var list = new LinkedVis.List(vis);
	    
	    list.select("SELECT ?node { ?node a gg:Diamond } LIMIT 3", function(success, results){

		var layout = new LinkedVis.HorizontalLayout({align: 'left'});
		var layer = new LinkedVis.Layer(bounds);

		layer.bind(bindings, list, layout);

		var doc = "";
		doc = layer.render(doc,{});

		xmlparser(doc, function(error, results) {
		    test.ok(!error);
		    test.ok(results.rect.length === 3);
		    var acum = 0;
		    var heights = {};
		    for(var i=0; i<results.rect.length; i++) {
			acum = acum + parseFloat(results.rect[i]['@'].width);
			test.ok(results.rect[i]['@'].width !== 0);
			heights[results.rect[i]['@'].about] = parseFloat(results.rect[i]['@'].height);
		    }

		    for(var i=0; i<list.nodes.length; i++) 
			test.ok(heights[list.nodes[i].uri] === list.nodes[i].getValueOfProperty('gg:y')[0]);
		    test.ok(acum === 500);
		    test.done();
		});
	    });
	});
    });
};

exports.Rendered2 = function(test) {
    var bounds = {x:0, y:0, width:500, height: 600};
    var bindings = {'$mark': 'rect', 
		    height: {rdfProperty: 'gg:y',
			     scale: 'continous'}
		   };

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");
	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {
	    var vis = new LinkedVis(graph);

	    var list = new LinkedVis.List(vis);
	    
	    list.select("SELECT ?node { ?node a gg:Diamond } LIMIT 3", function(success, results){

		var layout = new LinkedVis.HorizontalLayout({align: 'left'});
		var layer = new LinkedVis.Layer(bounds);

		layer.bind(bindings, list, layout);

		var doc = "";
		doc = layer.render(doc,{});

		xmlparser(doc, function(error, results) {
		    test.ok(!error);
		    test.ok(results.rect.length === 3);
		    var acumWith = 0;
		    for(var i=0; i<results.rect.length; i++) {
			acumWith = acumWith + parseFloat(results.rect[i]['@'].width);
			test.ok(parseFloat(results.rect[i]['@'].width) !== 0);
			test.ok(parseFloat(results.rect[i]['@'].height) > 0 && parseFloat(results.rect[i]['@'].height) < 600);
			test.ok(parseFloat(results.rect[i]['@'].height) !== 0);
		    }

		    test.ok(acumWith === 500);
		    test.done();
		});
	    });
	});
    });
};


exports.Rendered3 = function(test) {
    var bounds = {x:0, y:0, width:500, height: 600};
    var bindings = {'$mark': 'rect', 
		    height: {rdfProperty: 'gg:y',
			     scale: 'proportional'}
		   };

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");
	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {
	    var vis = new LinkedVis(graph);

	    var list = new LinkedVis.List(vis);
	    
	    list.select("SELECT ?node { ?node a gg:Diamond } LIMIT 3", function(success, results){

		var layout = new LinkedVis.HorizontalLayout({align: 'left'});
		var layer = new LinkedVis.Layer(bounds);

		layer.bind(bindings, list, layout);

		var doc = "";
		doc = layer.render(doc,{});

		xmlparser(doc, function(error, results) {
		    test.ok(!error);
		    test.ok(results.rect.length === 3);
		    var acumWith = 0;
		    var acumHeight = 0;
		    for(var i=0; i<results.rect.length; i++) {
			acumWith = acumWith + parseFloat(results.rect[i]['@'].width);
			test.ok(parseFloat(results.rect[i]['@'].width) !== 0);
			test.ok(parseFloat(results.rect[i]['@'].height) > 0 && parseFloat(results.rect[i]['@'].height) < 600);
			acumHeight = acumHeight + parseFloat(results.rect[i]['@'].height);
		    }

		    test.ok(acumWith === 500);
		    test.ok(acumHeight === 600);
		    test.done();
		});
	    });
	});
    });
};