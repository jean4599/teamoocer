webpackHotUpdate(0,{

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style6 = __webpack_require__(370);

	var _row = __webpack_require__(373);

	var _row2 = _interopRequireDefault(_row);

	var _style7 = __webpack_require__(377);

	var _button = __webpack_require__(380);

	var _button2 = _interopRequireDefault(_button);

	var _style8 = __webpack_require__(383);

	var _col = __webpack_require__(384);

	var _col2 = _interopRequireDefault(_col);

	var _style9 = __webpack_require__(401);

	var _input = __webpack_require__(404);

	var _input2 = _interopRequireDefault(_input);

	var _style10 = __webpack_require__(409);

	var _timeline = __webpack_require__(412);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(308);

	var firebase = _interopRequireWildcard(_firebase);

	var _utils = __webpack_require__(415);

	var _Duration = __webpack_require__(416);

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
				courseID: this.props.courseID,
				conceptInputValue: '',
				videoPlayerTime: this.props.getPlayedTime,
				jumpToTime: this.props.jumpToTime,
				user: (0, _utils.getCookie)('uid')
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = firebase.database().ref(this.state.courseID + "/_concepts/" + this.state.user);
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
			var key = this.fire.push({
				word: this.state.conceptInputValue,
				played: time.played,
				time: time.duration
			}).key;
			firebase.database().ref(this.state.courseID + "/_concepts/" + this.state.user + '/' + key).update({ id: key });
			this.setState({ conceptInputValue: '' });
		},
		handleConceptAggreagate: function handleConceptAggreagate() {
			var _this = this;

			this.state.concepts.map(function (concept, index) {
				var ref = firebase.database().ref(_this.state.courseID + "/_network/_concepts/" + concept['word']);
				ref.once('value').then(function (snapshot) {
					// handle read data.
					var c = snapshot.val().count;
					console.log(count);
					if (c) ref.update({ count: c + 1 });else ref.update({ count: 1 });
				});
			});
		},
		handleConceptInputVlueChange: function handleConceptInputVlueChange(e) {
			this.setState({
				conceptInputValue: e.target.value
			});
		},
		render: function render() {
			var _this2 = this;

			return _react2.default.createElement('div', null, _react2.default.createElement(_timeline2.default, null, this.state.concepts.map(function (concept, index) {
				return _react2.default.createElement(_timeline2.default.Item, { style: { cursor: 'pointer' }, onClick: function onClick() {
						return _this2.state.jumpToTime(concept.played);
					} }, ' ', concept.word, ' ', _react2.default.createElement(_Duration2.default, { seconds: concept.time }));
			})), _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 20 }, _react2.default.createElement(_input2.default, { placeholder: 'New concept', onPressEnter: function onPressEnter() {
					return _this2.handleConceptAdd();
				}, value: this.state.conceptInputValue, onChange: this.handleConceptInputVlueChange })), _react2.default.createElement(_col2.default, { span: 4 }, _react2.default.createElement(_button2.default, { type: 'primary', onClick: function onClick() {
					return _this2.handleConceptAdd();
				} }, 'Add'))));
		}
	});
	exports.default = InputConcept;

/***/ }

})