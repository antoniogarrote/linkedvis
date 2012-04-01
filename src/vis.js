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
};

Layer.prototype.bind = function(bindings) {
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
    this.bindings = acum;
    this.bindingsKeys = keys;
    return this;
};

Layer.prototype.layout = function(layout) {
    this.layout = layout;
    return this;
};


Layer.prototype.resolveProps = function(elements, cb) {
    var that = this, shape, floop, resolved, rdfProps;
    var shapes = [], key, prop;
    for(var i=0; i<elements.length; i++) {
	// Check if this is a node in a tree data structure
	if(elements[i]['$type'] === 'treenode') {
	    var tmp = elements[i];
	    elements[i] = elements[i]['node'];
	    elements[i].treeNode = tmp;
	}

	if(elements[i]['$type'] && elements[i]['$type'] === 'group') {
	    // @TODO: use layer ID to generate an unique URI for the shape
	    shape = new Shape({'value':'http://linkedvis.org/layers/ids#'+elements[i]['id']});
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

	    for(var j=0; j<that.bindingsKeys.length; j++) {
		key = that.bindingsKeys[j];
		prop = that.bindings[key];
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
	    shape.graph = elements[i];
	    shape.isGroup = false;
	    shape.graph.rdf = that.graph.rdf;
	    shape.rdfProps = {};
	    for(var p in shape['graph']) {
		if(p.indexOf("lv:") !== -1)
		    shape.rdfProps[p] = shape['graph'][p];
	    }

	    for(var j=0; j<that.bindingsKeys.length; j++) {
		key = that.bindingsKeys[j];
		prop = that.bindings[key];
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
    
    for(i=0; i<that.bindingsKeys.length; i++) {
	key = that.bindingsKeys[i];
	prop = that.bindings[key];
	if(prop['scale'] != null)
	    scalesKeys.push(key);
	else
	    regularKeys.push(key);
    }

    that.scales = that.processScales(scalesKeys, shapes, that.graph);

    for(j=0; j<shapes.length; j++) {
	shape = shapes[j];
	for(i=0; i<regularKeys.length; i++) {
	    key = regularKeys[i];
	    prop = that.bindings[key];
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
	    prop = that.bindings[key];
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

    cb(shapes);
};

Layer.prototype.processScales = function(keys, shapes, graph) {
    var scales = {}, key;
    for(var i=0; i<keys.length; i++) {
	key = keys[i];
	console.log("BUILDING SCALE");
	scales[key] = this.layout.buildScale(key, this.bounds, this.bindings[key], shapes, graph)
    }

    return scales;
};

Layer.prototype.render = function(doc,cb) {
    var that = this;
    this.struct.execute(this.graph, function(success, elements){
	
	// create additional layers to the computed data structure
	that.layout.rearrange(elements, that.struct, that);

	// Compute values and scales for the shapes and this layer
	that.resolveProps(elements, function(shapes) {

	    // Compute positions
	    var bounds = that.bounds;
	    shapes = that.layout.position(bounds, shapes);

	    // Shape rendering
	    for(var i=0; i<shapes.length; i++)
		doc = shapes[i].render(doc);

	    var processStacked = function() {
		// render additional layers at this level
		if((this.layers || []).length > 0) {
		    var nextLayer = this.layers.shift();
		    nextLayer.layers = this.layers;
		    nextLayer.render(function(success, doc) {
			cb(success, doc);
		    });
		} else {
		    // return result
		    cb(true, doc);
		}
	    };

	    // render nested levels layers
	    if(that.nested) {
		Utils.repeat(0, shapes.length, function(k, env) {
		    var floop = arguments.callee;
		    setTimeout(function() {
			that.nested.graph = shapes[env._i].graph;
			that.nested.bounds = shapes[env._i].bounds;
			that.nested.render(doc, function(success, nextDoc) {
			    doc = nextDoc;
			    k(floop, env);
			});
		    },0);
		},processStacked);
	    } else {
		processStacked();
	    }
	});
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
    if(prop === 'x' || prop === 'y' || prop === 'width' || prop === 'height' || prop === 'radius' || prop === 'offset' ||
       prop === 'size') {
	this.positionBindings[prop] = parseFloat(value);
    } else {
	this.properties[prop] = value;
    }
};

Shape.prototype.render = function(doc) {
    if(this.properties['shape'] === 'rect') {
	doc = doc + "<"+(this.properties['shape'])+" ";

	
	if(this.uri != null)
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	//if(this.rdfProps != null) 
	// 	doc = doc + "<meta>"+this.buildRDF()+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    } else if(this.properties['shape'] === 'text') {
	doc = doc + "<"+(this.properties['shape'])+" ";

	if(this.uri != null) 
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape' && prop != 'content') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	doc = doc + this.properties['content'];

	//if(this.rdfProps != null) 
	// 	doc = doc + "<meta>"+this.buildRDF()+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    } else if(this.properties['shape'] === 'circle') {
	doc = doc + "<"+(this.properties['shape'])+" ";

	if(this.uri != null) 
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape' && prop != 'content') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	//if(this.rdfProps != null) 
	// 	doc = doc + "<meta>"+this.buildRDF()+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    } else if(this.properties['shape'] === 'path') {
	doc = doc + "<"+(this.properties['shape'])+" ";

	if(this.uri != null) 
	    doc = doc + "about='"+this.uri.value+"' ";

	for(var prop in this.properties) {
	    if(prop != 'shape' && prop != 'content') {
		doc = doc + prop + "='" + this.properties[prop] + "' ";
	    };
	}
	doc = this.renderPosition(doc);
	doc = doc +">";

	//if(this.rdfProps != null) 
	// 	doc = doc + "<meta>"+this.buildRDF()+"</meta>";

	doc = doc + "</"+(this.properties['shape'])+">";
    }
    return doc;
};

Shape.prototype.buildRDF = function() {
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

    rdf = rdf + "<"+type+" rdf:about=\""+this.uri.value+"\">";
    for(p in this.rdfProps) {
	expanded = this.graph.rdf.resolve(p) || p;
	expanded = expanded || p;
	expanded = LinkedVis.shrink(expanded, ns);
	rdf = rdf + "<"+expanded+">"+this.rdfProps[p]+"<"+expanded+">";
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

HorizontalLayout.prototype.position = function(bounds, shapes) {
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

HorizontalLayout.prototype.rearrange = function(elements, struct, layer) {
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

VerticalLayout.prototype.position = function(bounds, shapes) {
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

VerticalLayout.prototype.rearrange = function(elements, struct, layer) {
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

CartesianLayout.prototype.position = function(bounds, shapes) {
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

CartesianLayout.prototype.rearrange = function(elements, struct, layer) {
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

TreeMapLayout.prototype.position = function(bounds, shapes) {
    if(this.orientation === "horizontal") {
	return new HorizontalLayout(this.opts).position(bounds, shapes);
    } else {
	return new VerticalLayout(this.opts).position(bounds, shapes);
    }
};

TreeMapLayout.prototype.rearrange = function(elements, struct, layer) {
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

PolarLayout.prototype.position = function(bounds, shapes) {
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

PolarLayout.prototype.rearrange = function(elements, struct, layer) {
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
		}
		current.allChildren = [].concat(current.node.nodes);
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
	that.layers[env._i].render(env.doc, function(s, doc) {
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