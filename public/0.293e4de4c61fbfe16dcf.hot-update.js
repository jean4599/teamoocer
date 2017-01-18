webpackHotUpdate(0,{

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style6 = __webpack_require__(368);

	var _row = __webpack_require__(371);

	var _row2 = _interopRequireDefault(_row);

	var _style7 = __webpack_require__(432);

	var _button = __webpack_require__(435);

	var _button2 = _interopRequireDefault(_button);

	var _style8 = __webpack_require__(375);

	var _col = __webpack_require__(376);

	var _col2 = _interopRequireDefault(_col);

	var _style9 = __webpack_require__(438);

	var _input = __webpack_require__(441);

	var _input2 = _interopRequireDefault(_input);

	var _style10 = __webpack_require__(446);

	var _timeline = __webpack_require__(449);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _react = __webpack_require__(121);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(306);

	var firebase = _interopRequireWildcard(_firebase);

	var _utils = __webpack_require__(502);

	var _Duration = __webpack_require__(505);

	var _Duration2 = _interopRequireDefault(_Duration);

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

	var InputConcept = _react2.default.createClass({
		displayName: 'InputConcept',
		getInitialState: function getInitialState() {
			return {
				concepts: [],
				courseId: 1,
				conceptInputValue: '',
				videoPlayerTime: this.props.getPlayedTime,
				jumpToTime: this.props.jumpToTime
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
		handleConceptAdd: function handleConceptAdd() {
			var time = this.state.videoPlayerTime();
			this.fire.push({
				word: this.state.conceptInputValue,
				played: time.played,
				time: time.duration
			});
			this.setState({ conceptInputValue: '' });
		},
		handleConceptInputVlueChange: function handleConceptInputVlueChange(e) {
			this.setState({
				conceptInputValue: e.target.value
			});
		},
		render: function render() {
			var _this = this;

			return _react2.default.createElement('div', null, _react2.default.createElement(_timeline2.default, null, this.state.concepts.map(function (concept, index) {
				return _react2.default.createElement(_timeline2.default.Item, { style: { cursor: 'pointer' }, onClick: function onClick() {
						return _this.state.jumpToTime(concept.played);
					} }, ' ', concept.word, ' ', _react2.default.createElement(_Duration2.default, { seconds: concept.time }));
			})), _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 20 }, _react2.default.createElement(_input2.default, { placeholder: 'New concept', onPressEnter: function onPressEnter() {
					return _this.handleConceptAdd();
				}, value: this.state.conceptInputValue, onChange: this.handleConceptInputVlueChange })), _react2.default.createElement(_col2.default, { span: 4 }, _react2.default.createElement(_button2.default, { type: 'primary', onClick: function onClick() {
					return _this.handleConceptAdd();
				} }, 'Add'))));
		}
	});
	exports.default = InputConcept;

/***/ }

})