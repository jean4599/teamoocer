webpackHotUpdate(0,{

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
				linkID: this.props.linkID,
				user: this.props.user,
				members: this.props.members,
				courseID: this.props.courseID,
				edge: '',
				inputMessage: '',
				messages: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.messageFire = _firebase2.default.database().ref(this.state.courseID + '/_notice/_link/' + this.state.linkID + '/messages');
			this.messageFire.on('value', this.updateMessage);
			this.comfirmStatusFire = _firebase2.default.database().ref(this.state.courseID + '/_notice/_link/' + this.state.linkID);
			this.comfirmStatusFire.on('value', this.updateComfirmStatus);
			this.edgeFire = _firebase2.default.database().ref(this.state.courseID + '/_network/_edges/' + this.state.linkID);
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
			var result = snapshot.val();
			this.setState({
				mycomfirmStatus: result[me].comfirm,
				allComfirmStatus: result
			});
			console.log(result[me]);
		},
		checkAllComfirmed: function checkAllComfirmed() {
			var members = this.state.members;
			var status = this.state.allComfirmStatus;
			for (var i = 0; i < members.length; i++) {
				console.log('check: ' + members[i] + ': status=' + status[members[i]].comfirm);
				if (!status[members[i]].comfirm) return false;
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
			var _this = this;
			this.comfirmStatusFire.child(this.state.user).update({ comfirm: true }, function (error) {
				if (error) {
					alert("Data could not be saved." + error);
				} else {
					if (_this.checkAllComfirmed()) {
						_this.props.removeLinkPhraseComfirm(_this.state.linkID);
					}
				}
			});
		},
		render: function render() {
			var _this2 = this;

			var _ = this.state;
			return _react2.default.createElement(_card2.default, null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { id: 'comfirm-title' }, 'Do you think this is a proper link phrase?')), _react2.default.createElement(_row2.default, { className: 'comfirm-graph-container graph' }, _react2.default.createElement(_col2.default, { span: 6, className: 'comfirm-graph' }, ' ', _react2.default.createElement('p', { className: 'node right' }), ' '), _react2.default.createElement(_col2.default, { span: 12, className: 'comfirm-graph' }, ' ', _react2.default.createElement('p', { className: 'link' }), ' '), _react2.default.createElement(_col2.default, { span: 6, className: 'comfirm-graph' }, ' ', _react2.default.createElement('p', { className: 'node left' }), ' ')), _react2.default.createElement(_row2.default, { className: 'comfirm-graph-container text' }, _react2.default.createElement(_col2.default, { span: 6, className: 'comfirm-graph' }, _.edge.from), _react2.default.createElement(_col2.default, { span: 12, className: 'comfirm-graph' }, _.edge.label), _react2.default.createElement(_col2.default, { span: 6, className: 'comfirm-graph' }, _.edge.to)), _react2.default.createElement(_row2.default, null, _react2.default.createElement('div', { className: 'message-container', ref: function ref(container) {
					_this2.messageContainer = container;
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
					return _this2.sendMesssage();
				},
				onChange: function onChange(e) {
					return _this2.handleInputMessageChnage(e);
				} })), _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 24 }, _react2.default.createElement(_button2.default, { className: 'full-length', type: 'primary', disabled: _.mycomfirmStatus, onClick: function onClick(e) {
					_this2.handleComfirm(e);
				} }, 'Yes! Let\'s use it!'))));
		}
	});
	exports.default = ComfirmLinkPhrase;

/***/ }

})