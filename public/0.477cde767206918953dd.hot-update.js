webpackHotUpdate(0,{

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style2 = __webpack_require__(448);

	var _card = __webpack_require__(451);

	var _card2 = _interopRequireDefault(_card);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ComfirmLinkPhrase = _react2.default.createClass({
		displayName: 'ComfirmLinkPhrase',

		getInitialState: function getInitialState() {
			return {
				data: this.props.data,
				user: this.props.user,
				members: this.props.members
			};
		},
		render: function render() {
			var _ = this.state;
			return _react2.default.createElement(_card2.default, null, _react2.default.createElement('p', { id: 'comfirm-title' }, 'Do you think this is a proper link phrase?'), _react2.default.createElement(Row, { id: 'comfirm-graph' }, _react2.default.createElement(Col, { span: 6, id: 'comfirm-graph-node' }, _.data.from), _react2.default.createElement(Col, { span: 12, id: 'comfirm-graph-link' }, _.data.label), _react2.default.createElement(Col, { span: 6, id: 'comfirm-graph-node' }, _.data.to)));
		}
	});

	exports.default = ComfirmLinkPhrase;

/***/ }

})