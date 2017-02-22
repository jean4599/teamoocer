webpackHotUpdate(0,{

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(605);

	var _anchor = __webpack_require__(608);

	var _anchor2 = _interopRequireDefault(_anchor);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _ConceptExtraction = __webpack_require__(369);

	var _ConceptExtraction2 = _interopRequireDefault(_ConceptExtraction);

	var _ConceptMapping = __webpack_require__(502);

	var _ConceptMapping2 = _interopRequireDefault(_ConceptMapping);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Link = _anchor2.default.Link;

	var Main = _react2.default.createClass({
		displayName: 'Main',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.params.courseID,
				courseURL: this.props.route.courseURL
			};
		},
		render: function render() {
			return _react2.default.createElement('div', null, _react2.default.createElement('div', { id: 'Video-Part', style: { padding: 50, backgroundColor: '#e9e9e9', minHeight: '80%' } }, _react2.default.createElement(_ConceptExtraction2.default, { courseURL: this.state.courseURL, courseID: this.state.courseID })), _react2.default.createElement(_row2.default, { style: { backgroundColor: '#e9e9e9' } }, _react2.default.createElement(Link, { href: '#Discussion-Part' }, _react2.default.createElement('div', { className: 'half-circle-up center' }, 'Go discussion'))), _react2.default.createElement(_row2.default, { className: 'half-circle-down' }, _react2.default.createElement(Link, { href: '#Video-Part' }, _react2.default.createElement('div', { className: 'center' }, 'Go discussion'))), _react2.default.createElement('div', { id: 'Discussion-Part', style: { padding: 50, backgroundColor: 'white', minHeight: '80%' } }, _react2.default.createElement(_ConceptMapping2.default, { courseURL: this.state.courseURL, courseID: this.state.courseID })));
		}
	});
	exports.default = Main;

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(32);

	__webpack_require__(606);

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(607);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(607, function() {
				var newContent = __webpack_require__(607);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports


	// module
	exports.push([module.id, ".ant-anchor {\n  position: relative;\n}\n.ant-anchor-wrapper {\n  background-color: #fff;\n}\n.ant-anchor-ink {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.ant-anchor-ink:before {\n  content: ' ';\n  position: relative;\n  width: 2px;\n  height: 100%;\n  display: block;\n  background-color: #e9e9e9;\n  margin: 0 auto;\n}\n.ant-anchor-ink-ball {\n  display: none;\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  border-radius: 9px;\n  border: 3px solid #108ee9;\n  background-color: #fff;\n  left: 50%;\n  transition: top 0.3s ease-in-out;\n  transform: translateX(-50%);\n}\n.ant-anchor-ink-ball.visible {\n  display: inline-block;\n}\n.ant-anchor.fixed .ant-anchor-ink .ant-anchor-ink-ball {\n  display: none;\n}\n.ant-anchor-link {\n  padding: 8px 0 8px 18px;\n  line-height: 1;\n}\n.ant-anchor-link .ant-anchor-link {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.ant-anchor-link-title {\n  display: block;\n  position: relative;\n  transition: all .3s;\n  color: rgba(0, 0, 0, 0.65);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 8px;\n}\n.ant-anchor-link-title:only-child {\n  margin-bottom: 0;\n}\n.ant-anchor-link-active > .ant-anchor-link-title {\n  color: #108ee9;\n}\n.ant-anchor-link > .ant-anchor-link {\n  font-size: 12px;\n}\n", ""]);

	// exports


/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _defineProperty2 = __webpack_require__(156);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(78);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(79);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(115);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(154);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _addEventListener = __webpack_require__(437);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _AnchorLink = __webpack_require__(609);

	var _AnchorLink2 = _interopRequireDefault(_AnchorLink);

	var _affix = __webpack_require__(613);

	var _affix2 = _interopRequireDefault(_affix);

	var _anchorHelper = __webpack_require__(610);

	var _anchorHelper2 = _interopRequireDefault(_anchorHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Anchor = function (_React$Component) {
	    (0, _inherits3["default"])(Anchor, _React$Component);

	    function Anchor(props) {
	        (0, _classCallCheck3["default"])(this, Anchor);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	        _this.handleScroll = function () {
	            _this.setState({
	                activeAnchor: _this.anchorHelper.getCurrentAnchor(_this.props.bounds)
	            });
	        };
	        _this.updateInk = function () {
	            var activeAnchor = _this.anchorHelper.getCurrentActiveAnchor();
	            if (activeAnchor) {
	                _this.refs.ink.style.top = activeAnchor.offsetTop + activeAnchor.clientHeight / 2 - 4.5 + 'px';
	            }
	        };
	        _this.clickAnchorLink = function (href, component) {
	            _this._avoidInk = true;
	            _this.refs.ink.style.top = component.offsetTop + component.clientHeight / 2 - 4.5 + 'px';
	            _this.anchorHelper.scrollTo(href, _anchorHelper.getDefaultTarget, function () {
	                _this._avoidInk = false;
	            });
	        };
	        _this.renderAnchorLink = function (child) {
	            var href = child.props.href;

	            if (href) {
	                _this.anchorHelper.addLink(href);
	                return _react2["default"].cloneElement(child, {
	                    onClick: _this.clickAnchorLink,
	                    prefixCls: _this.props.prefixCls,
	                    bounds: _this.props.bounds,
	                    affix: _this.props.affix
	                });
	            }
	            return child;
	        };
	        _this.state = {
	            activeAnchor: null,
	            animated: true
	        };
	        _this.anchorHelper = new _anchorHelper2["default"]();
	        return _this;
	    }

	    Anchor.prototype.getChildContext = function getChildContext() {
	        return {
	            anchorHelper: this.anchorHelper
	        };
	    };

	    Anchor.prototype.componentDidMount = function componentDidMount() {
	        this.handleScroll();
	        this.updateInk();
	        this.scrollEvent = (0, _addEventListener2["default"])((this.props.target || _anchorHelper.getDefaultTarget)(), 'scroll', this.handleScroll);
	    };

	    Anchor.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.scrollEvent) {
	            this.scrollEvent.remove();
	        }
	    };

	    Anchor.prototype.componentDidUpdate = function componentDidUpdate() {
	        if (!this._avoidInk) {
	            this.updateInk();
	        }
	    };

	    Anchor.prototype.render = function render() {
	        var _classNames;

	        var _props = this.props,
	            prefixCls = _props.prefixCls,
	            offsetTop = _props.offsetTop,
	            style = _props.style,
	            _props$className = _props.className,
	            className = _props$className === undefined ? '' : _props$className,
	            affix = _props.affix;
	        var _state = this.state,
	            activeAnchor = _state.activeAnchor,
	            animated = _state.animated;

	        var inkClass = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-ink-ball', true), (0, _defineProperty3["default"])(_classNames, 'animated', animated), (0, _defineProperty3["default"])(_classNames, 'visible', !!activeAnchor), _classNames));
	        var wrapperClass = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, prefixCls + '-wrapper', true), className);
	        var anchorClass = (0, _classnames2["default"])(prefixCls, {
	            'fixed': !affix
	        });
	        var anchorContent = _react2["default"].createElement(
	            'div',
	            { className: wrapperClass, style: style },
	            _react2["default"].createElement(
	                'div',
	                { className: anchorClass },
	                _react2["default"].createElement(
	                    'div',
	                    { className: prefixCls + '-ink' },
	                    _react2["default"].createElement('span', { className: inkClass, ref: 'ink' })
	                ),
	                _react2["default"].Children.map(this.props.children, this.renderAnchorLink)
	            )
	        );
	        return !affix ? anchorContent : _react2["default"].createElement(
	            _affix2["default"],
	            { offsetTop: offsetTop },
	            anchorContent
	        );
	    };

	    return Anchor;
	}(_react2["default"].Component);

	exports["default"] = Anchor;

	Anchor.Link = _AnchorLink2["default"];
	Anchor.defaultProps = {
	    prefixCls: 'ant-anchor',
	    affix: true
	};
	Anchor.childContextTypes = {
	    anchorHelper: _react2["default"].PropTypes.any
	};
	module.exports = exports['default'];

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _defineProperty2 = __webpack_require__(156);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(78);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(79);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(115);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(154);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _anchorHelper = __webpack_require__(610);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var AnchorLink = function (_React$Component) {
	    (0, _inherits3["default"])(AnchorLink, _React$Component);

	    function AnchorLink() {
	        (0, _classCallCheck3["default"])(this, AnchorLink);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

	        _this.renderAnchorLink = function (child) {
	            var href = child.props.href;

	            if (href) {
	                _this.context.anchorHelper.addLink(href);
	                return _react2["default"].cloneElement(child, {
	                    onClick: _this.props.onClick,
	                    prefixCls: _this.props.prefixCls,
	                    affix: _this.props.affix
	                });
	            }
	            return child;
	        };
	        _this.refsTo = function (component) {
	            _this._component = component;
	        };
	        _this.scrollTo = function (e) {
	            e.preventDefault();
	            var _this$props = _this.props,
	                onClick = _this$props.onClick,
	                href = _this$props.href;
	            var anchorHelper = _this.context.anchorHelper;

	            if (onClick) {
	                onClick(href, _this._component);
	            } else {
	                e.stopPreventDefault();
	                var scrollToFn = anchorHelper ? anchorHelper.scrollTo : _anchorHelper.scrollTo;
	                scrollToFn(href);
	            }
	        };
	        return _this;
	    }

	    AnchorLink.prototype.setActiveAnchor = function setActiveAnchor() {
	        var _props = this.props,
	            bounds = _props.bounds,
	            href = _props.href,
	            affix = _props.affix;
	        var anchorHelper = this.context.anchorHelper;

	        var active = affix && anchorHelper && anchorHelper.getCurrentAnchor(bounds) === href;
	        if (active && anchorHelper) {
	            anchorHelper.setActiveAnchor(this._component);
	        }
	    };

	    AnchorLink.prototype.componentDidMount = function componentDidMount() {
	        this.setActiveAnchor();
	    };

	    AnchorLink.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.setActiveAnchor();
	    };

	    AnchorLink.prototype.render = function render() {
	        var _classNames;

	        var _props2 = this.props,
	            prefixCls = _props2.prefixCls,
	            href = _props2.href,
	            children = _props2.children,
	            title = _props2.title,
	            bounds = _props2.bounds,
	            affix = _props2.affix;
	        var anchorHelper = this.context.anchorHelper;

	        var active = affix && anchorHelper && anchorHelper.getCurrentAnchor(bounds) === href;
	        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-link', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-link-active', active), _classNames));
	        return _react2["default"].createElement(
	            'div',
	            { className: cls },
	            _react2["default"].createElement(
	                'a',
	                { ref: this.refsTo, className: prefixCls + '-link-title', onClick: this.scrollTo, href: href, title: typeof title === 'string' ? title : '' },
	                title
	            ),
	            _react2["default"].Children.map(children, this.renderAnchorLink)
	        );
	    };

	    return AnchorLink;
	}(_react2["default"].Component);

	exports["default"] = AnchorLink;

	AnchorLink.contextTypes = {
	    anchorHelper: _react2["default"].PropTypes.any
	};
	AnchorLink.defaultProps = {
	    href: '#',
	    prefixCls: 'ant-anchor'
	};
	module.exports = exports['default'];

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.scrollTo = exports.easeInOutCubic = exports.reqAnimFrame = undefined;

	var _classCallCheck2 = __webpack_require__(78);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	exports.getDefaultTarget = getDefaultTarget;
	exports.getOffsetTop = getOffsetTop;

	var _getScroll = __webpack_require__(611);

	var _getScroll2 = _interopRequireDefault(_getScroll);

	var _getRequestAnimationFrame = __webpack_require__(612);

	var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var reqAnimFrame = exports.reqAnimFrame = (0, _getRequestAnimationFrame2["default"])();
	var easeInOutCubic = exports.easeInOutCubic = function easeInOutCubic(t, b, c, d) {
	    var cc = c - b;
	    t /= d / 2;
	    if (t < 1) {
	        return cc / 2 * t * t * t + b;
	    }
	    return cc / 2 * ((t -= 2) * t * t + 2) + b;
	};
	function getDefaultTarget() {
	    return typeof window !== 'undefined' ? window : null;
	}
	function getOffsetTop(element) {
	    if (!element) {
	        return 0;
	    }
	    if (!element.getClientRects().length) {
	        return 0;
	    }
	    var rect = element.getBoundingClientRect();
	    if (rect.width || rect.height) {
	        var doc = element.ownerDocument;
	        var docElem = doc.documentElement;
	        return rect.top - docElem.clientTop;
	    }
	    return rect.top;
	}
	function _scrollTo(href) {
	    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDefaultTarget;
	    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	    var scrollTop = (0, _getScroll2["default"])(target(), true);
	    var targetElement = document.getElementById(href.substring(1));
	    if (!targetElement) {
	        return;
	    }
	    var offsetTop = getOffsetTop(targetElement);
	    var targetScrollTop = scrollTop + offsetTop;
	    var startTime = Date.now();
	    var frameFunc = function frameFunc() {
	        var timestamp = Date.now();
	        var time = timestamp - startTime;
	        window.scrollTo(window.pageXOffset, easeInOutCubic(time, scrollTop, targetScrollTop, 450));
	        if (time < 450) {
	            reqAnimFrame(frameFunc);
	        } else {
	            callback();
	        }
	    };
	    reqAnimFrame(frameFunc);
	    history.pushState(null, '', href);
	}
	exports.scrollTo = _scrollTo;

	var AnchorHelper = function () {
	    function AnchorHelper() {
	        (0, _classCallCheck3["default"])(this, AnchorHelper);

	        this.links = [];
	        this.currentAnchor = null;
	        this._activeAnchor = '';
	    }

	    AnchorHelper.prototype.addLink = function addLink(link) {
	        if (this.links.indexOf(link) === -1) {
	            this.links.push(link);
	        }
	    };

	    AnchorHelper.prototype.getCurrentActiveAnchor = function getCurrentActiveAnchor() {
	        return this.currentAnchor;
	    };

	    AnchorHelper.prototype.setActiveAnchor = function setActiveAnchor(component) {
	        this.currentAnchor = component;
	    };

	    AnchorHelper.prototype.getCurrentAnchor = function getCurrentAnchor() {
	        var bounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

	        var activeAnchor = '';
	        if (typeof document === 'undefined') {
	            return activeAnchor;
	        }
	        var linksPositions = this.links.map(function (section) {
	            var target = document.getElementById(section.substring(1));
	            if (target && getOffsetTop(target) < bounds) {
	                var top = getOffsetTop(target);
	                if (top <= bounds) {
	                    return {
	                        section: section,
	                        top: top,
	                        bottom: top + target.clientHeight
	                    };
	                }
	            }
	            return null;
	        }).filter(function (section) {
	            return section !== null;
	        });
	        if (linksPositions.length) {
	            var maxSection = linksPositions.reduce(function (prev, curr) {
	                return curr.top > prev.top ? curr : prev;
	            });
	            return maxSection.section;
	        }
	        return '';
	    };

	    AnchorHelper.prototype.scrollTo = function scrollTo(href) {
	        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getDefaultTarget;
	        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	        _scrollTo(href, target, callback);
	    };

	    return AnchorHelper;
	}();

	exports["default"] = AnchorHelper;

/***/ },

/***/ 611:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getScroll;
	function getScroll(target, top) {
	    if (typeof window === 'undefined') {
	        return 0;
	    }
	    var prop = top ? 'pageYOffset' : 'pageXOffset';
	    var method = top ? 'scrollTop' : 'scrollLeft';
	    var isWindow = target === window;
	    var ret = isWindow ? target[prop] : target[method];
	    // ie6,7,8 standard mode
	    if (isWindow && typeof ret !== 'number') {
	        ret = window.document.documentElement[method];
	    }
	    return ret;
	}
	module.exports = exports['default'];

/***/ },

/***/ 612:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getRequestAnimationFrame;
	function getRequestAnimationFrame() {
	    if (typeof window === 'undefined') {
	        return function () {};
	    }
	    if (window.requestAnimationFrame) {
	        return window.requestAnimationFrame;
	    }
	    var prefix = ['moz', 'ms', 'webkit'].filter(function (key) {
	        return key + 'RequestAnimationFrame' in window;
	    })[0];
	    return prefix ? window[prefix + 'RequestAnimationFrame'] : function (callback) {
	        return setTimeout(callback, 1000 / 60);
	    };
	}
	module.exports = exports['default'];

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(40);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(156);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _classCallCheck2 = __webpack_require__(78);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(79);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(115);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(162);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _addEventListener = __webpack_require__(437);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _classnames = __webpack_require__(154);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _shallowequal = __webpack_require__(594);

	var _shallowequal2 = _interopRequireDefault(_shallowequal);

	var _omit = __webpack_require__(160);

	var _omit2 = _interopRequireDefault(_omit);

	var _getScroll = __webpack_require__(611);

	var _getScroll2 = _interopRequireDefault(_getScroll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getTargetRect(target) {
	    return target !== window ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
	}
	function getOffset(element, target) {
	    var elemRect = element.getBoundingClientRect();
	    var targetRect = getTargetRect(target);
	    var scrollTop = (0, _getScroll2["default"])(target, true);
	    var scrollLeft = (0, _getScroll2["default"])(target, false);
	    var docElem = window.document.body;
	    var clientTop = docElem.clientTop || 0;
	    var clientLeft = docElem.clientLeft || 0;
	    return {
	        top: elemRect.top - targetRect.top + scrollTop - clientTop,
	        left: elemRect.left - targetRect.left + scrollLeft - clientLeft
	    };
	}
	function noop() {}
	function getDefaultTarget() {
	    return typeof window !== 'undefined' ? window : null;
	}
	;

	var Affix = function (_React$Component) {
	    (0, _inherits3["default"])(Affix, _React$Component);

	    function Affix(props) {
	        (0, _classCallCheck3["default"])(this, Affix);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	        _this.updatePosition = function (e) {
	            var _this$props = _this.props,
	                offsetTop = _this$props.offsetTop,
	                offsetBottom = _this$props.offsetBottom,
	                offset = _this$props.offset,
	                _this$props$target = _this$props.target,
	                target = _this$props$target === undefined ? getDefaultTarget : _this$props$target;

	            var targetNode = target();
	            // Backwards support
	            offsetTop = offsetTop || offset;
	            var scrollTop = (0, _getScroll2["default"])(targetNode, true);
	            var affixNode = _reactDom2["default"].findDOMNode(_this);
	            var elemOffset = getOffset(affixNode, targetNode);
	            var elemSize = {
	                width: _this.refs.fixedNode.offsetWidth,
	                height: _this.refs.fixedNode.offsetHeight
	            };
	            var offsetMode = {
	                top: false,
	                bottom: false
	            };
	            // Default to `offsetTop=0`.
	            if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
	                offsetMode.top = true;
	                offsetTop = 0;
	            } else {
	                offsetMode.top = typeof offsetTop === 'number';
	                offsetMode.bottom = typeof offsetBottom === 'number';
	            }
	            var targetRect = getTargetRect(targetNode);
	            var targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
	            if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
	                // Fixed Top
	                _this.setAffixStyle(e, {
	                    position: 'fixed',
	                    top: targetRect.top + offsetTop,
	                    left: targetRect.left + elemOffset.left,
	                    width: affixNode.offsetWidth
	                });
	                _this.setPlaceholderStyle(e, {
	                    width: affixNode.offsetWidth,
	                    height: affixNode.offsetHeight
	                });
	            } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
	                // Fixed Bottom
	                var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
	                _this.setAffixStyle(e, {
	                    position: 'fixed',
	                    bottom: targetBottomOffet + offsetBottom,
	                    left: targetRect.left + elemOffset.left,
	                    width: affixNode.offsetWidth
	                });
	                _this.setPlaceholderStyle(e, {
	                    width: affixNode.offsetWidth,
	                    height: affixNode.offsetHeight
	                });
	            } else {
	                _this.setAffixStyle(e, null);
	                _this.setPlaceholderStyle(e, null);
	            }
	        };
	        _this.state = {
	            affixStyle: null,
	            placeholderStyle: null
	        };
	        return _this;
	    }

	    Affix.prototype.setAffixStyle = function setAffixStyle(e, affixStyle) {
	        var _this2 = this;

	        var _props = this.props,
	            _props$onChange = _props.onChange,
	            onChange = _props$onChange === undefined ? noop : _props$onChange,
	            _props$target = _props.target,
	            target = _props$target === undefined ? getDefaultTarget : _props$target;

	        var originalAffixStyle = this.state.affixStyle;
	        var isWindow = target() === window;
	        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
	            return;
	        }
	        if ((0, _shallowequal2["default"])(affixStyle, originalAffixStyle)) {
	            return;
	        }
	        this.setState({ affixStyle: affixStyle }, function () {
	            var affixed = !!_this2.state.affixStyle;
	            if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
	                onChange(affixed);
	            }
	        });
	    };

	    Affix.prototype.setPlaceholderStyle = function setPlaceholderStyle(e, placeholderStyle) {
	        var originalPlaceholderStyle = this.state.placeholderStyle;
	        if (e.type === 'resize') {
	            return;
	        }
	        if ((0, _shallowequal2["default"])(placeholderStyle, originalPlaceholderStyle)) {
	            return;
	        }
	        this.setState({ placeholderStyle: placeholderStyle });
	    };

	    Affix.prototype.componentDidMount = function componentDidMount() {
	        var _this3 = this;

	        var target = this.props.target || getDefaultTarget;
	        // Wait for parent component ref has its value
	        this.timeout = setTimeout(function () {
	            _this3.setTargetEventListeners(target);
	        });
	    };

	    Affix.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.props.target !== nextProps.target) {
	            this.clearScrollEventListeners();
	            this.setTargetEventListeners(nextProps.target);
	            // Mock Event object.
	            this.updatePosition({});
	        }
	    };

	    Affix.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.clearScrollEventListeners();
	        clearTimeout(this.timeout);
	    };

	    Affix.prototype.setTargetEventListeners = function setTargetEventListeners(getTarget) {
	        var target = getTarget();
	        if (!target) {
	            return;
	        }
	        this.scrollEvent = (0, _addEventListener2["default"])(target, 'scroll', this.updatePosition);
	        this.resizeEvent = (0, _addEventListener2["default"])(target, 'resize', this.updatePosition);
	    };

	    Affix.prototype.clearScrollEventListeners = function clearScrollEventListeners() {
	        var _this4 = this;

	        ['scrollEvent', 'resizeEvent'].forEach(function (name) {
	            if (_this4[name]) {
	                _this4[name].remove();
	            }
	        });
	    };

	    Affix.prototype.render = function render() {
	        var className = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, this.props.prefixCls || 'ant-affix', this.state.affixStyle));
	        var props = (0, _omit2["default"])(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target']);
	        return _react2["default"].createElement(
	            'div',
	            (0, _extends3["default"])({}, props, { style: this.state.placeholderStyle }),
	            _react2["default"].createElement(
	                'div',
	                { className: className, ref: 'fixedNode', style: this.state.affixStyle },
	                this.props.children
	            )
	        );
	    };

	    return Affix;
	}(_react2["default"].Component);

	exports["default"] = Affix;

	Affix.propTypes = {
	    offsetTop: _react2["default"].PropTypes.number,
	    offsetBottom: _react2["default"].PropTypes.number,
	    target: _react2["default"].PropTypes.func
	};
	module.exports = exports['default'];

/***/ }

})