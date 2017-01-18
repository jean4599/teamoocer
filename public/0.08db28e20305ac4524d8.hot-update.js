webpackHotUpdate(0,{

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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
	exports.retrieveData = retrieveData;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

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
	  var result = {};
	  Object.keys(obj).map(function (key, index) {
	    var r_key = obj[key][getkeys].toFixed(2);
	    var r_value = obj[key][values];
	    console.log(r_key + ': ' + r_value);
	    if (result[r_key] != null) {
	      console.log(result[r_key]['value']);
	      r_value = result[r_key]['value'] + ' ,' + r_value;
	    }
	    result[r_key] = '';
	  });
	  console.log(result);
	  return result;
	}
	function retrieveData(obj, getkeys, values) {
	  var result = Object.keys(obj).map(function (key, index) {
	    var r_key = obj[key][getkeys];
	    var r_value = obj[key][values];
	    var r = {};
	    r[r_key] = r_value;
	    return r;
	  });
	  return result;
	}
	function clone(obj) {
	  if (null == obj || "object" != (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;
	  var copy = obj.constructor();
	  for (var attr in obj) {
	    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	  }
	  return copy;
	}

/***/ }

})