webpackHotUpdate(0,{

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _d = __webpack_require__(389);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var node = document.createElement('div');
	var svg = _d2.default.select(node).append("svg"),
	    width = +svg.attr("width");

	var format = _d2.default.format(",d");

	var color = _d2.default.scale.category20c();

	var pack = _d2.default.pack().size([width, width]).padding(1.5);

	_d2.default.csv("flare.csv", function (d) {
	    d.value = +d.value;
	    if (d.value) return d;
	}, function (error, classes) {
	    if (error) throw error;

	    var root = _d2.default.hierarchy({ children: classes }).sum(function (d) {
	        return d.value;
	    }).each(function (d) {
	        if (id = d.data.id) {
	            var id,
	                i = id.lastIndexOf(".");
	            d.id = id;
	            d.package = id.slice(0, i);
	            d.class = id.slice(i + 1);
	        }
	    });

	    var bubble = svg.selectAll(".node").data(pack(root).leaves()).enter().append("g").attr("class", "node").attr("transform", function (d) {
	        return "translate(" + d.x + "," + d.y + ")";
	    });

	    bubble.append("circle").attr("id", function (d) {
	        return d.id;
	    }).attr("r", function (d) {
	        return d.r;
	    }).style("fill", function (d) {
	        return color(d.package);
	    });

	    bubble.append("clipPath").attr("id", function (d) {
	        return "clip-" + d.id;
	    }).append("use").attr("xlink:href", function (d) {
	        return "#" + d.id;
	    });

	    bubble.append("text").attr("clip-path", function (d) {
	        return "url(#clip-" + d.id + ")";
	    }).selectAll("tspan").data(function (d) {
	        return d.class.split(/(?=[A-Z][^A-Z])/g);
	    }).enter().append("tspan").attr("x", 0).attr("y", function (d, i, nodes) {
	        return 13 + (i - nodes.length / 2 - 0.5) * 10;
	    }).text(function (d) {
	        return d;
	    });

	    bubble.append("title").text(function (d) {
	        return d.id + "\n" + format(d.value);
	    });
	});
	module.exports = node;

/***/ }

})