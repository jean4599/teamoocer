webpackHotUpdate(0,{

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style4 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style5 = __webpack_require__(377);

	var _button = __webpack_require__(380);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(383);

	var _col = __webpack_require__(384);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _VideoPlayer = __webpack_require__(385);

	var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

	var _InputConcept = __webpack_require__(400);

	var _InputConcept2 = _interopRequireDefault(_InputConcept);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ConceptExtraction = _react2.default.createClass({
		displayName: 'ConceptExtraction',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.courseID,
				courseURL: this.props.courseURL
			};
		},
		getPlayedTime: function getPlayedTime() {
			return this.refs.player.getPlayedTime();
		},
		jumpToTime: function jumpToTime(time) {
			this.refs.player.jumpToTime(time);
		},
		conceptAggregation: function conceptAggregation() {
			// this.inputConcept.handleConceptAggreagate(
			// 	()=>{window.location.assign('/conceptMapping')}
			// 	);
			this.inputConcept.handleConceptAggreagate();
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			console.log(_.courseID);
			return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 16 }, _react2.default.createElement(_VideoPlayer2.default, { courseURL: _.courseURL, controls: true, width: 854, height: 480, ref: 'player' })), _react2.default.createElement(_col2.default, { span: 8 }, _react2.default.createElement(_InputConcept2.default, { ref: function ref(c) {
					_this.inputConcept = c;
				}, courseID: _.courseID, getPlayedTime: this.getPlayedTime, jumpToTime: this.jumpToTime }), _react2.default.createElement(_button2.default, { type: 'primary', style: { marginTop: 10 }, onClick: function onClick() {
					return _this.conceptAggregation();
				} }, ' Save ')));
		}
	});
	exports.default = ConceptExtraction;

/***/ }

})