webpackHotUpdate(0,{

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style4 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style5 = __webpack_require__(383);

	var _col = __webpack_require__(384);

	var _col2 = _interopRequireDefault(_col);

	var _style6 = __webpack_require__(488);

	var _modal = __webpack_require__(491);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(308);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _Network = __webpack_require__(503);

	var _Network2 = _interopRequireDefault(_Network);

	var _NoticeBoard = __webpack_require__(523);

	var _NoticeBoard2 = _interopRequireDefault(_NoticeBoard);

	var _CursorPanel = __webpack_require__(525);

	var _CursorPanel2 = _interopRequireDefault(_CursorPanel);

	var _ChatRoom = __webpack_require__(526);

	var _ChatRoom2 = _interopRequireDefault(_ChatRoom);

	var _ConceptMapInformation = __webpack_require__(527);

	var _ConceptMapInformation2 = _interopRequireDefault(_ConceptMapInformation);

	var _MapGrid = __webpack_require__(528);

	var _MapGrid2 = _interopRequireDefault(_MapGrid);

	var _utils = __webpack_require__(415);

	var _reactCursorPosition = __webpack_require__(529);

	var _reactCursorPosition2 = _interopRequireDefault(_reactCursorPosition);

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
		componentDidMount: function componentDidMount() {
			this.addMember();
		},
		addMember: function addMember() {
			var ref = _firebase2.default.database().ref(this.state.courseID + '/_members/' + this.state.user).update({ uid: this.state.user });
		},
		sendLinkPhraseNotice: function sendLinkPhraseNotice(edgeID) {
			this.noticeBoard.addComfirmLinkPhrase(edgeID, this.state.user);
		},
		handleMouseMove: function handleMouseMove(e) {
			this.cursorPanel.handleMouseMove(e.x, e.y);
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
		fitScreen: function fitScreen() {
			this.network.fitScreen();
		},
		setMapView: function setMapView(x, y) {
			this.cursorPanel.setMapView(x, y);
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, { style: { height: '100%' } }, _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(_NoticeBoard2.default, { ref: function ref(board) {
					_this.noticeBoard = board;
				},
				courseID: _.courseID,
				user: _.user,
				changeEdgeToSolidLine: this.changeEdgeToSolidLine })), _react2.default.createElement(_col2.default, { span: 15 }, _react2.default.createElement(_reactCursorPosition2.default, { id: 'network-container'
				// onMouseMove={(e)=>{this.handleMouseMove(e)}}
				, onCursorPositionChanged: function onCursorPositionChanged(e) {
					_this.handleMouseMove(e);
				}
			}, _react2.default.createElement(_MapGrid2.default, null), _react2.default.createElement(_CursorPanel2.default, {
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
				sendLinkPhraseNotice: this.sendLinkPhraseNotice,
				changeMapView: this.setMapView }))), _react2.default.createElement(_col2.default, { span: 4 }, _react2.default.createElement(_ChatRoom2.default, {
				courseID: _.courseID,
				user: _.user }))));
		}
	});
	exports.default = ConceptMapping;

/***/ }

})