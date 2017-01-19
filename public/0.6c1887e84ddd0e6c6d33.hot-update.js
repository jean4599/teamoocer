webpackHotUpdate(0,{

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style8 = __webpack_require__(369);

	var _row = __webpack_require__(372);

	var _row2 = _interopRequireDefault(_row);

	var _style9 = __webpack_require__(502);

	var _dropdown = __webpack_require__(505);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style10 = __webpack_require__(400);

	var _input = __webpack_require__(403);

	var _input2 = _interopRequireDefault(_input);

	var _style11 = __webpack_require__(376);

	var _col = __webpack_require__(377);

	var _col2 = _interopRequireDefault(_col);

	var _style12 = __webpack_require__(394);

	var _button = __webpack_require__(397);

	var _button2 = _interopRequireDefault(_button);

	var _style13 = __webpack_require__(511);

	var _menu = __webpack_require__(514);

	var _menu2 = _interopRequireDefault(_menu);

	var _style14 = __webpack_require__(534);

	var _icon = __webpack_require__(160);

	var _icon2 = _interopRequireDefault(_icon);

	var _vis = __webpack_require__(535);

	var _vis2 = _interopRequireDefault(_vis);

	var _react = __webpack_require__(122);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(307);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(414);

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
			chosen: false,
			shape: 'box'
		}
	};
	var nodes = {};
	var edges = {};
	var data = {};
	var network = {};
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
				EdgeSubmitDisabled: true,
				edgeIcons: ["ellipsis", "minus", "arrow-right"],
				edgeLabelValue: ''
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/_concepts');
			this.fire.on('value', this.updateConcept);
		},
		updateConcept: function updateConcept(snapshot) {
			nodes = (0, _utils.retrieveData)(snapshot.val(), 'id', 'label', 'level', 'id', 'word', 'level');
			console.log(nodes);
			nodes = new _vis2.default.DataSet(nodes);
			this.updateMap();
		},
		updateMap: function updateMap() {
			var _this = this;

			data = {
				nodes: nodes,
				edges: edges
			};
			network = new _vis2.default.Network(this.container, data, options);
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
			network.on("hoverEdge", function (params) {
				console.log('hoverEdge Event:', params);
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
				var edgetype = this.state.edgeIcons[2];
				var edgelabel = this.state.edgeLabelValue;
				try {
					if (edgetype == 'ellipsis') {
						edges.add({
							id: Math.floor(Math.random() * 100 + 1),
							from: this.state.firstNode.nodes[0],
							to: this.state.secondNode.nodes[0],
							dashes: true,
							label: edgelabel
						});
					} else if (edgetype == 'arrow-right') {
						edges.add({
							id: Math.floor(Math.random() * 100 + 1),
							from: this.state.firstNode.nodes[0],
							to: this.state.secondNode.nodes[0],
							arrows: 'to',
							label: edgelabel
						});
					} else {
						edges.add({
							id: Math.floor(Math.random() * 100 + 1),
							from: this.state.firstNode.nodes[0],
							to: this.state.secondNode.nodes[0],
							label: edgelabel
						});
					}
				} catch (err) {
					alert(err);
				}
				this.setState({
					EdgeInputDisabled1: true,
					EdgeInputDisabled2: true,
					EdgeSubmitDisabled: true,
					edgeInputValue1: '',
					edgeInputValue2: '',
					edgeLabelValue: '',
					mode: "Nomal"
				});
			}
		},
		handleMenuClick: function handleMenuClick(e) {
			var edgeIcons = this.state.edgeIcons;
			var index = edgeIcons.indexOf(e.key);
			edgeIcons.splice(index, 1);
			edgeIcons.push(e.key);

			this.setState({ edgeIcons: edgeIcons });
		},
		handleEdgeLabelValueChange: function handleEdgeLabelValueChange(e) {
			this.setState({
				edgeLabelValue: e.target.value
			});
		},
		render: function render() {
			var _this2 = this;

			var _ = this.state;
			var menu = _react2.default.createElement(_menu2.default, { onClick: function onClick(e) {
					return _this2.handleMenuClick(e);
				} }, _react2.default.createElement(_menu2.default.Item, { key: _.edgeIcons[0] }, _react2.default.createElement(_icon2.default, { type: _.edgeIcons[0] })), _react2.default.createElement(_menu2.default.Item, { key: _.edgeIcons[1] }, _react2.default.createElement(_icon2.default, { type: _.edgeIcons[1] })));
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, { type: 'flex', justify: 'space-around', align: 'middle' }, _react2.default.createElement(_col2.default, { span: 2 }, _react2.default.createElement(_button2.default, { onClick: function onClick() {
					return _this2.addEdge('start');
				} }, 'Add Edge')), _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(_input2.default, { ref: function ref(input) {
					_this2.FirstNode = input;
				}, onFocus: function onFocus() {
					_this2.setState({ mode: 'AddEdge_SelectFirstNode' });
				}, addonBefore: 'From', disabled: _.EdgeInputDisabled1, placeholder: "click the starting node", value: _.edgeInputValue1 })), _react2.default.createElement(_col2.default, { span: 1 }, _react2.default.createElement(_dropdown2.default.Button, { overlay: menu, disabled: _.EdgeInputDisabled1, size: 'large' }, _react2.default.createElement(_icon2.default, { type: _.edgeIcons[2] }))), _react2.default.createElement(_col2.default, { span: 5 }, _react2.default.createElement(_input2.default, { ref: function ref(input) {
					_this2.SecondNode = input;
				}, onFocus: function onFocus() {
					_this2.setState({ mode: 'AddEdge_SelectSecondNode' });
				}, addonBefore: 'To', disabled: _.EdgeInputDisabled2, placeholder: "click the ending node", value: _.edgeInputValue2 })), _react2.default.createElement(_col2.default, { span: 6 }, _react2.default.createElement(_input2.default, { addonBefore: 'relation', onChange: function onChange(e) {
					return _this2.handleEdgeLabelValueChange(e);
				}, placeholder: "the derected relation between two nodes", disabled: _.EdgeInputDisabled2, value: _.edgeLabelValue })), _react2.default.createElement(_col2.default, { span: 2 }, _react2.default.createElement(_button2.default, { onClick: function onClick() {
					return _this2.addEdge('finish');
				}, htmlType: 'submit', disabled: _.EdgeSubmitDisabled }, 'Finish'))), _react2.default.createElement('div', { ref: function ref(container) {
					_this2.container = container;
				} }));
		}

	});
	exports.default = ConceptMapping;

/***/ }

})