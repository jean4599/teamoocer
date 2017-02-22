webpackHotUpdate(0,{

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style2 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _ConceptExtraction = __webpack_require__(369);

	var _ConceptExtraction2 = _interopRequireDefault(_ConceptExtraction);

	var _ConceptMapping = __webpack_require__(502);

	var _ConceptMapping2 = _interopRequireDefault(_ConceptMapping);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Main = _react2.default.createClass({
		displayName: 'Main',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.params.courseID,
				courseURL: this.props.route.courseURL
			};
		},
		render: function render() {
			return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'fullpage' }, _react2.default.createElement(_ConceptExtraction2.default, { courseURL: this.state.courseURL, courseID: this.state.courseID })), _react2.default.createElement(_row2.default, { className: 'half-circle' }, 'Go discussion'), _react2.default.createElement('div', { className: 'fullpage' }, _react2.default.createElement(_ConceptMapping2.default, { courseURL: this.state.courseURL, courseID: this.state.courseID })));
		}
	});
	exports.default = Main;

/***/ }

})