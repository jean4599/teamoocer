webpackHotUpdate(0,{

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style5 = __webpack_require__(340);

	var _row = __webpack_require__(343);

	var _row2 = _interopRequireDefault(_row);

	var _style6 = __webpack_require__(371);

	var _input = __webpack_require__(374);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(347);

	var _col = __webpack_require__(348);

	var _col2 = _interopRequireDefault(_col);

	var _style8 = __webpack_require__(365);

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
		}
	};
	var ConceptMapping = _react2.default.createClass({
		displayName: 'ConceptMapping',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.route.courseID,
				courseURL: this.props.route.courseURL,
				data: {},
				mode: 'nomal',
				concepts: {}
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/_concepts');
			this.fire.on('value', this.updateConcept);
		},
		updateConcept: function updateConcept(snapshot) {
			var _this = this;

			var nodes = (0, _utils.retrieveData)(snapshot.val(), 'id', 'label', 'level', 'id', 'word', 'level');
			console.log(nodes);
			nodes = new _vis2.default.DataSet(nodes);

			var edges = new _vis2.default.DataSet([{ from: 1, to: 3 }, { from: 1, to: 2 }, { from: 2, to: 4 }]);
			var data = {
				nodes: nodes,
				edges: edges
			};
			var network = new _vis2.default.Network(this.container, data, options);
			network.on("selectNode", function (params) {
				var _ = _this.state;
				var word = _.concepts[params['nodes'][0]]['word'];
				console.log('word ' + word);
				if (_.mode == "AddEdge_SelectFirstNode") {
					_this.setState({ firstNode: word });
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
		selectNode: function selectNode() {},
		addEdge: function addEdge() {
			this.setState({
				mode: "AddEdge_SelectFirstNode"
			});
		},

		render: function render() {
			var _this2 = this;

			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 8 }, _react2.default.createElement(_button2.default, { onClick: function onClick() {
					return _this2.addEdge();
				} }, 'Add Edge')), _react2.default.createElement(_col2.default, { span: 8 }, _react2.default.createElement(_input2.default, { addonBefore: 'From', disabled: true, placeholder: "click the starting node", value: _.firstNode })), _react2.default.createElement(_col2.default, { span: 8 }, _react2.default.createElement(_input2.default, { addonBefore: 'To', disabled: true, placeholder: "click the ending node", value: _.secondNode }))), _react2.default.createElement('div', { ref: function ref(container) {
					_this2.container = container;
				} }));
		}

	});
	exports.default = ConceptMapping;

/***/ }

})