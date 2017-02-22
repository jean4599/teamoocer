webpackHotUpdate(0,{

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style5 = __webpack_require__(401);

	var _input = __webpack_require__(404);

	var _input2 = _interopRequireDefault(_input);

	var _style6 = __webpack_require__(504);

	var _icon = __webpack_require__(161);

	var _icon2 = _interopRequireDefault(_icon);

	var _style7 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style8 = __webpack_require__(383);

	var _col = __webpack_require__(384);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(308);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(415);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Message = _react2.default.createClass({
		displayName: 'Message',

		render: function render() {
			var _ = this.props;
			return _react2.default.createElement(_col2.default, { span: 24 }, ' ', _react2.default.createElement('p', { className: _.who == _.me ? 'right' : 'left' }, ' ', _.message, ' '));
		}
	});

	var ChatRoom = _react2.default.createClass({
		displayName: 'ChatRoom',

		getInitialState: function getInitialState() {
			return {
				user: this.props.user,
				courseID: this.props.courseID,
				messages: [],
				inputMessage: ''
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/_chat');
			this.fire.on('value', this.updateMessages);
		},
		componentDidUpdate: function componentDidUpdate() {
			this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
		},
		updateMessages: function updateMessages(snapshot) {
			this.setState({ messages: (0, _utils.toArray)(snapshot.val()) });
		},
		sendMesssage: function sendMesssage() {
			this.fire.push({
				message: this.state.inputMessage,
				who: this.state.user
			});
			//clear input
			this.setState({ inputMessage: '' });
		},
		handleInputMessageChnage: function handleInputMessageChnage(e) {
			this.setState({ inputMessage: e.target.value });
		},
		render: function render() {
			var _this = this;

			var _ = this.state;
			var messages = this.state.messages.map(function (m, index) {
				return _react2.default.createElement(Message, { key: index, who: m.who, message: m.message, me: _.user });
			});
			return _react2.default.createElement('div', { className: 'chat-area' }, _react2.default.createElement(_row2.default, null, _react2.default.createElement('div', { ref: function ref(container) {
					_this.chatContainer = container;
				}, className: 'chat-container' }, messages)), _react2.default.createElement(_row2.default, null, _react2.default.createElement(_input2.default, {
				className: 'chat-input',
				prefix: _react2.default.createElement(_icon2.default, { type: 'message' }),
				placeholder: 'other suggestion?',
				value: _.inputMessage,
				size: 'large',
				onPressEnter: function onPressEnter() {
					return _this.sendMesssage();
				},
				onChange: function onChange(e) {
					return _this.handleInputMessageChnage(e);
				} })));
		}
	});
	exports.default = ChatRoom;

/***/ }

})