webpackHotUpdate(0,{

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _d = __webpack_require__(389);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var exportnode = document.createElement('div');

	var diameter = 960,
	    format = _d2.default.format(",d"),
	    color = _d2.default.scale.category20c();

	var bubble = _d2.default.layout.pack().sort(null).size([diameter, diameter]).padding(1.5);

	var svg = _d2.default.select(exportnode).append("svg").attr("width", diameter).attr("height", diameter).attr("class", "bubble");

	var tooltip = _d2.default.select("body").append("div").style("position", "absolute").style("z-index", "10").style("visibility", "hidden").style("color", "white").style("padding", "8px").style("background-color", "rgba(0, 0, 0, 0.75)").style("border-radius", "6px").style("font", "12px sans-serif").text("tooltip");

	_d2.default.json("flare.json", function (error, root) {
	    var node = svg.selectAll(".node").data(bubble.nodes(classes(root)).filter(function (d) {
	        return !d.children;
	    })).enter().append("g").attr("class", "node").attr("transform", function (d) {
	        return "translate(" + d.x + "," + d.y + ")";
	    });

	    node.append("circle").attr("r", function (d) {
	        return d.r;
	    }).style("fill", function (d) {
	        return color(d.packageName);
	    }).on("mouseover", function (d) {
	        tooltip.text(d.className + ": " + format(d.value));
	        tooltip.style("visibility", "visible");
	    }).on("mousemove", function () {
	        return tooltip.style("top", _d2.default.event.pageY - 10 + "px").style("left", _d2.default.event.pageX + 10 + "px");
	    }).on("mouseout", function () {
	        return tooltip.style("visibility", "hidden");
	    });

	    node.append("text").attr("dy", ".3em").style("text-anchor", "middle").style("pointer-events", "none").text(function (d) {
	        return d.className.substring(0, d.r / 3);
	    });
	});
	module.exports = exportnode;
	// Returns a flattened hierarchy containing all leaf nodes under the root.
	function classes(root) {
	    var classes = [];

	    function recurse(name, node) {
	        if (node.children) node.children.forEach(function (child) {
	            recurse(node.name, child);
	        });else classes.push({ packageName: name, className: node.name, value: node.size });
	    }

	    recurse(null, root);
	    return { children: classes };
	}

	_d2.default.select(self.frameElement).style("height", diameter + "px");

/***/ }

})