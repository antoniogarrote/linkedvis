var Utils = {};
Utils.stackCounterLimit = 1000;
Utils.stackCounter = 0;

Utils.extend = function(supertype, descendant) {
    descendant.prototype = new supertype();
};


Utils.idGenContext = {};

Utils.genSymbol = function(text) {
    var value = Utils.idGenContext[text] || 0;
    value++;
    Utils.idGenContext[text] = value;
    return text+(value);
};

Utils.toString = function(obj) {
    if(obj.token !== undefined && obj.token === 'uri')
	return obj.value;
    else
	return obj;
};

Utils.findMaxMin = function(values) {
    var max,min,val;
    for(var i=0; i<values.length; i++) {
	val = values[i];
	if(val !== undefined) {
	    if(max === undefined || val > max)
		max = val;
	    if(min === undefined || val < min)
		min = val;
	}
    }
    return [max,min];
};

// Small ontology for the library
var Vocabulary = {};
Vocabulary.ns = "http://linkedvis.org/vocabulary";
Vocabulary.Group = Vocabulary.ns+"/selection/Group";
Vocabulary.GroupInstance = Vocabulary.Group+"#";
Vocabulary.GroupingFunction = Vocabulary.ns+"/selection/GroupingFunction";
Vocabulary.GroupingFunctionInstance = Vocabulary.GroupingFunction+"#";
Vocabulary.Layer = Vocabulary.ns+"/visual/Layer";
Vocabulary.LayerInstance = Vocabulary.Layer + "#";
Vocabulary.Mark = Vocabulary.ns+"/visual/Mark";
Vocabulary.MarkInstance = Vocabulary.Mark+"#";

// Browser or node feature detection
if(typeof(require)==='undefined') {
    require = function() {};
    exports = {};
    Utils.htmlEncode = function(text) {
	return $('<div/>').text(text).html();
    };
    Utils.htmlDecode = function(xml) {
	return $('<div/>').html(xml).text();
    };
} else {
    rdfstore = require('rdfstore');
    var htmlencoding = require('./htmlencoding');
    Utils.htmlEncode = function(text) {
	return htmlencoding.HTMLEncode(text);
    };
    Utils.htmlDecode = function(xml) {
	return htmlencoding.HTMLDecode(xml);
    };
}


Utils.recur = function(c){
    if(Utils.stackCounter === Utils.stackCounterLimit) {
        Utils.stackCounter = 0;
        setTimeout(c, 0);
    } else {
        Utils.stackCounter++;
        c();
    } 
};

Utils.repeat = function(c,max,floop,fend,env) {
    if(arguments.length===4) { env = {}; }
    if(c<max) {
        env._i = c;
        floop(function(floop,env){
            // avoid stack overflow
            // deadly hack
            Utils.recur(function(){ Utils.repeat(c+1, max, floop, fend, env); });
        },env);
    } else {
        fend(env);
    }
};

Utils.uniq = function(a, p) {
    var acum = {};
    for(var i=0; i<a.length; i++)
	acum[p(a[i])] = a[i];
    var s = [];
    for(var pp in acum)
	s.push(acum[pp]);
    return s;
};

Utils.map = function(collection, predicate) {
    if(collection.map) {
	return collection.map(predicate);
    } else {
	var acum = [];
	for(var i=0; i<collection.length; i++) {
	    acum.push(predicate(collection[i]));
	}
	return acum;
    }
};


/*
 * Main Namespace
 */


/**
 * Creates a new LinkedVis object.
 *
 * It might accept an existing rdfstore with an already
 * stored RDF graph.
 * If no store is provided, a new one will be created.
 */
var LinkedVis = function() {
    if(arguments.length === 0) {
	this.rdfstore = rdfstore.create();
    } else {
	this.rdfstore = arguments[0];
    }
};


/*
 * Structures and data selection
 */


/**
 * Wraps a RDF resource retrieved from a SPARQL query
 */
LinkedVis.Resource = function(uri, graph, rdf) {
    if(arguments.length !== 0) {
	this.uri = Utils.toString(uri);
	this.graph = graph;
	this.rdf = rdf;
    }
};
LinkedVis.Resource.prototype.constructor = LinkedVis.Resource;

/**
 * Returns all the associated objects (resources, literals, blank nodes) for a property of
 * of this result.
 * Property must be the URI or CURIE string or a URI object.
 * 
 * Returns either an array of objects;
 */
LinkedVis.Resource.prototype.getProperty = function(uri) {
    uri = Utils.toString(uri);

    var results = this.graph.match(null, this.rdf.createNamedNode(this.rdf.resolve(uri)), null,null);
    return Utils.map(results.triples, function(t) { return t.object; });
};

/**
 * Similar to *getProperty* but the values are returned transformed into their String 
 * representation.
 */
LinkedVis.Resource.prototype.getValueOfProperty = function(uri) {
    var result = this.getProperty(uri);
    return Utils.map(result, function(o) { return o.valueOf(); });
};

/**
 * Return all the RDF predicates and objects for this resource
 */
LinkedVis.Resource.prototype.getProperties = function() {
    uri = Utils.toString(this.uri);

    var results = this.graph.match(this.rdf.createNamedNode(this.rdf.resolve(uri)), null, null,null);
    return Utils.map(results.triples, function(t) { return [t.predicate, t.object]; });
};


/**
 * Return all the RDF predicates and objects for this resource as pairs of strings
 */
LinkedVis.Resource.prototype.getPropertiesValues = function() {
    var results = this.getProperties();
    return Utils.map(results, function(pv) { return [pv[0].valueOf(), pv[1].valueOf()]; });
};


/**
 * Builds a collection of groups from a collection of nodes
 */
LinkedVis.GroupBuilder = function(groupPredicate, graph) {
    if(typeof(groupPredicate) === 'string') {
	this.groupProperty = (graph.rdf.resolve(groupPredicate) || groupPredicate);
	var that = this;
	this.groupPredicateFn = function(node) {
	    var match = node.match(null, that.groupProperty, null, 1).toArray();
	    if(match.length === 1)
		return match[0].object.valueOf();
	    else
		return null;
	};
    } else {
	groupProperty = Utils.genSymbol(Vocabulary.GroupingFunctionInstance);
	groupPredicateFn = that.groupPredicate;
    }
    
    this.uri = Utils.genSymbol(Vocabulary.GroupInstance);
    this.graph = graph;
    this.groups = {};
};

LinkedVis.GroupBuilder.prototype.aggregate = function(node) {
    var value = this.groupPredicateFn(node.graph);
    group = this.groups[value] || (new LinkedVis.Group(this.groupProperty, value, this.graph.rdf));
    group.add(node);
    this.groups[value] = group;
};

LinkedVis.GroupBuilder.prototype.collectGroups = function() {
    var acum = [];
    for(var group in this.groups)
	acum.push(this.groups[group]);
    return acum;
};

/**
 * Wraps an aggregation of resources by the value of some RDF property
 */

LinkedVis.Group = function(property, value, rdf) {
    LinkedVis.Resource.call(this, 
			    Utils.genSymbol(Vocabulary.GroupInstance),
			    new rdf.api.Graph(),
			    rdf);
    
    this.property = property;
    this.value = value;
    this.nodes = [];
};
/* 
 * A Group is a special RDF resource with properties
 * asigned while rendering the visualisation.
 */
Utils.extend(LinkedVis.Resource, LinkedVis.Group); 
LinkedVis.Group.prototype.constructor = LinkedVis.Group;

LinkedVis.Group.prototype.add = function(resource) {
    this.nodes.push(resource);
};

/**
 * Structure that manages a list of nodes
 * retrieved from a SPARQL query.
 */
LinkedVis.List = function(linkedvis) {
    // nodes will be retrieved and inserted here;
    this.nodes = [];
    this.linkedvis = linkedvis;
    this.groupPredicate = null;
};
LinkedVis.List.prototype.constructor = LinkedVis.List;

LinkedVis.List.prototype.groupBy = function(predicate) {
    this.groupPredicate = predicate;
};

LinkedVis.List.prototype.select = function(query, cb){
    this.query = query;

    if(query.indexOf("?node") === -1) {
	throw "Wrong query for List selection '"+query+"' no '?node' variable in query";
    } else {
	var success, that = this, graph = this.linkedvis.rdfstore;
	graph.execute(query, function(s,results) {
	    if(s) {
		var acum = [];
		for(var i=0; i<results.length; i++)
		    acum.push(results[i]['node']);

		Utils.repeat(0, acum.length, function(k,env) {
		    floop = arguments.callee;
		    var query = "CONSTRUCT { <"+acum[env._i].value+"> ?p ?o } WHERE { <"+acum[env._i].value+"> ?p ?o }";
		    setTimeout(function() {
			graph.execute(query, function(s, nodeGraph) {
			    if(s) {
				var uri = acum[env._i];
				nodeGraph.rdf = graph.rdf;
				var resource = new LinkedVis.Resource(uri, nodeGraph, graph.rdf);
				that.nodes.push(resource);
			    }
			    k(floop,env);
			});
		    },0);
		}, function() {
		    if(that.groupPredicate) {
			var groupBuilder = new LinkedVis.GroupBuilder(that.groupPredicate, graph);
			var groups = {}, group;
			for(var i=0; i<that.nodes.length; i++) 
			    groupBuilder.aggregate(that.nodes[i]);
			
			that.nodes = groupBuilder.collectGroups();
			cb(true, that.nodes);
		    } else {
			cb(true, that.nodes);
		    }
		});
	    } else {
		cb(false, "Error executing List selection for SPARQL query '"+query+"': \n\t"+results);
	    }

	});
    }
};

/* 
 * Visual Elements
 */

/**
 * Scale object
 *
 * Registry for all the different scales
 */
var Scale = {};

var ContinousScale = function(domainMax, domainMin, rangeMax,rangeMin) {
    this.rangeMax = rangeMax;
    this.rangeMin = rangeMin;
    this.domainMax = domainMax;
    this.domainMin = domainMin;
    this.range = this.rangeMax - this.rangeMin;
    this.domain = this.domainMax - this.domainMin;
};

ContinousScale.prototype.partition = function(partitions) {
    partitions = partitions || 10;
    var quantum = (this.domain/partitions), upto=(this.domainMin+quantum);
    var acum = [];
    while(upto<this.domainMax) {
	acum.push({'domain': upto, 'range':this.apply(upto)});
	upto = upto + quantum;
    }
    
    return acum;
};

ContinousScale.prototype.apply = function(v) {
    var scale = (v - this.domainMin) / this.domain;

    return this.rangeMin + (scale * this.range);
};

// Register the scale
Scale['continous'] = ContinousScale;

var ProportionalScale = function(total, rangeMax,rangeMin) {
    this.range = rangeMax - rangeMin;
    this.rangeMin = rangeMin;
    this.domain = total;
};

ProportionalScale.prototype.partition = function(partitions) {
    partitions = partitions || 10;
    var quantum = (this.domain/partitions), upto=quantum;
    var acum = [];
    while(upto<this.domain) {
	acum.push({'domain': upto, 'range':this.apply(upto)});
	upto = upto + quantum;
    }
    
    return acum;
};

ProportionalScale.prototype.apply = function(v) {
    var scale = v / this.domain;
    return (scale * this.range);
};

// Register the scale
Scale['proportional'] = ProportionalScale;

var HueScale = function(categories) {
    var colors = Color.categories(categories.length);
    this.mapping = {};
    for(var i=0; i<categories.length; i++)
	this.mapping[categories[i]] = colors[i];
};

HueScale.prototype.apply = function(v) {
    return this.mapping[v];
};

// Register the scale
Scale['hue'] = HueScale;


var GradientScale = function(domainMax, domainMin, rangeMax,rangeMin) {
    this.rangeMax = rangeMax;
    this.rangeMin = rangeMin;
    this.domainMax = domainMax;
    this.domainMin = domainMin;
    this.domain = this.domainMax - this.domainMin;
    if(this.rangeMax[0] === '#')
	this.rangeMax = this.rangeMax.split("#")[1];
    if(this.rangeMin[0] === '#')
	this.rangeMin = this.rangeMin.split("#")[1];
    this.steps = Color.gradient(this.rangeMin, this.rangeMax, 100);
};

GradientScale.prototype.apply = function(v) {
    var scale = Math.round((v - this.domainMin) / this.domain * 100);
    // scale [0,99]
    return this.steps[scale];
};

// Register the scale
Scale['gradient'] = GradientScale;

/**
 * Color tools
 */
var Color = {};
Color.RGB2HSV = function(rgb) {
    hsv = new Object();
    max=Color.max3(rgb.r,rgb.g,rgb.b);
    dif=max-Color.min3(rgb.r,rgb.g,rgb.b);
    hsv.saturation=(max==0.0)?0:(100*dif/max);
    if (hsv.saturation==0) hsv.hue=0;
    else if (rgb.r==max) hsv.hue=60.0*(rgb.g-rgb.b)/dif;
    else if (rgb.g==max) hsv.hue=120.0+60.0*(rgb.b-rgb.r)/dif;
    else if (rgb.b==max) hsv.hue=240.0+60.0*(rgb.r-rgb.g)/dif;
    if (hsv.hue<0.0) hsv.hue+=360.0;
    hsv.value=Math.round(max*100/255);
    hsv.hue=Math.round(hsv.hue);
    hsv.saturation=Math.round(hsv.saturation);
    return hsv;
};

// RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
// which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
Color.HSV2RGB = function(hsv) {
    var rgb=new Object();
    if (hsv.saturation==0) {
        rgb.r=rgb.g=rgb.b=Math.round(hsv.value*2.55);
    } else {
        hsv.hue/=60;
        hsv.saturation/=100;
        hsv.value/=100;
        i=Math.floor(hsv.hue);
        f=hsv.hue-i;
        p=hsv.value*(1-hsv.saturation);
        q=hsv.value*(1-hsv.saturation*f);
        t=hsv.value*(1-hsv.saturation*(1-f));
        switch(i) {
        case 0: rgb.r=hsv.value; rgb.g=t; rgb.b=p; break;
        case 1: rgb.r=q; rgb.g=hsv.value; rgb.b=p; break;
        case 2: rgb.r=p; rgb.g=hsv.value; rgb.b=t; break;
        case 3: rgb.r=p; rgb.g=q; rgb.b=hsv.value; break;
        case 4: rgb.r=t; rgb.g=p; rgb.b=hsv.value; break;
        default: rgb.r=hsv.value; rgb.g=p; rgb.b=q;
        }
        rgb.r=Math.round(rgb.r*255);
        rgb.g=Math.round(rgb.g*255);
        rgb.b=Math.round(rgb.b*255);
    }
    return rgb;
};

Color.min3 = function(a,b,c) { 
    return (a<b)?((a<c)?a:c):((b<c)?b:c); 
}; 

Color.max3 = function(a,b,c) { 
    return (a>b)?((a>c)?a:c):((b>c)?b:c); 
};

Color.HueShift = function(h,s) { 
    h+=s; 
    while (h>=360.0) h-=360.0; 
    while (h<0.0) h+=360.0; 
    return h; 
};

Color.categories = function(numColors) {
    var steps = Math.round(360 / numColors);
    var temprgb;
    var acum = [];
    var r,g,b;
    for(var i=0; i<numColors; i++) {
	temprgb = {r:255,g:0,b:0};
	temphsv=Color.RGB2HSV(temprgb);
	temphsv.hue=Color.HueShift(temphsv.hue,(i*steps));
	temprgb=Color.HSV2RGB(temphsv);
	r = temprgb.r.toString(16);
	g = temprgb.g.toString(16); 
	b = temprgb.b.toString(16); 
	acum.push("#"+(r < 10 ? ('0'+r) : r) + (g < 10 ? ('0'+g) : g) + (b < 10 ? ('0'+b) : b));
    }

    return acum;
};

Color.hexdec = function(hex_string) {
    // Returns the decimal equivalent of the hexadecimal number
    // Original by Philippe Baumann
    hex_string = (hex_string+'').replace(/[^a-f0-9]/gi, '');
    return parseInt(hex_string, 16);
};

Color.convert_to_hex = function(num) {
    // Converts numeric value (such as 170) to a hexadecimal string (such as 'AA')
    // Original by Jim Bumgardner
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((num >> 4) & 0x0F,1)) + nybHexString.substr(num & 0x0F,1);
};

Color.gradient = function(colour_1, colour_2, increments) {
    // Returns array with length 'increments' as a gradient from 'colour_1' to 'colour_2'
    
    var from_rgb = [];
    var to_rgb = [];
    var step_rgb = [];
    var gradient_colours = [];
    var rgb = [];
    var hex_rgb = [];
     
    from_rgb.r = Color.hexdec(colour_1.substr(0, 2));
    from_rgb.g = Color.hexdec(colour_1.substr(2, 2));
    from_rgb.b = Color.hexdec(colour_1.substr(4, 2));
     
    to_rgb.r = Color.hexdec(colour_2.substr(0, 2));
    to_rgb.g = Color.hexdec(colour_2.substr(2, 2));
    to_rgb.b = Color.hexdec(colour_2.substr(4, 2));
     
    step_rgb.r = (from_rgb.r - to_rgb.r) / (increments);
    step_rgb.g = (from_rgb.g - to_rgb.g) / (increments);
    step_rgb.b = (from_rgb.b - to_rgb.b) / (increments);

    for(var i = 0; i <= increments; i++) {
        rgb.r = Math.floor(from_rgb.r - (step_rgb.r * i));
        rgb.g = Math.floor(from_rgb.g - (step_rgb.g * i));
        rgb.b = Math.floor(from_rgb.b - (step_rgb.b * i));
        
        hex_rgb.r = Color.convert_to_hex(rgb.r);
        hex_rgb.g = Color.convert_to_hex(rgb.g);
        hex_rgb.b = Color.convert_to_hex(rgb.b);

        var hex_string = "";
        
        for (var hex in hex_rgb)
	    hex_string += hex_rgb[hex];
        gradient_colours.push("#"+hex_string);
    }
     
    return gradient_colours;
};


/**
 * Base object for building visual marks, receives a template with
 * bindings and then can render a visual object using those
 * bindings and the bounds provided by a certain layout.
 */
LinkedVis.MarkBuilder = function(bindings) {
    this.name = "Mark";
    this.bindings = bindings;
    this.bounds = null;
    this.supportedBindings = {}; // The bindings supported by this visual mark
};
LinkedVis.MarkBuilder.prototype.constructor = LinkedVis.MarkBuilder;


/**
 * Transforms the bindings into a series of functions adapted
 * to the passed bounds that will be applied to data element
 * to obtain the final rendered object.
 */
LinkedVis.MarkBuilder.prototype.processBindings = function(bounds, nodes, layout) {
    this.bounds = bounds;

    var resolved = {}, that = this;

    for(var binding in this.bindings) {
	var info = this.bindings[binding];
	//if(this.supportedBindings[binding] === undefined)
	//    throw("Unsupported binding '"+binding+"' for mark "+this.name);
	//else {
	    if(typeof(info) === 'function')
		resolved[binding] = info;
	    else if(typeof(info) !== 'object') {
		resolved[binding] = function() { return info; };
	    } else if(info['scale'] === undefined && info['rdfProperty'] !== undefined) {
		resolved[binding] = function(node) { return node.getValueOfProperty(info['rdfProperty'])[0]; };
	    } else if(info['scale'] !== undefined && info['rdfProperty'] !== undefined) {
		var scale = layout.buildScale(binding, info['rdfProperty'], info, bounds, nodes);
		resolved[binding] = function(node) {
		    var value = node.getValueOfProperty(info['rdfProperty'])[0];
		    return scale.apply(value);
		};
	    } else {
		var error = "Unsupported binding complex binding with keys ";
		for(var key in info)
		    error = error + key + " ";
		throw(error);
	    }
	//}
    }

    this.resolvedBindings = resolved;
};

/**
 * Mapping of mark names to mark constructor functions
 */
LinkedVis.MarksRegistry = {};

/**
 * Base object wrapping a data node and a visual mark information
 */
LinkedVis.Mark = function(node) {
    if(arguments.length > 0) {
	this.bounds = {};
	this.node = node;
	this.shape = 'g';
	this.properties = {};	
    }
};
LinkedVis.Mark.prototype.constructor = LinkedVis.Mark;

LinkedVis.Mark.prototype.bind = function(boundProperties) {
    for(var property in boundProperties)
	this.properties[property] = boundProperties[property](this.node);
    
};

LinkedVis.Mark.prototype.render = function(doc, context) {
    doc = doc + "<"+(this.shape)+" ";

    doc = doc + "id='"+this.id+"' ";
    doc = doc + "about='"+this.node.uri+"' ";

    for(var prop in this.properties) 
	doc = doc + prop + "='" + this.properties[prop] + "' ";

    doc = this.renderPosition(doc);
    doc = doc +">";

    if(this.rdfProps != null && this.graph.match) 
	doc = doc + "<meta>"+this.buildRDF(context)+"</meta>";

    doc = doc + "</"+this.shape+">";

    return doc;
    
};

LinkedVis.Mark.prototype.renderPosition = function(doc) {
    if(this.bounds['x'] != null)
	doc = doc + " x='"+ this.bounds['x'] + "'";
    if(this.bounds['y'] != null)
	doc = doc + " y='"+ this.bounds['y'] + "'";
    if(this.bounds['width'] != null)
	doc = doc + " width='"+ this.bounds['width'] + "'";
    if(this.bounds['height'] != null)
	doc = doc + " height='"+ this.bounds['height'] + "'";

    return doc;
};

LinkedVis.Mark.prototype.buildRDF = function(context) {
    var ns = {}, shrinked, expanded, p;
    var n3 = "\n";
    var uri = this.id;
    n3 = n3 + "<" + uri + "> a  lv:Mark;\n";
    n3 = n3 + " a svg:"+this.shape+";";
    var closed = false;

    if(this.node != null && this.node.uri != null)
	n3 = n3 + " lv:boundToResource <"+ this.node.uri + ">";

    if(context.currentLayer != null && context.currentLayer.uri != null)
	n3 = n3 + " ;\nlv:inLayer <"+ context.currentLayer.uri + ">";
    
    /*
    var metadata = this.node.getPropertiesValues();
    for(var i=0; i<metadata.length; i++) {

	var propValue = metadata[i];
	if(!first) 
	    n3 = n3 + ";\n";
	else
	    first = false;

	n3 = n3 + " lv:hasProperty [\n";

	n3 = n3 + "\t lv:propertyName \"" + metadata.prop + "\";\n";
		n3 = n3 + "\t a lv:" + metadata.type + ";\n";
		if(metadata.boundTo != null)
		    n3 = n3 + "\t lv:boundToProperty <"+metadata.boundTo+">;\n";
		if(metadata.aggregated != null)
		    n3 = n3 + "\t lv:usesAggregator "+metadata.aggregated + ";\n";
		if(metadata.value != null)
		    n3 = n3 + "\t lv:value \""+metadata.value + "\";\n";
		if(metadata.canvasValue != null)
		    n3 = n3 + "\t lv:canvasValue \""+metadata.canvasValue + "\";\n";
		if(metadata.scaled != null)
		    n3 = n3 + "\t lv:isScaled \""+metadata.scaled + "\";\n";

		n3 = n3 + "]";
	    }
	}

	if(!first)
	    n3 = n3 +".\n";
    */

    if(!closed)
	n3 = n3 + ".\n";

    n3  = "@prefix svg: <http://www.svg.org/> .\n@prefix lv: <http://www.linkedvis.org/vocab/> ." + n3;

    n3 =  "<lv:metagraph format='text/n3'>"+Utils.htmlEncode(n3)+"</lv:metagraph>";
    return n3;
};


// Rect
LinkedVis.Rect = function(bounds, node, options) {
    LinkedVis.Mark.call(this, bounds, node);
    this.options = options || {};
    this.shape = 'rect';
    this.id = this.options.id || Utils.genSymbol(Vocabulary.MarkInstance);
};
Utils.extend(LinkedVis.Mark, LinkedVis.Rect);
LinkedVis.Rect.prototype.constructor = LinkedVis.Rect;
LinkedVis.MarksRegistry['rect'] = LinkedVis.Rect;

/**
 * A layer is a container with associated bounds that
 * can render the elements it contain with the help of a Layout object
 */
LinkedVis.Layer = function(bounds) {
    this.uri = Utils.genSymbol(Vocabulary.LayerInstance);
    this.bounds = bounds;
    this.theme = null; // Theme for title, axis, etc.
    this.stackedLayer = null; // the next layer stacked on top of this.
    this.boundProperties = null;
    this.layout = null;
};
LinkedVis.Layer.prototype.constructor = LinkedVis.Layer;


/**
 * Binds nodes in an structure to a certain visual mark for rendering
 */
LinkedVis.Layer.prototype.bind = function(bindings, structure, layout) {
    this.marks = [];
    this.layout = layout;
    var node, mark;
    var markPrototype = LinkedVis.MarksRegistry[bindings['$mark']];    
    if(markPrototype === undefined) {
	throw "Not mark found for value "+bindings['$mark'];
    } else {
	delete bindings['$mark'];
	var markBuilder = new LinkedVis.MarkBuilder(bindings);
	markBuilder.processBindings(this.bounds, structure.nodes, layout);
	this.boundProperties = markBuilder.resolvedBindings;

	for(var i=0; i<structure.nodes.length; i++) {
	    mark = new markPrototype(structure.nodes[i]);
	    mark.bind(this.boundProperties);
	    this.marks.push(mark);
	}
    }
};


LinkedVis.Layer.prototype.render = function(doc, context) {
    doc = doc + "<g id='" + this.uri + "' class='lv_layer'>";

    this.layout.position(this.marks, this.bounds);

    for(var i=0; i<this.marks.length; i++)
	doc = this.marks[i].render(doc, context);

    doc = doc + "</g>";

    return doc;
};

/**
 * Computes the osition of marks for elements in a layer.
 */
LinkedVis.HorizontalLayout = function(opts) {
    this.opts = opts || {};
    this.scales = {};
};
LinkedVis.HorizontalLayout.prototype = LinkedVis.HorizontalLayout;


LinkedVis.HorizontalLayout.prototype.buildScale = function(key, prop, scale, bounds, nodes) {
    if(scale['scale'] === 'continous') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(nodes, function(node){ return node.getValueOfProperty(prop)[0]; }));
	    var domain = maxMin[0] - maxMin[1];
	    var marks = domain / 4.0;
	    if(maxMin[1] - marks < 0)
		marks = maxMin[1];

	    if(scale['domainMax'] == null)
		domainMax = maxMin[0] + marks;
	    else 
		domainMax = parseFloat(scale['domainMax']);
	    if(scale['domainMin'] == null) 
		domainMin = maxMin[1] - marks;
	    else
		domainMin = parseFloat(scale['domainMin']);
	}

	var rangeMin = scale['rangeMin'] || this.getRangeMin(key, bounds);
	var rangeMax = scale['rangeMax'] || this.getRangeMax(key, bounds);

	scale = new Scale['continous'](domainMax, domainMin, rangeMax, rangeMin);
	this.scales[prop] = scale;
	return scale;
	
    } else if(scale['scale'] === 'gradient') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(nodes, function(node){ return node.getValueOfProperty(prop)[0]; }));	 
	    var domain = maxMin[0] - maxMin[1];
	    if(scale['domainMax'] == null)
		domainMax = maxMin[0];
	    else 
		domainMax = parseFloat(scale['domainMax']);
	    if(scale['domainMin'] == null) 
		domainMin = maxMin[1];
	    else
		domainMin = parseFloat(scale['domainMin']);
	}

	var rangeMin = scale['rangeMin'] || this.getRangeMin(key, bounds);
	var rangeMax = scale['rangeMax'] || this.getRangeMax(key, bounds);

	return new Scale['gradient'](domainMax, domainMin, rangeMax, rangeMin);

    } else if(scale['scale'] === 'proportional') {
	var acum = 0;

	var values = Utils.map(nodes, function(node){ return node.getValueOfProperty(prop)[0]; });

	for(var i=0; i<values.length; i++)
	    acum = acum + values[i];

	var rangeMin = scale['rangeMin'] || this.getRangeMin(key, bounds);
	var rangeMax = scale['rangeMax'] || this.getRangeMax(key, bounds);

	scale = new Scale['proportional'](acum, rangeMax, rangeMin);
	this.scales[prop] = scale;
	return scale;

    } else if(scale['scale'] === 'hue') {
	var categoriesMapping = {};
	var categories = [];
	for(i=0; i<nodes.length; i++) {
	    var value = nodes[i].getValueOfProperty(prop)[0];
	    if(categoriesMapping[value] == null) {
		categoriesMapping[value] = true;
		categories.push(value);
	    }
	}
	return new Scale['hue'](categories);
    } else {
	// TODO: add remaining scales here
    }
};


LinkedVis.HorizontalLayout.prototype.position = function(marks, bounds) {
    var perElement = (bounds['width'] || bounds['size']) / marks.length;
    var x,y,mark, shapeBounds, height, width;
    var acum = [];

    // horizontal align
    if(this.opts['align'] === 'right') {
	x = bounds['x']+bounds['width'];
	for(var i=(marks.length-1); i>=0; i--) {
	    mark = marks[i];
	    markBounds = {};
	    width = (mark.properties['width'] || mark.properties['size']);
	
	    markBounds['width'] = width || perElement;
	    x = x - markBounds['width'];
	    markBounds['x'] = x;

	    mark.bounds = markBounds
	}

    } else {
	x = bounds.x;
	for(var i=0; i<marks.length; i++) {
	    mark = marks[i];
	    markBounds = {};
	    width = (mark.properties['width'] || mark.properties['size']);

	    markBounds['width'] = width || perElement;
	    //if(this.opts['align'] !== 'left' && this.opts['align'] !== 'right')
	    // 	x = x + ((perElement - markBounds['width']) / 2);
	    markBounds['x'] = x;
	    x = x + markBounds['width'];
	    //if(this.opts['align'] !== 'left' && this.opts['align'] !== 'right')
	    // 	x = x + ((perElement - markBounds['width']) / 2);

	    mark.bounds = markBounds;
	}

    }

    // vertical align
    y = bounds['y'];
    for(i=0; i<acum.length; i++) {
	mark = acum[i];
	mark.bounds['height'] = mark.properties['height'] || bounds.height;
	if(this.opts['vertical-align'] === 'top') {
	    mark.bounds['y'] = y;
	} else if(this.opts['vertical-align'] === 'middle') {
	    mark.bounds['y'] = y + ((bounds.height - mark.bounds['height'])/2);
	} else {
	    mark.bounds['y'] = y + (bounds.height - mark.bounds['height']);
	}
    }
};

LinkedVis.HorizontalLayout.prototype.getRangeMin = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'];
    } else if(key === 'width' || key === 'x' || key === 'size') {
	return bounds['x'];	    
    }
};

LinkedVis.HorizontalLayout.prototype.getRangeMax = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'] + bounds['height'];
    } else if(key === 'width' || key === 'x' || key === 'size') {
	return bounds['x'] + (bounds['width']||bounds['size']);	    
    }
};


// just to test in node.js
exports.LinkedVis = LinkedVis;
