webpackHotUpdate(0,{

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(384);

	var _input = __webpack_require__(387);

	var _input2 = _interopRequireDefault(_input);

	var _style4 = __webpack_require__(397);

	var _timeline = __webpack_require__(400);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(205);

	var firebase = _interopRequireWildcard(_firebase);

	var _utils = __webpack_require__(396);

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

	var InputConcept = _react2.default.createClass({
		displayName: 'InputConcept',
		getInitialState: function getInitialState() {
			return {
				concepts: [],
				courseId: 1
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = firebase.database().ref(this.state.courseId + "/_concepts");
			this.fire.on('value', this.updateConcepts);
		},
		updateConcepts: function updateConcepts(snapshot) {
			var conceptsArray = (0, _utils.toArray)(snapshot.val());
			this.setState({
				concepts: conceptsArray
			});
			console.log(this.state.concepts);
		},
		render: function render() {
			return _react2.default.createElement('div', null, _react2.default.createElement(_timeline2.default, null, ' ', this.state.concepts.map(function (concept, index) {
				return _react2.default.createElement(_timeline2.default.Item, null, ' ', concept.word, ' ');
			})), _react2.default.createElement(_input2.default, { placeholder: 'Basic usage' }));
		}
	});
	exports.default = InputConcept;

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(268);

	__webpack_require__(398);

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(399);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(271)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(399, function() {
				var newContent = __webpack_require__(399);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(270)();
	// imports


	// module
	exports.push([module.id, ".ant-timeline {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.ant-timeline-item {\n  position: relative;\n  padding: 0 0 12px 0;\n  list-style: none;\n  margin: 0;\n}\n.ant-timeline-item-tail {\n  position: absolute;\n  left: 5px;\n  top: 0;\n  height: 100%;\n  border-left: 2px solid #e9e9e9;\n}\n.ant-timeline-item-pending .ant-timeline-item-tail {\n  display: none;\n}\n.ant-timeline-item-head {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n  border-radius: 100px;\n  border: 2px solid transparent;\n}\n.ant-timeline-item-head-blue {\n  border-color: #108ee9;\n  color: #108ee9;\n}\n.ant-timeline-item-head-red {\n  border-color: #F04134;\n  color: #F04134;\n}\n.ant-timeline-item-head-green {\n  border-color: #00A854;\n  color: #00A854;\n}\n.ant-timeline-item-head-custom {\n  position: absolute;\n  text-align: center;\n  width: 40px;\n  left: -14px;\n  line-height: 1;\n  margin-top: 6px;\n  border: 0;\n  height: auto;\n  border-radius: 0;\n  padding: 3px 0;\n  font-size: 12px;\n  transform: translateY(-50%);\n}\n.ant-timeline-item-content {\n  padding: 0 0 10px 24px;\n  font-size: 12px;\n  position: relative;\n  top: -3px;\n}\n.ant-timeline-item-last .ant-timeline-item-tail {\n  border-left: 2px dotted #e9e9e9;\n  display: none;\n}\n.ant-timeline-item-last .ant-timeline-item-content {\n  min-height: 48px;\n}\n.ant-timeline.ant-timeline-pending .ant-timeline-item-last .ant-timeline-item-tail {\n  display: block;\n}\n", ""]);

	// exports


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Timeline = __webpack_require__(401);

	var _Timeline2 = _interopRequireDefault(_Timeline);

	var _TimelineItem = __webpack_require__(402);

	var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_Timeline2["default"].Item = _TimelineItem2["default"];
	exports["default"] = _Timeline2["default"];
	module.exports = exports['default'];

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(277);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(315);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(319);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(320);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(356);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(364);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _TimelineItem = __webpack_require__(402);

	var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};

	var Timeline = function (_React$Component) {
	    (0, _inherits3["default"])(Timeline, _React$Component);

	    function Timeline() {
	        (0, _classCallCheck3["default"])(this, Timeline);
	        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
	    }

	    Timeline.prototype.render = function render() {
	        var _a = this.props,
	            prefixCls = _a.prefixCls,
	            children = _a.children,
	            pending = _a.pending,
	            className = _a.className,
	            restProps = __rest(_a, ["prefixCls", "children", "pending", "className"]);
	        var pendingNode = typeof pending === 'boolean' ? null : pending;
	        var classString = (0, _classnames2["default"])(prefixCls, (0, _defineProperty3["default"])({}, prefixCls + '-pending', !!pending), className);
	        var items = _react2["default"].Children.map(children, function (ele, idx) {
	            return _react2["default"].cloneElement(ele, {
	                last: idx === children.length - 1
	            });
	        });
	        var pendingItem = !!pending ? _react2["default"].createElement(
	            _TimelineItem2["default"],
	            { pending: !!pending },
	            pendingNode
	        ) : null;
	        return _react2["default"].createElement(
	            'ul',
	            (0, _extends3["default"])({}, restProps, { className: classString }),
	            items,
	            pendingItem
	        );
	    };

	    return Timeline;
	}(_react2["default"].Component);

	exports["default"] = Timeline;

	Timeline.defaultProps = {
	    prefixCls: 'ant-timeline'
	};
	module.exports = exports['default'];

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(277);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(315);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(319);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(320);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(356);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(364);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};

	var TimelineItem = function (_React$Component) {
	    (0, _inherits3["default"])(TimelineItem, _React$Component);

	    function TimelineItem() {
	        (0, _classCallCheck3["default"])(this, TimelineItem);
	        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
	    }

	    TimelineItem.prototype.render = function render() {
	        var _classNames, _classNames2;

	        var _a = this.props,
	            prefixCls = _a.prefixCls,
	            className = _a.className,
	            _a$color = _a.color,
	            color = _a$color === undefined ? '' : _a$color,
	            last = _a.last,
	            children = _a.children,
	            pending = _a.pending,
	            dot = _a.dot,
	            restProps = __rest(_a, ["prefixCls", "className", "color", "last", "children", "pending", "dot"]);
	        var itemClassName = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item-last', last), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item-pending', pending), _classNames), className);
	        var dotClassName = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-item-head', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-item-head-custom', dot), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-item-head-' + color, true), _classNames2));
	        return _react2["default"].createElement(
	            'li',
	            (0, _extends3["default"])({}, restProps, { className: itemClassName }),
	            _react2["default"].createElement('div', { className: prefixCls + '-item-tail' }),
	            _react2["default"].createElement(
	                'div',
	                { className: dotClassName, style: { borderColor: /blue|red|green/.test(color) ? null : color } },
	                dot
	            ),
	            _react2["default"].createElement(
	                'div',
	                { className: prefixCls + '-item-content' },
	                children
	            )
	        );
	    };

	    return TimelineItem;
	}(_react2["default"].Component);

	exports["default"] = TimelineItem;

	TimelineItem.defaultProps = {
	    prefixCls: 'ant-timeline',
	    color: 'blue',
	    last: false,
	    pending: false
	};
	module.exports = exports['default'];

/***/ }

})