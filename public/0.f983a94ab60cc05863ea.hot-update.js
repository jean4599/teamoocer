webpackHotUpdate(0,{

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports


	// module
	exports.push([module.id, " body{\n  overflow-y: scroll;\n }\n #network-container{\n  position: fixed;\n  top: 120px;\n  left: 340px;\n }\n /*cursor*/\n #cursor-panel{\n  position: fixed;\n  top: 120px;\n  left: 340px;\n  background-color: white;\n  padding-left: 10px;\n  border: 1px solid lightgray;\n  width: 800px;\n  height: 630px;\n }\n .cursor{\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  opacity: 0.1\n }\n #network{\n  position: fixed;\n  top: 120px;\n  left: 340px;\n  z-index: 10;\n  background-color: rgba(0,0,0,0); \n  padding-left: 10px;\n  border: 1px solid lightgray;\n  width: 800px;\n  height: 630px;\n }\n #network-popUp {\n    display:none;\n    width: 300;\n    z-index: 100;\n    position: fixed;\n    top:350px;\n    left:170px;\n  }\n/*index*/\n  #concept-input{\n    width: 150;\n  }\n  .account-input{\n    width: 320;\n  }\n  .center-container{\n    margin: 10;\n    text-align: center\n  }\n.title {\n  color: #d7ceb2;\n  font: 80px 'BazarMedium';\n  letter-spacing: 8px;\n}\n.slogan{\n  font-size: 16px;\n  padding: 20px;\n  text-align: center;\n}\n.account-input-container{\n  padding: 10px;\n  text-align: center;\n}\n.account-input-btn{\n  width: 200px;\n  margin: 5px;\n}\n.login-form {\n  max-width: 300px;\n}\n.login-form-forgot {\n  float: right;\n}\n.login-form-button {\n  width: 100%;\n}\n/*common usage*/\n.left{\n  float: left;\n}\n.right{\n  float: right;\n}\n.full-length{\n  width: 100%;\n}\n/*comfirm card*/\n#toggle-icon{\n  width: 20px;\n  float: right;\n}\n.node{\n  background: #49a9ee;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.link{\n  width:100%;\n  height:3px;\n  background: #f03451;\n  margin: auto; \n}\n.comfirm-graph{\n  text-align: center;\n}\n.comfirm-graph-container{\n  margin: 10px 0;\n}\n.comfirm-graph-container.graph{\n  height: 8px;\n}\n.message-container{\n  background-color: #f7f7f7;\n  border-radius: 2%;\n  padding: 0 5px;\n  max-height: 150px;\n  overflow-y: scroll; \n}\n/*chat*/\n.chat-area{\n  position: fixed;\n  top: 120px;\n  left: 1150px;\n  width: 250;\n}\n.chat-container{\n  margin: 5px;\n  padding: 5px;\n  height: 600px;\n  border: 1px solid #f7f7f7;\n  background-color: #fcfcfc;\n  border-radius: 2%;\n  overflow-y: scroll;\n}\n.chat-input{\n  margin: 0 5px;\n}\n.info-container{\n  width: 1000px;\n  height: 500px;\n}", ""]);

	// exports


/***/ },

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
			return _react2.default.createElement(_carousel2.default, null, _react2.default.createElement('div', { className: 'info-container' }, _react2.default.createElement('b', null, 'Component of a Concept Map'), _react2.default.createElement('br', null), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Nodes'), ' correspond to the concepts or important terms related to your studies of a topic. For example, the concept "water" can be defined by other concepts, such as liquid, solid, and gas.'), _react2.default.createElement('br', null), _react2.default.createElement('p', null, _react2.default.createElement('b', null, 'Labeled links'), ' identify the type of relationship. The line between a pair of concepts denotes a relationship, and the label on the line tells how the two concepts are related. For example, in a concept map of seasons, the relationship between the amount of sunlight and temperature variations is labeled as "cause" \u2013 in other words it is an action relationship between antecedent and consequent. ')), _react2.default.createElement('div', { className: 'info-container' }, _react2.default.createElement('b', null, 'Steps in Developing a Concept Map'), _react2.default.createElement('p', null, 'Step 1: List key concepts/terms related to the topic'), _react2.default.createElement('p', null, 'Step 2: What are the important concepts? Arrange concepts into hierarchy structure/groups'), _react2.default.createElement('p', null, 'Step 3: Identify links between concepts')), _react2.default.createElement('div', { className: 'info-container' }, _react2.default.createElement('img', { src: './img/ConceptMap.jpg' })));
		}
	});
	exports.default = ConceptMapInformation;

/***/ }

})