window['examples'] = {
    ex1: {
	data: "@prefix foaf: <http://xmlns.com/foaf/0.1/>.\n\
@prefix test: <http://test.com/> .\n\
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\
\n\
test:Ladislav a foaf:Person; \n\
	      foaf:age 25 ;\n\
	      foaf:name \"Ladislav\" .\n\
\n\
test:Helena a foaf:Person;\n\
	        foaf:age 34 ;\n\
	        foaf:name \"Helena\" .",

	source: "\
new LinkedVis({width: 500, height: 500}).from(graph)\n\
\n\
              .struct(LinkedVis.List('{ ?node a foaf:Person }'))\n\
\n\
              .stackLayer(function(l) {\n\
\n\
                  l.bind({shape: 'rect', \n\
                          height:{rdfProperty: 'foaf:age',\n\
                                  scale:       'continous',\n\
                                  domainMin:   '0',\n\
                                  rangeMax:    '250'},\n\
                          width: '50',\n\
                          fill:  'green'})\n\
                   .theme({title: 'Example 1', axis:{y: 'foaf:age'}})\n\
\n\
              .layout(LinkedVis.Horizontal({'vertical-align': 'bottom',\n\
                                            'align':          'right'}))\n\
              .nestLayer(function(l) {\n\
\n\
                         l.bind({shape:        'text', \n\
                                 height:       '12',\n\
                                 fill:         '#FFFFFF',\n\
                                 content:      'foaf:name'})\n\
\n\
                          .layout(LinkedVis.Vertical({'vertical-align': 'top'}))\n\
\n\
                    });\n\
\n\
               })\n\
               .render('#canvas');"
    }
}