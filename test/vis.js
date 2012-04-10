var rdfstore = require('rdfstore');
var LinkedVis = require('../src/vis.js').LinkedVis;


/*
exports.testCreation = function(test) {

    var data = "@prefix foaf: <http://xmlns.com/foaf/0.1/>.\
                @prefix test: <http://test.com/> .\
                @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\
                test:Trudy a foaf:Person; \
                           foaf:age \"25\"^^<xsd:int> ;\
                           foaf:name \"Ladislav\" .\
                test:Helena a foaf:Person;\
                            foaf:age 34 ;\
                            foaf:name \"Helena\" .";

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.load("text/n3", data, function(s,d) {

	    console.log("TRIPLES");
	    graph.execute("select * { ?s ?p ?o }", function(s,r) { console.log(r) });

	    new LinkedVis({width: 500, height: 500}).from(graph)

		.struct(LinkedVis.List("{ ?node a foaf:Person }"))

		.stackLayer(function(l) {

		    l.bind({shape:'rect', 
			    height:{rdfProperty: 'foaf:age',
				    scale: 'continous'},
//				    domainMin: 0},
			    width: 20,
			    fill: 'green'})
		     .layout(LinkedVis.Horizontal({'vertical-align': 'bottom',
						   'align': 'right'}))
		})

		.stackLayer(function(l) {

		    l.bind({shape:'text', 
			    height:3,
			    fill: "#0000ff",
			    width: 20,
			    content: 'foaf:name'})
		     .layout(LinkedVis.Horizontal({'vertical-align': 'bottom',
						   'align': 'right'}))
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};



exports.testCreation2 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");
	console.log("loading...");
	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {
	    console.log("loaded");
	    new LinkedVis({width: 500, height: 500}).from(graph)

		.struct(LinkedVis.List("{ ?node a gg:Diamond }"))

		.stackLayer(function(l) {

		    l.bind({shape:'rect', 
			    height:{rdfProperty: 'gg:x',
				    scale: 'continous'},
			    width: 5,
			    fill: 'green'})
		     .layout(LinkedVis.Horizontal({'vertical-align': 'bottom',
						   'align': 'right'}))
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};



exports.testCreation3 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");

	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {

	    new LinkedVis({width: 500, height: 500}).from(graph)

		.struct(LinkedVis.List("{ ?node a gg:Diamond }"))

		.stackLayer(function(l) {

		    l.bind({shape:          'circle', 

			    x:              {rdfProperty: 'gg:x',
				             scale: 'continous'},

			    y:              {rdfProperty: 'gg:y',
				             scale: 'continous'},

			    radius:         {rdfProperty: 'gg:carat',
				             scale: 'continous',
				             rangeMin: 1,
				             rangeMax: 10},

			    fill:           {rdfProperty: 'gg:cut',
				             scale: 'hue'},

			    stroke:         'black',

			    'stroke-width': 1})

		     .layout(LinkedVis.Cartesian())
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};

exports.testCreation4 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");

	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {

	    new LinkedVis({width: 500, height: 500}).from(graph)

		.struct(LinkedVis.List("{ ?node a gg:Diamond }"))

		.stackLayer(function(l) {

		    l.bind({shape:'rect', 
			    x:{rdfProperty: 'gg:x',
			       scale: 'continous'},
			    y:{rdfProperty: 'gg:y',
			       scale: 'continous'},
			    width: {rdfProperty: 'gg:carat',
				     scale: 'continous',
				     rangeMin: 1,
				     rangeMax: 10},
			    height: {rdfProperty: 'gg:price',
				     scale: 'continous',
				     rangeMin: 1,
				     rangeMax: 10},
			    fill: 'green',
			    stroke: 'black',
			    'stroke-width': 1})

		     .layout(LinkedVis.Cartesian())
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};



exports.testCreation5 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");

	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {

	    new LinkedVis({width: 500, height: 500})

		.from(graph).struct(LinkedVis.List("{ ?node a gg:Diamond }"))

		.stackLayer(function(l) {

		    l.bind({shape:          'circle', 

			    x:              {rdfProperty: 'gg:carat',
				             scale: 'continous'},

			    y:              {rdfProperty: 'gg:price',
				             scale: 'continous'},

			    radius:         3,

			    fill:           {rdfProperty: 'gg:x',
				             scale: 'gradient',
					     rangeMin: "#00ff00",
					     rangeMax: "#ff0000"},

			    stroke:         'black',

			    'stroke-width': 1})

		     .layout(LinkedVis.Cartesian())
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};


exports.testCreation6 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();

	var data = "@prefix foaf: <http://xmlns.com/foaf/0.1/>.\
                    @prefix test: <http://test.com/> .\
                    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\
                    test:Ladislav a foaf:Person; \
                                  foaf:age \"25\"^^<xsd:int> ;\
                                  foaf:name \"Ladislav\" .\
                    test:Helena a foaf:Person;\
                                foaf:age 34 ;\
                                foaf:name \"Helena\" .";

	graph.load("text/n3", data, function(s,d) {

	    new LinkedVis({width: 500, height: 500})

		.from(graph).struct(LinkedVis.List("{ ?node a foaf:Person }"))

		.stackLayer(function(l) {

		    l.bind({shape:           'rect', 
					      
			    height:           200,
					      
			    width:            {rdfProperty: 'foaf:age',
				               scale: 'proportional',
					       rangeMin: 0},
					      
			    fill:            {rdfProperty: 'foaf:age',
				              scale: 'gradient',
					      rangeMin: "#00ff00",
					      rangeMax: "#ff0000"},
					      
			    stroke:          'black',
					      
			    'stroke-width':  1//,
			    //offset:          60 
			   })

		     .layout(LinkedVis.Polar())
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};


exports.testCreation7 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();

	var data = "@prefix foaf: <http://xmlns.com/foaf/0.1/>.\
                    @prefix test: <http://test.com/> .\
                    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\
                    test:Ladislav a foaf:Person; \
                                  foaf:age \"25\"^^<xsd:int> ;\
                                  foaf:name \"Ladislav\" .\
                    test:Helena a foaf:Person;\
                                foaf:age 34 ;\
                                foaf:name \"Helena\" .";

	graph.load("text/n3", data, function(s,d) {

	    new LinkedVis({width: 500, height: 500})

		.from(graph).struct(LinkedVis.List("{ ?node a foaf:Person }"))

		.stackLayer(function(l) {

		    l.bind({shape:           'rect', 
					      
			    height:           {rdfProperty: 'foaf:age',
				               scale: 'continous',
					       domainMin: 0,
					       domainMax: 80},
					      
			    width:            {rdfProperty: 'foaf:age',
				               scale: 'proportional',
					       rangeMin: 0},
					      
			    fill:            {rdfProperty: 'foaf:age',
				              scale: 'gradient',
					      rangeMin: "#00ff00",
					      rangeMax: "#ffff00"},
					      
			    stroke:          'black',
					      
			    'stroke-width':  1//,
			    //offset:          60 
			   })

		     .layout(LinkedVis.Polar())
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};


exports.testCreation8 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");

	graph.load("text/n3", "file://Users/antonio/Development/Projects/js/lv2/test/diamonds.n3", function(s,d) {

	    new LinkedVis({width: 500, height: 500})

		.from(graph).struct(LinkedVis.List("{ ?node a gg:Diamond }").group("gg:cut"))

		.stackLayer(function(l) {

		    l.bind({shape:           'rect', 
					      
			    height:           200,
					      
			    width:            {rdfProperty: 'gg:price',
					       aggregate: 'lv:sum',
				               scale: 'proportional',
					       rangeMin: 0},
					      
			    fill:            {rdfProperty: 'lv:count',
				              scale: 'gradient',
					      rangeMin: "#00ff00",
					      rangeMax: "#ffff00"},
					      
			    stroke:          'black',
					      
			    'stroke-width':  1//,
			    //offset:          60 
			   })

		     .layout(LinkedVis.Polar())
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};



exports.testCreation9 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("tw","http://twitter.com/");
	graph.registerDefaultNamespace("gh","http://github.com/");

        var data = '@prefix tw: <http://twitter.com/> .\
                    @prefix gh: <http://github.com/> .\
                    tw:1 a tw:Tweet ;\
                         tw:content "test" .\
                    tw:2 a tw:Tweet ;\
                         tw:content "test 2" .\
                    tw:3 a tw:Tweet ;\
                         tw:content "test 3" .\
                    gh:1 a gh:Commit;\
                         gh:action gh:commit;\
                         gh:sha1 "aaa..1" .\
                    gh:2 a gh:Commit;\
                         gh:action gh:commit;\
                         gh:sha1 "aaa..2" .\
                    gh:3 a gh:Commit;\
                         gh:action gh:commit;\
                         gh:sha1 "aaa..3" .\
                    gh:4 a gh:Commit;\
                         gh:action gh:commit;\
                         gh:sha1 "aaa..4" .\
                    gh:5 a gh:Commit;\
                         gh:action gh:pull;\
                         gh:sha1 "aab..1" .\
                    gh:6 a gh:Commit;\
                         gh:action gh:pull;\
                         gh:sha1 "aab..2" .\
                    gh:7 a gh:Commit;\
                         gh:action gh:pull;\
                         gh:sha1 "aac..3" .\
                    gh:8 a gh:Commit;\
                         gh:action gh:new;\
                         gh:sha1 "aad..4" .';

	graph.load("text/n3", data, function(s,d) {


	    new LinkedVis({width: 500, height: 500})

		.from(graph).struct(LinkedVis.Tree({
		    root: "{ { ?node a tw:Tweet } UNION { ?node a gh:Commit } }",
		    label: "root",
		    group: true,
		    branches: [
			{root: "{ ?parent a tw:Tweet }",
			 label: 'allTweets',
			 group: true},
			{root: "{ ?parent a gh:Commit }",
			 label: 'allCommits',
			 group: true,
			 branches: [
			     {root: "{ ?parent gh:action gh:commit }",
			      label: 'ghcommits',
			      group: true},
			     {root: "{ ?parent gh:action gh:pull }",
			      label: 'ghpulls',
			      group: true},
			     {root: "{ ?parent gh:action gh:new }",
			      label: 'ghnews',
			      group: true}
			 ]}
		    ]
		}))

		.stackLayer(function(l) {

		    l.bind({shape:           'rect', 

			    size:            {rdfProperty: 'lv:cumulativeCount',
				              scale: 'proportional'},
					      
			    fill:            function(node,i){ 
			                          if (node['lv:label'] === 'ghnews') {
				                      return '#ff0000';
				                  } else if(node['lv:label'] === 'ghpulls') {
				                      return '#ffcc00';				                   
				                  } else if(node['lv:label'] === 'ghcommits') {
				                      return '#ffaa00';				                   				                   
				                  } else if(node['lv:label'] === 'allTweets') {
				                      return '#00aaff';
				                  }
			                     },
					      
			    stroke:          'black',
					      
			    'stroke-width':  1
			   })

		     .layout(LinkedVis.TreeMap())
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};

*/


exports.testCreation10 = function(test) {

    rdfstore.create(function(graph) {
	graph.registerDefaultProfileNamespaces();
	graph.registerDefaultNamespace("test","http://test.com/");

        var data = '@prefix test: <http://test.com/> .\
                    @prefix foaf: <http://xmlns.com/foaf/0.1/>.\
		    test:1 a test:Node ;\
                         foaf:age 12 ;\
			 test:links test:2;\
			 test:links test:5.\
		    test:2 a test:Node ;\
                         foaf:age 24 ;\
			 test:links test:3;\
			 test:links test:4.\
		    test:3 a test:Node ;\
                         foaf:age 5 ;\
			 test:links test:1;\
			 test:links test:5.\
		    test:4 a test:Node ;\
                         foaf:age 10 ;\
			 test:links test:2 .\
		    test:5 a test:Node ;\
                         foaf:age 50 ;\
			 test:links test:1 ;\
			 test:links test:3 ; \
			 test:links test:4 .';


	graph.load("text/n3", data, function(s,d) {


	    new LinkedVis({width: 500, height: 500})

		.from(graph)

                .struct(LinkedVis.Graph("{ ?source test:links ?target }"))

		.stackLayer(function(l) {

		    l.bind('nodes',{
			shape:           'circle', 
			radius:          {rdfProperty: 'foaf:age',
					  scale: 'continous',
			                  rangeMin: 5,
					  rangeMax: 30},
			mass:            {rdfProperty: 'foaf:age',
					  scale: 'continous',
			                  rangeMin: 1,
					  rangeMax: 10},
			fill:            '#0000ff',
			'stroke-width':  1
		    })

		    .bind('edges',{
			shape:          'line',
			stroke:         '#cccccc',
			'stroke-width': 1
		    })
			       
		    .layout(LinkedVis.Force())
		})

  		.render(function(s, lv) {
		    console.log(s);
		    console.log(lv);
		    test.done();
		});

	});
    });
};
