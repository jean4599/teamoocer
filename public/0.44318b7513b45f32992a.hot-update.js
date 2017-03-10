webpackHotUpdate(0,{

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style5 = __webpack_require__(478);

	var _card = __webpack_require__(481);

	var _card2 = _interopRequireDefault(_card);

	var _style6 = __webpack_require__(377);

	var _button = __webpack_require__(380);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(401);

	var _input = __webpack_require__(404);

	var _input2 = _interopRequireDefault(_input);

	var _style8 = __webpack_require__(504);

	var _icon = __webpack_require__(161);

	var _icon2 = _interopRequireDefault(_icon);

	var _vis = __webpack_require__(505);

	var _vis2 = _interopRequireDefault(_vis);

	var _visMin = __webpack_require__(506);

	var _visMin2 = _interopRequireDefault(_visMin);

	var _style9 = __webpack_require__(521);

	var _style10 = _interopRequireDefault(_style9);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(162);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _firebase = __webpack_require__(308);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(415);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var options = {
		physics: {
			enabled: false
		},
		nodes: {
			chosen: false,
			shape: 'box',
			color: '#C0FCD0'
		},
		interaction: {
			hover: true,
			selectConnectedEdges: false
		},
		layout: {
			randomSeed: 100
		},
		locale: 'en',
		locales: {
			en: {
				edit: 'Edit',
				del: 'Delete selected',
				back: 'Back',
				addNode: 'Add Node',
				addEdge: 'Add Edge',
				editNode: 'Edit Node',
				editEdge: 'Edit Edge',
				addDescription: 'Click in an empty space to place a new node.',
				edgeDescription: 'Click on a node and drag the edge to another node to connect them.',
				editEdgeDescription: 'Click on the control points and drag them to a node to connect to it.',
				createEdgeError: 'Cannot link edges to a cluster.',
				deleteClusterError: 'Clusters cannot be deleted.',
				editClusterError: 'Clusters cannot be edited.'
			}
		}
	};
	var nodes = [];
	var edges = [];
	var data = {};
	var network = null;

	var ConceptMapping = _react2.default.createClass({
		displayName: 'ConceptMapping',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.courseID,
				courseURL: this.props.courseURL,
				data: {},
				mode: 'nomal',
				edgeLabelValue: '',
				requests: []
			};
		},
		componentDidMount: function componentDidMount() {
			var _this = this;
			//Initialize firebase access
			this.nodefire = _firebase2.default.database().ref(this.state.courseID + '/_network/_concepts');
			this.nodefire.on('value', this.updateConcept);
			this.edgefire = _firebase2.default.database().ref(this.state.courseID + '/_network/_edges');
			this.edgefire.on('value', this.updateEdge);

			options.manipulation = {
				addNode: function addNode(data, callback) {
					_this.setState({ displayAddNodePopup: 'block', newNodeData: data });
				},
				deleteNode: function deleteNode(data, callback) {
					var node = data.nodes[0];
					if (node) {
						_this.nodefire.child(node).remove();
					}
				},
				deleteEdge: function deleteEdge(data, callback) {
					var edge = data.edges[0];
					if (edge) {
						_this.edgefire.child(edge).remove();
					}
				},
				addEdge: function addEdge(data, callback) {
					if (data.from == data.to) {
						var r = confirm("Do you want to connect the node to itself?");
						if (r == true) {
							_this.setState({ newEdgeData: data });
							_this.saveNewEdge();
						}
					} else {
						_this.setState({ newEdgeData: data });
						_this.saveNewEdge();
					}
				}
			};
		},
		updateConcept: function updateConcept(snapshot) {
			var retreiveLabel = ['id', 'id', 'color', 'x', 'y'];
			var containerLabel = ['id', 'label', 'color', 'x', 'y'];
			nodes = (0, _utils.retrieveData)(snapshot.val(), retreiveLabel, containerLabel);
			nodes = new _vis2.default.DataSet(nodes);
			this.updateMap();
		},
		updateEdge: function updateEdge(snapshot) {
			var retreiveLabel = ['from', 'to', 'id', 'label', 'dashes'];
			var containerLabel = ['from', 'to', 'id', 'label', 'dashes'];
			edges = (0, _utils.retrieveData)(snapshot.val(), retreiveLabel, containerLabel);
			edges - new _vis2.default.DataSet(edges);
			this.updateMap();
		},
		updateMap: function updateMap() {
			var _this2 = this;

			//adjust the map to previous center
			var precenter = null;
			var prescale = null;
			if (nodes != [] && network != null) {
				precenter = network.getViewPosition();
				// console.log('the view position is');
				// console.log(precenter)
				prescale = network.getScale();
			}
			data = {
				nodes: nodes,
				edges: edges
			};
			network = new _vis2.default.Network(this.container, data, options);
			if (precenter && prescale) {
				network.moveTo({
					position: precenter,
					scale: prescale,
					animation: false
				});
				this.props.changeMapView(precenter.x, precenter.y);
			}
			network.on("doubleClick", function (params) {
				var edgeId = params['edges'][0];
				if (edgeId) {
					_this2.setState({ selectedEdge: edgeId, displayEditEdgePopup: 'block' });
				}
			});
			network.on("dragEnd", function (params) {
				var node = params['nodes'][0];
				if (node) {
					_firebase2.default.database().ref(_this2.state.courseID + "/_network/_concepts/" + node).update({
						x: params['pointer']['canvas']['x'],
						y: params['pointer']['canvas']['y']
					});
				} else {
					console.log('Drag the map');
					var position = network.getViewPosition();
					_this2.props.changeMapView(position.x, position.y);
				}
			});
			network.on("dragStart", function (params) {
				var node = params['nodes'][0];
			});
			this.setState({
				data: data,
				network: network
			});
			network.enableEditMode();
		},
		fitScreen: function fitScreen() {
			var fitnodes;
			this.nodefire.once('value').then(function (snapshot) {
				fitnodes = snapshot.val();
				fitnodes = Object.keys(fitnodes);
				console.log(fitnodes);
			});
			network.fit({
				nodes: fitnodes,
				animation: false
			});
		},
		handleEdgeLabelValueChange: function handleEdgeLabelValueChange(e) {
			this.setState({
				edgeLabelValue: e.target.value
			});
		},
		handleConceptInputChange: function handleConceptInputChange(e) {
			this.setState({ newConcept: e.target.value });
		},
		saveNewNode: function saveNewNode() {
			//savedata into firebase
			this.nodefire.child(this.state.newConcept).update({
				id: this.state.newConcept,
				word: this.state.newConcept,
				x: this.state.newNodeData.x,
				y: this.state.newNodeData.y
			});
			this.clearPopUp('addNode');
		},
		saveNewEdge: function saveNewEdge() {
			var key = this.edgefire.push({
				from: this.state.newEdgeData.from,
				to: this.state.newEdgeData.to,
				dashes: true
			}).key;
			_firebase2.default.database().ref(this.state.courseID + "/_network/_edges/" + key).update({ id: key });
		},
		saveNewEdgeLabel: function saveNewEdgeLabel() {
			_firebase2.default.database().ref(this.state.courseID + "/_network/_edges/" + this.state.selectedEdge).update({
				label: this.state.edgeLabelValue
			});
			this.clearPopUp('editEdge');
			this.props.sendLinkPhraseNotice(this.state.selectedEdge);
		},
		deleteNode: function deleteNode(node) {
			if (node) {
				_this.nodefire.child(node).remove();
			}
		},
		clearPopUp: function clearPopUp(type) {
			if (type == 'addNode') this.setState({ newConcept: '', displayAddNodePopup: 'none' });else if (type == 'editEdge') this.setState({ edgeLabelValue: '', displayEditEdgePopup: 'none' });
		},
		changeEdgeToSolidLine: function changeEdgeToSolidLine(edgeId) {
			this.edgefire.child(edgeId).update({ dashes: false });
		},
		render: function render() {
			var _this3 = this;

			var _ = this.state;

			return _react2.default.createElement('div', null, _react2.default.createElement('div', { id: 'network', ref: function ref(container) {
					_this3.container = container;
				} }, _.requests.map(function (request, index) {
				return _react2.default.createElement('div', { style: { left: request.x, top: request.y, xIndex: 2, position: 'relative' } }, _react2.default.createElement(_icon2.default, { type: 'exclamation-circle', style: { color: 'red', width: 80 } }));
			})), _react2.default.createElement(_card2.default, { title: 'Add a new node', id: 'network-popUp', style: { display: this.state.displayAddNodePopup } }, 'Concept: ', _react2.default.createElement(_input2.default, { id: 'concept-input', value: this.state.newConcept, placeholder: 'new concept', onChange: function onChange(e) {
					return _this3.handleConceptInputChange(e);
				} }), _react2.default.createElement('div', { className: 'center-container' }, _react2.default.createElement(_button2.default, { type: 'danger', size: 'small', onClick: function onClick() {
					return _this3.clearPopUp('addNode');
				} }, ' Cancel '), _react2.default.createElement(_button2.default, { type: 'primary', size: 'small', onClick: function onClick(e) {
					return _this3.saveNewNode();
				} }, ' Save '))), _react2.default.createElement(_card2.default, { title: 'Edit Link phrase', id: 'network-popUp', style: { display: this.state.displayEditEdgePopup } }, _react2.default.createElement(_input2.default, { id: 'edgeLabelInput', value: this.state.edgeLabelValue, placeholder: 'link phrase', onChange: function onChange(e) {
					return _this3.handleEdgeLabelValueChange(e);
				} }), _react2.default.createElement('div', { className: 'center-container' }, _react2.default.createElement(_button2.default, { type: 'danger', size: 'small', onClick: function onClick() {
					return _this3.clearPopUp('editEdge');
				} }, ' Cancel '), _react2.default.createElement(_button2.default, { type: 'primary', size: 'small', onClick: function onClick(e) {
					return _this3.saveNewEdgeLabel();
				} }, ' Save '))));
		}
	});
	exports.default = ConceptMapping;

/***/ }

})