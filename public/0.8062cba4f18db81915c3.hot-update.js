webpackHotUpdate(0,{

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(340);

	var _row = __webpack_require__(343);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(353);

	var _col = __webpack_require__(354);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Network = __webpack_require__(473);

	var _Network2 = _interopRequireDefault(_Network);

	var _NoticeBoard = __webpack_require__(547);

	var _NoticeBoard2 = _interopRequireDefault(_NoticeBoard);

	var _utils = __webpack_require__(385);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ConceptMapping = _react2.default.createClass({
		displayName: 'ConceptMapping',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.route.courseID,
				courseURL: this.props.route.courseURL,
				user: (0, _utils.getCookie)('uid')
			};
		},
		sendLinkPhraseNotice: function sendLinkPhraseNotice(edgeID) {
			this.noticeBoard.addComfirmLinkPhrase(edgeID, this.state.user);
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 14 }, _react2.default.createElement(_Network2.default, {
				courseURL: _.courseURL,
				courseID: _.courseID,
				sendLinkPhraseNotice: this.sendLinkPhraseNotice })), _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(_NoticeBoard2.default, { ref: function ref(board) {
					_this.noticeBoard = board;
				},
				courseID: _.courseID })), _react2.default.createElement(_col2.default, { span: 5 })));
		}
	});
	exports.default = ConceptMapping;

/***/ }

})