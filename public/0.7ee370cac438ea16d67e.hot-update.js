webpackHotUpdate(0,{

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style4 = __webpack_require__(448);

	var _card = __webpack_require__(451);

	var _card2 = _interopRequireDefault(_card);

	var _style5 = __webpack_require__(340);

	var _row = __webpack_require__(343);

	var _row2 = _interopRequireDefault(_row);

	var _style6 = __webpack_require__(353);

	var _col = __webpack_require__(354);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(278);

	var _firebase2 = _interopRequireDefault(_firebase);

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
				edge: this.getEdgeData()
			};
		},
		getEdgeData: function getEdgeData(edgeID) {
			_firebase2.default.database().ref(this.state.courseID + '/_edges/' + edgeID).once('value').then(function (snapshot) {
				return snapshot.val();
			});
		},
		render: function render() {
			console.log(this.state.edge);
			var _ = this.state;
			return _react2.default.createElement(_card2.default, null, _react2.default.createElement('p', { id: 'comfirm-title' }, 'Do you think this is a proper link phrase?'), _react2.default.createElement(_row2.default, { id: 'comfirm-graph' }, _react2.default.createElement(_col2.default, { span: 6, id: 'comfirm-graph-node' }, _.edge.from), _react2.default.createElement(_col2.default, { span: 12, id: 'comfirm-graph-link' }, _.edge.label), _react2.default.createElement(_col2.default, { span: 6, id: 'comfirm-graph-node' }, _.edge.to)));
		}
	});

	exports.default = ComfirmLinkPhrase;

/***/ }

})