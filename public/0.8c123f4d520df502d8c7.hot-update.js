webpackHotUpdate(0,{

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style5 = __webpack_require__(367);

	var _row = __webpack_require__(370);

	var _row2 = _interopRequireDefault(_row);

	var _style6 = __webpack_require__(432);

	var _card = __webpack_require__(435);

	var _card2 = _interopRequireDefault(_card);

	var _style7 = __webpack_require__(374);

	var _col = __webpack_require__(375);

	var _col2 = _interopRequireDefault(_col);

	var _style8 = __webpack_require__(417);

	var _tag = __webpack_require__(420);

	var _tag2 = _interopRequireDefault(_tag);

	var _react = __webpack_require__(120);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(305);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(412);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var colorLevel = ['#ff3300', '#009933', '#0033cc'];
	var ConceptAggregation = _react2.default.createClass({
	  displayName: 'ConceptAggregation',

	  getInitialState: function getInitialState() {
	    return {
	      concepts: [],
	      conceptsMap: {},
	      courseID: this.props.route.courseID,
	      selectedLevel: 0,
	      level1_concepts: [],
	      level2_concepts: [],
	      level3_concepts: []
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    console.log(this.state.courseID);
	    this.fire = _firebase2.default.database().ref(this.state.courseID + '/_concepts');
	    this.fire.on('value', this.updateConcepts);
	  },
	  updateConcepts: function updateConcepts(snapshot) {
	    var conceptsArray = (0, _utils.toArray)(snapshot.val());
	    this.setState({
	      conceptsMap: snapshot.val(),
	      concepts: conceptsArray
	    });
	  },
	  handleLevelChange: function handleLevelChange(level) {
	    if (this.state.selectedLevel != level) {
	      this.setState({ selectedLevel: level });
	    }
	  },
	  handleConceptClicked: function handleConceptClicked(key) {
	    console.log('key: ' + key);
	    console.log(this.state.conceptsMap);
	    console.log('set ' + this.state.conceptsMap.key.level + ' to level: ' + this.state.selectedLevel);
	    this.state.conceptsMap[key].level = this.state.selectedLevel;

	    var newConcepts = (0, _utils.toArray)(this.state.conceptsMap);
	    this.setState({ concepts: newConcepts });

	    var newLevel1 = (0, _utils.toArray)(newConcepts.filter(function (obj) {
	      return obj.level == 0;
	    }));
	    this.setState({ level1_concepts: newLevel1 });
	    var newLevel2 = (0, _utils.toArray)(newConcepts.filter(function (obj) {
	      return obj.level == 1;
	    }));
	    this.setState({ level2_concepts: newLevel2 });
	    var newLevel3 = (0, _utils.toArray)(newConcepts.filter(function (obj) {
	      return obj.level == 2;
	    }));
	    this.setState({ level3_concepts: newLevel3 });
	  },
	  cardStyle: function cardStyle(level) {
	    if (level == this.state.selectedLevel) return { border: '2px solid ' + colorLevel[level], width: 300 };else return { width: 300 };
	  },

	  render: function render() {
	    var _this = this;

	    return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 12 }, this.state.concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, { color: colorLevel[concept.level], onClick: function onClick() {
	          return _this.handleConceptClicked(concept.key);
	        } }, concept.word);
	    })), _react2.default.createElement(_col2.default, { span: 12 }, _react2.default.createElement(_card2.default, { title: 'Level 1', style: this.cardStyle(0), onClick: function onClick() {
	        return _this.handleLevelChange(0);
	      } }, this.state.level1_concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, null, concept.word);
	    })), _react2.default.createElement(_card2.default, { title: 'Level 2', style: this.cardStyle(1), onClick: function onClick() {
	        return _this.handleLevelChange(1);
	      } }, this.state.level2_concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, null, concept.word);
	    })), _react2.default.createElement(_card2.default, { title: 'Level 3', style: this.cardStyle(2), onClick: function onClick() {
	        return _this.handleLevelChange(2);
	      } }, this.state.level3_concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, null, concept.word);
	    }))));
	  }
	});
	exports.default = ConceptAggregation;

/***/ }

})