webpackHotUpdate(0,{

/***/ 416:
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
	exports.setCookie = setCookie;
	exports.getCookie = getCookie;

	var _react = __webpack_require__(124);

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
	    if (result[r_key] != null) {
	      console.log(result[r_key]['value']);
	      r_value = result[r_key]['value'] + ' ,' + r_value;
	    }
	    result[r_key] = '';
	  });
	  return result;
	}
	function retrieveData(obj, froms, tos) {
	  if (obj && froms && tos && froms.length == tos.length) {
	    var result = Object.keys(obj).map(function (key, index) {
	      var r = {};
	      for (var i = 0; i < froms.length; i++) {
	        r[tos[i]] = obj[key][froms[i]];
	      }
	      return r;
	    });
	    return result;
	  }
	}
	function setCookie(cname, cvalue, exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	  var expires = "expires=" + d.toGMTString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	function getCookie(cname) {
	  var name = cname + "=";
	  var ca = document.cookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
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