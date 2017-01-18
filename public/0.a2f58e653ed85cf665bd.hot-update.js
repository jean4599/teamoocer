webpackHotUpdate(0,{

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var d3Chart = __webpack_require__(421);

	var Chart = React.createClass({
	  displayName: 'Chart',

	  propTypes: {
	    data: React.PropTypes.array,
	    domain: React.PropTypes.object
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
	    return React.createElement('div', { className: 'Chart' });
	  }
	});
	exports.default = Chart;

/***/ },

/***/ 421:
/***/ function(module, exports) {

	'use strict';

	var d3Chart = {};

	d3Chart.create = function (el, props, state) {
	  var svg = d3.select(el).append('svg').attr('class', 'd3').attr('width', props.width).attr('height', props.height);

	  svg.append('g').attr('class', 'd3-points');

	  this.update(el, state);
	};

	d3Chart.update = function (el, state) {
	  // Re-compute the scales, and render the data points
	  var scales = this._scales(el, state.domain);
	  this._drawPoints(el, scales, state.data);
	};

	d3Chart.destroy = function (el) {
	  // Any clean-up would go here
	  // in this example there is nothing to do
	};
	d3Chart._drawPoints = function (el, scales, data) {
	  var g = d3.select(el).selectAll('.d3-points');

	  var point = g.selectAll('.d3-point').data(data, function (d) {
	    return d.id;
	  });

	  // ENTER
	  point.enter().append('circle').attr('class', 'd3-point');

	  // ENTER & UPDATE
	  point.attr('cx', function (d) {
	    return scales.x(d.x);
	  }).attr('cy', function (d) {
	    return scales.y(d.y);
	  }).attr('r', function (d) {
	    return scales.z(d.z);
	  });

	  // EXIT
	  point.exit().remove();
	};

/***/ }

})