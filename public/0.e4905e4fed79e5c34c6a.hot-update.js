webpackHotUpdate(0,{

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style2 = __webpack_require__(384);

	var _input = __webpack_require__(387);

	var _input2 = _interopRequireDefault(_input);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(205);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(396);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var InputConcept = _react2.default.createClass({
		displayName: 'InputConcept',
		getInitialState: function getInitialState() {
			return {
				concepts: [],
				courseId: 1
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseId + "_concepts");
			this.fire.on('value', updateConcepts);
		},
		updateConcepts: function updateConcepts(snapshot) {
			var conceptsArray = (0, _utils.toArray)(snapshot);
			this.setState({
				concepts: conceptsArray
			});
			console.log(this.state.concepts);
		},
		render: function render() {
			return _react2.default.createElement('div', null, _react2.default.createElement(_input2.default, { placeholder: 'Basic usage' }));
		}
	});
	exports.default = InputConcept;

/***/ }

})