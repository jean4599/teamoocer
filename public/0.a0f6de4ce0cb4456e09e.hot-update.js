webpackHotUpdate(0,{

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style6 = __webpack_require__(340);

	var _row = __webpack_require__(343);

	var _row2 = _interopRequireDefault(_row);

	var _style7 = __webpack_require__(490);

	var _dropdown = __webpack_require__(493);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style8 = __webpack_require__(371);

	var _input = __webpack_require__(374);

	var _input2 = _interopRequireDefault(_input);

	var _style9 = __webpack_require__(347);

	var _col = __webpack_require__(348);

	var _col2 = _interopRequireDefault(_col);

	var _style10 = __webpack_require__(365);

	var _button = __webpack_require__(368);

	var _button2 = _interopRequireDefault(_button);

	var _vis = __webpack_require__(459);

	var _vis2 = _interopRequireDefault(_vis);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(278);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(385);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var options = {
		layout: {
			hierarchical: {
				direction: "UD"
			}
		},
		nodes: {
			chosen: false
		},
		edges: {
			arrows: {
				to: { enabled: true, scaleFactor: 1, type: 'arrow' },
				middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
				from: { enabled: false, scaleFactor: 1, type: 'arrow' }
			}
		}
	};
	var nodes = {};
	var edges = {};
	var menu = _react2.default.createElement(Menu, { onClick: handleMenuClick }, _react2.default.createElement(Menu.Item, { key: '1' }, '1st menu item'), _react2.default.createElement(Menu.Item, { key: '2' }, '2nd menu item'), _react2.default.createElement(Menu.Item, { key: '3' }, '3d menu item'));
	var ConceptMapping = _react2.default.createClass({
		displayName: 'ConceptMapping',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.route.courseID,
				courseURL: this.props.route.courseURL,
				data: {},
				mode: 'nomal',
				concepts: {},
				EdgeInputDisabled1: true,
				EdgeInputDisabled2: true,
				EdgeSubmitDisabled: true
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/_concepts');
			this.fire.on('value', this.updateConcept);
		},
		updateConcept: function updateConcept(snapshot) {
			var _this = this;

			nodes = (0, _utils.retrieveData)(snapshot.val(), 'id', 'label', 'level', 'id', 'word', 'level');
			console.log(nodes);
			nodes = new _vis2.default.DataSet(nodes);

			edges = new _vis2.default.DataSet([{ from: 1, to: 3 }, { from: 1, to: 2 }, { from: 2, to: 4 }]);
			var data = {
				nodes: nodes,
				edges: edges
			};
			var network = new _vis2.default.Network(this.container, data, options);
			network.on("selectNode", function (params) {
				var _ = _this.state;
				var word = _.concepts[params['nodes'][0]]['word'];

				switch (_.mode) {
					case "Nomal":
						options.nodes.chosen = false;
						break;
					case "AddEdge_SelectFirstNode":
						options.nodes.chosen = true;
						_this.setState({
							edgeInputValue1: word,
							firstNode: params,
							mode: "AddEdge_SelectSecondNode",
							EdgeInputDisabled2: false
						});
						_this.SecondNode.focus();
						break;
					case "AddEdge_SelectSecondNode":
						options.nodes.chosen = true;
						_this.setState({
							edgeInputValue2: word,
							secondNode: params,
							EdgeSubmitDisabled: false
						});
				}
			});
			network.on("hoverNode", function (params) {
				console.log('hoverNode Event:', params);
			});
			this.setState({
				concepts: snapshot.val(),
				data: data,
				network: network
			});
		},
		addEdge: function addEdge(when) {
			if (when == 'start') {
				this.setState({
					mode: "AddEdge_SelectFirstNode",
					EdgeInputDisabled1: false,
					EdgeInputDisabled2: false
				});
				this.FirstNode.focus();
			} else if (when == 'finish') {
				console.log('finish');
				console.log(this.state.firstNode);
				try {
					edges.add({
						id: Math.floor(Math.random() * 100 + 1),
						from: this.state.firstNode.nodes[0],
						to: this.state.secondNode.nodes[0]
					});
				} catch (err) {
					alert(err);
				}
				this.setState({
					EdgeInputDisabled1: true,
					EdgeInputDisabled2: true,
					EdgeSubmitDisabled: true,
					edgeInputValue1: '',
					edgeInputValue2: '',
					mode: "Nomal"
				});
			}
		},

		render: function render() {
			var _this2 = this;

			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 2 }, _react2.default.createElement(_button2.default, { onClick: function onClick() {
					return _this2.addEdge('start');
				} }, 'Add Edge')), _react2.default.createElement(_col2.default, { span: 6 }, _react2.default.createElement(_input2.default, { ref: function ref(input) {
					_this2.FirstNode = input;
				}, addonBefore: 'From', disabled: _.EdgeInputDisabled1, placeholder: "click the starting node", value: _.edgeInputValue1 })), _react2.default.createElement(_col2.default, { span: 2 }, _react2.default.createElement(_dropdown2.default, { overlay: menu }, _react2.default.createElement(_button2.default, { style: { marginLeft: 3, marginRight: 3 } }, 'Button ', _react2.default.createElement(Icon, { type: 'down' })))), _react2.default.createElement(_col2.default, { span: 6 }, _react2.default.createElement(_input2.default, { ref: function ref(input) {
					_this2.SecondNode = input;
				}, addonBefore: 'To', disabled: _.EdgeInputDisabled2, placeholder: "click the ending node", value: _.edgeInputValue2 })), _react2.default.createElement(_col2.default, { span: 6 }, _react2.default.createElement(_input2.default, { addonBefore: 'relation', placeholder: "the derected relation between two nodes ex: " })), _react2.default.createElement(_col2.default, { span: 2 }, _react2.default.createElement(_button2.default, { onClick: function onClick() {
					return _this2.addEdge('finish');
				}, htmlType: 'submit', disabled: _.EdgeSubmitDisabled }, 'Finish'))), _react2.default.createElement('div', { ref: function ref(container) {
					_this2.container = container;
				} }));
		}

	});
	exports.default = ConceptMapping;

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(491);

	__webpack_require__(365);

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(492);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(492, function() {
				var newContent = __webpack_require__(492);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".ant-dropdown {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 1050;\n  display: block;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1.5;\n}\n.ant-dropdown-wrap {\n  position: relative;\n}\n.ant-dropdown-wrap .ant-btn > .anticon-down {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  transform: scale(0.83333333) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n}\n:root .ant-dropdown-wrap .ant-btn > .anticon-down {\n  filter: none;\n}\n:root .ant-dropdown-wrap .ant-btn > .anticon-down {\n  font-size: 12px;\n}\n.ant-dropdown-wrap .anticon-down:before {\n  transition: transform 0.2s ease;\n}\n.ant-dropdown-wrap-open .anticon-down:before {\n  transform: rotate(180deg);\n}\n.ant-dropdown-hidden,\n.ant-dropdown-menu-hidden {\n  display: none;\n}\n.ant-dropdown-menu {\n  outline: none;\n  position: relative;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  background-clip: padding-box;\n}\n.ant-dropdown-menu-item,\n.ant-dropdown-menu-submenu-title {\n  padding: 7px 16px;\n  margin: 0;\n  clear: both;\n  font-size: 12px;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.65);\n  white-space: nowrap;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.ant-dropdown-menu-item > a,\n.ant-dropdown-menu-submenu-title > a {\n  color: rgba(0, 0, 0, 0.65);\n  display: block;\n  padding: 7px 16px;\n  margin: -7px -16px;\n}\n.ant-dropdown-menu-item:hover,\n.ant-dropdown-menu-submenu-title:hover {\n  background-color: #ecf6fd;\n}\n.ant-dropdown-menu-item-disabled,\n.ant-dropdown-menu-submenu-title-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.ant-dropdown-menu-item-disabled:hover,\n.ant-dropdown-menu-submenu-title-disabled:hover {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ant-dropdown-menu-item:first-child,\n.ant-dropdown-menu-submenu-title:first-child {\n  border-radius: 4px 4px 0 0;\n}\n.ant-dropdown-menu-item:last-child,\n.ant-dropdown-menu-submenu-title:last-child {\n  border-radius: 0 0 4px 4px;\n}\n.ant-dropdown-menu-item:only-child,\n.ant-dropdown-menu-submenu-title:only-child {\n  border-radius: 4px;\n}\n.ant-dropdown-menu-item-divider,\n.ant-dropdown-menu-submenu-title-divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e9e9e9;\n  line-height: 0;\n}\n.ant-dropdown-menu-submenu-title:after {\n  font-family: \"anticon\" !important;\n  position: absolute;\n  content: \"\\E61F\";\n  right: 16px;\n  color: rgba(0, 0, 0, 0.43);\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  transform: scale(0.83333333) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n}\n:root .ant-dropdown-menu-submenu-title:after {\n  filter: none;\n}\n:root .ant-dropdown-menu-submenu-title:after {\n  font-size: 12px;\n}\n.ant-dropdown-menu-submenu-vertical {\n  position: relative;\n}\n.ant-dropdown-menu-submenu-vertical > .ant-dropdown-menu {\n  top: 0;\n  left: 100%;\n  position: absolute;\n  min-width: 100%;\n  margin-left: 4px;\n  transform-origin: 0 0;\n}\n.ant-dropdown-menu-submenu:first-child .ant-dropdown-menu-submenu-title {\n  border-radius: 4px 4px 0 0;\n}\n.ant-dropdown-menu-submenu:last-child .ant-dropdown-menu-submenu-title {\n  border-radius: 0 0 4px 4px;\n}\n.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-bottomLeft,\n.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-bottomLeft {\n  animation-name: antSlideUpIn;\n}\n.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topLeft,\n.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topLeft {\n  animation-name: antSlideDownIn;\n}\n.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-bottomLeft {\n  animation-name: antSlideUpOut;\n}\n.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topLeft {\n  animation-name: antSlideDownOut;\n}\n.ant-dropdown-trigger,\n.ant-dropdown-link {\n  font-size: 12px;\n}\n.ant-dropdown-trigger .anticon-down,\n.ant-dropdown-link .anticon-down {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  transform: scale(0.83333333) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n}\n:root .ant-dropdown-trigger .anticon-down,\n:root .ant-dropdown-link .anticon-down {\n  filter: none;\n}\n:root .ant-dropdown-trigger .anticon-down,\n:root .ant-dropdown-link .anticon-down {\n  font-size: 12px;\n}\n.ant-dropdown-button {\n  white-space: nowrap;\n}\n.ant-dropdown-button.ant-btn-group > .ant-btn:last-child:not(:first-child) {\n  padding-right: 7px;\n}\n.ant-dropdown-button .anticon-down {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  transform: scale(0.83333333) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n}\n:root .ant-dropdown-button .anticon-down {\n  filter: none;\n}\n:root .ant-dropdown-button .anticon-down {\n  font-size: 12px;\n}\n", ""]);

	// exports


/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dropdown = __webpack_require__(494);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _dropdownButton = __webpack_require__(498);

	var _dropdownButton2 = _interopRequireDefault(_dropdownButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_dropdown2["default"].Button = _dropdownButton2["default"];
	exports["default"] = _dropdown2["default"];
	module.exports = exports['default'];

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _classCallCheck2 = __webpack_require__(48);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(49);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _rcDropdown = __webpack_require__(495);

	var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

	var _classnames = __webpack_require__(124);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Dropdown = function (_React$Component) {
	    (0, _inherits3["default"])(Dropdown, _React$Component);

	    function Dropdown() {
	        (0, _classCallCheck3["default"])(this, Dropdown);
	        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
	    }

	    Dropdown.prototype.render = function render() {
	        var _props = this.props,
	            children = _props.children,
	            prefixCls = _props.prefixCls;

	        var dropdownTrigger = (0, _react.cloneElement)(children, {
	            className: (0, _classnames2["default"])(children.props.className, prefixCls + '-trigger')
	        });
	        return _react2["default"].createElement(
	            _rcDropdown2["default"],
	            this.props,
	            dropdownTrigger
	        );
	    };

	    return Dropdown;
	}(_react2["default"].Component);

	exports["default"] = Dropdown;

	Dropdown.defaultProps = {
	    transitionName: 'slide-up',
	    prefixCls: 'ant-dropdown',
	    mouseEnterDelay: 0.15,
	    mouseLeaveDelay: 0.1
	};
	module.exports = exports['default'];

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Dropdown = __webpack_require__(496);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Dropdown2["default"];
	module.exports = exports['default'];

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(132);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _rcTrigger = __webpack_require__(416);

	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

	var _placements = __webpack_require__(497);

	var _placements2 = _interopRequireDefault(_placements);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/*
	 var MenuItem = Menu.Item;

	 var menu = <Menu><MenuItem>1</MenuItem></Menu>;

	 <DropDown trigger="click" animationName="" overlay={<>} onSelect={}>
	 <button>open</button>
	 </DropDown>
	*/

	var Dropdown = _react2["default"].createClass({
	  displayName: 'Dropdown',

	  propTypes: {
	    minOverlayWidthMatchTrigger: _react.PropTypes.bool,
	    onVisibleChange: _react.PropTypes.func,
	    prefixCls: _react.PropTypes.string,
	    children: _react.PropTypes.any,
	    transitionName: _react.PropTypes.string,
	    overlayClassName: _react.PropTypes.string,
	    animation: _react.PropTypes.any,
	    align: _react.PropTypes.object,
	    overlayStyle: _react.PropTypes.object,
	    placement: _react.PropTypes.string,
	    trigger: _react.PropTypes.array,
	    showAction: _react.PropTypes.array,
	    hideAction: _react.PropTypes.array,
	    getPopupContainer: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      minOverlayWidthMatchTrigger: true,
	      prefixCls: 'rc-dropdown',
	      trigger: ['hover'],
	      showAction: [],
	      hideAction: [],
	      overlayClassName: '',
	      overlayStyle: {},
	      defaultVisible: false,
	      onVisibleChange: function onVisibleChange() {},

	      placement: 'bottomLeft'
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    if ('visible' in props) {
	      return {
	        visible: props.visible
	      };
	    }
	    return {
	      visible: props.defaultVisible
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
	    var visible = _ref.visible;

	    if (visible !== undefined) {
	      this.setState({
	        visible: visible
	      });
	    }
	  },
	  onClick: function onClick(e) {
	    var props = this.props;
	    var overlayProps = props.overlay.props;
	    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
	    if (!('visible' in props)) {
	      this.setState({
	        visible: false
	      });
	    }
	    if (overlayProps.onClick) {
	      overlayProps.onClick(e);
	    }
	  },
	  onVisibleChange: function onVisibleChange(visible) {
	    var props = this.props;
	    if (!('visible' in props)) {
	      this.setState({
	        visible: visible
	      });
	    }
	    props.onVisibleChange(visible);
	  },
	  getMenuElement: function getMenuElement() {
	    var props = this.props;
	    return _react2["default"].cloneElement(props.overlay, {
	      prefixCls: props.prefixCls + '-menu',
	      onClick: this.onClick
	    });
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    return this.refs.trigger.getPopupDomNode();
	  },
	  afterVisibleChange: function afterVisibleChange(visible) {
	    if (visible && this.props.minOverlayWidthMatchTrigger) {
	      var overlayNode = this.getPopupDomNode();
	      var rootNode = _reactDom2["default"].findDOMNode(this);
	      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
	        overlayNode.style.width = rootNode.offsetWidth + 'px';
	      }
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var children = _props.children;
	    var transitionName = _props.transitionName;
	    var animation = _props.animation;
	    var align = _props.align;
	    var placement = _props.placement;
	    var getPopupContainer = _props.getPopupContainer;
	    var showAction = _props.showAction;
	    var hideAction = _props.hideAction;
	    var overlayClassName = _props.overlayClassName;
	    var overlayStyle = _props.overlayStyle;
	    var trigger = _props.trigger;

	    var otherProps = _objectWithoutProperties(_props, ['prefixCls', 'children', 'transitionName', 'animation', 'align', 'placement', 'getPopupContainer', 'showAction', 'hideAction', 'overlayClassName', 'overlayStyle', 'trigger']);

	    return _react2["default"].createElement(
	      _rcTrigger2["default"],
	      _extends({}, otherProps, {
	        prefixCls: prefixCls,
	        ref: 'trigger',
	        popupClassName: overlayClassName,
	        popupStyle: overlayStyle,
	        builtinPlacements: _placements2["default"],
	        action: trigger,
	        showAction: showAction,
	        hideAction: hideAction,
	        popupPlacement: placement,
	        popupAlign: align,
	        popupTransitionName: transitionName,
	        popupAnimation: animation,
	        popupVisible: this.state.visible,
	        afterPopupVisibleChange: this.afterVisibleChange,
	        popup: this.getMenuElement(),
	        onPopupVisibleChange: this.onVisibleChange,
	        getPopupContainer: getPopupContainer
	      }),
	      children
	    );
	  }
	});

	exports["default"] = Dropdown;
	module.exports = exports['default'];

/***/ },

/***/ 497:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};

	var targetOffset = [0, 0];

	var placements = exports.placements = {
	  topLeft: {
	    points: ['bl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  topCenter: {
	    points: ['bc', 'tc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  bottomCenter: {
	    points: ['tc', 'bc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  }
	};

	exports["default"] = placements;

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;

	var _extends2 = __webpack_require__(10);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(48);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(49);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(85);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(368);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(131);

	var _icon2 = _interopRequireDefault(_icon);

	var _dropdown = __webpack_require__(494);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _classnames = __webpack_require__(124);

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

	var ButtonGroup = _button2["default"].Group;

	var DropdownButton = function (_React$Component) {
	    (0, _inherits3["default"])(DropdownButton, _React$Component);

	    function DropdownButton() {
	        (0, _classCallCheck3["default"])(this, DropdownButton);
	        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
	    }

	    DropdownButton.prototype.render = function render() {
	        var _a = this.props,
	            type = _a.type,
	            overlay = _a.overlay,
	            trigger = _a.trigger,
	            align = _a.align,
	            children = _a.children,
	            className = _a.className,
	            onClick = _a.onClick,
	            prefixCls = _a.prefixCls,
	            disabled = _a.disabled,
	            visible = _a.visible,
	            onVisibleChange = _a.onVisibleChange,
	            restProps = __rest(_a, ["type", "overlay", "trigger", "align", "children", "className", "onClick", "prefixCls", "disabled", "visible", "onVisibleChange"]);
	        var cls = (0, _classnames2["default"])(prefixCls, className);
	        var dropdownProps = {
	            align: align,
	            overlay: overlay,
	            trigger: disabled ? [] : trigger,
	            onVisibleChange: onVisibleChange
	        };
	        if ('visible' in this.props) {
	            dropdownProps.visible = visible;
	        }
	        return _react2["default"].createElement(
	            ButtonGroup,
	            (0, _extends3["default"])({}, restProps, { className: cls }),
	            _react2["default"].createElement(
	                _button2["default"],
	                { type: type, onClick: onClick, disabled: disabled },
	                children
	            ),
	            _react2["default"].createElement(
	                _dropdown2["default"],
	                dropdownProps,
	                _react2["default"].createElement(
	                    _button2["default"],
	                    { type: type, disabled: disabled },
	                    _react2["default"].createElement(_icon2["default"], { type: 'down' })
	                )
	            )
	        );
	    };

	    return DropdownButton;
	}(_react2["default"].Component);

	exports["default"] = DropdownButton;

	DropdownButton.defaultProps = {
	    align: {
	        points: ['tr', 'br'],
	        overlay: {
	            adjustX: 1,
	            adjustY: 1
	        },
	        offset: [0, 4],
	        targetOffset: [0, 0]
	    },
	    type: 'default',
	    prefixCls: 'ant-dropdown-button'
	};
	module.exports = exports['default'];

/***/ }

})