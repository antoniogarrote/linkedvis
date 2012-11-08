window['examples'] = {
    ex2: {
	data: "@prefix dbpedia: <http://dbpedia.org/resource/> .\n\
@prefix foaf: <http://xmlns.com/foaf/0.1/> .\n\
@prefix dbpedia-owl: <http://dbpedia.org/ontology/>.\n\
@prefix dbpprop: <http://dbpedia.org/property/>.\n\
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.\n\
dbpedia:Shaquille_ONeal  a dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"O'Neal\" ;\n\
    dbpedia-owl:height \"2.159000\"^^xsd:double ;\n\
    dbpedia-owl:position \"Center\" ;\n\
    dbpprop:team dbpedia:Los_Angeles_Lakers .\n\
dbpedia:Michael_Jordan a  dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"Jordan\" ;\n\
    dbpedia-owl:height \"1.981200\"^^xsd:double ;\n\
    dbpedia-owl:position \"Shooting guard / Small forward\" ;\n\
    dbpprop:team dbpedia:Chicago_Bulls .\n\
dbpedia:Magic_Johnson a  dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"Johnson\" ;\n\
    dbpedia-owl:height \"2.057400\"^^xsd:double ;  \n\
    dbpedia-owl:position \"Point guard / Forward\" ;\n\
    dbpprop:team dbpedia:Los_Angeles_Lakers .\n\
dbpedia:Larry_Bird a  dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"Bird\" ;\n\
    dbpedia-owl:height \"2.057400\"^^xsd:double ;  \n\
    dbpedia-owl:position \"Forward\" ;\n\
    dbpprop:team dbpedia:Boston_Celtics .\n\
dbpedia:Pau_Gasol  a dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"Gasol\" ;\n\
    dbpedia-owl:height \"2.133600\"^^xsd:double ;\n\
    dbpedia-owl:position \"Power forward\" ;\n\
    dbpprop:team dbpedia:Los_Angeles_Lakers .\n\
dbpedia:Scottie_Pippen a  dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"Pippen\" ;\n\
    dbpedia-owl:height \"2.032000\"^^xsd:double ;      \n\
    dbpedia-owl:position \"Forward\" ;\n\
    dbpprop:team dbpedia:Chicago_Bulls .\n\
dbpedia:Karl_Malone a  dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"Malone\" ;\n\
    dbpedia-owl:height \"2.057400\"^^xsd:double ;      \n\
    dbpedia-owl:position \"Power Forward\" ;\n\
dbpprop:team dbpedia:Utah_Jazz .",

	source: "new LinkedVis({width: 500, height: 300}).from(graph)\n\
\n\
              .struct(LinkedVis.List('{ ?node a dbpedia-owl:BasketballPlayer }'))\n\
\n\
              .stackLayer(function(l) {\n\
\n\
                  l.bind({shape: 'rect', \n\
                          height:{'rdfProperty': 'dbpedia-owl:height',\n\
                                  'scale':       'continous',\n\
                                  'domainMin':   1.9,\n\
                                  'rangeMax':    260},\n\
                          width: '50',\n\
                          stroke: 'lightGray',\n\
                          'stroke-width': 1,\n\
                          fill:  {rdfProperty: 'dbpedia-owl:position',\n\
				  scale: 'hue'}})\n\
\n\
                   .theme({title: 'Famous Players Height', axis:{y: 'dbpedia-owl:height'}})\n\
\n\
              .layout(LinkedVis.Horizontal({'vertical-align': 'bottom',\n\
                                            'align':          'right'}))\n\
              .nestLayer(function(l) {\n\
\n\
                         l.bind({shape:        'text', \n\
                                 height:       '12',\n\
                                 fill:         'black',\n\
                                 content:      'foaf:surname'})\n\
\n\
                          .layout(LinkedVis.Vertical({'vertical-align': 'top'}))\n\
\n\
                    });\n\
\n\
               })\n\
               .render('#canvas');"
    }
}