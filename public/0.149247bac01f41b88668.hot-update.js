webpackHotUpdate(0,{

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _BubbleChart = __webpack_require__(388);

	var _BubbleChart2 = _interopRequireDefault(_BubbleChart);

	function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
	}

	module.exports = _react2.default.createClass({
			displayName: 'exports',

			render: function render() {
					var data = [{
							_id: '1', // unique id (required)
							value: 10, // used to determine relative size of bubbles (required)
							displayText: '1', // will use _id if undefined
							colorValue: 1, // used to determine color
							selected: 1 }, {
							_id: '2',
							value: 8,
							displayText: 'asdfg',
							colorValue: 2,
							selected: 1
					}];
					console.log(data);
					return _react2.default.createElement('div', null, _react2.default.createElement(_BubbleChart2.default, { data: data }));
			}
	});

/***/ }

})