webpackHotUpdate(0,{

/***/ 412:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArray = toArray;
	function toArray(obj) {
	  if (!obj) return [];

	  var arr = Object.keys(obj).map(function (key) {
	    var result = obj[key];
	    result.key = key;
	    return result;
	  });
	  return arr;
	}

/***/ }

})