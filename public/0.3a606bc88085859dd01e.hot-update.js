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

	var _NoticeBoard = __webpack_require__(493);

	var _NoticeBoard2 = _interopRequireDefault(_NoticeBoard);

	var _CursorPanel = __webpack_require__(495);

	var _CursorPanel2 = _interopRequireDefault(_CursorPanel);

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
		handleMouseMove: function handleMouseMove(e) {
			e.persist();
			this.setState({ cursorX: e.target.clientX, cursorY: e.target.clientY });
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 14 }, _react2.default.createElement('div', { id: 'network-container',
				onMouseMove: function onMouseMove(e) {
					_this.handleMouseMove(e);
				} }, _react2.default.createElement(_CursorPanel2.default, {
				user: _.user,
				cursorX: _.cursorX,
				cursorY: _.cursorY }), _react2.default.createElement(_Network2.default, {
				courseURL: _.courseURL,
				courseID: _.courseID,
				sendLinkPhraseNotice: this.sendLinkPhraseNotice }))), _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(_NoticeBoard2.default, { ref: function ref(board) {
					_this.noticeBoard = board;
				},
				courseID: _.courseID,
				user: _.user })), _react2.default.createElement(_col2.default, { span: 5 })));
		}
	});
	exports.default = ConceptMapping;

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(278);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Cursor = _react2.default.createClass({
		displayName: 'Cursor',

		render: function render() {
			return _react2.default.createElement('p', { className: 'cursor', style: { color: this.props.color, top: this.props.y, left: this.props.x } });
		}
	});
	var CursorPanel = _react2.default.createClass({
		displayName: 'CursorPanel',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.courseID,
				user: this.props.user,
				cursors: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/networks/cursors/');
			this.fire.on('value', this.updateCursor);
		},
		updateCursor: function updateCursor(snapshot) {
			var result = snapshot.val();
			delete result[this.state.user];
			console.log('Cursors are: ');
			console.log(result);
			this.setState({ cursors: toArray(snapshot.val) });
		},
		render: function render() {
			// const cursors=this.state.cursors.map((cursor,index)=>
			// 	<Cursor x={cursor.x} y={cursor.y} color={cursor.color} />
			// 	)
			var cursors = _react2.default.createElement(Cursor, { x: this.props.cursorX, y: this.props.cursorY, color: 'red' });
			return _react2.default.createElement('div', { id: 'cursor-panel' }, cursors);
		}
	});

	exports.default = CursorPanel;

/***/ }

})