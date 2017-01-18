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
	var color = _d2.default.scaleOrdinal(_d2.default.schemeCategory20c);

	var width = 960,
	    height = 500;

	var svg = _d2.default.select(node).append("svg").attr("width", width).attr("height", height);

	var defs = svg.append("defs");

	defs.append("clipPath").attr("id", "circle1").append("circle").attr("cx", 350).attr("cy", 200).attr("r", 180);

	defs.append("clipPath").attr("id", "circle2").append("circle").attr("cx", 550).attr("cy", 200).attr("r", 180);

	module.exports = node;

/***/ }

})