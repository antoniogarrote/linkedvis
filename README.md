#LinkedVis

LinkedVis is a JS visualization toolkit for RDF data. It follows a  "Grammar of Graphics" (Wilkinson2005) approach for data visualisation as other popular libraries like ggplot2 for the R programming language.
The main difference between LinkedVis and these libraries is that LinkedVis is aware of the data layer for the visualisation, and supports the transformation of the RDF graph into the right data structure for the visualization as part of the grammar. LinkedVis also makes it possible to embed meta-data about the visualization as well as the raw RDF data within the final graphical output.

LinkedVis can be executed in the browser or as a Node.js library.

The current version of the library is just a preview to test the concepts behind it. Version 3 of the library will aim to produce a production ready solution. Check the different branches of the project.

## Example

    // Main canvas bounds
    new LinkedVis({width: 500, height: 500})
     // load data from a remote location
    .from("http://path/to/rdf/data")
     
     // Select RDF resources and store them in a sequential list
    .struct(LinkedVis.List("{ ?node a foaf:Person }"))
     
     // We add a layer to the visualisation
    .stackLayer(function(l) {
     
        // We bind each 'Person' resource to a 'rect' visual mark
        // with the following properties.
        // Scales can be used as well as raw values or RDF properties
        // for the resource
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
                'stroke-width':  1,
                offset:          60 
               })
     
              // We position the marks into the visualisation
              // using a Polar layout
              .layout(LinkedVis.Polar())
     
    })
     
    // Perform the actual rendering in the DOM element with id 'canvas'
    .render("#canvas");  