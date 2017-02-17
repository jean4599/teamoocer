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

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var NoticeBoard = _react2.default.createClass({
	  displayName: 'NoticeBoard',

	  getInitialState: function getInitialState() {
	    return {
	      comfirmLinkPhrase: []
	    };
	  },
	  addComfirmLinkPhrase: function addComfirmLinkPhrase(linkID, requester) {
	    comfirmLinkPhrase.push({ linkID: linkID, requester: requester });
	  },
	  render: function render() {
	    var _ = this.state;
	    return _react2.default.createElement('div', null, _.comfirmLinkPhrase.map(function (el, index) {
	      _react2.default.createElement(_ComfirmLinkPhrase2.default, { linkID: el.linkID, requester: el.requester });
	    }));
	  }
	});

	exports.default = NoticeBoard;

/***/ },

/***/ 548:
/***/ function(module, exports) {

	"use strict";

/***/ }

})