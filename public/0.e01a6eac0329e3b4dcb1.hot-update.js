webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(29);

	var _layout = __webpack_require__(36);

	var _layout2 = _interopRequireDefault(_layout);

	var _react = __webpack_require__(121);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(160);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _firebase = __webpack_require__(306);

	var firebase = _interopRequireWildcard(_firebase);

	var _reactRouter = __webpack_require__(312);

	var _conceptExtraction = __webpack_require__(367);

	var _conceptExtraction2 = _interopRequireDefault(_conceptExtraction);

	var _IndexView = __webpack_require__(464);

	var _IndexView2 = _interopRequireDefault(_IndexView);

	var _NotFoundView = __webpack_require__(465);

	var _NotFoundView2 = _interopRequireDefault(_NotFoundView);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Header = _layout2.default.Header,
	    Footer = _layout2.default.Footer,
	    Sider = _layout2.default.Sider,
	    Content = _layout2.default.Content;

	//Initialize firebase

	var config = {
		apiKey: "AIzaSyBo2N9-5K_ez1rqOm5oboQa2DauulGwFHI",
		authDomain: "ccmap-1b218.firebaseapp.com",
		databaseURL: "https://ccmap-1b218.firebaseio.com",
		storageBucket: "ccmap-1b218.appspot.com",
		messagingSenderId: "311008823460"
	};

	firebase.initializeApp(config);

	//UI template
	var T = _react2.default.createClass({
		displayName: 'T',
		render: function render() {
			return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(Header, null, 'Header'), _react2.default.createElement(Content, { style: { padding: '50px 50px' } }, this.props.children), _react2.default.createElement(Footer, null, 'Footer'));
		}
	});

	_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.hashHistory }, _react2.default.createElement(_reactRouter.Route, { path: '/', component: T }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexView2.default }), _react2.default.createElement(_reactRouter.Route, { path: 'conceptExtraction', component: _conceptExtraction2.default }), _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFoundView2.default }))), document.getElementById('container'));

/***/ }
])