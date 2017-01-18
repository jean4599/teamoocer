webpackHotUpdate(0,{

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactBubbleChart = __webpack_require__(389);

	var _reactBubbleChart2 = _interopRequireDefault(_reactBubbleChart);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var colorLegend = [
	//reds from dark to light
	{ color: "#67000d", text: 'Negative', textColor: "#ffffff" }, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
	//neutral grey
	{ color: "#f0f0f0", text: 'Neutral' },
	// blues from light to dark
	"#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", { color: "#08306b", text: 'Positive', textColor: "#ffffff" }];

	var tooltipProps = [{
	  css: 'symbol',
	  prop: '_id'
	}, {
	  css: 'value',
	  prop: 'value',
	  display: 'Last Value'
	}, {
	  css: 'change',
	  prop: 'colorValue',
	  display: 'Change'
	}];

	var BubbleChart = _react2.default.createClass({
	  displayName: 'BubbleChart',
	  render: function render() {
	    var data = this.props.data.map(function (d) {
	      return {
	        _id: d._id,
	        value: d.value,
	        colorValue: d.colorValue,
	        selected: d.selected,
	        displayText: d.displayText
	      };
	    });

	    return _react2.default.createElement(_reactBubbleChart2.default, null, 'className="my-cool-chart" colorLegend=', colorLegend, 'data=', data, 'selectedColor="#737373" selectedTextColor="#d9d9d9" fixedDomain=', { min: -1, max: 1 }, 'legend=', true, 'legendSpacing=', 0, 'tooltip=', false, 'tooltipProps=', tooltipProps);
	  }
	});

	exports.default = BubbleChart;

/***/ }

})