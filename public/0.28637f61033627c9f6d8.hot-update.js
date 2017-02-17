webpackHotUpdate(0,{

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _ComfirmLinkPhrase = __webpack_require__(548);

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
				comfirmLinkPhrase: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.linkphraseFire = _firebase2.default.database().ref(this.state.crouseID + '_notice/_link');
			this.linkphraseFire.on('value', this.updateComfirmLinkPhrase);
		},
		updateComfirmLinkPhrase: function updateComfirmLinkPhrase(snapshot) {
			this.setState({ comfirmLinkPhrase: (0, _utils.toArray)(snapshot.val()) });
		},
		addComfirmLinkPhrase: function addComfirmLinkPhrase(linkID, requester) {
			console.log('NoticeBoard: addComfirmLinkPhrase ' + linkID, requester);
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