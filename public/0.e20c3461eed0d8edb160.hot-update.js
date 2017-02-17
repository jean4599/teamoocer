webpackHotUpdate(0,{

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(371);

	var _row = __webpack_require__(374);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(384);

	var _col = __webpack_require__(385);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(124);

	var _react2 = _interopRequireDefault(_react);

	var _LoginForm = __webpack_require__(525);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var IndexView = _react2.default.createClass({
		displayName: 'IndexView',

		render: function render() {
			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, { type: 'flex', justify: 'center', className: 'title' }, _react2.default.createElement(_col2.default, { span: 8 }, 'TEAMooker')), _react2.default.createElement(_row2.default, { type: 'flex', justify: 'center' }, _react2.default.createElement(_col2.default, { span: 24, className: 'slogan' }, ' Join us and start progressive peer learning! ')), _react2.default.createElement(_row2.default, { type: 'flex', justify: 'center' }, ' ', _react2.default.createElement(_LoginForm2.default, null), ' '));
		}
	});
	exports.default = IndexView;

/***/ }

})