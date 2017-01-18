webpackHotUpdate(0,{

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style4 = __webpack_require__(367);

	var _row = __webpack_require__(370);

	var _row2 = _interopRequireDefault(_row);

	var _style5 = __webpack_require__(374);

	var _col = __webpack_require__(375);

	var _col2 = _interopRequireDefault(_col);

	var _style6 = __webpack_require__(417);

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
	      courseID: this.props.route.courseID
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
	      concepts: conceptsArray
	    });
	    console.log(this.state.concepts);
	  },

	  render: function render() {
	    var _this = this;

	    return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, null, this.state.concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, { color: _this.tagColor(concept.level) }, concept.word);
	    })), _react2.default.createElement(_col2.default, null, _react2.default.createElement(_col2.default, null, this.state.concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, { color: _this.tagColor(concept.level) }, concept.word);
	    }))));
	  }
	});
	exports.default = ConceptAggregation;

/***/ }

})