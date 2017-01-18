webpackHotUpdate(0,{

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(340);

	var _row = __webpack_require__(343);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(365);

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

	// create an array with nodes
	// var nodes = new vis.DataSet([
	//   {id: 1, label: 'Node 1'},
	//   {id: 2, label: 'Node 2'},
	//   {id: 3, label: 'Node 3'},
	//   {id: 4, label: 'Node 4'},
	//   {id: 5, label: 'Node 5'}
	// ]);

	// // create an array with edges
	// var edges = new vis.DataSet([
	//   {from: 1, to: 3},
	//   {from: 1, to: 2},
	//   {from: 2, to: 4},
	//   {from: 2, to: 5}
	// ]);

	// // create a network
	// var data = {
	//   nodes: nodes,
	//   edges: edges
	// };
	_vis2.default.selectNode = function () {
		console.log('select node');
	};
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
				mode: 'nomal'
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/_concepts');
			this.fire.on('value', this.updateConcept);
			var network = new _vis2.default.Network(this.container, this.state.data, options);
		},
		updateConcept: function updateConcept(snapshot) {
			var nodes = (0, _utils.retrieveData)(snapshot.val(), 'id', 'label', 'level', 'id', 'word', 'level');
			console.log(nodes);
			nodes = new _vis2.default.DataSet(nodes);

			var edges = new _vis2.default.DataSet([{ from: 1, to: 3 }, { from: 1, to: 2 }, { from: 2, to: 4 }]);
			var data = {
				nodes: nodes,
				edges: edges
			};
			var network = new _vis2.default.Network(this.container, data, options);
			this.setState({
				data: data,
				network: network
			});
		},

		render: function render() {
			var _this = this;

			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, null, _react2.default.createElement(_button2.default, { onClick: this.setState({ mode: 'addingEdge' }) }, 'Add Edge')), _react2.default.createElement('div', { ref: function ref(container) {
					_this.container = container;
				} }));
		}

	});
	exports.default = ConceptMapping;

/***/ }

})