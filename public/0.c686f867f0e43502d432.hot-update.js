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
			var _this = this;

			var _ = this.state;
			console.log(_.comfirmLinkPhrase);
			var linkPhraseComfirms = _.comfirmLinkPhrase.map(function (el, index) {
				return _react2.default.createElement(_ComfirmLinkPhrase2.default, {
					key: el.edge,
					linkID: el.edge,
					members: _.members,
					courseID: _.courseID,
					user: _.user,
					removeLinkPhraseComfirm: _this.removeLinkPhraseComfirm });
			});
			return _react2.default.createElement('div', null, linkPhraseComfirms);
		}
	});

	exports.default = NoticeBoard;

/***/ }

})