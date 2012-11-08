rdfstore = require('../lib/rdf_store');
LinkedVis = require('../src/vis.js').LinkedVis;
fs = require('fs');

fs.readFile(process.argv[2], function(err,data) {
    if(!err) {

	rdfstore.create(function(graph) {
	    graph.registerDefaultProfileNamespaces();
	    graph.registerDefaultNamespace("gg","http://ggplot.org/diamonds/");

	    graph.load("text/n3", data.toString(), function(s,d) {

		console.log("LOADED "+d+" TRIPLES");

		new LinkedVis({width: 500, height: 300}).from(graph)

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
  		    .render(function(){


		new LinkedVis({width: 500, height: 300}).from(graph)

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
  		    .render();	



		    });	
	
	    });
	});
    } else {
	console.log("ERROR!");
    }
});