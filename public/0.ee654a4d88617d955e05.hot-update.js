webpackHotUpdate(0,{

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(267);

	var _row = __webpack_require__(274);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(366);

	var _col = __webpack_require__(367);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _VideoPlayer = __webpack_require__(368);

	var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

	var _InputConcept = __webpack_require__(383);

	var _InputConcept2 = _interopRequireDefault(_InputConcept);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ConceptExtraction = _react2.default.createClass({
		displayName: 'ConceptExtraction',
		getPlayedTime: function getPlayedTime() {
			return this.refs.player.getPlayedTime();
		},
		render: function render() {
			return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 12 }, _react2.default.createElement(_VideoPlayer2.default, { ref: 'player' })), _react2.default.createElement(_col2.default, { span: 12 }, _react2.default.createElement(_InputConcept2.default, { getPlayedTime: this.getPlayedTime })));
		}
	});
	exports.default = ConceptExtraction;

/***/ }

})