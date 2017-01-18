webpackHotUpdate(0,{

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactBubbleChart = __webpack_require__(389);

	var _reactBubbleChart2 = _interopRequireDefault(_reactBubbleChart);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

	var BubbleChart = function (_React$Component) {
	  _inherits(BubbleChart, _React$Component);

	  function BubbleChart() {
	    _classCallCheck(this, BubbleChart);

	    return _possibleConstructorReturn(this, (BubbleChart.__proto__ || Object.getPrototypeOf(BubbleChart)).apply(this, arguments));
	  }

	  _createClass(BubbleChart, [{
	    key: 'render',
	    value: function render() {
	      var data = this.props.data.map(function (d) {
	        return {
	          _id: d._id,
	          value: d.value,
	          colorValue: d.sentiment,
	          selected: d.selected
	        };
	      });

	      return _react2.default.createElement(_reactBubbleChart2.default, null, 'className="my-cool-chart" colorLegend=', colorLegend, 'data=', data, 'selectedColor="#737373" selectedTextColor="#d9d9d9" fixedDomain=', { min: -1, max: 1 }, 'legend=', true, 'legendSpacing=', 0, 'tooltip=', false, 'tooltipProps=', tooltipProps);
	    }
	  }]);

	  return BubbleChart;
	}(_react2.default.Component);

	module.exports = BubbleChart;

/***/ }

})