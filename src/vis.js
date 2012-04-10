var rdfstore = require('rdfstore');

/**
 * Utilities
 */
Utils = {};
Utils.stackCounterLimit = 1000;
Utils.stackCounter = 0;

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
    for(var p in acum)
	s.push(acum[p]);
    return s;
};

Utils.map = function(collection, predicate) {
    var acum = [];
    for(var i=0; i<collection.length; i++) {
	acum.push(predicate(collection[i]));
    }
    return acum;
};

Utils.findMaxMin = function(nodes, property) {
    var max,min,val;
    for(var i=0; i<nodes.length; i++) {
	val = nodes[i][property];
	if(val != null) {
	    if(max == null || val > max)
		max = val;
	    if(min == null || val < min)
		min = val;
	}
    }
    return [max,min];
};

Utils.loadElementsIntoContext = function(elementsData, where, context) {
    var graph = context[where];

    for(var i=0; i<elementsData.length; i++) {
	if(elementsData[i].toNT != null)
	    graph.load(elementsData[i].toNT(), "text/n3", function(){});
    }
};

Utils.genId = function(context) {
    return "lvShapeID"+(context.idGen++);
};

Utils.genLayerId = function(context, layer) {
    var layerCounter;

    if(layer.id != null) {
	layerCounter = context.layerCounter[layer.id] || 0
	layerCounter++;
	context.layerCounter[layer.id] = layerCounter;
	layer.id = layer.id + "_" + layerCounter;
    } else {
	context.totalLayers++;
	layerCounter = context.totalLayers;
	layer.id = "layerID"+layerCounter;
    }
};

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
}




/**
 * Layer object
 */
var Layer = function(struct, graph, bounds) {
    this.struct = struct;
    this.graph = graph;
    this.bounds = bounds;
    this.bindings = {};
    this.bindingsKeys = {};
};

Layer.prototype.bind = function(type, bindings) {
    if(bindings == null) {
	bindings = type;
	type = 'nodes';
    }
    var acum = {}, val, keys = [], tmp;

    for(var p in bindings) {
	val = bindings[p];
	if(val != null)  {

	    if(val.constructor === Object) {
		tmp = val;
	    } else if(typeof(val) === 'function') {
		tmp = {'function': val};
	    } else if(typeof(val) === 'string' && val.indexOf(":") !== -1) {
		if(p === 'x' || p === 'y' || p === 'width' || p === 'height' || p === 'size') {
		    tmp = {'rdfProperty': val,
			   'scale': {'type': 'continous'}};
		} else {
		    tmp = {'rdfProperty': val};
		}
	    } else {
		tmp = {'val': val}
	    }

	    keys.push(p);
	    acum[p] = tmp;

	}
    }
    this.bindings[type] = acum;
    this.bindingsKeys[type] = keys;
    return this;
};


Layer.prototype.layout = function(layout) {
    this.layout = layout;
    return this;
};


Layer.prototype.resolveProps = function(type, elements, context) {
    // Throw a menaningful error
    if(this.bindingsKeys[type] == null) 
	throw "Cannot find bindings for elements of type '"+type+"'";

    console.log("SOLVING PROPS FOR "+elements.length);
    var that = this, shape, floop, resolved, rdfProps;
    var shapes = [], key, prop;
    for(var i=0; i<elements.length; i++) {
	// Check if this is a node in a tree data structure
	if(elements[i]['$type'] === 'treenode') {
	    var tmp = elements[i];
	    elements[i] = elements[i]['node'];
	    elements[i].treeNode = tmp;
	}
	//if(elements[i]['$type'] === 'graphnode') {
	//    var tmp = elements[i];
	//    elements[i] = elements[i]['node'];
	//    elements[i].graphNode = tmp;
	//}

	if(elements[i]['$type'] && elements[i]['$type'] === 'group') {
	    // @TODO: use layer ID to generate an unique URI for the shape
	    shape = new Shape();
	    if(this.bindings[type]['id'] == null)
		shape.id = {'value':Utils.genId(shape, context)}
	    shape.isGroup = true;
	    shape.graph = elements[i];
	    shape.graph.rdf = that.graph.rdf;
	    shape.rdfProps = {};

	    for(var p in shape['graph']) {
		if(p.indexOf("lv:") !== -1)
		    shape.rdfProps[p] = shape['graph'][p];
	    }


	    console.log("RDF PROPS NOW");
	    console.log(shape.rdfProps);

	    for(var j=0; j<that.bindingsKeys[type].length; j++) {
		key = that.bindingsKeys[type][j];
		prop = that.bindings[type][key];
		if(prop['rdfProperty'] != null && prop['rdfProperty'].indexOf("lv:") != 0) {
		    var aggregator = prop['aggregate'] || 'lv:average';
		    resolved = (that.graph.rdf.resolve(prop['rdfProperty']) || prop['rdfProperty']);
		    var acum = null;
		    for(var k=0; k<shape.graph.nodes.length; k++) {
			var match = shape.graph.nodes[k].match(null, resolved, null, 1).toArray();
			if(match.length === 1){
			    
			    if(aggregator === 'lv:average' || aggregator === 'lv:sum') {
			       acum = (acum || 0) + match[0].object.valueOf();
			    } else if(aggregator === 'lv:min') {
				if(acum == null || acum > match[0].object.valueOf())
				    acum = match[0].object.valueOf()
			    } else if(aggregator === 'lv:max') {
				if(acum == null || acum < match[0].object.valueOf())
				    acum = match[0].object.valueOf()
			    }
			}
		    }

		    if(aggregator === 'lv:average')
			acum = acum / shape.graph.nodes.length;

		    shape.rdfProps[resolved] = acum;
		}
	    }
	    //console.log("THE SHAPE");
	    //console.log(shape);
	    shapes.push(shape);
	} else {
	    shape = new Shape(elements[i].nodeURI);
	    if(this.bindings[type]['id'] == null)
		shape.id = {'value':Utils.genId(shape, context)}
	    shape.id = {'value':Utils.genId(context)}
	    shape.graph = elements[i];
	    shape.isGroup = false;
	    shape.graph.rdf = that.graph.rdf;
	    shape.rdfProps = {};
	    for(var p in shape.graph) {
		if(p.indexOf("lv:") !== -1)
		    shape.rdfProps[p] = shape.graph[p];
	    }

	    for(var j=0; j<that.bindingsKeys[type].length; j++) {
		key = that.bindingsKeys[type][j];
		prop = that.bindings[type][key];
		if(prop['rdfProperty'] != null) {
		    resolved = that.graph.rdf.resolve(prop['rdfProperty']) || prop['rdfProperty'];
		    var match = shape.graph.match(null, resolved, null, 1).toArray();
		    if(match.length === 1)
			shape.rdfProps[resolved] = match[0].object.valueOf();
		}
	    }

	    shapes.push(shape);
	}

    }
    // Got all the shapes + associated RDF nodes data
    var scalesKeys = [];
    var regularKeys = [];

    for(i=0; i<that.bindingsKeys[type].length; i++) {
	key = that.bindingsKeys[type][i];
	prop = that.bindings[type][key];
	if(prop['scale'] != null)
	    scalesKeys.push(key);
	else
	    regularKeys.push(key);
    }

    that.scales = that.processScales(type, scalesKeys, shapes, that.graph);

    for(j=0; j<shapes.length; j++) {
	shape = shapes[j];
	console.log("THE SHAPE");
	console.log(shape);
	for(i=0; i<regularKeys.length; i++) {
	    key = regularKeys[i];
	    prop = that.bindings[type][key];
	    console.log("KEY");
	    console.log(key);
	    if(prop['val'] != null) {
		shape.setProp(key, prop['val']);
	    } else if(prop['function']  != null) {
		shape.setProp(key, prop['function'](shape.graph, j));		
	    } else if(prop['rdfProperty'] != null) {
		resolved = that.graph.rdf.resolve(prop['rdfProperty']) || prop['rdfProperty'];
		shape.setProp(key, shape.rdfProps[resolved]);
	    }
	}
	for(i=0; i<scalesKeys.length; i++) {
	    key = scalesKeys[i];
	    prop = that.bindings[type][key];
	    scale = that.scales[key];
	    if(prop['val'] != null) {
		shape.setProp(key, scale.apply(prop['val']));
	    } else if(prop['function']  != null) {
		shape.setProp(key, prop['function'](shape.graph, j));		
	    } else if(prop['rdfProperty'] != null) {
		resolved = that.graph.rdf.resolve(prop['rdfProperty']) || prop['rdfProperty'];
		shape.setProp(key, scale.apply(shape.rdfProps[resolved]));
	    }
	}
    }


    return shapes;
};

Layer.prototype.processScales = function(type, keys, shapes, graph) {
    var scales = {}, key;
    for(var i=0; i<keys.length; i++) {
	key = keys[i];
	console.log("BUILDING SCALE");
	console.log(shapes.length);
	scales[key] = this.layout.buildScale(key, this.bounds, this.bindings[type][key], shapes, graph)
    }

    return scales;
};

Layer.prototype.render = function(doc, context, cb) {
    var that = this;

    var parentLayerId = this.layer;
    Utils.genLayerId(context, this);

    // XML SVG for the layer -> rendered as a SVG group, it makes it possible to add a meta element
    doc = doc + "<g id='" + this.id + "' class='lv_layer'>";

    this.struct.execute(this.graph, function(success, elementsData){

	if(elementsData.constructor === 'Array')
	    elementsData = {'nodes': elementsData};

	var shapes = {}, tmpShapes;
	for(var type in elementsData) {
	    elements = elementsData[type];
	    console.log("STRUCT RETURNS "+elements.length+" ELEMENTS");

	    // Load elements in visualization data graph
	    Utils.loadElementsIntoContext(elements, 'datagraph', context);

	    // Create additional layers according to the computed data structure
	    that.layout.rearrange(type,elements, that.struct, that, context);

	    console.log("REARRANGED");

	    // Compute values and scales for the shapes in this layer
	    tmpShapes = that.resolveProps(type, elements, context);

	    console.log("RESOLVED");

	    shapes[type] = tmpShapes;
	}

	// Compute positions
	var bounds = that.bounds;
	shapes = that.layout.position(shapes, bounds, context);

	// Shape rendering
	for(var i=0; i<shapes.length; i++) {
	    doc = shapes[i].render(doc, context);
	}

	var processStacked = function() {
	    // Render additional layers at this level
	    if((this.layers || []).length > 0) {
		var nextLayer = this.layers.shift();
		nextLayer.layers = this.layers;
		nextLayer.id = parentLayerId;
		nextLayer.render(doc, context, function(success, doc) {
		    cb(success, doc);
		});
	    } else {
		// closing SVG XML tag for the layer
		doc = doc + "</g>";

		// return result
		cb(true, doc);
	    }
	};

	// Render nested levels layers

	if(that.nested) {
	    Utils.repeat(0, shapes.length, function(k, env) {
		var floop = arguments.callee;
		setTimeout(function() {
		    that.nested.graph = shapes[env._i].graph;
		    that.nested.bounds = shapes[env._i].bounds;
		    that.nested.id = that.id;
		    that.nested.render(doc, context, function(success, nextDoc) {
			doc = nextDoc;
			k(floop, env);
		    });
		},0);
	    },processStacked);
	} else {
	    processStacked();
	}
    });
};


/**
 * Shape object
 */
var Shape = function(uri) {
    this.uri = uri;
    this.properties = {'shape':'g'};
    this.positionBindings = {};
};

Shape.prototype.setProp = function(prop, value) {
    // TODO: check correct properties for this shape
    if(prop === 'x' || prop === 'y' || prop === 'width' || prop === 'height' || prop === 'radius' || prop === 'offset' || prop === 'x1' || prop === 'y1' || prop === 'x2' || prop === 'y2' || prop === 'size') {
	this.positionBindings[prop] = parseFloat(value);
    } else if(prop === 'id') {
	this.id = value; // overwrite autoassigned ID
    } else {
	this.properties[prop] = value;
    }
};

Shape.prototype.render = function(doc, context) {
    if(this.properties['shape'] === 'rect') {
	doc = doc + "<"+(this.properties['shape'])+" ";


	if(this.id != null && this.id.value != null)
	    doc = doc + "id='"+this.id.value+"' ";
	
	if(this.uri != null && this.uri.value != null)
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	if(this.rdfProps != null && this.graph.match) 
	    doc = doc + "<meta>"+this.buildRDF(context)+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    } else if(this.properties['shape'] === 'line') {
	doc = doc + "<"+(this.properties['shape'])+" ";


	if(this.id != null && this.id.value != null)
	    doc = doc + "id='"+this.id.value+"' ";
	
	if(this.uri != null && this.uri.value != null)
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	if(this.rdfProps != null && this.graph.match) 
	    doc = doc + "<meta>"+this.buildRDF(context)+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    } else if(this.properties['shape'] === 'text') {
	doc = doc + "<"+(this.properties['shape'])+" ";

	if(this.id != null && this.id.value != null)
	    doc = doc + "id='"+this.id.value+"' ";

	if(this.uri != null && this.uri.value != null)
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape' && prop != 'content') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	doc = doc + this.properties['content'];

	if(this.rdfProps != null && this.graph.match) 
	    doc = doc + "<meta>"+this.buildRDF(context)+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    } else if(this.properties['shape'] === 'circle') {
	doc = doc + "<"+(this.properties['shape'])+" ";

	if(this.id != null && this.id.value != null)
	    doc = doc + "id='"+this.id.value+"' ";

	if(this.uri != null && this.uri.value != null)
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape' && prop != 'content') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	if(this.rdfProps != null && this.graph.match) 
	    doc = doc + "<meta>"+this.buildRDF(context)+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    } else if(this.properties['shape'] === 'path') {
	doc = doc + "<"+(this.properties['shape'])+" ";

	if(this.id != null && this.id.value != null)
	    doc = doc + "id='"+this.id.value+"' ";

	if(this.uri != null && this.uri.value != null)
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape' && prop != 'content') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	if(this.rdfProps != null && this.graph.match) 
	    doc = doc + "<meta>"+this.buildRDF(context)+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    }
    return doc;
};

Shape.prototype.buildRDF = function(context) {
    console.log("BUILDING RDF");
    console.log(this);
    console.log("==================");
    var ns = {}, shrinked, expanded, p;
    var type = this.graph.match(null, "http://www.w3.org/1999/02/22-rdf-syntax-ns#type", null, 1).toArray();

    var rdf = "";

    if(type.length === 1) {
	type = type[0].object.valueOf();
	shrinked = this.graph.rdf.prefixes.shrink(type);
	if(shrinked == null) {
	    type = LinkedVis.shrink(type,ns);
	} else {
	    type = shrinked
	}
    } else {
     	type = "rdf:Description";
    }

    rdf = rdf + "<"+type+" rdf:about=\""+this.id.value+"\">";
    for(p in this.rdfProps) {
	expanded = this.graph.rdf.resolve(p) || p;
	expanded = expanded || p;
	expanded = LinkedVis.shrink(expanded, ns);
	rdf = rdf + "<"+expanded+">"+this.rdfProps[p]+"</"+expanded+">";
    }

    var preamble = "<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"";
    for(p in ns)
	preamble = preamble + " xmlns:"+p+"=\""+ns[p]+"\"";
    preamble = preamble+">";

    rdf = rdf + "</"+type+">";
    rdf = preamble + rdf + "</rdf:RDF>";

    return rdf;
};

Shape.prototype.renderPosition = function(doc) {
    if(this.properties['shape'] === 'g' || 
       this.properties['shape'] === 'rect') {
	if(this.bounds['x'] != null)
	    doc = doc + " x='"+ this.bounds['x'] + "'";
	if(this.bounds['y'] != null)
	    doc = doc + " y='"+ this.bounds['y'] + "'";
	if(this.bounds['width'] != null)
	    doc = doc + " width='"+ this.bounds['width'] + "'";
	if(this.bounds['height'] != null)
	    doc = doc + " height='"+ this.bounds['height'] + "'";
    } else if(this.properties['shape'] === 'text') {
	if(this.bounds['x'] != null)
	    doc = doc + " x='"+ this.bounds['x'] + "'";
	if(this.bounds['y'] != null)
	    doc = doc + " y='"+ this.bounds['y'] + "'";
	if(this.bounds['height'] != null)
	    doc = doc + " font-size='"+ this.bounds['height'] + "'";
    } else if(this.properties['shape'] === 'line') {
	if(this.bounds['x1'] != null)
	    doc = doc + " x1='"+ this.bounds['x1'] + "'";
	if(this.bounds['x2'] != null)
	    doc = doc + " x2='"+ this.bounds['x2'] + "'";
	if(this.bounds['y1'] != null)
	    doc = doc + " y1='"+ this.bounds['y1'] + "'";
	if(this.bounds['y2'] != null)
	    doc = doc + " y2='"+ this.bounds['y2'] + "'";
    } else if(this.properties['shape'] === 'circle') {
	if(this.bounds['x'] != null)
	    doc = doc + " cx='"+ this.bounds['x'] + "'";
	if(this.bounds['y'] != null) 
	    doc = doc + " cy='"+ this.bounds['y'] + "'";
	if(this.bounds['width'] != null || this.bounds['height'] != null || this.bounds['radius'] != null)
	    doc = doc + " r='"+ (this.bounds['width'] || this.bounds['height'] || this.bounds['radius']) + "'";	    
    } else if(this.properties['shape'] === 'path') {
	if(this.bounds['d'] != null)
	    doc = doc + " d='"+ this.bounds['d'] + "'";
    } else {
	throw("Unsupported shape "+this.properties['shape']);
    }

    return doc;
};

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

ContinousScale.prototype.apply = function(v) {
    var scale = (v - this.domainMin) / this.domain;
    //console.log(v+" scale "+ scale +" ---> "+(this.rangeMin + (scale * this.range)));
    return this.rangeMin + (scale * this.range);
};

// Register the scale
Scale['continous'] = ContinousScale;

var HueScale = function(categories) {
    var colors = Color.categories(categories.length);
    this.mapping = {};
    for(var i=0; i<categories.length; i++)
	this.mapping[categories[i]] = colors[i];
};

HueScale.prototype.apply = function(v) {
    return this.mapping[v];
};


var ProportionalScale = function(total, rangeMax,rangeMin) {
    console.log("TOTAL "+total);
    console.log("RANGE MAX "+rangeMax)
    console.log("RANGE MIN "+rangeMin)
    this.range = rangeMax - rangeMin;
    this.rangeMin = rangeMin;
    this.domain = total;
};

ProportionalScale.prototype.apply = function(v) {
    var scale = v / this.domain;
    console.log(this.rangeMin);
    console.log(this.range);
    //console.log(v+" scale "+ scale +" ---> "+(this.rangeMin + (scale * this.range)));
    //return this.rangeMin + (scale * this.range);
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
 * Layout object
 */
var Layout = {
    layouts: {}
};

Layout.register = function(name, proto) {
    Layout.layouts[name] = proto;
};

Layout.build = function(name, opts) {
    return new Layout.layouts[name](opts);
};

// Horizontal layout
var HorizontalLayout  = function(opts) {
    this.opts = opts || {};
};
// Registering the layout
Layout.register('Horizontal', HorizontalLayout);

HorizontalLayout.prototype.buildScale = function(key, bounds, scale, shapes, graph) {
    var prop = scale['rdfProperty'];
    if(scale['scale'] === 'continous') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
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

	return new Scale['continous'](domainMax, domainMin, rangeMax, rangeMin);
	
    } else if(scale['scale'] === 'gradient') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
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
	console.log("PROPORTIONAL SCALE HORIZ");
	var acum = 0;

	var rdfProperty = graph.rdf.resolve(prop) || prop;
	console.log("PROPERTY: "+rdfProperty);
	var values = Utils.map(shapes, function(shape){ console.log(rdfProperty); console.log(shape.rdfProps); return shape.rdfProps[rdfProperty]; });
	console.log("VALUES");
	console.log(values);
	for(var i=0; i<values.length; i++)
	    acum = acum + values[i];

	var rangeMin = scale['rangeMin'] || this.getRangeMin(key, bounds);
	var rangeMax = scale['rangeMax'] || this.getRangeMax(key, bounds);

	console.log("ACUM "+acum);
	console.log("RANGE MAX "+rangeMax);
	console.log("RANGE MIN "+rangeMin);
	return new Scale['proportional'](acum, rangeMax, rangeMin);

    } else if(scale['scale'] === 'hue') {
	prop = graph.rdf.resolve(prop) || prop;
	var categoriesMapping = {};
	var categories = [];
	for(var i=0; i<shapes.length; i++) {
	    var value = shapes[i].rdfProps[prop];
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

HorizontalLayout.prototype.getRangeMin = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'];
    } else if(key === 'width' || key === 'x' || key === 'size') {
	return bounds['x'];	    
    }
};

HorizontalLayout.prototype.getRangeMax = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'] + bounds['height'];
    } else if(key === 'width' || key === 'x' || key === 'size') {
	return bounds['x'] + bounds['width'];	    
    }
};

HorizontalLayout.prototype.position = function(shapes, bounds, context) {
    shapes = shapes['nodes'];
    var perElement = (bounds['width'] || bounds['size']) / shapes.length;
    var x,y,shape, shapeBounds, height, width;
    var acum = [];
    console.log("HORIZONTAL LAYOUT BOUNDS");
    console.log(bounds);

    // horizontal align
    if(this.opts['align'] === 'right') {
	x = bounds['x']+bounds['width'];
	for(var i=(shapes.length-1); i>=0; i--) {
	    shape = shapes[i];
	    shapeBounds = {};
	    width = (shape.positionBindings['width'] || shape.positionBindings['size']);
	
	    shapeBounds['width'] = width || perElement;
	    x = x - shapeBounds['width'];
	    shapeBounds['x'] = x;

	    shape.bounds = shapeBounds
	    acum.push(shape);
	}

    } else {
	x = bounds.x;
	for(var i=0; i<shapes.length; i++) {
	    shape = shapes[i];
	    shapeBounds = {};
	    console.log("SHAPE POSITION BINDINGS");
	    console.log(shape.positionBindings);
	    width = (shape.positionBindings['width'] || shape.positionBindings['size']);

	    shapeBounds['width'] = width || perElement;
	    //if(this.opts['align'] !== 'left' && this.opts['align'] !== 'right')
	    // 	x = x + ((perElement - shapeBounds['width']) / 2);
	    shapeBounds['x'] = x;
	    x = x + shapeBounds['width'];
	    //if(this.opts['align'] !== 'left' && this.opts['align'] !== 'right')
	    // 	x = x + ((perElement - shapeBounds['width']) / 2);

	    shape.bounds = shapeBounds;
	    acum.push(shape);
	}

    }

    // vertical align
    y = bounds['y'];
    for(i=0; i<acum.length; i++) {
	shape = acum[i];
	shape.bounds['height'] = shape.positionBindings['height'] || bounds.height;
	if(this.opts['vertical-align'] === 'top') {
	    shape.bounds['y'] = y;
	} else if(this.opts['vertical-align'] === 'middle') {
	    shape.bounds['y'] = y + ((bounds.height - shape.bounds['height'])/2);
	} else {
	    shape.bounds['y'] = y + (bounds.height - shape.bounds['height']);
	}
    }

    return acum;
};

HorizontalLayout.prototype.rearrange = function(type, elements, struct, layer, context) {
    // nothing to do here
};


// Vertical layout
var VerticalLayout  = function(opts) {
    this.opts = opts || {};
};


// Registering the layout
Layout.register('Vertical', VerticalLayout);

VerticalLayout.prototype.buildScale = function(key, bounds, scale, shapes, graph) {
    var prop = scale['rdfProperty'];
    if(scale['scale'] === 'continous') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
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

	return new Scale['continous'](domainMax, domainMin, rangeMax, rangeMin);
	
    } else if(scale['scale'] === 'gradient') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
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
	console.log("PROPORTIONAL SCALE VERT");
	var acum = 0;

	var rdfProperty = graph.rdf.resolve(prop) || prop;
	var values = Utils.map(shapes, function(shape){ return shape.rdfProps[rdfProperty]; });
	for(var i=0; i<values.length; i++)
	    acum = acum + values[i];

	var rangeMin = scale['rangeMin'] || this.getRangeMin(key, bounds);
	var rangeMax = scale['rangeMax'] || this.getRangeMax(key, bounds);

	console.log("ACUM "+acum);
	console.log("RANGE MAX "+rangeMax);
	console.log("RANGE MIN "+rangeMin);
	return new Scale['proportional'](acum, rangeMax, rangeMin);

	return new Scale['proportional'](acum, rangeMax, rangeMin);

    } else if(scale['scale'] === 'hue') {
	prop = graph.rdf.resolve(prop) || prop;
	var categoriesMapping = {};
	var categories = [];
	for(var i=0; i<shapes.length; i++) {
	    var value = shapes[i].rdfProps[prop];
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

VerticalLayout.prototype.getRangeMin = function(key, bounds) {
    if(key === 'height' || key === 'y' || key === 'size') {
	return bounds['y'];
    } else if(key === 'width' || key === 'x') {
	return bounds['x'];	    
    }
};

VerticalLayout.prototype.getRangeMax = function(key, bounds) {
    if(key === 'height' || key === 'y' || key === 'size') {
	return bounds['y'] + bounds['height'];
    } else if(key === 'width' || key === 'x') {
	return bounds['x'] + bounds['width'];	    
    }
};

VerticalLayout.prototype.position = function(shapes, bounds, context) {
    shapes = shapes['nodes'];
    var perElement = bounds['height'] / shapes.length;
    var x,y,shape, shapeBounds, height, width;
    var acum = [];

    // vertical align
    if(this.opts['vertical-align'] === 'bottom') {
	y = bounds['y']+bounds['height'];
	for(var i=(shapes.length-1); i>=0; i--) {
	    shape = shapes[i];
	    shapeBounds = {};
	    height = (shape.positionBindings['height'] || shape.positionBindings['size']);
	
	    shapeBounds['height'] = height || perElement;
	    y = y - shapeBounds['height'];
	    shapeBounds['y'] = y;

	    shape.bounds = shapeBounds
	    acum.push(shape);
	}

    } else {
	console.log("VERTICALLY POSITIONING");
	console.log("BOUNDS");
	console.log(bounds);
	y = bounds.y;
	for(var i=0; i<shapes.length; i++) {
	    console.log("SHAPE "+i);
	    shape = shapes[i];
	    shapeBounds = {};
	    height = (shape.positionBindings['height'] || shape.positionBindings['size']);
	    console.log("HEIGHT: "+height);
	    shapeBounds['height'] = height || perElement;
	    //if(this.opts['vertical-align'] !== 'top' && this.opts['vertical-align'] !== 'bottom')
	    // 	y = y + ((perElement - shapeBounds['height']) / 2);
	    shapeBounds['y'] = y;
	    y = y + shapeBounds['height'];
	    //if(this.opts['vertical-align'] !== 'top' && this.opts['vertical-align'] !== 'bottom')
	    // 	y = y + ((perElement - shapeBounds['height']) / 2);

	    shape.bounds = shapeBounds;
	    console.log("SHAPE BOUNDS");
	    console.log(shape.bounds);
	    acum.push(shape);
	}

    }

    // vertical align
    x = bounds['x'];
    for(i=0; i<acum.length; i++) {
	shape = acum[i];
	shape.bounds['width'] = shape.positionBindings['width'] || bounds.width;
	if(this.opts['align'] === 'right') {
	    shape.bounds['x'] = x + (bounds.width - shape.bounds['width']);
	} else if(this.opts['vertical-align'] === 'left') {
	    shape.bounds['x'] = x;
	} else {
	    shape.bounds['x'] = x + ((bounds.width - shape.bounds['width'])/2);
	}
    }

    return acum;
};

VerticalLayout.prototype.rearrange = function(type, elements, struct, layer, context) {
    // nothing to do here
};


// Cartesian layout
var CartesianLayout  = function(opts) {
    this.opts = opts;
};
// Registering the layout
Layout.register('Cartesian', CartesianLayout);

CartesianLayout.prototype.buildScale = function(key, bounds, scale, shapes, graph) {
    var prop = scale['rdfProperty'];
    if(scale['scale'] === 'continous') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
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

	return new Scale['continous'](domainMax, domainMin, rangeMax, rangeMin);
    } else if(scale['scale'] === 'gradient') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
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

	var rdfProperty = graph.rdf.resolve(prop) || prop;
	var values = Utils.map(shapes, function(shape){ return shape.rdfProps[rdfProperty]; });
	for(var i=0; i<values.length; i++)
	    acum = acum + values[i];

	var rangeMin = scale['rangeMin'] || this.getRangeMin(key, bounds);
	var rangeMax = scale['rangeMax'] || this.getRangeMax(key, bounds);

	return new Scale['proportional'](acum, rangeMax, rangeMin);

    } else if(scale['scale'] === 'hue') {
	prop = graph.rdf.resolve(prop) || prop;
	var categoriesMapping = {};
	var categories = [];
	for(var i=0; i<shapes.length; i++) {
	    var value = shapes[i].rdfProps[prop];
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

CartesianLayout.prototype.getRangeMin = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'];
    } else if(key === 'width' || key === 'x') {
	return bounds['x'];	    
    }
};

CartesianLayout.prototype.getRangeMax = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'] + bounds['height'];
    } else if(key === 'width' || key === 'x') {
	return bounds['x'] + bounds['width'];	    
    }
};

CartesianLayout.prototype.position = function(shapes, bounds, context) {
    shapes = shapes['nodes'];
    var perElement = bounds['width'] / shapes.length;
    var x,y,shape, shapeBounds, height, width;
    var acum = [];

    // horizontal align
    x = bounds['x'];
    for(var i=0; i<shapes.length; i++) {
	shape = shapes[i];
	shapeBounds = {};
	width = shape.positionBindings['radius'] || shape.positionBindings['width'];

	shapeBounds['width'] = width || perElement;
	shapeBounds['x'] = shape.positionBindings['x'];
	if(shapeBounds['x'] == null) 
	    throw "'x' position bindings must be provided in Cartesian layout";
	else
	    shapeBounds['x'] = x + shapeBounds['x'];
	shape.bounds = shapeBounds;
	acum.push(shape);
    }

    // vertical align
    y = bounds['y'];
    for(i=0; i<acum.length; i++) {
	shape = acum[i];
	shape.bounds['height'] = shape.positionBindings['radius'] || shape.positionBindings['height'];
	shape.bounds['y'] = shape.positionBindings['y'];
	if(shape.bounds['y'] == null)
	    throw "'y' position bindings must be provided in Cartesian layout";
	else	    
	    shape.bounds['y'] = y + (bounds.height - shape.bounds['height'] - shape.bounds['y']);
    }

    return acum;
};

CartesianLayout.prototype.rearrange = function(type, elements, struct, layer, context) {
    // nothing to do here
};


var TreeMapLayout = function(opts) {
    this.opts = opts;
};
Layout.register('TreeMap', TreeMapLayout);

TreeMapLayout.prototype.buildScale = function(key, bounds, scale, shapes, graph) {
    if(this.orientation === "horizontal") {
	return new HorizontalLayout(this.opts).buildScale(key, bounds, scale, shapes, graph);
    } else {
	return new VerticalLayout(this.opts).buildScale(key, bounds, scale, shapes, graph);
    }
};

TreeMapLayout.prototype.getRangeMin = function(key, bounds) {
    if(this.orientation === "horizontal") {
	return new HorizontalLayout(this.opts).getRangeMin(key,bounds);
    } else {
	return new VerticalLayout(this.opts).getRangeMin(key,bounds);
    }
};

TreeMapLayout.prototype.getRangeMax = function(key, bounds) {
    if(this.orientation === "horizontal") {
	return new HorizontalLayout(this.opts).getRangeMax(key,bounds);
    } else {
	return new VerticalLayout(this.opts).getRangeMax(key,bounds);
    }
};

TreeMapLayout.prototype.position = function(shapes, bounds, context) {
    if(this.orientation === "horizontal") {
	return new HorizontalLayout(this.opts).position(bounds, shapes);
    } else {
	return new VerticalLayout(this.opts).position(bounds, shapes);
    }
};

TreeMapLayout.prototype.rearrange = function(type, elements, struct, layer, context) {
    if(this.orientation == null)
	this.orientation = "horizontal";

    // They all have to be either treenodes or different kind of nodes
    // check only one is safe
    if(elements.length > 0 && elements[0]['$type'] === 'treenode') {
	var nested = new Layer(layer.struct);
	nested.bindings = layer.bindings;
	nested.bindingsKeys = layer.bindingsKeys;
	var layout = new TreeMapLayout(this.opts);

	if(this.orientation === "horizontal")
	    layout.orientation = "vertical";
	else
	    layout.orientation = "horizontal";

	nested.layout(layout);
	layer.nested = nested;
    }
};


// Polar layout
var PolarLayout = function(opts) {
    this.opts = opts;
};
// Registering the layout
Layout.register('Polar', PolarLayout);

PolarLayout.prototype.buildScale = function(key, bounds, scale, shapes, graph) {
    var prop = scale['rdfProperty'];
    if(scale['scale'] === 'continous') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
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

	return new Scale['continous'](domainMax, domainMin, rangeMax, rangeMin);
    } else if(scale['scale'] === 'gradient') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop)||prop));
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

	var rdfProperty = graph.rdf.resolve(prop) || prop;
	var values = Utils.map(shapes, function(shape){ return shape.rdfProps[rdfProperty]; });

	for(var i=0; i<values.length; i++)
	    acum = acum + values[i];

	var rangeMin = scale['rangeMin'] || this.getRangeMin(key, bounds);
	var rangeMax = scale['rangeMax'] || this.getRangeMax(key, bounds);

	return new Scale['proportional'](acum, rangeMax, rangeMin);

    } else if(scale['scale'] === 'hue') {
	prop = graph.rdf.resolve(prop) || prop;
	var categoriesMapping = {};
	var categories = [];
	for(var i=0; i<shapes.length; i++) {
	    var value = shapes[i].rdfProps[prop];
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

PolarLayout.prototype.getRangeMin = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'];
    } else if(key === 'width' || key === 'x') {
	return bounds['x'];	    
    }
};

PolarLayout.prototype.getRangeMax = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'] + (bounds['height']/2);
    } else if(key === 'width' || key === 'x') {
	return bounds['x'] + (bounds['width']/2);
    }
};

PolarLayout.prototype.position = function(shapes, bounds, context) {
    shapes = shapes['nodes'];
    var degreesPerPixel = 0;
    for(var i=0; i<shapes.length; i++)
	degreesPerPixel = degreesPerPixel + shapes[i].positionBindings['width'];
    //console.log("TOTAL:"+degreesPerPixel);
    degreesPerPixel = 360 / degreesPerPixel;

    //console.log("WIDTH "+bounds['width']);
    //console.log("PER PIXEL "+degreesPerPixel);
    var radius = Math.min(bounds['width'], bounds['height']) / 2;
    var centerx, centery;
    if(bounds['width'] < bounds['height']) {
	centerx = bounds['x'] + radius;
	centery = (bounds['height'] - bounds['width']) / 2;
	centery = centery + radius;
	centery = centery + bounds['y'];
    } else {
	//console.log("WIDTH < HEIGHT");
	centery = bounds['y'] + radius;
	centerx = (bounds['height'] - bounds['width']) / 2;
	centerx = centerx + radius;
	centerx = centerx + bounds['x'];
    }
    //console.log("CENTER X "+centerx);
    //console.log("CENTER Y "+centery);

    var acum = [];

    var current = 0,x1,y1,x2,y2, path, shapeRadius, currentRadius, offset;
    for(var i=0; i<shapes.length; i++) {
	shape = shapes[i];
	shapeBounds = {};
	shape.properties['shape'] = 'path';

	if(shape.positionBindings['offset'] == null) {
	    //console.log("SHAPE BOUNDS");
	    //console.log("HEIGHT "+shape.positionBindings['height']);
	    //console.log("WIDTH "+shape.positionBindings['width']);

	    shapeRadius = shape.positionBindings['height'];
	    //console.log("SHAPE RADIOUS "+shapeRadius);
	    //console.log("CURRENT "+current);
	    x1 = centerx + ( shapeRadius * Math.cos(current * Math.PI/180) );
	    y1 = centery - ( shapeRadius * Math.sin(current * Math.PI/180) );

	    //console.log("X1 "+x1);
	    //console.log("Y1 "+y1);

	    //console.log(shape.positionBindings['width']);
	    //console.log(degreesPerPixel);
	    //console.log("\n\n\nDEGREES:"+(shape.positionBindings['width'] * degreesPerPixel)+"\n\n\n");
	    currentRadius = shape.positionBindings['width'] * degreesPerPixel
	    current = current +  currentRadius;

	    x2 = centerx + ( shapeRadius * Math.cos(current * Math.PI/180) );
	    y2 = centery - ( shapeRadius * Math.sin(current * Math.PI/180) );

	    //console.log("X2 "+x2);
	    //console.log("Y2 "+y2);

	    // move to the center
	    path = "M"+centerx+" "+centery;
	    // line to the initial curve point
	    path = path + " L "+x1+" "+y1;
	    // Draw Curve
	    path = path + " A "+shapeRadius+" "+shapeRadius+" 0 ";
	    path = path +(currentRadius > 180 ? "1" : "0");
	    path = path + " 0 "+x2+" "+y2;
	    // back to the center
	    path = path + " L "+centerx+" "+centery;
	    // close path
	    path = path + " Z";
	    shape.bounds = {'d':path};
	} else {
	    // position ring sector here
	    offset = shape.positionBindings['offset'];
	    //console.log("SHAPE BOUNDS");
	    //console.log("HEIGHT "+shape.positionBindings['height']);
	    //console.log("WIDTH "+shape.positionBindings['width']);


	    shapeRadius = shape.positionBindings['height'];
	    //console.log("SHAPE RADIOUS "+shapeRadius);
	    //console.log("CURRENT "+current);
	    x01 = centerx + ( offset * Math.cos(current * Math.PI/180) );
	    y01 = centery - ( offset * Math.sin(current * Math.PI/180) );
	    x1 = centerx + ( shapeRadius * Math.cos(current * Math.PI/180) );
	    y1 = centery - ( shapeRadius * Math.sin(current * Math.PI/180) );

	    //console.log("X1 "+x1);
	    //console.log("Y1 "+y1);

	    //console.log(shape.positionBindings['width']);
	    //console.log(degreesPerPixel);
	    //console.log("\n\n\nDEGREES:"+(shape.positionBindings['width'] * degreesPerPixel)+"\n\n\n");
	    currentRadius = shape.positionBindings['width'] * degreesPerPixel
	    current = current +  currentRadius;

	    x02 = centerx + ( offset * Math.cos(current * Math.PI/180) );
	    y02 = centery - ( offset * Math.sin(current * Math.PI/180) );
	    x2 = centerx + ( shapeRadius * Math.cos(current * Math.PI/180) );
	    y2 = centery - ( shapeRadius * Math.sin(current * Math.PI/180) );

	    //console.log("X2 "+x2);
	    //console.log("Y2 "+y2);

	    // move to the center
	    path = "M"+x01+" "+y01;

	    // line to the initial curve point
	    path = path + " L "+x1+" "+y1;
	    // Draw Curve
	    path = path + " A "+shapeRadius+" "+shapeRadius+" 0 ";
	    path = path + (currentRadius > 180 ? "1" : "0");
	    path = path + " 0 "+x2+" "+y2;
	    // back to the center
	    path = path + " L "+x02+" "+y02;

	    // Draw Bottom Curve
	    path = path + " A "+offset+" "+offset+" 0 ";
	    path = path + (currentRadius > 180 ? "1" : "0");
	    path = path + " 1 "+x01+" "+y01;

	    // close path
	    path = path + " Z";
	    shape.bounds = {'d':path};
	}

	acum.push(shape);
    }

    return acum;
};

PolarLayout.prototype.rearrange = function(type, elements, struct, layer, context) {
    // nothing to do here
};

// Force layout
var ForceLayout = function(opts) {
    this.opts = opts;
};

// Registering the layout
Layout.register('Force', ForceLayout);

ForceLayout.prototype.buildScale = function(key, bounds, scale, shapes, graph) {
    var prop = scale['rdfProperty'];
    if(scale['scale'] === 'continous') {
	console.log("PROPERTY ");
	console.log(prop);

	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    console.log("RESOLVING PROP");
	    console.log(graph.rdf.resolve(prop));
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
	    console.log("MAXMIN");
	    console.log(maxMin);
	    var domain = maxMin[0] - maxMin[1];
	    var marks = domain / 4.0;
	    if(maxMin[1] - marks < 0)
		marks = maxMin[1];

	    // avoid <0 min 
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

	console.log("DOMAIN MIN ");
	console.log(domainMin);
	console.log("DOMAIN MAX ");
	console.log(domainMax);

	console.log("RANGE MIN ");
	console.log(rangeMin);
	console.log("RANGE MAX ");
	console.log(rangeMax);

	return new Scale['continous'](domainMax, domainMin, rangeMax, rangeMin);
	
    } else if(scale['scale'] === 'gradient') {
	var domainMin = scale['domainMin'] || null;
	var domainMax = scale['domainMax'] || null;

	if(domainMin === null | domainMax === null) {
	    var maxMin = Utils.findMaxMin(Utils.map(shapes, function(shape){ return shape.rdfProps; }), (graph.rdf.resolve(prop) || prop));
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
	console.log("PROPORTIONAL SCALE HORIZ");
	var acum = 0;

	var rdfProperty = graph.rdf.resolve(prop) || prop;
	console.log("PROPERTY: "+rdfProperty);
	var values = Utils.map(shapes, function(shape){ console.log(rdfProperty); console.log(shape.rdfProps); return shape.rdfProps[rdfProperty]; });
	console.log("VALUES");
	console.log(values);
	for(var i=0; i<values.length; i++)
	    acum = acum + values[i];

	var rangeMin = scale['rangeMin'] || this.getRangeMin(key, bounds);
	var rangeMax = scale['rangeMax'] || this.getRangeMax(key, bounds);

	console.log("ACUM "+acum);
	console.log("RANGE MAX "+rangeMax);
	console.log("RANGE MIN "+rangeMin);
	return new Scale['proportional'](acum, rangeMax, rangeMin);

    } else if(scale['scale'] === 'hue') {
	prop = graph.rdf.resolve(prop) || prop;
	var categoriesMapping = {};
	var categories = [];
	for(var i=0; i<shapes.length; i++) {
	    var value = shapes[i].rdfProps[prop];
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

ForceLayout.prototype.getRangeMin = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'];
    } else if(key === 'width' || key === 'x' || key === 'size') {
	return bounds['x'];	    
    }
};

ForceLayout.prototype.getRangeMax = function(key, bounds) {
    if(key === 'height' || key === 'y') {
	return bounds['y'] + bounds['height'];
    } else if(key === 'width' || key === 'x' || key === 'size') {
	return bounds['x'] + bounds['width'];	    
    }
};

ForceLayout.prototype.position = function(shapes, bounds, context) {


    var _Graph = function() {
	this.nodeSet = {};
	this.nodes = [];
	this.edges = [];
	this.adjacency = {};

	this.nextNodeId = 0;
	this.nextEdgeId = 0;
	this.eventListeners = [];
    };

    var _Node = function(id, data) {
	this.id = id;
	this.data = typeof(data) !== 'undefined' ? data : {};
    };

    var _Edge = function(id, source, target, data) {
	this.id = id;
	this.source = source;
	this.target = target;
	this.data = typeof(data) !== 'undefined' ? data : {};
    };

    _Graph.prototype.addNode = function(node) {
	if (typeof(this.nodeSet[node.id]) === 'undefined') {
	    this.nodes.push(node);
	}

	this.nodeSet[node.id] = node;

	this.notify();
	return node;
    };

    _Graph.prototype.addEdge = function(edge) {
	var exists = false;
	this.edges.forEach(function(e) {
	    if (edge.id === e.id) { exists = true; }
	});

	if (!exists) {
	    this.edges.push(edge);
	}

	if (typeof(this.adjacency[edge.source.id]) === 'undefined') {
	    this.adjacency[edge.source.id] = {};
	}
	if (typeof(this.adjacency[edge.source.id][edge.target.id]) === 'undefined') {
	    this.adjacency[edge.source.id][edge.target.id] = [];
	}

	exists = false;
	this.adjacency[edge.source.id][edge.target.id].forEach(function(e) {
	    if (edge.id === e.id) { exists = true; }
	});

	if (!exists) {
	    this.adjacency[edge.source.id][edge.target.id].push(edge);
	}

	this.notify();
	return edge;
    };

    _Graph.prototype.newNode = function(data) {
	var node = new _Node(this.nextNodeId++, data);
	this.addNode(node);
	return node;
    };

    _Graph.prototype.newEdge = function(source, target, data) {
	var edge = new _Edge(this.nextEdgeId++, source, target, data);
	this.addEdge(edge);
	return edge;
    };

    // find the edges from node1 to node2
    _Graph.prototype.getEdges = function(node1, node2) {
	if (typeof(this.adjacency[node1.id]) !== 'undefined'
	    && typeof(this.adjacency[node1.id][node2.id]) !== 'undefined') {
	    return this.adjacency[node1.id][node2.id];
	}

	return [];
    };



    _Graph.prototype.addGraphListener = function(obj) {
	this.eventListeners.push(obj);
    };

    _Graph.prototype.notify = function() {
	this.eventListeners.forEach(function(obj){
	    obj.graphChanged();
	});
    };

    // -----------
    var _ForceDirected = function(graph, stiffness, repulsion, damping) {
	this.graph = graph;
	this.stiffness = stiffness; // spring stiffness constant
	this.repulsion = repulsion; // repulsion constant
	this.damping = damping; // velocity damping factor

	this.nodePoints = {}; // keep track of points associated with nodes
	this.edgeSprings = {}; // keep track of springs associated with edges
    };

    _ForceDirected.prototype.point = function(node) {
	if (typeof(this.nodePoints[node.id]) === 'undefined') {
	    var mass = typeof(node.data.mass) !== 'undefined' ? node.data.mass : 1.0;
	    console.log([this.centerx,this.centery]);
	    //this.nodePoints[node.id] = new _ForceDirected.Point(_Vector.random(this.centerx, this.centery), mass);
	    this.nodePoints[node.id] = new _ForceDirected.Point(_Vector.random(), mass);
	}

	return this.nodePoints[node.id];
    };

    _ForceDirected.prototype.spring = function(edge) {
	if (typeof(this.edgeSprings[edge.id]) === 'undefined') {
	    var length = typeof(edge.data.length) !== 'undefined' ? edge.data.length : 1.0;

	    var existingSpring = false;

	    var from = this.graph.getEdges(edge.source, edge.target);
	    from.forEach(function(e) {
		if (existingSpring === false && typeof(this.edgeSprings[e.id]) !== 'undefined') {
		    existingSpring = this.edgeSprings[e.id];
		}
	    }, this);

	    if (existingSpring !== false) {
		return new _ForceDirected.Spring(existingSpring.point1, existingSpring.point2, 0.0, 0.0);
	    }

	    var to = this.graph.getEdges(edge.target, edge.source);
	    from.forEach(function(e){
		if (existingSpring === false && typeof(this.edgeSprings[e.id]) !== 'undefined') {
		    existingSpring = this.edgeSprings[e.id];
		}
	    }, this);

	    if (existingSpring !== false) {
		return new _ForceDirected.Spring(existingSpring.point2, existingSpring.point1, 0.0, 0.0);
	    }

	    this.edgeSprings[edge.id] = new _ForceDirected.Spring(
		this.point(edge.source), this.point(edge.target), length, this.stiffness
	    );
	}

	return this.edgeSprings[edge.id];
    };

    // callback should accept two arguments: Node, Point
    _ForceDirected.prototype.eachNode = function(callback) {
	var t = this;
	this.graph.nodes.forEach(function(n){
	    callback.call(t, n, t.point(n));
	});
    };

    // callback should accept two arguments: Edge, Spring
    _ForceDirected.prototype.eachEdge = function(callback) {
	var t = this;
	this.graph.edges.forEach(function(e){
	    callback.call(t, e, t.spring(e));
	});
    };

    // callback should accept one argument: Spring
    _ForceDirected.prototype.eachSpring = function(callback) {
	var t = this;
	this.graph.edges.forEach(function(e){
	    callback.call(t, t.spring(e));
	});
    };


    // Physics stuff
    _ForceDirected.prototype.applyCoulombsLaw = function() {
	this.eachNode(function(n1, point1) {
	    this.eachNode(function(n2, point2) {
		if (point1 !== point2)
		{
		    var d = point1.p.subtract(point2.p);
		    var distance = d.magnitude() + 0.1; // avoid massive forces at small distances (and divide by zero)
		    var direction = d.normalise();

		    // apply force to each end point
		    point1.applyForce(direction.multiply(this.repulsion).divide(distance * distance * 0.5));
		    point2.applyForce(direction.multiply(this.repulsion).divide(distance * distance * -0.5));
		}
	    });
	});
    };

    _ForceDirected.prototype.applyHookesLaw = function() {
	this.eachSpring(function(spring){
	    var d = spring.point2.p.subtract(spring.point1.p); // the direction of the spring
	    var displacement = spring.length - d.magnitude();
	    var direction = d.normalise();

	    // apply force to each end point
	    spring.point1.applyForce(direction.multiply(spring.k * displacement * -0.5));
	    spring.point2.applyForce(direction.multiply(spring.k * displacement * 0.5));
	});
    };

    _ForceDirected.prototype.attractToCentre = function() {
	this.eachNode(function(node, point) {
	    var direction = point.p.multiply(-1.0);
	    point.applyForce(direction.multiply(this.repulsion / 50.0));
	});
    };


    _ForceDirected.prototype.updateVelocity = function(timestep) {
	this.eachNode(function(node, point) {
	    // Is this, along with updatePosition below, the only places that your
	    // integration code exist?
	    point.v = point.v.add(point.a.multiply(timestep)).multiply(this.damping);
	    point.a = new _Vector(0,0);
	});
    };

    _ForceDirected.prototype.updatePosition = function(timestep) {
	var maxx, maxy, minx, miny;
	this.eachNode(function(node, point) {
	    // Same question as above; along with updateVelocity, is this all of
	    // your integration code?
	    point.p = point.p.add(point.v.multiply(timestep));
	    if(maxx == null || maxy == null) {
		maxx = point.p.x;
		maxy = point.p.y;
		minx = point.p.x;
		miny = point.p.y;
	    } else {
		if(point.p.x > maxx)
		    maxx = point.p.x;
		if(point.p.y > maxy)
		    maxy = point.p.y;
		if(point.p.x < minx)
		    minx = point.p.x;
		if(point.p.y < miny)
		    miny = point.p.y;

	    }
	});

	this.MAX_X = maxx;
	this.MAX_Y = maxy;

	this.MIN_X = minx;
	this.MIN_Y = miny;

    };

    // Calculate the total kinetic energy of the system
    _ForceDirected.prototype.totalEnergy = function(timestep) {
	var energy = 0.0;
	this.eachNode(function(node, point) {
	    var speed = point.v.magnitude();
	    energy += 0.5 * point.m * speed * speed;
	});

	return energy;
    };


    // start simulation
    _ForceDirected.prototype.start = function(x,y,w,h) {
	this.centerx = x+(w/2);
	this.centery = x+(h/2);

	var t = this;

	if (this._started) return;
	this._started = true;

	do {
	    t.applyCoulombsLaw();
	    t.applyHookesLaw();
	    t.attractToCentre();
	    t.updateVelocity(0.03);
	    t.updatePosition(0.03);
	    console.log(".");
	    t.eachNode(function(n,p) {
		console.log(p);
	    });
	} while(t.totalEnergy() >= 0.01)
    };


    // Vector
    _Vector = function(x, y) {
	this.x = x;
	this.y = y;
    };

    _Vector.random = function(x, y) {
	if(x != null && y!= null) {
	    var v =  new _Vector(x+(10.0 * (Math.random() - 0.5)), y+(10.0 * (Math.random() - 0.5)));
	    console.log("INIT");
	    console.log(v);
	    return v;
	} else {
	    console.log("INIT NULL");
	    return new _Vector(10.0 * (Math.random() - 0.5), 10.0 * (Math.random() - 0.5));
	}
    };

    _Vector.prototype.add = function(v2) {
	return new _Vector(this.x + v2.x, this.y + v2.y);
    };

    _Vector.prototype.subtract = function(v2) {
	return new _Vector(this.x - v2.x, this.y - v2.y);
    };

    _Vector.prototype.multiply = function(n) {
	return new _Vector(this.x * n, this.y * n);
    };

    _Vector.prototype.divide = function(n) {
	return new _Vector((this.x / n) || 0, (this.y / n) || 0); // Avoid divide by zero errors..
    };

    _Vector.prototype.magnitude = function() {
	return Math.sqrt(this.x*this.x + this.y*this.y);
    };

    _Vector.prototype.normal = function() {
	return new _Vector(-this.y, this.x);
    };

    _Vector.prototype.normalise = function() {
	return this.divide(this.magnitude());
    };

    // Point
    _ForceDirected.Point = function(position, mass) {
	this.p = position; // position
	this.m = mass; // mass
	this.v = new _Vector(0, 0); // velocity
	this.a = new _Vector(0, 0); // acceleration
    };

    _ForceDirected.Point.prototype.applyForce = function(force) {
	this.a = this.a.add(force.divide(this.m));
    };

    // Spring
    _ForceDirected.Spring = function(point1, point2, length, k) {
	this.point1 = point1;
	this.point2 = point2;
	this.length = length; // spring length at rest
	this.k = k; // spring constant (See Hooke's law) .. how stiff the spring is
    };


    var g = new _Graph(), disambg = {}, edge;
    var shapesMapping = {}, edgesMapping = {};
    var edgeShapes = [], nodeShapes = [];



    for(i=0; i<shapes.nodes.length; i++) {
	node = shapes.nodes[i].graph;
	console.log("MASS");
	console.log(shapes.nodes[i].properties['mass']);
	node.mass = shapes.nodes[i].properties['mass'];
	disambg[shapes.nodes[i].graph.nodeURI.value] = g.newNode(node);
	shapesMapping[shapes.nodes[i].graph.nodeURI.value] = shapes.nodes[i];
    }

    for(i=0; i<shapes.edges.length; i++)  {
	//console.log(shapes.edges[i]);
	edge = g.newEdge(disambg[shapes.edges[i].graph.source.nodeURI.value], disambg[shapes.edges[i].graph.target.nodeURI.value]);
	edgesMapping[edge.id] = shapes.edges[i];
    }

    var fd = new _ForceDirected(g, 5, 5, 0.1), shape;

    fd.start(bounds.x, bounds.y, bounds.width, bounds.height);
    console.log("=============");
    var wm = bounds.width/2;
    var hm = bounds.height/2;
    var topx = Math.ceil(Math.max(Math.abs(fd.MAX_X), Math.abs(fd.MIN_X)));
    var topy = Math.ceil(Math.max(Math.abs(fd.MAX_Y), Math.abs(fd.MIN_Y)));

    topx = topx + (topx * 0.1);
    topy = topy + (topy * 0.1);
    var screenPoints = {};

    var acum = [];
    fd.eachNode(function(n,p) {
	shape = shapesMapping[n.data.nodeURI.value];
	shape.bounds = {};

	console.log(p.p);
	var dx = Math.abs(p.p.x) / topx;
	console.log("DX "+dx);
	dx = wm * dx;
	console.log(dx);
	if(p.p.x < 0) 
	    shape.bounds.x = bounds.x + wm - dx;
	else
	    shape.bounds.x = bounds.x + wm + dx;

	var dy = Math.abs(p.p.y) / topy;
	console.log("DY "+dy);
	dy = hm * dy;
	console.log(dy);
	if(p.p.y < 0) 
	    shape.bounds.y = bounds.y + hm - dy;
	else
	    shape.bounds.y = bounds.y + hm + dy;

	screenPoints[n.id] = {x: shape.bounds.x, y: shape.bounds.y};

	shape.bounds['width'] = (shape.positionBindings['width']||shape.positionBindings['size']);
	shape.bounds['height'] = (shape.positionBindings['height']||shape.positionBindings['size']);
	shape.bounds['radius'] = (shape.positionBindings['radius']||shape.positionBindings['radius']);
	nodeShapes.push(shape);
    });

    var edgeShape, uri;
    fd.eachEdge(function(edge, spring){
	console.log("--");
	console.log("FROM:");
	console.log(screenPoints[edge.source.id]);
	console.log("TO:");
	console.log(screenPoints[edge.target.id]);

	uri = 'http://linkedvis.org/edges/from/'+edge.source.id+"/to/"+edge.target.id;

	edgeShape = edgesMapping[edge.id];
	edgeShape.uri = uri;

	edgeShape.bounds = {};
	edgeShape.bounds['x1'] = screenPoints[edge.source.id].x;
	edgeShape.bounds['y1'] = screenPoints[edge.source.id].y;

	edgeShape.bounds['x2'] = screenPoints[edge.target.id].x;
	edgeShape.bounds['y2'] = screenPoints[edge.target.id].y;

	//edge.data.properties['shape'] = 'line';
	//edge.data.properties['stroke'] = '#999999';
	//edge.data.properties['stroke-width'] = 1;

	console.log("ADDING EDGE");
	console.log(edgeShape);
	edgeShapes.push(edgeShape);
    });

    return edgeShapes.concat(nodeShapes);
};


ForceLayout.prototype.rearrange = function(type, elements, struct, layer, context) {
    // nothing to do here
};

/**
 * Struct object
 */
var Struct = {};
Struct.registry = {};

Struct.build = function(structName, options) {
    return new Struct.registry[structName](options);
};

Struct.register = function(name, spec) {
    Struct.registry[name] = spec;
};

var List  = function() {
    this.query = arguments[0];
    this.opts = arguments[1] || {};

    this.query = "SELECT ?" + (this.opts['nodeVar'] || 'node') + ' '+ this.query;
};

List.prototype.execute = function(graph, cb) {
    var that = this;
    var resolved = [];
    graph.execute(this.query, function(s,results) {
	if(s) {
	    var acum = [];
	    for(var i=0; i<results.length; i++)
		acum.push(results[i][(that.opts['nodeVar'] || 'node')]);

	    Utils.repeat(0, acum.length, function(k,env) {
		floop = arguments.callee;
		var query = "CONSTRUCT { <"+acum[env._i].value+"> ?p ?o } WHERE { <"+acum[env._i].value+"> ?p ?o }";
		setTimeout(function() {
		    graph.execute(query, function(s, nodeGraph) {
			if(s) {
			    nodeGraph.nodeURI = acum[env._i];
			    nodeGraph.rdf = graph.rdf;
			    resolved.push(nodeGraph);
			}
			k(floop,env);
		    });
		},0);
	    }, function() {
		if(that.groupPredicate) {
		    var groupPredicateFn;
		    if(typeof(that.groupPredicate) === 'string') {
			groupPredicateFn = function(node) {
			    resolvedProp = (graph.rdf.resolve(that.groupPredicate) || that.groupPredicate);
			    var match = node.match(null, resolvedProp, null, 1).toArray();
			    if(match.length === 1)
				return match[0].object.valueOf();
			    else
				return null;
			};
		    } else {
			groupPredicateFn = that.groupPredicate;
		    }

		    var groups = {}, group;
		    for(var i=0; i<resolved.length; i++) {
			group = groupPredicateFn(resolved[i]);
			groupAcum = groups[group] || [];
			groupAcum.push(resolved[i]);
			groups[group] = groupAcum;
		    }
		    acum = [];
		    for(var group in groups)
			acum.push({'id': group,
				   '$type': 'group',
				   'lv:count': groups[group].length,
				   'nodes': groups[group]});
		    cb(true, acum);
		} else {
		    cb(true, resolved);
		}
	    });
	} else {
	    cb(false, results);
	}
    });
};

List.prototype.group = function(groupPredicate) {
    this.groupPredicate = groupPredicate;
    return this;
};

Struct.register('List', List);


var Tree = function(spec) {
    this.spec = spec;
};

Tree.prototype.execute = function(graph, cb) {
    if(!((typeof(graph) === 'object' && graph.root  && typeof(graph.root) === 'string') || graph.execute != null)) {
	if(graph.treeNode.children && graph.treeNode.children.length > 0) 
	    cb(true, graph.treeNode.children);
	else
	    if(graph.treeNode.node['$type'] === 'group') {
		//console.log("SENDING!!!");
		//console.log(graph.treeNode.node.nodes);
		cb(true, graph.treeNode.node.nodes);
	    } else {
		//console.log("SENDING!!!");
		//console.log(graph.treeNode.node);
		cb(true, graph.treeNode.node);
	    }
    } else {
	var context = {cache: []};
	var that = this;
	this.processLevel(this.spec, null, graph, context, function(s,tree){
	    if(tree[0].processed == null) {
		Tree.countAllNodes(tree[0]);
		that.walkTree(tree[0]);
	    }
	    cb(s,tree);	
	});
    }
};

Tree.prototype.walkTree = function(t) {
    //console.log(t);
    for(var p in t.node) {
	if(p.indexOf("lv:") !== -1)
	    console.log("   - "+p+" -> "+t.node[p]);
    }
    if(t.children) {
	console.log("LEVEL "+t.label+" -> "+t.children.length+" children ");
	console.log("ALL CHILDREN "+t.allChildren.length);
	for(var i=0; i< t.allChildren.length; i++) 
	    console.log(t.allChildren[i].nodeURI.value);
	if(t.node['$type'] === 'group')
	    console.log("NODE IS GROUP WITH "+t.node['lv:count']+" elements");
	for(var i=0; i<t.children.length;i++)
	    this.walkTree(t.children[i]);
    } else {
	console.log("LEVEL "+t.label+" -> 0 children");
    }
}

Tree.countAllNodes = function(treeNode) {
    var pending = [treeNode], current, allChildren = [], nextChild;
    while(pending.length > 0) {
	current = pending.pop();
	if(current.processed == null) {
	    current['$type']  = 'treenode';
	    if(current.node['$type'] === 'group') {
		current.processed = 0;
		for(var i=0; i<current.node.nodes.length; i++) {
		    current.node.nodes[i].processed = true;
		    current.node.nodes[i]['lv:cumulativeCount'] = 1;
		    current.node.nodes[i]['lv:count'] = 1;
		    current.node.nodes[i]['lv:childrenCount'] = 0;
		    current.node.nodes[i]['lv:label'] = current['label'];
		}
		current.allChildren = [].concat(current.node.nodes);
		current.node['lv:label'] = current['label'];
		if(current.children && current.children.length > 0) {
		    console.log("FOUND NON PROCESSED GROUP");
		    nextChild = current.children[current.processed];
		    pending.push(current);
		    pending.push(nextChild);
		    current.node['lv:isLeaf'] = false;
		} else {
		    console.log("FOUND INNER NODE COMPLETED");
		    current.node['lv:childrenCount'] = current.children.length;
		    current.node['lv:isLeaf'] = false;
		    current.allChildren = Utils.uniq(current.allChildren, function(v){ return v.nodeURI.value; });
		    current.node['lv:cumulativeCount'] = current.allChildren.length;
		    allChildren = current.allChildren;
		}
	    } else {
		console.log("FOUND LEAF");
		current.node.processed = true;
		current.node['lv:isLeaf'] = true;
		current.node['lv:cumulativeCount'] = 1;
		current.node['lv:count'] = 0;
		current.node['lv:childrenCount'] = 0;
		allChildren.push(current);
	    }
	} else {
	    current.allChildren = current.allChildren.concat(allChildren);
	    current.processed++;
	    if(current.processed <  current.children.length) {
		console.log("FOUND INNER NODE BEING PROCESSED");
		nextChild = current.children[current.processed];
		allChildren = [];
		pending.push(current);
		pending.push(nextChild);
	    } else {
		console.log("FOUND INNER NODE COMPLETED");
		current.node['lv:childrenCount'] = current.children.length;
		current.allChildren = Utils.uniq(current.allChildren, function(v){ return v.nodeURI.value; });
		current.node['lv:cumulativeCount'] = current.allChildren.length;
		allChildren = current.allChildren;
	    }
	}
    }

    return treeNode;
};

Tree.prototype.processLevel = function(spec, parent, graph, context, cb) {
    // The tree has already been processed
    if(graph.processed != null)
	cb(true, spec);

    var that = this;
    var level;
    var levels = [];
    //console.log("**** PROCESSING LEVEL "+spec.label);
    //console.log(spec);

    if(parent && parent['$type'] === 'group' && spec.root.indexOf("?parent") !== -1) {
	var acum = [];
	Utils.repeat(0, parent.nodes.length, function(k,env) {
	    var floop = arguments.callee;
	    that.processNode(spec, parent.nodes[env._i], graph, context, function(success, nodes) {
		//console.log("**** CONTINUE PROCESSING NODES FOR LEVEL "+spec.label);
		acum = acum.concat(nodes);
		k(floop, env);
	    });
	}, function() {
	    //console.log("**** PROCESSED ALL NODES IN THE GROUP "+spec.label)
	    if(spec.group != null) {
		// join groups and split in new groups
		//console.log("JOINING GROUPS");
		//console.log(acum);
		var groupsAcum = {}, existingGroup, group;
		for(var i=0; i<acum.length; i++) {
		    group = acum[i];
		    existingGroup = groupsAcum[group.id];
		    if(existingGroup == null) {
			groupsAcum[group.id] = group;
		    } else {
			existingGroup.nodes = existingGroup.nodes.concat(group.nodes);
			existingGroup.allNodes = function() {
			    return Tree.countAllNodes(existingGroup);
			};
			existingGroup['lv:count'] = existingGroup.nodes.length;
		    }
		}

		//console.log("ACUM GROUPS");
		//console.log(groupsAcum);
		acum = [];
		for(group in groupsAcum)
		    acum.push(groupsAcum[group]);		
	    }

	    //console.log("*** FINISHED GROUPS "+acum.length);

	    Utils.repeat(0, acum.length, function(k,env) {
		var floop = arguments.callee;
		level = {};
		level['label'] = spec['label'];
		level['node'] = acum[env._i];
		level['children'] = [];
		//console.log("*** BUILDING THE NEXT LEVEL");
		if(spec.branches) {
		    //console.log("ABOUT TO PROCESS BRANCHES");
		    //console.log(level);
		    that.processBranches(level, spec.branches, graph, context, function(success, level) {
			if(success)
			    levels.push(level);
			k(floop, env);
		    });
		} else {
		    //console.log("NOT BRANCHES");
		    levels.push(level);
		    k(floop, env);
		}
	    }, function() {
		//console.log("FINISHED WITH LEVEL "+levels.length+" LEVELS PROCESSED");
		cb(true, levels);
	    });
	});
    } else {
	//console.log("PROCESSING NODE");
	//console.log(spec);
	//console.log(parent);
	this.processNode(spec, parent, graph, context, function(success, nodes) {
	    if(success) {
		Utils.repeat(0, nodes.length, function(k,env) {
		    var floop = arguments.callee;
		    var level = {};
		    level['node'] = nodes[env._i];
		    level['label'] = spec['label'];
		    level['children'] = [];
		    if(spec.branches) {
			that.processBranches(level, spec.branches, graph, context, function(success, level) {
			    if(success)
				levels.push(level);
			    k(floop, env);
			});
		    } else {
			levels.push(level);
			k(floop, env);
		    }
		}, function() {
		    cb(true, levels);
		});
	    } else {
		cb(false, node);
	    }
	});
    }
};


Tree.prototype.processBranches = function(node, branches, graph, context, cb) {
    var that = this;
    //console.log("* PROCESS BRANCHES");
    //console.log(branches);
    //console.log(node);
    Utils.repeat(0,branches.length,function(k,env) {
	var floop = arguments.callee;

	var branch = branches[env._i];
	that.processLevel(branch, node.node, graph, context, function(success, children) {
	    //console.log("**** FINISHED PROCESSING BRANCHES FOR NODE, NUM CHILDREN: "+children.length);
	    //console.log(children);
	    if(success) {
		node['children'] = node['children'].concat(children);
		//console.log("*** NODE HAS NOW "+node['children'].length+" CHILDREN");
		k(floop, env);
	    } else {
		return cb(false, nodes);
	    }
	});
    }, function() {
	//console.log("FINISHED PROCESSING ALL BRANCHES");
	cb(true, node);
    });
};

Tree.prototype.processNode = function(spec, parent, graph, context, cb) {
    //console.log(parent);
    //console.log("*** PROCESSING NODE "+spec.root+" FOR PARENT "+(parent != null ? (parent.nodeURI ? parent.nodeURI.value : 'unknown parent') : "no parent"));
    //console.log(spec);
    var query = spec.root;
    var hasNode = spec.root.indexOf("?node") !== -1;
    var hasParent = spec.root.indexOf("?parent") !== -1;
    var queryVar = (hasNode === false ? "parent" : "node");
    if(spec.group && spec.group === true)
	spec.group = function(){ return 'group'; };

    if(hasParent) {
	//console.log("THE QUERY HAS PARENT");
	query = query.replace(/\?parent/g,"<"+parent.nodeURI.value+">");
    }

    var that = this;
    console.log("QUERY");
    console.log("SELECT * "+query);
    graph.execute("SELECT * "+query, function(s, results) {
	//console.log("RESULT EXECUTE PROCESS NODE");
	//console.log(s);
	//console.log(results);
	if(s) {
	    var acum = [], resolved = [];
	    for(var i=0; i<results.length; i++) {
		if(Object.keys(results[i]).length === 0) {
		    acum.push(parent.nodeURI);
		} else {
		    acum.push(results[i][queryVar]);
		}
	    }

	    //console.log("CHILDREN FOUND FOR THIS BRANCH ROOT");
	    //console.log(acum);

	    Utils.repeat(0, acum.length, function(k,env) {
		floop = arguments.callee;
		if(context.cache[acum[env._i].value]) {
		    resolved.push(context.cache[acum[env._i].value]);
		} else {
		    if(context.cache[acum[env._i].value]) {
			resolved.push(context.cache[acum[env._i].value]);
			k(floop,env);
		    } else {
			var query = "CONSTRUCT { <"+acum[env._i].value+"> ?p ?o } WHERE { <"+acum[env._i].value+"> ?p ?o }";
			//console.log("CONSTRUCT QUERY "+query);
			setTimeout(function() {
			    graph.execute(query, function(s, nodeGraph) {
				if(s) {
				    nodeGraph.nodeURI = acum[env._i];
				    //console.log("SETTING THE NODEURI FOR "+acum[env._i].value);
				    nodeGraph.rdf = graph.rdf;
				    context.cache[context.cache[acum[env._i].value]] = nodeGraph;
				    resolved.push(nodeGraph);
				}
				k(floop,env);
			    });
			},0);
		    }
		}
	    }, function() {
		//console.log("**** FINISHED PROCESSING NODES GROUP? => "+(spec.group != null));

		if(spec.group) {
		    var groupPredicateFn;
		    if(typeof(spec.group) === 'string') {
			groupPredicateFn = function(node) {
			    resolvedProp = (graph.rdf.resolve(spec.group) || spec.group);
			    var match = node.match(null, resolvedProp, null, 1).toArray();
			    if(match.length === 1)
				return match[0].object.valueOf();
			    else
				return null;
			};
		    } else {
			groupPredicateFn = function(){ return (spec.label || "default"); };
		    }

		    var groups = {}, group;
		    for(var i=0; i<resolved.length; i++) {
			group = groupPredicateFn(resolved[i]);
			groupAcum = groups[group] || [];
			groupAcum.push(resolved[i]);
			groups[group] = groupAcum;
		    }
		    acum = [];
		    for(var group in groups)
			acum.push({'id': group,
				   '$type': 'group',
				   'lv:count': groups[group].length,
				   'nodes': groups[group]});

		    //console.log("**** FINISHED GROUPING ");
		    //console.log(acum);
		    cb(true, acum);
		} else {
		    cb(true, resolved);
		}
	    });
	} else {
	    cb(false, results);
	}
    });

};

Struct.register('Tree', Tree);

var Graph  = function() {
    this.query = arguments[0];

    this.query = "SELECT ?source ?target " + this.query;
};

Graph.prototype.execute = function(graph, cb) {
    var that = this;
    var resolved = [], mass;
    console.log("GRAPH QUERY");
    console.log(this.query);
    graph.execute(this.query, function(s,results) {
	if(s) {
	    var mapping = {}, links, source, target, disambg = {};
	    for(var i=0; i<results.length; i++) {
		source = results[i].source.value;
		target = results[i].target.value;

		links = mapping[source] || {};
		mass = links[target] || 0;
		mass++;
		links[target] = mass;
		mapping[source] = links;
		disambg[source] = results[i].source;
		disambg[target] = results[i].target;
	    }

	    var acum = [];
	    for(var uri in disambg)
		acum.push(disambg[uri]);
		

	    Utils.repeat(0, acum.length, function(k,env) {
		floop = arguments.callee;
		var query = "CONSTRUCT { <"+acum[env._i].value+"> ?p ?o } WHERE { <"+acum[env._i].value+"> ?p ?o }";
		setTimeout(function() {
		    graph.execute(query, function(s, nodeGraph) {
			if(s) {
			    nodeGraph['$type'] = 'graphnode';
			    nodeGraph.nodeURI = acum[env._i];
			    nodeGraph.rdf = graph.rdf;
			    disambg[acum[env._i].value] = nodeGraph;
			}
			k(floop,env);
		    });
		},0);
	    }, function() {
		var nodesAcum = [], node, linksAcum = [];
		for(var uri in mapping) {
		    node = disambg[uri];
		    nodesAcum.push(node);
		    for(targetUri in mapping[uri]) 
			linksAcum.push({source: node, target: disambg[targetUri], '$type': 'graphedge', mass: mapping[uri][targetUri]});
		}
		cb(true, {'nodes': nodesAcum, 'edges': linksAcum});
	    });
	} else {
	    cb(false, results);
	}
    });
};

Graph.prototype.group = function(groupPredicate) {
    this.groupPredicate = groupPredicate;
    return this;
};

Struct.register('Graph', Graph);

/**
 * Query tree object
 */


var LinkedVis = function(opts) {
    this.opts = opts;
    this.bounds = opts['bounds'] || {};
    this.bounds['x'] = parseFloat(opts['x']) || 0;
    this.bounds['y'] = parseFloat(opts['y']) || 0;
    this.bounds['width'] = parseFloat(opts['width']);
    this.bounds['height'] = parseFloat(opts['height']);
    if(this.bounds['width'] == null || this.bounds['height'] == null)
	throw("Error bounds, missing width or height");

    this.layers = [];
    
    // TODO: check this
    // var that = this;
    //rdfstore.create(function(store) {
    // 	that.graph = store;
    //});
};

LinkedVis.prototype.from = function() {
    if(arguments.length === 1) {
	this.graph = arguments[0];
    } else {
	// @todo
	// retrieve data here
    }

    this.metagraph = rdfstore.create();
    this.datagraph = rdfstore.create();

    this.context = {
	metagraph: this.metagraph,
	graph: this.graph,
	datagraph: this.datagraph,
	idGen: 0,
	totalLayers: 0,
	layerCounter: {}
    };

    return this;
};

LinkedVis.List = function(query) {
    return new Struct.build('List', query);
};

LinkedVis.Tree = function(spec) {
    return new Struct.build('Tree', spec);
};

LinkedVis.Graph = function(query, opts) {
    return new Struct.build('Graph', query, opts);
};

 LinkedVis.prototype.struct = function(struct) {
    this.struct = struct;
    return this;
};


LinkedVis.Horizontal = function(opts) {
	return Layout.build('Horizontal', opts);
};

LinkedVis.Cartesian = function(opts) {
	return Layout.build('Cartesian', opts);
};

LinkedVis.Polar = function(opts) {
    return Layout.build('Polar', opts);
};

LinkedVis.TreeMap = function(opts) {
    return Layout.build('TreeMap', opts);
};

LinkedVis.Force = function(opts) {
    return Layout.build('Force', opts);
};

LinkedVis.prototype.stackLayer = function(cb) {
    var layer = new Layer(this.struct, this.graph, this.bounds);
    this.layers.push(layer);
    cb(layer);
    return this;
};

LinkedVis.prototype.render = function(cb) {
    var that = this;

    Utils.repeat(0, this.layers.length, function(k,env) {
	var floop = arguments.callee;
	that.layers[env._i].render(env.doc, that.context, function(s, doc) {
	    env.doc = doc;
	    k(floop,env);
	});
    }, function(env) {
	cb(true,env.doc+"</svg>");
    },
    {doc: "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='"+that.bounds['x']+
          "' y='"+that.bounds['y']+"' width='"+that.bounds['width']+
          "' height='"+that.bounds['height']+"'>"});
    return this;
};


LinkedVis.prototype.computePositionBindings = function(shape, positionBindings, shapes) {
    shape  = shape || 'g';
    if(shape === 'g' || 
       shape === 'rect') {
	// TODO: compute scales here
	return positionBindings;
    } else {
	throw("Unsupported shape "+shape);
    }
};

LinkedVis.shrink = function(uri, namespaces) {
    var parts;
    var ns, suffix;
    if(uri.indexOf("#") != -1) {
	parts = uri.split("#");
	ns = parts[0];
	suffix = parts[1];
    } else {
	parts = uri.split("/");
	suffix = parts.pop();
	ns = parts.join("/");
    }

    if(namespaces[ns] != null) {
	return namespaces[ns]+":"+suffix;
    } else {
	var counter = 0;
	for(var p in namespaces)
	    counter++;

	namespaces["ns"+counter] = ns;
	return "ns"+counter+":"+suffix;
    }
};

// just to test in node.js
exports.LinkedVis = LinkedVis;

exports.Color = Color;