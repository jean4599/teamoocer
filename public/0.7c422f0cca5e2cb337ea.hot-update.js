webpackHotUpdate(0,{

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _ComfirmLinkPhrase = __webpack_require__(524);

	var _ComfirmLinkPhrase2 = _interopRequireDefault(_ComfirmLinkPhrase);

	var _firebase = __webpack_require__(308);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(415);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var NoticeBoard = _react2.default.createClass({
		displayName: 'NoticeBoard',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.courseID,
				user: this.props.user,
				comfirmLinkPhrase: [],
				members: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.memberFire = _firebase2.default.database().ref(this.state.courseID + '/_network/_members');
			this.memberFire.on('value', this.updateMembers);
			this.linkphraseFire = _firebase2.default.database().ref(this.state.courseID + '/_notice/_link');
			this.linkphraseFire.on('value', this.updateComfirmLinkPhrase);
		},
		removeLinkPhraseComfirm: function removeLinkPhraseComfirm(linkID) {
			console.log('remove: ' + linkID);
			this.linkphraseFire.child(linkID).remove();
		},
		updateMembers: function updateMembers(snapshot) {
			this.setState({
				members: (0, _utils.toArray)(snapshot.val())
			});
		},
		updateComfirmLinkPhrase: function updateComfirmLinkPhrase(snapshot) {
			this.setState({ comfirmLinkPhrase: (0, _utils.toArray)(snapshot.val()) });
		},
		addComfirmLinkPhrase: function addComfirmLinkPhrase(linkID, requester) {
			console.log('NoticeBoard: addComfirmLinkPhrase ' + linkID, requester);
			var members = this.state.members;
			this.linkphraseFire.child(linkID).update({
				edge: linkID,
				requester: requester
			});
			var i;
			for (i = 0; i < members.length; i++) {
				this.linkphraseFire.child(linkID).child(members[i]).update({
					comfirm: false
				});
			}
		},
		render: function render() {
			var _ = this.state;
			return _react2.default.createElement('div', null, _.comfirmLinkPhrase.map(function (el, index) {
				return _react2.default.createElement(_ComfirmLinkPhrase2.default, {
					key: index,
					data: el,
					members: _.members,
					courseID: _.courseID,
					user: _.user });
			}));
		}
	});

	exports.default = NoticeBoard;

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style7 = __webpack_require__(478);

	var _card = __webpack_require__(481);

	var _card2 = _interopRequireDefault(_card);

	var _style8 = __webpack_require__(377);

	var _button = __webpack_require__(380);

	var _button2 = _interopRequireDefault(_button);

	var _style9 = __webpack_require__(401);

	var _input = __webpack_require__(404);

	var _input2 = _interopRequireDefault(_input);

	var _style10 = __webpack_require__(504);

	var _icon = __webpack_require__(161);

	var _icon2 = _interopRequireDefault(_icon);

	var _style11 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style12 = __webpack_require__(383);

	var _col = __webpack_require__(384);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(415);

	var _firebase = __webpack_require__(308);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _style13 = __webpack_require__(521);

	var _style14 = _interopRequireDefault(_style13);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ComfirmLinkPhrase = _react2.default.createClass({
		displayName: 'ComfirmLinkPhrase',

		getInitialState: function getInitialState() {
			return {
				data: this.props.data,
				user: this.props.user,
				members: this.props.members,
				courseID: this.props.courseID,
				edge: '',
				inputMessage: '',
				messages: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.messageFire = _firebase2.default.database().ref(this.state.courseID + '/_notice/_link/' + this.state.data.edge + '/messages');
			this.messageFire.on('value', this.updateMessage);
			this.comfirmStatusFire = _firebase2.default.database().ref(this.state.courseID + '/_notice/_link/' + this.state.data.edge);
			this.comfirmStatusFire.on('value', this.updateComfirmStatus);
			this.edgeFire = _firebase2.default.database().ref(this.state.courseID + '/_network/_edges/' + this.state.data.edge);
			this.edgeFire.on('value', this.updateEdgeData);
		},
		componentDidUpdate: function componentDidUpdate() {
			this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
			console.log(this.messageContainer);
		},
		updateMessage: function updateMessage(snapshot) {
			this.setState({ messages: (0, _utils.toArray)(snapshot.val()) });
		},
		updateEdgeData: function updateEdgeData(snapshot) {
			this.setState({ edge: snapshot.val() });
		},
		updateComfirmStatus: function updateComfirmStatus(snapshot) {
			var me = this.state.user;
			this.setState({ comfirmStatus: snapshot.val().me.comfirm });
		},
		checkAllComfirmed: function checkAllComfirmed(status) {
			var members = this.state.members;
			for (var i = 0; i < members.length; i++) {
				if (!status.members[i].comfirm) return false;
			}
			return true;
		},
		sendMesssage: function sendMesssage() {
			this.messageFire.push({
				message: this.state.inputMessage,
				who: this.state.user
			});
			//clear input
			this.setState({ inputMessage: '' });
		},
		handleInputMessageChnage: function handleInputMessageChnage(e) {
			this.setState({ inputMessage: e.target.value });
		},
		handleComfirm: function handleComfirm(e) {
			this.comfirmStatusFire.child(this.state.user).update({ comfirm: true });
			if (checkAllComfirmed) {
				this.props.removeLinkPhraseComfirm(this.state.data.edge);
			}
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			return _react2.default.createElement(_card2.default, null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { id: 'comfirm-title' }, 'Do you think this is a proper link phrase?')), _react2.default.createElement(_row2.default, { className: 'comfirm-graph-container graph' }, _react2.default.createElement(_col2.default, { span: 6, className: 'comfirm-graph' }, ' ', _react2.default.createElement('p', { className: 'node right' }), ' '), _react2.default.createElement(_col2.default, { span: 12, className: 'comfirm-graph' }, ' ', _react2.default.createElement('p', { className: 'link' }), ' '), _react2.default.createElement(_col2.default, { span: 6, className: 'comfirm-graph' }, ' ', _react2.default.createElement('p', { className: 'node left' }), ' ')), _react2.default.createElement(_row2.default, { className: 'comfirm-graph-container text' }, _react2.default.createElement(_col2.default, { span: 6, className: 'comfirm-graph' }, _.edge.from), _react2.default.createElement(_col2.default, { span: 12, className: 'comfirm-graph' }, _.edge.label), _react2.default.createElement(_col2.default, { span: 6, className: 'comfirm-graph' }, _.edge.to)), _react2.default.createElement(_row2.default, null, _react2.default.createElement('div', { className: 'message-container', ref: function ref(container) {
					_this.messageContainer = container;
				} }, _.messages.map(function (message, index) {
				if (message.who == _.user) {
					return _react2.default.createElement(_col2.default, { key: index, span: 24 }, _react2.default.createElement('p', { className: 'message right' }, ' ', message.message, ' '));
				} else {
					return _react2.default.createElement(_col2.default, { key: index, span: 24 }, _react2.default.createElement('p', { key: index, className: 'message left' }, ' ', message.message, ' '));
				}
			}))), _react2.default.createElement(_row2.default, null, _react2.default.createElement(_input2.default, {
				prefix: _react2.default.createElement(_icon2.default, { type: 'message' }),
				placeholder: 'other suggestion?',
				value: _.inputMessage,
				onPressEnter: function onPressEnter() {
					return _this.sendMesssage();
				},
				onChange: function onChange(e) {
					return _this.handleInputMessageChnage(e);
				} })), _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 24 }, _react2.default.createElement(_button2.default, { className: 'full-length', type: 'primary', disabled: _.comfirmStatus, onClick: function onClick(e) {
					_this.handleComfirm(e);
				} }, 'Yes! Let\'s use it!'))));
		}
	});
	exports.default = ComfirmLinkPhrase;

/***/ }

})