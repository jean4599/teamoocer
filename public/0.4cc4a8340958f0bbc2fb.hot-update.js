webpackHotUpdate(0,{

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vis = __webpack_require__(459);

	var _vis2 = _interopRequireDefault(_vis);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	// create an array with nodes
	var nodes = new _vis2.default.DataSet([{ id: 1, label: 'Node 1' }, { id: 2, label: 'Node 2' }, { id: 3, label: 'Node 3' }, { id: 4, label: 'Node 4' }, { id: 5, label: 'Node 5' }]);

	// create an array with edges
	var edges = new _vis2.default.DataSet([{ from: 1, to: 3 }, { from: 1, to: 2 }, { from: 2, to: 4 }, { from: 2, to: 5 }]);

	// create a network
	var data = {
	  nodes: nodes,
	  edges: edges
	};
	var options = {};
	var ConceptMapping = _react2.default.createClass({
	  displayName: 'ConceptMapping',

	  render: function render() {
	    var _this = this;

	    var network = new _vis2.default.Network(this.container, data, options);
	    return _react2.default.createElement('div', { ref: function ref(container) {
	        _this.container = container;
	      } });
	  }

	});
	exports.default = ConceptMapping;

/***/ }

})