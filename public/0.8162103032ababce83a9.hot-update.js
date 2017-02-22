webpackHotUpdate(0,{

/***/ 502:
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
				courseID: this.props.route.courseID,
				courseURL: this.props.route.courseURL,
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
			Modal.info({
				title: 'How to build a concept map?',
				content: _react2.default.createElement(_ConceptMapInformation2.default, null),
				onOk: function onOk() {}
			});
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(Button, { type: 'primary', onClick: this.showInformation }, 'How to build concept map?'), _react2.default.createElement(_NoticeBoard2.default, { ref: function ref(board) {
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

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style3 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(383);

	var _col = __webpack_require__(384);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ConceptMapInformation = _react2.default.createClass({
		displayName: 'ConceptMapInformation',

		render: function render() {
			_react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, null, _react2.default.createElement('p', null, 'Component of a Concept Map'), _react2.default.createElement('p', null, 'Nodes: correspond to the concepts or important terms related to your studies of a topic. For example, the concept "water" can be defined by other concepts, such as liquid, solid, and gas.'), _react2.default.createElement('p', null, 'Labeled links: identify the type of relationship. Therefore, the line between a pair of concepts denotes a relationship, and the label on the line tells how the two concepts are related. For example, in a concept map of seasons, the relationship between the amount of sunlight and temperature variations is labeled as "cause" \u2013 in other words it is an action relationship between antecedent and consequent. ')));
		}
	});

/***/ }

})