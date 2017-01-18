webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style2 = __webpack_require__(1);

	var _layout = __webpack_require__(8);

	var _layout2 = _interopRequireDefault(_layout);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(132);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _firebase = __webpack_require__(278);

	var firebase = _interopRequireWildcard(_firebase);

	var _reactRouter = __webpack_require__(284);

	var _ConceptExtraction = __webpack_require__(339);

	var _ConceptExtraction2 = _interopRequireDefault(_ConceptExtraction);

	var _ConceptAggregation = __webpack_require__(387);

	var _ConceptAggregation2 = _interopRequireDefault(_ConceptAggregation);

	var _ConceptMapping = __webpack_require__(458);

	var _ConceptMapping2 = _interopRequireDefault(_ConceptMapping);

	var _IndexView = __webpack_require__(460);

	var _IndexView2 = _interopRequireDefault(_IndexView);

	var _NotFoundView = __webpack_require__(461);

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
	var courseURL = "https://www.youtube.com/watch?v=p4XTMvagQ2Q";
	var courseID = "p4XTMvagQ2Q";

	_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory }, _react2.default.createElement(_reactRouter.Route, { patch: '/', component: T }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexView2.default }), _react2.default.createElement(_reactRouter.Route, { courseURL: courseURL, courseID: courseID, path: 'conceptExtraction', component: _ConceptExtraction2.default }), _react2.default.createElement(_reactRouter.Route, { courseURL: courseURL, courseID: courseID, path: 'conceptAggregation', component: _ConceptAggregation2.default }), _react2.default.createElement(_reactRouter.Route, { courseURL: courseURL, courseID: courseID, path: 'conceptMapping', component: _ConceptMapping2.default }), _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFoundView2.default }))), document.getElementById('container'));

/***/ }
])