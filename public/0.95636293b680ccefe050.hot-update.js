webpackHotUpdate(0,{

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _ComfirmLinkPhrase = __webpack_require__(494);

	var _ComfirmLinkPhrase2 = _interopRequireDefault(_ComfirmLinkPhrase);

	var _firebase = __webpack_require__(278);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(385);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var NoticeBoard = _react2.default.createClass({
		displayName: 'NoticeBoard',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.courseID,
				comfirmLinkPhrase: [],
				members: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.memberFire = _firebase2.default.database().ref(this.state.courseID + '/_network/_members');
			this.memberFire.on('value', this.updateMembers);
			this.linkphraseFire = _firebase2.default.database().ref(this.state.crouseID + '/_notice/_link');
			this.linkphraseFire.on('value', this.updateComfirmLinkPhrase);
		},
		updateMembers: function updateMembers(snapshot) {
			this.setState({ members: snapshot.val() });
			console.log('NoticeBoard: members are');
			console.log(this.state.members);
		},
		updateComfirmLinkPhrase: function updateComfirmLinkPhrase(snapshot) {
			this.setState({ comfirmLinkPhrase: (0, _utils.toArray)(snapshot.val()) });
		},
		addComfirmLinkPhrase: function addComfirmLinkPhrase(linkID, requester) {
			console.log('NoticeBoard: addComfirmLinkPhrase ' + linkID, requester);
			var members = this.state.members;
			var key = this.linkphraseFire.push({
				edge: linkID,
				requester: requester
			}).key;
			var i;
			for (i = 0; i < members.length; i++) {
				console.log(members[i]);
				this.linkphraseFire.child(key).child(members[i].value).update({
					comfirm: false
				});
			}
		},
		render: function render() {
			var _ = this.state;
			return _react2.default.createElement('div', null, _.comfirmLinkPhrase.map(function (el, index) {
				_react2.default.createElement(_ComfirmLinkPhrase2.default, { linkID: el.linkID, requester: el.requester });
			}));
		}
	});

	exports.default = NoticeBoard;

/***/ }

})