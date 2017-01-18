webpackHotUpdate(0,{

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(120);

	var _react2 = _interopRequireDefault(_react);

	var _d3Chart = __webpack_require__(421);

	var _d3Chart2 = _interopRequireDefault(_d3Chart);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var Chart = _react2.default.createClass({
	  displayName: 'Chart',

	  propTypes: {
	    data: _react2.default.PropTypes.array,
	    domain: _react2.default.PropTypes.object
	  },

	  componentDidMount: function componentDidMount() {
	    var el = _reactDom2.default.findDOMNode(this);
	    _d3Chart2.default.create(el, {
	      width: '100%',
	      height: '300px'
	    }, this.getChartState());
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    var el = _reactDom2.default.findDOMNode(this);
	    _d3Chart2.default.update(el, this.getChartState());
	  },

	  getChartState: function getChartState() {
	    return {
	      data: this.props.data,
	      domain: this.props.domain
	    };
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var el = _reactDom2.default.findDOMNode(this);
	    _d3Chart2.default.destroy(el);
	  },

	  render: function render() {
	    return _react2.default.createElement('div', { className: 'Chart' });
	  }
	});
	exports.default = Chart;

/***/ }

})