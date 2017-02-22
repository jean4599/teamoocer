webpackHotUpdate(0,{

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style2 = __webpack_require__(582);

	var _carousel = __webpack_require__(585);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ConceptMapInformation = _react2.default.createClass({
		displayName: 'ConceptMapInformation',

		render: function render() {
			return _react2.default.createElement(_carousel2.default, null, _react2.default.createElement('div', null, _react2.default.createElement('b', null, 'Component of a Concept Map'), _react2.default.createElement('br', null), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Nodes'), ' correspond to the concepts or important terms related to your studies of a topic. For example, the concept "water" can be defined by other concepts, such as liquid, solid, and gas.'), _react2.default.createElement('br', null), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Labeled links'), ' identify the type of relationship. The line between a pair of concepts denotes a relationship, and the label on the line tells how the two concepts are related. For example, in a concept map of seasons, the relationship between the amount of sunlight and temperature variations is labeled as "cause" \u2013 in other words it is an action relationship between antecedent and consequent. ')), _react2.default.createElement('div', null, _react2.default.createElement('b', null, 'Steps in Developing a Concept Map'), _react2.default.createElement('p', null, 'Step 1: List key concepts/terms related to the topic'), _react2.default.createElement('p', null, 'Step 2: What are the important concepts? Arrange concepts into hierarchy structure/groups'), _react2.default.createElement('p', null, 'Step 3: Identify links between concepts')), _react2.default.createElement('div', null, _react2.default.createElement('img', { src: './img/ConceptMap.jpg' })));
		}
	});
	exports.default = ConceptMapInformation;

/***/ }

})