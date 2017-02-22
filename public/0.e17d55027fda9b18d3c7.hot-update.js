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
			this.inputConcept.handleConceptAggreagate(function () {
				window.location.assign('/conceptMapping');
			});
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			console.log(_.courseID);
			return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 16 }, _react2.default.createElement(_VideoPlayer2.default, { courseURL: _.courseURL, controls: true, width: 854, height: 480, ref: 'player' })), _react2.default.createElement(_col2.default, { span: 8 }, _react2.default.createElement(_InputConcept2.default, { ref: function ref(c) {
					_this.inputConcept = c;
				}, courseID: _.courseID, getPlayedTime: this.getPlayedTime, jumpToTime: this.jumpToTime }), _react2.default.createElement(_button2.default, { type: 'primary', style: { marginTop: 10 }, onClick: function onClick() {
					return _this.conceptAggregation();
				} }, ' Start concept mapping')));
		}
	});
	exports.default = ConceptExtraction;

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style5 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style6 = __webpack_require__(383);

	var _col = __webpack_require__(384);

	var _col2 = _interopRequireDefault(_col);

	var _style7 = __webpack_require__(377);

	var _button = __webpack_require__(380);

	var _button2 = _interopRequireDefault(_button);

	var _style8 = __webpack_require__(488);

	var _modal = __webpack_require__(491);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _Network = __webpack_require__(503);

	var _Network2 = _interopRequireDefault(_Network);

	var _NoticeBoard = __webpack_require__(523);

	var _NoticeBoard2 = _interopRequireDefault(_NoticeBoard);

	var _CursorPanel = __webpack_require__(525);

	var _CursorPanel2 = _interopRequireDefault(_CursorPanel);

	var _ChatRoom = __webpack_require__(526);

	var _ChatRoom2 = _interopRequireDefault(_ChatRoom);

	var _ConceptMapInformation = __webpack_require__(581);

	var _ConceptMapInformation2 = _interopRequireDefault(_ConceptMapInformation);

	var _utils = __webpack_require__(415);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ConceptMapping = _react2.default.createClass({
		displayName: 'ConceptMapping',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.courseID,
				courseURL: this.props.courseURL,
				user: (0, _utils.getCookie)('uid')
			};
		},
		sendLinkPhraseNotice: function sendLinkPhraseNotice(edgeID) {
			this.noticeBoard.addComfirmLinkPhrase(edgeID, this.state.user);
		},
		handleMouseMove: function handleMouseMove(e) {
			e.persist();
			this.cursorPanel.handleMouseMove(e.clientX, e.clientY);
		},
		changeEdgeToSolidLine: function changeEdgeToSolidLine(edgeID) {
			this.network.changeEdgeToSolidLine(edgeID);
		},
		showInformation: function showInformation() {
			_modal2.default.info({
				title: 'How to build a concept map?',
				content: _react2.default.createElement(_ConceptMapInformation2.default, null),
				onOk: function onOk() {}
			});
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(_button2.default, { type: 'primary', onClick: this.showInformation }, 'How to build concept map?'), _react2.default.createElement(_NoticeBoard2.default, { ref: function ref(board) {
					_this.noticeBoard = board;
				},
				courseID: _.courseID,
				user: _.user,
				changeEdgeToSolidLine: this.changeEdgeToSolidLine })), _react2.default.createElement(_col2.default, { span: 15 }, _react2.default.createElement('div', { id: 'network-container',
				onMouseMove: function onMouseMove(e) {
					_this.handleMouseMove(e);
				} }, _react2.default.createElement(_CursorPanel2.default, {
				ref: function ref(panel) {
					_this.cursorPanel = panel;
				},
				courseID: _.courseID,
				user: _.user }), _react2.default.createElement(_Network2.default, {
				ref: function ref(network) {
					_this.network = network;
				},
				courseURL: _.courseURL,
				courseID: _.courseID,
				sendLinkPhraseNotice: this.sendLinkPhraseNotice }))), _react2.default.createElement(_col2.default, { span: 4 }, _react2.default.createElement(_ChatRoom2.default, {
				courseID: _.courseID,
				user: _.user }))));
		}
	});
	exports.default = ConceptMapping;

/***/ }

})