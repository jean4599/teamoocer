webpackHotUpdate(0,{

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	exports.toArray = toArray;
	exports.getMarks = getMarks;
	exports.retrieveData = retrieveData;

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function toArray(obj) {
	  if (!obj) return [];

	  var arr = Object.keys(obj).map(function (key, index) {
	    var result = clone(obj[key]);
	    result.key = key;
	    return result;
	  });
	  return arr;
	}
	function getMarks(obj, getkeys, values) {
	  var result = {};
	  Object.keys(obj).map(function (key, index) {
	    var r_key = obj[key][getkeys].toFixed(2);
	    var r_value = obj[key][values];
	    if (result[r_key] != null) {
	      console.log(result[r_key]['value']);
	      r_value = result[r_key]['value'] + ' ,' + r_value;
	    }
	    result[r_key] = '';
	  });
	  return result;
	}
	function retrieveData(obj, key1, key2, key3, val1, val2, val3) {
	  var result = Object.keys(obj).map(function (key, index) {
	    var r = {};
	    if (key1 != null) {
	      var value1 = obj[key][val1];
	      r[key1] = value1;
	    }
	    if (key2 != null) {
	      var value2 = obj[key][val2];
	      r[key2] = value2;
	    }
	    if (key3 != null) {
	      var value3 = obj[key][val3];
	      r[key3] = value3;
	    }
	    return r;
	  });
	  return result;
	}

	function clone(obj) {
	  if (null == obj || "object" != (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;
	  var copy = obj.constructor();
	  for (var attr in obj) {
	    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	  }
	  return copy;
	}

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style8 = __webpack_require__(340);

	var _row = __webpack_require__(343);

	var _row2 = _interopRequireDefault(_row);

	var _style9 = __webpack_require__(490);

	var _dropdown = __webpack_require__(493);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style10 = __webpack_require__(371);

	var _input = __webpack_require__(374);

	var _input2 = _interopRequireDefault(_input);

	var _style11 = __webpack_require__(347);

	var _col = __webpack_require__(348);

	var _col2 = _interopRequireDefault(_col);

	var _style12 = __webpack_require__(365);

	var _button = __webpack_require__(368);

	var _button2 = _interopRequireDefault(_button);

	var _style13 = __webpack_require__(499);

	var _menu = __webpack_require__(502);

	var _menu2 = _interopRequireDefault(_menu);

	var _style14 = __webpack_require__(522);

	var _icon = __webpack_require__(131);

	var _icon2 = _interopRequireDefault(_icon);

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
	var edgeIcons = ["arrow-right", "minus", "ellipsis"];

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

		handleMenuClick: function handleMenuClick(e) {
			console.log(e);
			var index = edgeIcons.indexOf(e.key);
			edgeIcons.splice(index, 1);
		},
		render: function render() {
			var _this2 = this;

			var _ = this.state;
			var menu = _react2.default.createElement(_menu2.default, { onClick: function onClick() {
					return _this2.handleMenuClick();
				} }, _react2.default.createElement(_menu2.default.Item, { key: edgeIcons[0] }, _react2.default.createElement(_icon2.default, { type: edgeIcons[0] })), _react2.default.createElement(_menu2.default.Item, { key: edgeIcons[1] }, _react2.default.createElement(_icon2.default, { type: edgeIcons[1] })));
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 2 }, _react2.default.createElement(_button2.default, { onClick: function onClick() {
					return _this2.addEdge('start');
				} }, 'Add Edge')), _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(_input2.default, { ref: function ref(input) {
					_this2.FirstNode = input;
				}, addonBefore: 'From', disabled: _.EdgeInputDisabled1, placeholder: "click the starting node", value: _.edgeInputValue1 })), _react2.default.createElement(_col2.default, { span: 1 }, _react2.default.createElement(_dropdown2.default, { overlay: menu }, _react2.default.createElement(_button2.default, null, _react2.default.createElement(_icon2.default, { type: edgeIcons[2] }), ' ', _react2.default.createElement(_icon2.default, { type: 'down' })))), _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(_input2.default, { ref: function ref(input) {
					_this2.SecondNode = input;
				}, addonBefore: 'To', disabled: _.EdgeInputDisabled2, placeholder: "click the ending node", value: _.edgeInputValue2 })), _react2.default.createElement(_col2.default, { span: 6 }, _react2.default.createElement(_input2.default, { addonBefore: 'relation', placeholder: "the derected relation between two nodes ex: " })), _react2.default.createElement(_col2.default, { span: 2 }, _react2.default.createElement(_button2.default, { onClick: function onClick() {
					return _this2.addEdge('finish');
				}, htmlType: 'submit', disabled: _.EdgeSubmitDisabled }, 'Finish'))), _react2.default.createElement('div', { ref: function ref(container) {
					_this2.container = container;
				} }));
		}

	});
	exports.default = ConceptMapping;

/***/ }

})