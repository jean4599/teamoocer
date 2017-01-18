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

	var ConceptAggregation = _react2.default.createClass({
	  displayName: 'ConceptAggregation',

	  getInitialState: function getInitialState() {
	    return {
	      concepts: [],
	      conceptsMap: {},
	      courseID: this.props.route.courseID,
	      selectedLevel: 'l1'
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
	    console.log(this.state.concepts);
	  },
	  handleLevelChange: function handleLevelChange(e) {
	    if (this.state.selectedLevel != e.target.ref) {
	      console.log('change');
	    }
	  },

	  render: function render() {
	    var _this = this;

	    return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, null, this.state.concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, { color: _this.tagColor(concept.level) }, concept.word);
	    })), _react2.default.createElement(_col2.default, null, _react2.default.createElement(_card2.default, { ref: 'l1', title: 'Level 1', style: { width: 300 }, onClick: this.handleLevelChange }, this.state.level1_concepts), _react2.default.createElement(_card2.default, { ref: 'l2', title: 'Level 2', style: { width: 300 }, onClick: this.handleLevelChange }, this.state.level2_concepts), _react2.default.createElement(_card2.default, { ref: 'l3', title: 'Level 3', style: { width: 300 }, onClick: this.handleLevelChange }, this.state.level3_concepts)));
	  }
	});
	exports.default = ConceptAggregation;

/***/ }

})