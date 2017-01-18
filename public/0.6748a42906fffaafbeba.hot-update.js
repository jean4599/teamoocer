webpackHotUpdate(0,{

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style7 = __webpack_require__(340);

	var _row = __webpack_require__(343);

	var _row2 = _interopRequireDefault(_row);

	var _style8 = __webpack_require__(490);

	var _dropdown = __webpack_require__(493);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style9 = __webpack_require__(371);

	var _input = __webpack_require__(374);

	var _input2 = _interopRequireDefault(_input);

	var _style10 = __webpack_require__(347);

	var _col = __webpack_require__(348);

	var _col2 = _interopRequireDefault(_col);

	var _style11 = __webpack_require__(365);

	var _button = __webpack_require__(368);

	var _button2 = _interopRequireDefault(_button);

	var _style12 = __webpack_require__(499);

	var _menu = __webpack_require__(502);

	var _menu2 = _interopRequireDefault(_menu);

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
	var menu = _react2.default.createElement(_menu2.default, { onClick: handleMenuClick }, _react2.default.createElement(_menu2.default.Item, { key: '1' }, '1st menu item'), _react2.default.createElement(_menu2.default.Item, { key: '2' }, '2nd menu item'), _react2.default.createElement(_menu2.default.Item, { key: '3' }, '3d menu item'));
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

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(500);

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(501);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(501, function() {
				var newContent = __webpack_require__(501);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".ant-menu {\n  outline: none;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  z-index: 1050;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  color: rgba(0, 0, 0, 0.65);\n  background: #fff;\n  line-height: 46px;\n}\n.ant-menu-hidden {\n  display: none;\n}\n.ant-menu-item-group-list {\n  margin: 0;\n  padding: 0;\n}\n.ant-menu-item-group-title {\n  color: rgba(0, 0, 0, 0.43);\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 8px 16px;\n}\n.ant-menu-item,\n.ant-menu-submenu,\n.ant-menu-submenu-title {\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.ant-menu-submenu .ant-menu-sub {\n  cursor: initial;\n}\n.ant-menu-item > a {\n  display: block;\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-menu-item > a:hover {\n  color: #108ee9;\n}\n.ant-menu-item > a:before {\n  position: absolute;\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: '';\n}\n.ant-menu-item-divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e9e9e9;\n  line-height: 0;\n}\n.ant-menu-item:hover,\n.ant-menu-item-active,\n.ant-menu-submenu-active,\n.ant-menu-submenu-title:hover {\n  color: #108ee9;\n}\n.ant-menu-horizontal .ant-menu-item,\n.ant-menu-horizontal .ant-menu-submenu {\n  margin-top: -1px;\n}\n.ant-menu-horizontal > .ant-menu-item:hover,\n.ant-menu-horizontal > .ant-menu-item-active,\n.ant-menu-horizontal > .ant-menu-submenu .ant-menu-submenu-title:hover {\n  background-color: transparent;\n}\n.ant-menu-item-selected {\n  color: #108ee9;\n  transform: translateZ(0);\n}\n.ant-menu-item-selected > a,\n.ant-menu-item-selected > a:hover {\n  color: #108ee9;\n}\n.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {\n  background-color: #ecf6fd;\n}\n.ant-menu-horizontal,\n.ant-menu-inline,\n.ant-menu-vertical {\n  z-index: auto;\n}\n.ant-menu-inline,\n.ant-menu-vertical {\n  border-right: 1px solid #e9e9e9;\n}\n.ant-menu-inline .ant-menu-item,\n.ant-menu-vertical .ant-menu-item {\n  border-right: 1px solid #e9e9e9;\n  margin-left: -1px;\n  left: 1px;\n  position: relative;\n  z-index: 1;\n}\n.ant-menu-vertical .ant-menu-sub {\n  border-right: 0;\n}\n.ant-menu-vertical .ant-menu-sub .ant-menu-item {\n  border-right: 0;\n}\n.ant-menu-inline .ant-menu-selected,\n.ant-menu-inline .ant-menu-item-selected {\n  border-right: 3px solid #108ee9;\n  transform: translateZ(0);\n}\n.ant-menu-submenu-horizontal > .ant-menu {\n  top: 100%;\n  left: 0;\n  position: absolute;\n  min-width: 100%;\n  margin-top: 7px;\n  z-index: 1050;\n}\n.ant-menu-submenu-vertical {\n  z-index: 1;\n}\n.ant-menu-submenu-vertical > .ant-menu {\n  top: 0;\n  left: 100%;\n  position: absolute;\n  min-width: 160px;\n  margin-left: 4px;\n  z-index: 1050;\n}\n.ant-menu-item,\n.ant-menu-submenu-title {\n  margin: 0;\n  padding: 0 20px;\n  position: relative;\n  display: block;\n  white-space: nowrap;\n}\n.ant-menu-item .anticon,\n.ant-menu-submenu-title .anticon {\n  min-width: 14px;\n  margin-right: 8px;\n  transition: all .3s;\n}\n.ant-menu > .ant-menu-item-divider {\n  height: 1px;\n  margin: 1px 0;\n  overflow: hidden;\n  padding: 0;\n  line-height: 0;\n  background-color: #e5e5e5;\n}\n.ant-menu-submenu {\n  position: relative;\n}\n.ant-menu-submenu > .ant-menu {\n  background-color: #fff;\n  border-radius: 4px;\n}\n.ant-menu-submenu-vertical > .ant-menu-submenu-title:after {\n  font-family: \"anticon\" !important;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  position: absolute;\n  transition: transform .3s ease;\n  content: \"\\E61D\";\n  right: 16px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg) scale(0.75);\n}\n.ant-menu-submenu-inline > .ant-menu-submenu-title:after {\n  font-family: \"anticon\" !important;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  position: absolute;\n  transition: transform .3s ease;\n  content: \"\\E61D\";\n  right: 16px;\n  top: 0;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 8px \\9;\n  transform: scale(0.66666667) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n}\n:root .ant-menu-submenu-inline > .ant-menu-submenu-title:after {\n  filter: none;\n}\n:root .ant-menu-submenu-inline > .ant-menu-submenu-title:after {\n  font-size: 12px;\n}\n.ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title:after {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(180deg) scale(0.75);\n}\n.ant-menu-vertical .ant-menu-submenu-selected {\n  color: #108ee9;\n}\n.ant-menu-vertical .ant-menu-submenu-selected > a {\n  color: #108ee9;\n}\n.ant-menu-horizontal {\n  border: 0;\n  border-bottom: 1px solid #e9e9e9;\n  box-shadow: none;\n  z-index: 0;\n}\n.ant-menu-horizontal > .ant-menu-item,\n.ant-menu-horizontal > .ant-menu-submenu {\n  position: relative;\n  top: 1px;\n  float: left;\n  border-bottom: 2px solid transparent;\n}\n.ant-menu-horizontal > .ant-menu-item:hover,\n.ant-menu-horizontal > .ant-menu-submenu:hover,\n.ant-menu-horizontal > .ant-menu-item-active,\n.ant-menu-horizontal > .ant-menu-submenu-active,\n.ant-menu-horizontal > .ant-menu-item-selected,\n.ant-menu-horizontal > .ant-menu-submenu-selected {\n  border-bottom: 2px solid #108ee9;\n  color: #108ee9;\n}\n.ant-menu-horizontal > .ant-menu-item > a,\n.ant-menu-horizontal > .ant-menu-submenu > a {\n  display: block;\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-menu-horizontal > .ant-menu-item > a:hover,\n.ant-menu-horizontal > .ant-menu-submenu > a:hover {\n  color: #108ee9;\n}\n.ant-menu-horizontal:after {\n  content: \" \";\n  display: block;\n  height: 0;\n  clear: both;\n}\n.ant-menu-vertical > .ant-menu-item,\n.ant-menu-inline > .ant-menu-item,\n.ant-menu-item-group-list > .ant-menu-item,\n.ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title,\n.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title,\n.ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title {\n  padding: 0px 16px 0 28px;\n  font-size: 12px;\n  line-height: 42px;\n  height: 42px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ant-menu-vertical.ant-menu-sub {\n  padding: 0;\n  transform-origin: 0 0;\n}\n.ant-menu-vertical.ant-menu-sub > .ant-menu-item,\n.ant-menu-vertical.ant-menu-sub > .ant-menu-submenu {\n  transform-origin: 0 0;\n}\n.ant-menu-root.ant-menu-vertical,\n.ant-menu-root.ant-menu-inline {\n  box-shadow: none;\n}\n.ant-menu-sub.ant-menu-inline {\n  padding: 0;\n  border: 0;\n  box-shadow: none;\n  border-radius: 0;\n}\n.ant-menu-sub.ant-menu-inline > .ant-menu-item,\n.ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {\n  line-height: 42px;\n  height: 42px;\n  list-style-type: disc;\n  list-style-position: inside;\n}\n.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title {\n  padding-left: 32px;\n}\n.ant-menu-item-disabled,\n.ant-menu-submenu-disabled {\n  color: rgba(0, 0, 0, 0.25) !important;\n  cursor: not-allowed;\n  background: none;\n  border-color: transparent !important;\n}\n.ant-menu-item-disabled > a,\n.ant-menu-submenu-disabled > a {\n  color: rgba(0, 0, 0, 0.25) !important;\n  pointer-events: none;\n}\n.ant-menu-dark,\n.ant-menu-dark .ant-menu-sub {\n  color: rgba(255, 255, 255, 0.67);\n  background: #404040;\n}\n.ant-menu-dark .ant-menu-inline.ant-menu-sub {\n  background: #333;\n}\n.ant-menu-dark.ant-menu-horizontal {\n  border-bottom-color: #404040;\n}\n.ant-menu-dark.ant-menu-horizontal > .ant-menu-item,\n.ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {\n  border-color: #404040;\n  border-bottom: 0;\n  top: 0;\n}\n.ant-menu-dark .ant-menu-item,\n.ant-menu-dark .ant-menu-item-group-title,\n.ant-menu-dark .ant-menu-item > a {\n  color: rgba(255, 255, 255, 0.67);\n}\n.ant-menu-dark.ant-menu-inline,\n.ant-menu-dark.ant-menu-vertical {\n  border-right: 0;\n}\n.ant-menu-dark.ant-menu-inline .ant-menu-item,\n.ant-menu-dark.ant-menu-vertical .ant-menu-item {\n  border-right: 0;\n  margin-left: 0;\n  left: 0;\n}\n.ant-menu-dark .ant-menu-item:hover,\n.ant-menu-dark .ant-menu-item-active,\n.ant-menu-dark .ant-menu-submenu-active,\n.ant-menu-dark .ant-menu-submenu-selected,\n.ant-menu-dark .ant-menu-submenu:hover,\n.ant-menu-dark .ant-menu-submenu-title:hover {\n  background-color: transparent;\n  color: #fff;\n}\n.ant-menu-dark .ant-menu-item:hover > a,\n.ant-menu-dark .ant-menu-item-active > a,\n.ant-menu-dark .ant-menu-submenu-active > a,\n.ant-menu-dark .ant-menu-submenu-selected > a,\n.ant-menu-dark .ant-menu-submenu:hover > a,\n.ant-menu-dark .ant-menu-submenu-title:hover > a {\n  color: #fff;\n}\n.ant-menu-dark .ant-menu-item-selected {\n  border-right: 0;\n  color: #fff;\n}\n.ant-menu-dark .ant-menu-item-selected > a,\n.ant-menu-dark .ant-menu-item-selected > a:hover {\n  color: #fff;\n}\n.ant-menu.ant-menu-dark .ant-menu-item-selected {\n  background-color: transparent;\n}\n.ant-menu-dark.ant-menu-inline .ant-menu-item-selected {\n  background-color: #108ee9;\n}\n.ant-menu-dark .ant-menu-item-disabled,\n.ant-menu-dark .ant-menu-submenu-disabled,\n.ant-menu-dark .ant-menu-item-disabled > a,\n.ant-menu-dark .ant-menu-submenu-disabled > a {\n  opacity: 0.8;\n  color: rgba(255, 255, 255, 0.35) !important;\n}\n", ""]);

	// exports


/***/ },

/***/ 502:
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

	var _rcMenu = __webpack_require__(503);

	var _rcMenu2 = _interopRequireDefault(_rcMenu);

	var _openAnimation = __webpack_require__(521);

	var _openAnimation2 = _interopRequireDefault(_openAnimation);

	var _warning = __webpack_require__(456);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Menu = function (_React$Component) {
	    (0, _inherits3["default"])(Menu, _React$Component);

	    function Menu(props) {
	        (0, _classCallCheck3["default"])(this, Menu);

	        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

	        _this.handleClick = function (e) {
	            _this.setOpenKeys([]);
	            var onClick = _this.props.onClick;
	            if (onClick) {
	                onClick(e);
	            }
	        };
	        _this.handleOpenChange = function (openKeys) {
	            _this.setOpenKeys(openKeys);
	            var onOpenChange = _this.props.onOpenChange;
	            if (onOpenChange) {
	                onOpenChange(openKeys);
	            }
	        };
	        (0, _warning2["default"])(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead, ' + 'see: http://u.ant.design/menu-on-open-change.');
	        _this.state = {
	            openKeys: []
	        };
	        return _this;
	    }

	    Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
	            this.switchModeFromInline = true;
	        }
	        if ('openKeys' in nextProps) {
	            this.setOpenKeys(nextProps.openKeys);
	        }
	    };

	    Menu.prototype.setOpenKeys = function setOpenKeys(openKeys) {
	        if (!('openKeys' in this.props)) {
	            this.setState({ openKeys: openKeys });
	        }
	    };

	    Menu.prototype.render = function render() {
	        var openAnimation = this.props.openAnimation || this.props.openTransitionName;
	        if (!openAnimation) {
	            switch (this.props.mode) {
	                case 'horizontal':
	                    openAnimation = 'slide-up';
	                    break;
	                case 'vertical':
	                    // When mode switch from inline
	                    // submenu should hide without animation
	                    if (this.switchModeFromInline) {
	                        openAnimation = '';
	                        this.switchModeFromInline = false;
	                    } else {
	                        openAnimation = 'zoom-big';
	                    }
	                    break;
	                case 'inline':
	                    openAnimation = _openAnimation2["default"];
	                    break;
	                default:
	            }
	        }
	        var props = {};
	        var className = this.props.className + ' ' + this.props.prefixCls + '-' + this.props.theme;
	        if (this.props.mode !== 'inline') {
	            // 这组属性的目的是
	            // 弹出型的菜单需要点击后立即关闭
	            // 另外，弹出型的菜单的受控模式没有使用场景
	            props = {
	                openKeys: this.state.openKeys,
	                onClick: this.handleClick,
	                onOpenChange: this.handleOpenChange,
	                openTransitionName: openAnimation,
	                className: className
	            };
	        } else {
	            props = {
	                openAnimation: openAnimation,
	                className: className
	            };
	        }
	        return _react2["default"].createElement(_rcMenu2["default"], (0, _extends3["default"])({}, this.props, props));
	    };

	    return Menu;
	}(_react2["default"].Component);

	exports["default"] = Menu;

	Menu.Divider = _rcMenu.Divider;
	Menu.Item = _rcMenu.Item;
	Menu.SubMenu = _rcMenu.SubMenu;
	Menu.ItemGroup = _rcMenu.ItemGroup;
	Menu.defaultProps = {
	    prefixCls: 'ant-menu',
	    className: '',
	    theme: 'light'
	};
	module.exports = exports['default'];

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Divider = exports.ItemGroup = exports.MenuItemGroup = exports.MenuItem = exports.Item = exports.SubMenu = undefined;

	var _Menu = __webpack_require__(504);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _SubMenu = __webpack_require__(513);

	var _SubMenu2 = _interopRequireDefault(_SubMenu);

	var _MenuItem = __webpack_require__(518);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _MenuItemGroup = __webpack_require__(519);

	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

	var _Divider = __webpack_require__(520);

	var _Divider2 = _interopRequireDefault(_Divider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.SubMenu = _SubMenu2["default"];
	exports.Item = _MenuItem2["default"];
	exports.MenuItem = _MenuItem2["default"];
	exports.MenuItemGroup = _MenuItemGroup2["default"];
	exports.ItemGroup = _MenuItemGroup2["default"];
	exports.Divider = _Divider2["default"];
	exports["default"] = _Menu2["default"];

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(10);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _MenuMixin = __webpack_require__(505);

	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);

	var _util = __webpack_require__(511);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Menu = _react2["default"].createClass({
	  displayName: 'Menu',

	  propTypes: {
	    openSubMenuOnMouseEnter: _react.PropTypes.bool,
	    closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	    selectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    defaultSelectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    defaultOpenKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    openKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    mode: _react.PropTypes.string,
	    onClick: _react.PropTypes.func,
	    onSelect: _react.PropTypes.func,
	    onDeselect: _react.PropTypes.func,
	    onDestroy: _react.PropTypes.func,
	    openTransitionName: _react.PropTypes.string,
	    openAnimation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	    level: _react.PropTypes.number,
	    eventKey: _react.PropTypes.string,
	    selectable: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  mixins: [_MenuMixin2["default"]],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      openSubMenuOnMouseEnter: true,
	      closeSubMenuOnMouseLeave: true,
	      selectable: true,
	      onClick: _util.noop,
	      onSelect: _util.noop,
	      onOpenChange: _util.noop,
	      onDeselect: _util.noop,
	      defaultSelectedKeys: [],
	      defaultOpenKeys: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var selectedKeys = props.defaultSelectedKeys;
	    var openKeys = props.defaultOpenKeys;
	    if ('selectedKeys' in props) {
	      selectedKeys = props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = props.openKeys || [];
	    }
	    return {
	      selectedKeys: selectedKeys,
	      openKeys: openKeys
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('selectedKeys' in nextProps) {
	      props.selectedKeys = nextProps.selectedKeys;
	    }
	    if ('openKeys' in nextProps) {
	      props.openKeys = nextProps.openKeys;
	    }
	    this.setState(props);
	  },
	  onDestroy: function onDestroy(key) {
	    var state = this.state;
	    var props = this.props;
	    var selectedKeys = state.selectedKeys;
	    var openKeys = state.openKeys;
	    var index = selectedKeys.indexOf(key);
	    if (!('selectedKeys' in props) && index !== -1) {
	      selectedKeys.splice(index, 1);
	    }
	    index = openKeys.indexOf(key);
	    if (!('openKeys' in props) && index !== -1) {
	      openKeys.splice(index, 1);
	    }
	  },
	  onItemHover: function onItemHover(e) {
	    var _this = this;

	    var item = e.item;
	    var _props = this.props,
	        mode = _props.mode,
	        closeSubMenuOnMouseLeave = _props.closeSubMenuOnMouseLeave;
	    var _e$openChanges = e.openChanges,
	        openChanges = _e$openChanges === undefined ? [] : _e$openChanges;
	    // special for top sub menu

	    if (mode !== 'inline' && !closeSubMenuOnMouseLeave && item.isSubMenu) {
	      (function () {
	        var activeKey = _this.state.activeKey;
	        var activeItem = _this.getFlatInstanceArray().filter(function (c) {
	          return c && c.props.eventKey === activeKey;
	        })[0];
	        if (activeItem && activeItem.props.open) {
	          openChanges = openChanges.concat({
	            key: item.props.eventKey,
	            item: item,
	            originalEvent: e,
	            open: true
	          });
	        }
	      })();
	    }
	    openChanges = openChanges.concat(this.getOpenChangesOnItemHover(e));
	    if (openChanges.length) {
	      this.onOpenChange(openChanges);
	    }
	  },
	  onSelect: function onSelect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = this.state.selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect((0, _extends3["default"])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	  onOpenChange: function onOpenChange(e_) {
	    var props = this.props;
	    var openKeys = this.state.openKeys.concat();
	    var changed = false;
	    var processSingle = function processSingle(e) {
	      var oneChanged = false;
	      if (e.open) {
	        oneChanged = openKeys.indexOf(e.key) === -1;
	        if (oneChanged) {
	          openKeys.push(e.key);
	        }
	      } else {
	        var index = openKeys.indexOf(e.key);
	        oneChanged = index !== -1;
	        if (oneChanged) {
	          openKeys.splice(index, 1);
	        }
	      }
	      changed = changed || oneChanged;
	    };
	    if (Array.isArray(e_)) {
	      // batch change call
	      e_.forEach(processSingle);
	    } else {
	      processSingle(e_);
	    }
	    if (changed) {
	      if (!('openKeys' in this.props)) {
	        this.setState({ openKeys: openKeys });
	      }
	      props.onOpenChange(openKeys);
	    }
	  },
	  onDeselect: function onDeselect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      var selectedKeys = this.state.selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect((0, _extends3["default"])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	  getOpenTransitionName: function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  },
	  isInlineMode: function isInlineMode() {
	    return this.props.mode === 'inline';
	  },
	  lastOpenSubMenu: function lastOpenSubMenu() {
	    var lastOpen = [];
	    var openKeys = this.state.openKeys;

	    if (openKeys.length) {
	      lastOpen = this.getFlatInstanceArray().filter(function (c) {
	        return c && openKeys.indexOf(c.props.eventKey) !== -1;
	      });
	    }
	    return lastOpen[0];
	  },
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    if (!c) {
	      return null;
	    }
	    var state = this.state;
	    var extraProps = {
	      openKeys: state.openKeys,
	      selectedKeys: state.selectedKeys,
	      openSubMenuOnMouseEnter: this.props.openSubMenuOnMouseEnter
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	  render: function render() {
	    var props = (0, _extends3["default"])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-root';
	    return this.renderRoot(props);
	  }
	});

	exports["default"] = Menu;
	module.exports = exports['default'];

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(126);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(10);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(132);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _KeyCode = __webpack_require__(506);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _createChainedFunction = __webpack_require__(507);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	var _classnames = __webpack_require__(124);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _domScrollIntoView = __webpack_require__(508);

	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

	var _util = __webpack_require__(511);

	var _DOMWrap = __webpack_require__(512);

	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}

	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children,
	      eventKey = props.eventKey;

	  if (activeKey) {
	    var found = void 0;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (c && !c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && c && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}

	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}

	var MenuMixin = {
	  propTypes: {
	    focusable: _react.PropTypes.bool,
	    multiple: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    defaultActiveFirst: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    activeKey: _react.PropTypes.string,
	    selectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    defaultSelectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    defaultOpenKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    openKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-menu',
	      className: '',
	      mode: 'vertical',
	      level: 1,
	      inlineIndent: 24,
	      visible: true,
	      focusable: true,
	      style: {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    return {
	      activeKey: getActiveKey(props, props.activeKey)
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = void 0;
	    if ('activeKey' in nextProps) {
	      props = {
	        activeKey: getActiveKey(nextProps, nextProps.activeKey)
	      };
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props = {
	          activeKey: activeKey
	        };
	      }
	    }
	    if (props) {
	      this.setState(props);
	    }
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  },
	  componentWillMount: function componentWillMount() {
	    this.instanceArray = [];
	  },


	  // all keyboard events callbacks run from here at first
	  onKeyDown: function onKeyDown(e) {
	    var _this = this;

	    var keyCode = e.keyCode;
	    var handled = void 0;
	    this.getFlatInstanceArray().forEach(function (obj) {
	      if (obj && obj.props.active) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = null;
	    if (keyCode === _KeyCode2["default"].UP || keyCode === _KeyCode2["default"].DOWN) {
	      activeItem = this.step(keyCode === _KeyCode2["default"].UP ? -1 : 1);
	    }
	    if (activeItem) {
	      e.preventDefault();
	      this.setState({
	        activeKey: activeItem.props.eventKey
	      }, function () {
	        (0, _domScrollIntoView2["default"])(_reactDom2["default"].findDOMNode(activeItem), _reactDom2["default"].findDOMNode(_this), {
	          onlyScrollIfNeeded: true
	        });
	      });
	      return 1;
	    } else if (activeItem === undefined) {
	      e.preventDefault();
	      this.setState({
	        activeKey: null
	      });
	      return 1;
	    }
	  },
	  getOpenChangesOnItemHover: function getOpenChangesOnItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key,
	        hover = e.hover,
	        trigger = e.trigger;

	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty

	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        return {
	          item: activeItem,
	          originalEvent: e,
	          key: activeItem.props.eventKey,
	          open: false
	        };
	      }
	    }
	    return [];
	  },
	  getFlatInstanceArray: function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  },
	  renderCommonMenuItem: function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var isActive = key === state.activeKey;
	    var newChildProps = (0, _extends3["default"])({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _createChainedFunction2["default"])(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && isActive,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2["default"].cloneElement(child, newChildProps);
	  },
	  renderRoot: function renderRoot(props) {
	    var _classes;

	    this.instanceArray = [];
	    var classes = (_classes = {}, (0, _defineProperty3["default"])(_classes, props.prefixCls, 1), (0, _defineProperty3["default"])(_classes, props.prefixCls + '-' + props.mode, 1), (0, _defineProperty3["default"])(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2["default"])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return (
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2["default"].createElement(
	        _DOMWrap2["default"],
	        (0, _extends3["default"])({
	          style: props.style,
	          tag: 'ul',
	          hiddenClassName: props.prefixCls + '-hidden',
	          visible: props.visible
	        }, domProps),
	        _react2["default"].Children.map(props.children, this.renderMenuItem)
	      )
	      /*eslint-enable */

	    );
	  },
	  step: function step(direction) {
	    var children = this.getFlatInstanceArray();
	    var activeKey = this.state.activeKey;
	    var len = children.length;
	    if (!len) {
	      return null;
	    }
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c && c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    if (!this.props.defaultActiveFirst && activeIndex !== -1) {
	      if (allDisabled(children.slice(activeIndex, len - 1))) {
	        return undefined;
	      }
	    }
	    var start = (activeIndex + 1) % len;
	    var i = start;
	    for (;;) {
	      var child = children[i];
	      if (!child || child.props.disabled) {
	        i = (i + 1 + len) % len;
	        // complete a loop
	        if (i === start) {
	          return null;
	        }
	      } else {
	        return child;
	      }
	    }
	  }
	};

	exports["default"] = MenuMixin;
	module.exports = exports['default'];

/***/ },

/***/ 506:
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	module.exports = KeyCode;

/***/ },

/***/ 507:
/***/ function(module, exports) {

	"use strict";

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = arguments;
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}

	module.exports = createChainedFunction;

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(509);

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(510);

	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }

	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	  var offsetTop = config.offsetTop || 0;
	  var offsetLeft = config.offsetLeft || 0;
	  var offsetBottom = config.offsetBottom || 0;
	  var offsetRight = config.offsetRight || 0;

	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;

	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left - offsetLeft,
	      top: elemOffset.top - winScroll.top - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
	      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
	    };
	  }

	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }

	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}

	module.exports = scrollIntoView;

/***/ },

/***/ 510:
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }

	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;

	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}

	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.loopMenuItem = loopMenuItem;
	exports.loopMenuItemRecusively = loopMenuItemRecusively;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function noop() {}

	function getKeyFromChildrenIndex(child, menuEventKey, index) {
	  var prefix = menuEventKey || '';
	  return child.key || prefix + 'item_' + index;
	}

	function loopMenuItem(children, cb) {
	  var index = -1;
	  _react2["default"].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type && c.type.isMenuItemGroup) {
	      _react2["default"].Children.forEach(c.props.children, function (c2) {
	        index++;
	        cb(c2, index);
	      });
	    } else {
	      cb(c, index);
	    }
	  });
	}

	function loopMenuItemRecusively(children, keys, ret) {
	  if (!children || ret.find) {
	    return;
	  }
	  _react2["default"].Children.forEach(children, function (c) {
	    if (ret.find) {
	      return;
	    }
	    if (c) {
	      var construt = c.type;
	      if (!construt || !(construt.isSubMenu || construt.isMenuItem || construt.isMenuItemGroup)) {
	        return;
	      }
	      if (keys.indexOf(c.key) !== -1) {
	        ret.find = true;
	      } else if (c.props.children) {
	        loopMenuItemRecusively(c.props.children, keys, ret);
	      }
	    }
	  });
	}

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(10);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var DOMWrap = _react2["default"].createClass({
	  displayName: 'DOMWrap',

	  propTypes: {
	    tag: _react.PropTypes.string,
	    hiddenClassName: _react.PropTypes.string,
	    visible: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      tag: 'div'
	    };
	  },
	  render: function render() {
	    var props = (0, _extends3["default"])({}, this.props);
	    if (!props.visible) {
	      props.className = props.className || '';
	      props.className += ' ' + props.hiddenClassName;
	    }
	    var Tag = props.tag;
	    delete props.tag;
	    delete props.hiddenClassName;
	    delete props.visible;
	    return _react2["default"].createElement(Tag, props);
	  }
	});

	exports["default"] = DOMWrap;
	module.exports = exports['default'];

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(126);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(10);

	var _extends3 = _interopRequireDefault(_extends2);

	var _SubPopupMenu = __webpack_require__(514);

	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _KeyCode = __webpack_require__(506);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _classnames = __webpack_require__(124);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(511);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var guid = 0;

	/* eslint react/no-is-mounted:0 */

	var SubMenu = _react2["default"].createClass({
	  displayName: 'SubMenu',

	  propTypes: {
	    parentMenu: _react.PropTypes.object,
	    title: _react.PropTypes.node,
	    children: _react.PropTypes.any,
	    selectedKeys: _react.PropTypes.array,
	    openKeys: _react.PropTypes.array,
	    onClick: _react.PropTypes.func,
	    onOpenChange: _react.PropTypes.func,
	    rootPrefixCls: _react.PropTypes.string,
	    eventKey: _react.PropTypes.string,
	    multiple: _react.PropTypes.bool,
	    active: _react.PropTypes.bool,
	    onSelect: _react.PropTypes.func,
	    closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	    openSubMenuOnMouseEnter: _react.PropTypes.bool,
	    onDeselect: _react.PropTypes.func,
	    onDestroy: _react.PropTypes.func,
	    onItemHover: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    onTitleMouseEnter: _react.PropTypes.func,
	    onTitleMouseLeave: _react.PropTypes.func,
	    onTitleClick: _react.PropTypes.func
	  },

	  mixins: [__webpack_require__(515)],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: _util.noop,
	      onMouseLeave: _util.noop,
	      onTitleMouseEnter: _util.noop,
	      onTitleMouseLeave: _util.noop,
	      onTitleClick: _util.noop,
	      title: ''
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.isSubMenu = 1;
	    return {
	      defaultActiveFirst: false
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var _props = this.props,
	        onDestroy = _props.onDestroy,
	        eventKey = _props.eventKey,
	        parentMenu = _props.parentMenu;

	    if (onDestroy) {
	      onDestroy(eventKey);
	    }
	    if (parentMenu.subMenuInstance === this) {
	      this.clearSubMenuTimers();
	    }
	  },
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	    var isOpen = this.isOpen();

	    if (keyCode === _KeyCode2["default"].ENTER) {
	      this.onTitleClick(e);
	      this.setState({
	        defaultActiveFirst: true
	      });
	      return true;
	    }

	    if (keyCode === _KeyCode2["default"].RIGHT) {
	      if (isOpen) {
	        menu.onKeyDown(e);
	      } else {
	        this.triggerOpenChange(true);
	        this.setState({
	          defaultActiveFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === _KeyCode2["default"].LEFT) {
	      var handled = void 0;
	      if (isOpen) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }

	    if (isOpen && (keyCode === _KeyCode2["default"].UP || keyCode === _KeyCode2["default"].DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  },
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    var props = this.props;
	    this.clearSubMenuLeaveTimer(props.parentMenu.subMenuInstance !== this);
	    props.onMouseEnter({
	      key: props.eventKey,
	      domEvent: e
	    });
	  },
	  onTitleMouseEnter: function onTitleMouseEnter(domEvent) {
	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        key = props.eventKey;

	    var item = this;
	    this.clearSubMenuTitleLeaveTimer(parentMenu.subMenuInstance !== item);
	    if (parentMenu.menuItemInstance) {
	      parentMenu.menuItemInstance.clearMenuItemMouseLeaveTimer(true);
	    }
	    var openChanges = [];
	    if (props.openSubMenuOnMouseEnter) {
	      openChanges.push({
	        key: key,
	        item: item,
	        trigger: 'mouseenter',
	        open: true
	      });
	    }
	    props.onItemHover({
	      key: key,
	      item: item,
	      hover: true,
	      trigger: 'mouseenter',
	      openChanges: openChanges
	    });
	    this.setState({
	      defaultActiveFirst: false
	    });
	    props.onTitleMouseEnter({
	      key: key,
	      domEvent: domEvent
	    });
	  },
	  onTitleMouseLeave: function onTitleMouseLeave(e) {
	    var _this = this;

	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        eventKey = props.eventKey;

	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuTitleLeaveFn = function () {
	      if (_this.isMounted()) {
	        // leave whole sub tree
	        // still active
	        if (props.mode === 'inline' && props.active) {
	          props.onItemHover({
	            key: eventKey,
	            item: _this,
	            hover: false,
	            trigger: 'mouseleave'
	          });
	        }
	        props.onTitleMouseLeave({
	          key: props.eventKey,
	          domEvent: e
	        });
	      }
	    };
	    parentMenu.subMenuTitleLeaveTimer = setTimeout(parentMenu.subMenuTitleLeaveFn, 100);
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    var _this2 = this;

	    var props = this.props;
	    var parentMenu = props.parentMenu,
	        eventKey = props.eventKey;

	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuLeaveFn = function () {
	      if (_this2.isMounted()) {
	        // leave whole sub tree
	        // still active
	        if (props.mode !== 'inline') {
	          var isOpen = _this2.isOpen();
	          if (isOpen && props.closeSubMenuOnMouseLeave && props.active) {
	            props.onItemHover({
	              key: eventKey,
	              item: _this2,
	              hover: false,
	              trigger: 'mouseleave',
	              openChanges: [{
	                key: eventKey,
	                item: _this2,
	                trigger: 'mouseleave',
	                open: false
	              }]
	            });
	          } else {
	            if (props.active) {
	              props.onItemHover({
	                key: eventKey,
	                item: _this2,
	                hover: false,
	                trigger: 'mouseleave'
	              });
	            }
	            if (isOpen && props.closeSubMenuOnMouseLeave) {
	              _this2.triggerOpenChange(false);
	            }
	          }
	        }
	        // trigger mouseleave
	        props.onMouseLeave({
	          key: eventKey,
	          domEvent: e
	        });
	      }
	    };
	    // prevent popup menu and submenu gap
	    parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.subMenuLeaveFn, 100);
	  },
	  onTitleClick: function onTitleClick(e) {
	    var props = this.props;

	    props.onTitleClick({
	      key: props.eventKey,
	      domEvent: e
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      return;
	    }
	    this.triggerOpenChange(!this.isOpen(), 'click');
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	  onSubMenuClick: function onSubMenuClick(info) {
	    this.props.onClick(this.addKeyPath(info));
	  },
	  onSelect: function onSelect(info) {
	    this.props.onSelect(info);
	  },
	  onDeselect: function onDeselect(info) {
	    this.props.onDeselect(info);
	  },
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  },
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	  getSelectedClassName: function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  },
	  getOpenClassName: function getOpenClassName() {
	    return this.props.rootPrefixCls + '-submenu-open';
	  },
	  saveMenuInstance: function saveMenuInstance(c) {
	    this.menuInstance = c;
	  },
	  addKeyPath: function addKeyPath(info) {
	    return (0, _extends3["default"])({}, info, {
	      keyPath: (info.keyPath || []).concat(this.props.eventKey)
	    });
	  },
	  triggerOpenChange: function triggerOpenChange(open, type) {
	    var key = this.props.eventKey;
	    this.onOpenChange({
	      key: key,
	      item: this,
	      trigger: type,
	      open: open
	    });
	  },
	  clearSubMenuTimers: function clearSubMenuTimers() {
	    var callFn = void 0;
	    this.clearSubMenuLeaveTimer(callFn);
	    this.clearSubMenuTitleLeaveTimer(callFn);
	  },
	  clearSubMenuTitleLeaveTimer: function clearSubMenuTitleLeaveTimer() {
	    var callFn = void 0;
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuTitleLeaveTimer) {
	      clearTimeout(parentMenu.subMenuTitleLeaveTimer);
	      parentMenu.subMenuTitleLeaveTimer = null;
	      if (callFn && parentMenu.subMenuTitleLeaveFn) {
	        parentMenu.subMenuTitleLeaveFn();
	      }
	      parentMenu.subMenuTitleLeaveFn = null;
	    }
	  },
	  clearSubMenuLeaveTimer: function clearSubMenuLeaveTimer() {
	    var callFn = void 0;
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuLeaveTimer) {
	      clearTimeout(parentMenu.subMenuLeaveTimer);
	      parentMenu.subMenuLeaveTimer = null;
	      if (callFn && parentMenu.subMenuLeaveFn) {
	        parentMenu.subMenuLeaveFn();
	      }
	      parentMenu.subMenuLeaveFn = null;
	    }
	  },
	  isChildrenSelected: function isChildrenSelected() {
	    var ret = { find: false };
	    (0, _util.loopMenuItemRecusively)(this.props.children, this.props.selectedKeys, ret);
	    return ret.find;
	  },
	  isOpen: function isOpen() {
	    return this.props.openKeys.indexOf(this.props.eventKey) !== -1;
	  },
	  renderChildren: function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: this.isOpen(),
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      defaultActiveFirst: this.state.defaultActiveFirst,
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    return _react2["default"].createElement(
	      _SubPopupMenu2["default"],
	      baseProps,
	      children
	    );
	  },
	  render: function render() {
	    var _classes;

	    var isOpen = this.isOpen();
	    this.haveOpen = this.haveOpen || isOpen;
	    var props = this.props;
	    var prefixCls = this.getPrefixCls();
	    var classes = (_classes = {}, (0, _defineProperty3["default"])(_classes, props.className, !!props.className), (0, _defineProperty3["default"])(_classes, prefixCls + '-' + props.mode, 1), _classes);

	    classes[this.getOpenClassName()] = isOpen;
	    classes[this.getActiveClassName()] = props.active;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getSelectedClassName()] = this.isChildrenSelected();

	    if (!this._menuId) {
	      if (props.eventKey) {
	        this._menuId = props.eventKey + '$Menu';
	      } else {
	        this._menuId = '$__$' + ++guid + '$Menu';
	      }
	    }

	    classes[prefixCls] = true;
	    classes[prefixCls + '-' + props.mode] = 1;
	    var titleClickEvents = {};
	    var mouseEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      titleClickEvents = {
	        onClick: this.onTitleClick
	      };
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.onTitleMouseEnter,
	        onMouseLeave: this.onTitleMouseLeave
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2["default"].createElement(
	      'li',
	      (0, _extends3["default"])({ className: (0, _classnames2["default"])(classes) }, mouseEvents),
	      _react2["default"].createElement(
	        'div',
	        (0, _extends3["default"])({
	          style: style,
	          className: prefixCls + '-title'
	        }, titleMouseEvents, titleClickEvents, {
	          'aria-expanded': isOpen,
	          'aria-owns': this._menuId,
	          'aria-haspopup': 'true'
	        }),
	        props.title
	      ),
	      this.renderChildren(props.children)
	    );
	  }
	});

	SubMenu.isSubMenu = 1;

	exports["default"] = SubMenu;
	module.exports = exports['default'];

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(50);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _extends2 = __webpack_require__(10);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _MenuMixin = __webpack_require__(505);

	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);

	var _rcAnimate = __webpack_require__(432);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var SubPopupMenu = _react2["default"].createClass({
	  displayName: 'SubPopupMenu',

	  propTypes: {
	    onSelect: _react.PropTypes.func,
	    onClick: _react.PropTypes.func,
	    onDeselect: _react.PropTypes.func,
	    onOpenChange: _react.PropTypes.func,
	    onDestroy: _react.PropTypes.func,
	    openTransitionName: _react.PropTypes.string,
	    openAnimation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	    openKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  mixins: [_MenuMixin2["default"]],

	  onDeselect: function onDeselect(selectInfo) {
	    this.props.onDeselect(selectInfo);
	  },
	  onSelect: function onSelect(selectInfo) {
	    this.props.onSelect(selectInfo);
	  },
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	  onItemHover: function onItemHover(e) {
	    var _e$openChanges = e.openChanges,
	        openChanges = _e$openChanges === undefined ? [] : _e$openChanges;

	    openChanges = openChanges.concat(this.getOpenChangesOnItemHover(e));
	    if (openChanges.length) {
	      this.onOpenChange(openChanges);
	    }
	  },
	  getOpenTransitionName: function getOpenTransitionName() {
	    return this.props.openTransitionName;
	  },
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    if (!c) {
	      return null;
	    }
	    var props = this.props;
	    var extraProps = {
	      openKeys: props.openKeys,
	      selectedKeys: props.selectedKeys,
	      openSubMenuOnMouseEnter: true
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	  render: function render() {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    this.haveOpened = this.haveOpened || this.props.visible;
	    if (!this.haveOpened) {
	      return null;
	    }
	    var transitionAppear = true;
	    if (!renderFirst && this.props.visible) {
	      transitionAppear = false;
	    }
	    var props = (0, _extends3["default"])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-sub';
	    var animProps = {};
	    if (props.openTransitionName) {
	      animProps.transitionName = props.openTransitionName;
	    } else if ((0, _typeof3["default"])(props.openAnimation) === 'object') {
	      animProps.animation = (0, _extends3["default"])({}, props.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	    return _react2["default"].createElement(
	      _rcAnimate2["default"],
	      (0, _extends3["default"])({}, animProps, {
	        showProp: 'visible',
	        component: '',
	        transitionAppear: transitionAppear
	      }),
	      this.renderRoot(props)
	    );
	  }
	});

	exports["default"] = SubPopupMenu;
	module.exports = exports['default'];

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KeyCode = __webpack_require__(506);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _addEventListener = __webpack_require__(516);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _contains = __webpack_require__(517);

	var _contains2 = _interopRequireDefault(_contains);

	var _reactDom = __webpack_require__(132);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = {
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.mode !== 'inline') {
	      if (this.props.open) {
	        this.bindRootCloseHandlers();
	      } else {
	        this.unbindRootCloseHandlers();
	      }
	    }
	  },
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (e.keyCode === _KeyCode2["default"].ESC) {
	      this.props.onItemHover({
	        key: this.props.eventKey,
	        item: this,
	        hover: false
	      });
	    }
	  },
	  handleDocumentClick: function handleDocumentClick(e) {
	    // If the click originated from within this component
	    // don't do anything.
	    if ((0, _contains2["default"])(_reactDom2["default"].findDOMNode(this), e.target)) {
	      return;
	    }
	    var props = this.props;
	    props.onItemHover({
	      hover: false,
	      item: this,
	      key: this.props.eventKey
	    });
	    this.triggerOpenChange(false);
	  },
	  bindRootCloseHandlers: function bindRootCloseHandlers() {
	    if (!this._onDocumentClickListener) {
	      this._onDocumentClickListener = (0, _addEventListener2["default"])(document, 'click', this.handleDocumentClick);
	      this._onDocumentKeyupListener = (0, _addEventListener2["default"])(document, 'keyup', this.handleDocumentKeyUp);
	    }
	  },
	  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	      this._onDocumentClickListener = null;
	    }

	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	      this._onDocumentKeyupListener = null;
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  }
	};
	module.exports = exports['default'];

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(408);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(132);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2["default"].unstable_batchedUpdates ? function run(e) {
	    _reactDom2["default"].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2["default"])(target, eventType, callback);
	}
	module.exports = exports['default'];

/***/ },

/***/ 517:
/***/ function(module, exports) {

	"use strict";

	module.exports = function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	};

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(10);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _KeyCode = __webpack_require__(506);

	var _KeyCode2 = _interopRequireDefault(_KeyCode);

	var _classnames = __webpack_require__(124);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(511);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/* eslint react/no-is-mounted:0 */

	var MenuItem = _react2["default"].createClass({
	  displayName: 'MenuItem',

	  propTypes: {
	    rootPrefixCls: _react.PropTypes.string,
	    eventKey: _react.PropTypes.string,
	    active: _react.PropTypes.bool,
	    children: _react.PropTypes.any,
	    selectedKeys: _react.PropTypes.array,
	    disabled: _react.PropTypes.bool,
	    title: _react.PropTypes.string,
	    onSelect: _react.PropTypes.func,
	    onClick: _react.PropTypes.func,
	    onDeselect: _react.PropTypes.func,
	    parentMenu: _react.PropTypes.object,
	    onItemHover: _react.PropTypes.func,
	    onDestroy: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onSelect: _util.noop,
	      onMouseEnter: _util.noop,
	      onMouseLeave: _util.noop
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	    if (props.parentMenu.menuItemInstance === this) {
	      this.clearMenuItemMouseLeaveTimer();
	    }
	  },
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    if (keyCode === _KeyCode2["default"].ENTER) {
	      this.onClick(e);
	      return true;
	    }
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    var _this = this;

	    var props = this.props;
	    var eventKey = props.eventKey,
	        parentMenu = props.parentMenu;

	    parentMenu.menuItemInstance = this;
	    parentMenu.menuItemMouseLeaveFn = function () {
	      if (_this.isMounted() && props.active) {
	        props.onItemHover({
	          key: eventKey,
	          item: _this,
	          hover: false,
	          domEvent: e,
	          trigger: 'mouseleave'
	        });
	      }
	    };
	    parentMenu.menuItemMouseLeaveTimer = setTimeout(parentMenu.menuItemMouseLeaveFn, 30);
	    props.onMouseLeave({
	      key: eventKey,
	      domEvent: e
	    });
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    var props = this.props;
	    var eventKey = props.eventKey,
	        parentMenu = props.parentMenu;

	    this.clearMenuItemMouseLeaveTimer(parentMenu.menuItemInstance !== this);
	    if (parentMenu.subMenuInstance) {
	      parentMenu.subMenuInstance.clearSubMenuTimers();
	    }
	    props.onItemHover({
	      key: eventKey,
	      item: this,
	      hover: true,
	      domEvent: e,
	      trigger: 'mouseenter'
	    });
	    props.onMouseEnter({
	      key: eventKey,
	      domEvent: e
	    });
	  },
	  onClick: function onClick(e) {
	    var props = this.props;
	    var selected = this.isSelected();
	    var eventKey = props.eventKey;
	    var info = {
	      key: eventKey,
	      keyPath: [eventKey],
	      item: this,
	      domEvent: e
	    };
	    props.onClick(info);
	    if (props.multiple) {
	      if (selected) {
	        props.onDeselect(info);
	      } else {
	        props.onSelect(info);
	      }
	    } else if (!selected) {
	      props.onSelect(info);
	    }
	  },
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-item';
	  },
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	  getSelectedClassName: function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  },
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	  clearMenuItemMouseLeaveTimer: function clearMenuItemMouseLeaveTimer() {
	    var props = this.props;
	    var callFn = void 0;
	    var parentMenu = props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	      if (callFn && parentMenu.menuItemMouseLeaveFn) {
	        parentMenu.menuItemMouseLeaveFn();
	      }
	      parentMenu.menuItemMouseLeaveFn = null;
	    }
	  },
	  isSelected: function isSelected() {
	    return this.props.selectedKeys.indexOf(this.props.eventKey) !== -1;
	  },
	  render: function render() {
	    var props = this.props;
	    var selected = this.isSelected();
	    var classes = {};
	    classes[this.getActiveClassName()] = !props.disabled && props.active;
	    classes[this.getSelectedClassName()] = selected;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getPrefixCls()] = true;
	    classes[props.className] = !!props.className;
	    var attrs = (0, _extends3["default"])({}, props.attribute, {
	      title: props.title,
	      className: (0, _classnames2["default"])(classes),
	      role: 'menuitem',
	      'aria-selected': selected,
	      'aria-disabled': props.disabled
	    });
	    var mouseEvent = {};
	    if (!props.disabled) {
	      mouseEvent = {
	        onClick: this.onClick,
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = (0, _extends3["default"])({}, props.style);
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2["default"].createElement(
	      'li',
	      (0, _extends3["default"])({
	        style: style
	      }, attrs, mouseEvent),
	      props.children
	    );
	  }
	});

	MenuItem.isMenuItem = 1;

	exports["default"] = MenuItem;
	module.exports = exports['default'];

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var MenuItemGroup = _react2["default"].createClass({
	  displayName: 'MenuItemGroup',

	  propTypes: {
	    renderMenuItem: _react.PropTypes.func,
	    index: _react.PropTypes.number,
	    className: _react.PropTypes.string,
	    rootPrefixCls: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	  renderInnerMenuItem: function renderInnerMenuItem(item, subIndex) {
	    var _props = this.props,
	        renderMenuItem = _props.renderMenuItem,
	        index = _props.index;

	    return renderMenuItem(item, index, subIndex);
	  },
	  render: function render() {
	    var props = this.props;
	    var _props$className = props.className,
	        className = _props$className === undefined ? '' : _props$className,
	        rootPrefixCls = props.rootPrefixCls;

	    var titleClassName = rootPrefixCls + '-item-group-title';
	    var listClassName = rootPrefixCls + '-item-group-list';
	    return _react2["default"].createElement(
	      'li',
	      { className: className + ' ' + rootPrefixCls + '-item-group' },
	      _react2["default"].createElement(
	        'div',
	        { className: titleClassName },
	        props.title
	      ),
	      _react2["default"].createElement(
	        'ul',
	        { className: listClassName },
	        _react2["default"].Children.map(props.children, this.renderInnerMenuItem)
	      )
	    );
	  }
	});

	MenuItemGroup.isMenuItemGroup = true;

	exports["default"] = MenuItemGroup;
	module.exports = exports['default'];

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var Divider = _react2["default"].createClass({
	  displayName: 'Divider',

	  propTypes: {
	    disabled: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    rootPrefixCls: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        _props$className = _props.className,
	        className = _props$className === undefined ? '' : _props$className,
	        rootPrefixCls = _props.rootPrefixCls;

	    return _react2["default"].createElement('li', { className: className + ' ' + rootPrefixCls + '-item-divider' });
	  }
	});

	exports["default"] = Divider;
	module.exports = exports['default'];

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cssAnimation = __webpack_require__(436);

	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function animate(node, show, done) {
	    var height = void 0;
	    return (0, _cssAnimation2["default"])(node, 'ant-motion-collapse', {
	        start: function start() {
	            if (!show) {
	                node.style.height = node.offsetHeight + 'px';
	            } else {
	                height = node.offsetHeight;
	                node.style.height = 0;
	            }
	        },
	        active: function active() {
	            node.style.height = (show ? height : 0) + 'px';
	        },
	        end: function end() {
	            node.style.height = '';
	            done();
	        }
	    });
	}
	var animation = {
	    enter: function enter(node, done) {
	        return animate(node, true, done);
	    },
	    leave: function leave(node, done) {
	        return animate(node, false, done);
	    },
	    appear: function appear(node, done) {
	        return animate(node, true, done);
	    }
	};
	exports["default"] = animation;
	module.exports = exports['default'];

/***/ }

})