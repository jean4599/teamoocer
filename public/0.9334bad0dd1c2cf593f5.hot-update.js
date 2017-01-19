webpackHotUpdate(0,{

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(369);

	var _row = __webpack_require__(372);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(376);

	var _col = __webpack_require__(377);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(122);

	var _react2 = _interopRequireDefault(_react);

	var _VideoPlayer = __webpack_require__(378);

	var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

	var _InputConcept = __webpack_require__(393);

	var _InputConcept2 = _interopRequireDefault(_InputConcept);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ConceptExtraction = _react2.default.createClass({
		displayName: 'ConceptExtraction',
		getPlayedTime: function getPlayedTime() {
			return this.refs.player.getPlayedTime();
		},
		jumpToTime: function jumpToTime(time) {
			this.refs.player.jumpToTime(time);
		},
		render: function render() {
			console.log(this.props.route.courseID);
			return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 16 }, _react2.default.createElement(_VideoPlayer2.default, { courseURL: this.props.route.courseURL, controls: 1, width: 854, height: 480, ref: 'player' })), _react2.default.createElement(_col2.default, { span: 8 }, _react2.default.createElement(_InputConcept2.default, { courseID: this.props.route.courseID, getPlayedTime: this.getPlayedTime, jumpToTime: this.jumpToTime }), _react2.default.createElement(Button, { type: 'primary' }, ' Next Step')));
		}
	});
	exports.default = ConceptExtraction;

/***/ }

})