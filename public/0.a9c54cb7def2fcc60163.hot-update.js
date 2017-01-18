webpackHotUpdate(0,{

/***/ 385:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	exports.toArray = toArray;
	exports.getMarks = getMarks;
	function toArray(obj) {
	  if (!obj) return [];

	  var arr = Object.keys(obj).map(function (key, index) {
	    var result = clone(obj[key]);
	    result.key = key;
	    return result;
	  });
	  return arr;
	}
	function getMarks(obj, getkeys, values) {
	  var result = Object.keys(obj).map(function (key, index) {
	    var r;
	    console.log(obj[key].getkeys);
	    r[obj[key].getkeys] = obj[key].values;
	    return r;
	  });
	}
	function clone(obj) {
	  if (null == obj || "object" != (typeof obj === "undefined" ? "undefined" : _typeof(obj))) return obj;
	  var copy = obj.constructor();
	  for (var attr in obj) {
	    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	  }
	  return copy;
	}

/***/ }

})