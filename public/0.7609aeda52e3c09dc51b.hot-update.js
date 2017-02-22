webpackHotUpdate(0,{

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(605);

	var _anchor = __webpack_require__(608);

	var _anchor2 = _interopRequireDefault(_anchor);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _ConceptExtraction = __webpack_require__(369);

	var _ConceptExtraction2 = _interopRequireDefault(_ConceptExtraction);

	var _ConceptMapping = __webpack_require__(502);

	var _ConceptMapping2 = _interopRequireDefault(_ConceptMapping);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Link = _anchor2.default.Link;

	var Main = _react2.default.createClass({
		displayName: 'Main',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.params.courseID,
				courseURL: this.props.route.courseURL
			};
		},
		render: function render() {
			return _react2.default.createElement('div', null, _react2.default.createElement('div', { id: 'Video-Part', style: { padding: 50, backgroundColor: '#e9e9e9', minHeight: '80%' } }, _react2.default.createElement(_ConceptExtraction2.default, { courseURL: this.state.courseURL, courseID: this.state.courseID })), _react2.default.createElement(_anchor2.default, { affix: false }, _react2.default.createElement(_row2.default, { style: { backgroundColor: '#e9e9e9' } }, _react2.default.createElement(Link, { href: '#Discussion-Part' }, _react2.default.createElement('div', { className: 'half-circle-up center' }, 'Go discussion'))), _react2.default.createElement(_row2.default, { className: 'half-circle-down' }, _react2.default.createElement('div', { className: 'center' }, _react2.default.createElement(Link, { href: '#Video-Part', title: 'Go discussion' }), ' '))), _react2.default.createElement('div', { id: 'Discussion-Part', style: { padding: 50, backgroundColor: 'white', minHeight: '80%' } }, _react2.default.createElement(_ConceptMapping2.default, { courseURL: this.state.courseURL, courseID: this.state.courseID })));
		}
	});
	exports.default = Main;

/***/ }

})