webpackHotUpdate(0,{

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style5 = __webpack_require__(454);

	var _button = __webpack_require__(457);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(384);

	var _input = __webpack_require__(387);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(397);

	var _timeline = __webpack_require__(400);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _style8 = __webpack_require__(404);

	var _form = __webpack_require__(408);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(28);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(205);

	var firebase = _interopRequireWildcard(_firebase);

	var _utils = __webpack_require__(396);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var FormItem = _form2.default.Item;

	var InputConcept = _react2.default.createClass({
		displayName: 'InputConcept',
		getInitialState: function getInitialState() {
			return {
				concepts: [],
				courseId: 1,
				conceptInputValue: ''
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = firebase.database().ref(this.state.courseId + "/_concepts");
			this.fire.on('value', this.updateConcepts);
		},
		updateConcepts: function updateConcepts(snapshot) {
			var conceptsArray = (0, _utils.toArray)(snapshot.val());
			this.setState({
				concepts: conceptsArray
			});
			console.log(this.state.concepts);
		},
		handleConceptAdd: function handleConceptAdd(e) {
			this.fire.push({
				word: this.state.conceptInputValue
			});
		},
		handleConceptInputVlueChange: function handleConceptInputVlueChange(e) {
			this.setState({
				conceptInputValue: e.target.value
			});
		},
		render: function render() {
			var _this = this;

			return _react2.default.createElement('div', null, _react2.default.createElement(_timeline2.default, null, this.state.concepts.map(function (concept, index) {
				return _react2.default.createElement(_timeline2.default.Item, null, ' ', concept.word, ' ');
			})), _react2.default.createElement(_form2.default, null, _react2.default.createElement(FormItem, null, _react2.default.createElement(_input2.default, { placeholder: 'Basic usage', onPressEnter: function onPressEnter() {
					return _this.handleConceptAdd;
				}, onChange: function onChange() {
					return _this.handleConceptInputVlueChange;
				} })), _react2.default.createElement(FormItem, null, _react2.default.createElement(_button2.default, { type: 'primary', onClick: function onClick() {
					return _this.handleConceptAdd;
				} }, 'Add'))));
		}
	});
	exports.default = InputConcept;

/***/ }

})