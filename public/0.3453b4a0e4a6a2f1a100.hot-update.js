webpackHotUpdate(0,{

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(120);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var d3Chart = __webpack_require__(421);

	var Chart = _react2.default.createClass({
	  displayName: 'Chart',

	  propTypes: {
	    data: _react2.default.PropTypes.array,
	    domain: _react2.default.PropTypes.object
	  },

	  componentDidMount: function componentDidMount() {
	    var el = this.getDOMNode();
	    d3Chart.create(el, {
	      width: '100%',
	      height: '300px'
	    }, this.getChartState());
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    var el = this.getDOMNode();
	    d3Chart.update(el, this.getChartState());
	  },

	  getChartState: function getChartState() {
	    return {
	      data: this.props.data,
	      domain: this.props.domain
	    };
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var el = this.getDOMNode();
	    d3Chart.destroy(el);
	  },

	  render: function render() {
	    return _react2.default.createElement('div', { className: 'Chart' });
	  }
	});
	exports.default = Chart;

/***/ }

})