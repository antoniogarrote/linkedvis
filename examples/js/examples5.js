window = {};
window['examples'] = {
    ex5: {
	data: "@prefix dbpedia: <http://dbpedia.org/resource/> .\n\
@prefix foaf: <http://xmlns.com/foaf/0.1/> .\n\
@prefix dbpedia-owl: <http://dbpedia.org/ontology/>.\n\
@prefix dbpprop: <http://dbpedia.org/property/>.\n\
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.\n\
dbpedia:Pau_Gasol  a dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"Gasol\" ;\n\
    dbpedia-owl:height \"2.133600\"^^xsd:double ;\n\
    dbpedia-owl:position \"Power forward\" ;\n\
    dbpprop:team dbpedia:Los_Angeles_Lakers .\n\
dbpedia:Shaquille_ONeal  a dbpedia-owl:BasketballPlayer ;\n\
    foaf:surname \"O&quot;Neal\" ;\n\
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

	source: "new LinkedVis({width: 500, height: 500})\n\
\n\
		.from(graph)\n\
\n\
                .struct(LinkedVis.Graph(\"{ ?source ?p ?target }\"))\n\
\n\
		.stackLayer(function(l) {\n\
\n\
		    l.bind('nodes',{\n\
			shape:           'circle', \n\
			radius:          function(s,g,i){ \n\
                                            if(s.uri.value === 'http://dbpedia.org/ontology/BasketballPlayer') \n\
                                                 return 20;\n\
                                            else if(s.uri.token === 'uri') \n\
                                                 return 10;\n\
                                            else\n\
                                                 return 5;\n\
                                         },\n\
			fill:            {rdfProperty: 'lv:RDFType',\n\
                                          scale: 'hue'},\n\
			'stroke-width':  1\n\
		    })\n\
\n\
		    .bind('edges',{\n\
			shape:          'line',\n\
			stroke:         '#cccccc',\n\
			'stroke-width': 1\n\
		    })\n\
			       \n\
		    .layout(LinkedVis.Force())\n\
		}).render(\"#canvas\")"
    }
}
