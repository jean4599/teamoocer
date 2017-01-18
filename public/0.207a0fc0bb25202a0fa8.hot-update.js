webpackHotUpdate(0,{

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(120);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Chart = __webpack_require__(415);

	var sampleData = [{ id: '5fbmzmtc', x: 7, y: 41, z: 6 }, { id: 's4f8phwm', x: 11, y: 45, z: 9 }];

	var App = _react2.default.createClass({
	  displayName: 'App',

	  getInitialState: function getInitialState() {
	    return {
	      data: sampleData,
	      domain: { x: [0, 30], y: [0, 100] }
	    };
	  },

	  render: function render() {
	    return _react2.default.createElement('div', { className: 'App' }, _react2.default.createElement(Chart, {
	      data: this.state.data,
	      domain: this.state.domain }));
	  }
	});
	exports.default = App;

/***/ }

})