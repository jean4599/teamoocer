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

	var _style4 = __webpack_require__(383);

	var _col = __webpack_require__(384);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _ConceptExtraction = __webpack_require__(369);

	var _ConceptExtraction2 = _interopRequireDefault(_ConceptExtraction);

	var _ConceptMapping = __webpack_require__(502);

	var _ConceptMapping2 = _interopRequireDefault(_ConceptMapping);

	var _ConceptMapInformation = __webpack_require__(527);

	var _ConceptMapInformation2 = _interopRequireDefault(_ConceptMapInformation);

	var _reactScroll = __webpack_require__(602);

	var _reactScroll2 = _interopRequireDefault(_reactScroll);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Link = _reactScroll2.default.Link;
	var Element = _reactScroll2.default.Element;
	var Events = _reactScroll2.default.Events;
	var scroll = _reactScroll2.default.animateScroll;
	var scrollSpy = _reactScroll2.default.scrollSpy;

	var Main = _react2.default.createClass({
		displayName: 'Main',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.params.courseID,
				courseURL: this.props.route.courseURL
			};
		},
		componentDidMount: function componentDidMount() {

			Events.scrollEvent.register('begin', function (to, element) {
				console.log("begin", arguments);
			});

			Events.scrollEvent.register('end', function (to, element) {
				console.log("end", arguments);
			});

			scrollSpy.update();
		},
		componentWillUnmount: function componentWillUnmount() {
			Events.scrollEvent.remove('begin');
			Events.scrollEvent.remove('end');
		},
		scrollToTop: function scrollToTop() {
			scroll.scrollToTop();
		},
		render: function render() {
			return _react2.default.createElement('div', null, _react2.default.createElement(Element, { name: 'video', className: 'element' }, _react2.default.createElement('div', { style: { padding: '10 50', backgroundColor: '#e9e9e9', height: '85%' } }, _react2.default.createElement(_ConceptExtraction2.default, { courseURL: this.state.courseURL, courseID: this.state.courseID }))), _react2.default.createElement(Link, { activeClass: 'active', to: 'tutorial', spy: true, smooth: true, offset: 50, duration: 500 }, _react2.default.createElement(_row2.default, { style: { backgroundColor: '#e9e9e9' } }, _react2.default.createElement(_col2.default, { className: 'half-circle-up center' }, 'Go discussion'))), _react2.default.createElement(Element, { name: 'tutorial', className: 'element' }, _react2.default.createElement('div', { style: { padding: '50 50', backgroundColor: 'white', height: '90%' } }, _react2.default.createElement(_ConceptMapInformation2.default, null))), _react2.default.createElement(Link, { activeClass: 'active', to: 'discussion', spy: true, smooth: true, offset: 50, duration: 500 }, _react2.default.createElement(Link, { activeClass: 'active', to: 'tutorial', spy: true, smooth: true, offset: 50, duration: 500 }, _react2.default.createElement(_row2.default, { style: { backgroundColor: '#e9e9e9' } }, _react2.default.createElement(_col2.default, { className: 'half-circle-up center' }, 'Start!')))), _react2.default.createElement(Element, { name: 'discussion', className: 'element' }, _react2.default.createElement(Link, { activeClass: 'active', onClick: this.scrollToTop, spy: true, smooth: true, offset: 50, duration: 500 }, _react2.default.createElement(_row2.default, { style: { backgroundColor: '#e9e9e9', height: '20%' } }, _react2.default.createElement(_col2.default, { className: 'half-circle-down center' }, 'Review video'))), _react2.default.createElement('div', { style: { padding: '10 50', backgroundColor: '#e9e9e9', height: '80%' } }, _react2.default.createElement(_ConceptMapping2.default, { courseURL: this.state.courseURL, courseID: this.state.courseID }))));
		}
	});
	exports.default = Main;

/***/ }

})