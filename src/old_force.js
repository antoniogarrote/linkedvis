
    var nodes = [];
    var links = [];
    var disambg = {};
    var i, uri, node, link;
    var w = bounds.width;
    var h = bounds.height;

    for(i=0; i<shapes.length; i++) {
	disambg[shapes[i].graph.nodeURI.value] = shapes[i].graph;
	node = shapes[i].graph;
	node.x = bounds.x + Math.round(Math.random()*w);
	node.y = bounds.y + Math.round(Math.random()*h);
	nodes.push(node);
    }

    for(i=0; i<shapes.length; i++) {
	for(uri in shapes[i].graph.links)
	    links.push({source: shapes[i].graph, target: disambg[uri]});
    }

    var area = bounds.width * bounds.height;
    var k = Math.sqrt(area / nodes.length);
    var iterations = 5000;


    function fa(x) {
	return x * x / k;
    }

    function fr(x) {
	return k * k / x;
    }

    function vnorm(a) {
	var acum = 0;
	for(var p in a) {
	    acum = acum + (a[p] * a[p]);
	}
	return Math.sqrt(acum);
    }

    var dx,dy, norm, fact, beforeFlag, beforeDispX, beforeDispY;
    var temperature = w /10 ;

    for(var i=0; i<iterations; i++) {

	temperature = temperature * (1 - i/(iterations -1));

	// calculate repulsive forces
	
	for(var n=0; n<nodes.length; n++) {
	    node = nodes[n];
	    node.disp = {x:0,y:0};
	    for(var m=0; m<nodes.length; m++)  {
		other = nodes[m];
		if(other.nodeURI.value !== node.nodeURI.value) {
		    dx = node.x - other.x;
		    dy = node.y - other.y;
		    
		    norm = vnorm({dx:dx, dy:dy});
		    fact = fr(norm);


		    //if(isNaN(node.disp.x) || isNaN(node.disp.y)) {
		    // 	console.log("    b[!]");
		    // 	beforeFlag = 0;
		    //} else {
		    // 	console.log("    b[.]");
		    // 	beforeDispX = node.disp.x;
		    // 	beforeDispY = node.disp.y;
		    // 	beforeFlag = 1;
		    //}

		    node.disp.x = node.disp.x + (dx/norm) * fact;
		    node.disp.y = node.disp.y + (dy/norm) * fact;

		    //if(isNaN(node.disp.x) || isNaN(node.disp.y)) {
		    // 	console.log("	 (!!)");
		    // 	if(beforeFlag === 1) {
		    // 	    console.log("!!!!!ERROR!!!!!!!!");
		    // 	    console.log("BEF X: "+beforeDispX);
		    // 	    console.log("BEF Y: "+beforeDispY);
		    // 	    console.log("NORM : "+norm);
		    // 	    console.log("FACT : "+fact);
		    // 	}
		    //}

		}
	    }
	}

	// calculate attractive forces

	for(var l=0; l<links.length; l++) {
	    link = links[l];

	    dx = link.source.x - link.target.x;
	    dy = link.source.y - link.target.y;

	    norm = vnorm({dx:dx, dy:dy});
	    fact = fr(norm);

	    link.source.disp.x = link.source.disp.x + (dx/norm) * fact;
	    link.source.disp.y = link.source.disp.y + (dy/norm) * fact;
	    link.target.disp.x = link.target.disp.x + (dx/norm) * fact;
	    link.target.disp.y = link.target.disp.y + (dy/norm) * fact;
	    if(isNaN(link.source.disp.x) || isNaN(link.source.disp.y) || isNaN(link.target.disp.x) || isNaN(link.target.disp.y)) {
		console.log("!");
	    } else {
		//console.log(".");
	    }
	}

	// limit max displacement to temperature t and prevent from displacement outside frame

	for(var n=0; n<nodes.length; n++) {
	    norm = vnorm(node.disp);
	    node.x = node.x + ( node.disp.x / norm ) * Math.min(node.disp.x, temperature);
	    node.y = node.y + ( node.disp.y / norm ) * Math.min(node.disp.y, temperature);
	 
	    node.x = Math.min(w/2, Math.max(-(w/2), node.x));
	    node.y = Math.min(h/2, Math.max(-(h/2), node.y));
	}
    }

    var shape;
    for(var i=0; i<shapes.length; i++) {
	shape = shapes[i];
	shape.bounds = {'x': shape.graph.x, 
			'y': shape.graph.y, 
			'width': (shape.positionBindings['width']||shape.positionBindings['size']), 
		        'height':(shape.positionBindings['height']||shape.positionBindings['size']),
			'radius':(shape.positionBindings['radius']||shape.positionBindings['radius']) };
    }

    return shapes;
*/
/*
    var nodes = [];
    var links = [];
    var disambg = {};
    var gravity = 0.1;
    for(var i=0; i<shapes.length; i++) {
	disambg[shapes[i].graphNode.nodeURI.value] = shapes[i].graphNode;
	nodes.push(shapes[i].graphNode);
    }
    for(var i=0; i<shapes.length; i++) {
	for(var uri in shapes[i].graphNode.links)
	    links.push({source: disambg[uri], target: disambg[shapes[i].graphNode.links[uri]]});
    }

    var i,
        j,
        n = nodes.length,
        m = links.length,
        w = bounds['width'],
        h = size['height'],
        neighbors,
        o;

    for (i = 0; i < n; ++i) {
      (o = nodes[i]).index = i;
      o.weight = 0;
    }

    distances = [];
    strengths = [];
    for (i = 0; i < m; ++i) {
      o = links[i];
      distances[i] = 20; // change by configuration option 
      strengths[i] = 1;	 // change by configuration option 
      ++o.source.weight;
      ++o.target.weight;
    }

    for (i = 0; i < n; ++i) {
      o = nodes[i];
      if (isNaN(o.x)) o.x = positionInit("x", w);
      if (isNaN(o.y)) o.y = positionInit("y", h);
      if (isNaN(o.px)) o.px = o.x;
      if (isNaN(o.py)) o.py = o.y;
    }

    charges = [];
    if (typeof charge === "function") {
      for (i = 0; i < n; ++i) {
        charges[i] = +charge.call(this, nodes[i], i);
      }
    } else {
      for (i = 0; i < n; ++i) {
        charges[i] = charge;
      }
    }

    // initialize node position based on first neighbor
    function positionInit(dimension, size) {
      var neighbors = neighborInit(i),
          j = -1,
          m = neighbors.length,
          x;
      while (++j < m) if (!isNaN(x = neighbors[j][dimension])) return x;
      return Math.random() * size;
    }

    // initialize neighbors lazily
    function neighboInit() {
      if (!neighbors) {
        neighbors = [];
        for (j = 0; j < n; ++j) {
          neighbors[j] = [];
        }
        for (j = 0; j < m; ++j) {
          var o = links[j];
          neighbors[o.source.index].push(o.target);
          neighbors[o.target.index].push(o.source);
        }
      }
      return neighbors[i];
    }

    var alpha = 0.1
    while (alpha > 0) {
	// simulated annealing, basically
	if ((alpha *= .99) < .005) {
	    alpha = 0;
	    continue;
	}

	var n = nodes.length,
        m = links.length,
        q,
        i, // current index
        o, // current object
        s, // current source
        t, // current target
        l, // current distance
        k, // current force
        x, // x-distance
        y; // y-distance

	// gauss-seidel relaxation for links
	for (i = 0; i < m; ++i) {
	    o = links[i];
	    s = o.source;
	    t = o.target;
	    x = t.x - s.x;
	    y = t.y - s.y;
	    if (l = (x * x + y * y)) {
		l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
		x *= l;
		y *= l;
		t.x -= x * (k = s.weight / (t.weight + s.weight));
		t.y -= y * k;
		s.x += x * (k = 1 - k);
		s.y += y * k;
	    }
	}

	// apply gravity forces
	if (k = alpha * gravity) {
	    x = size[0] / 2;
	    y = size[1] / 2;
	    i = -1; if (k) while (++i < n) {
		o = nodes[i];
		o.x += (x - o.x) * k;
		o.y += (y - o.y) * k;
	    }
	}

	// compute quadtree center of mass and apply charge forces
	if (charge) {
	    d3_layout_forceAccumulate(q = this.quadtree(nodes), alpha, charges);
	    i = -1; while (++i < n) {
		if (!(o = nodes[i]).fixed) {
		    q.visit(repulse(o));
		}
	    }
	}

	// position verlet integration
	i = -1; while (++i < n) {
	    o = nodes[i];
	    if (o.fixed) {
		o.x = o.px;
		o.y = o.py;
	    } else {
		o.x -= (o.px - (o.px = o.x)) * friction;
		o.y -= (o.py - (o.py = o.y)) * friction;
	    }
	}	
    }

