webpackHotUpdate(0,{

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style8 = __webpack_require__(417);

	var _slider = __webpack_require__(423);

	var _slider2 = _interopRequireDefault(_slider);

	var _style9 = __webpack_require__(369);

	var _row = __webpack_require__(372);

	var _row2 = _interopRequireDefault(_row);

	var _style10 = __webpack_require__(376);

	var _col = __webpack_require__(377);

	var _col2 = _interopRequireDefault(_col);

	var _style11 = __webpack_require__(394);

	var _button = __webpack_require__(397);

	var _button2 = _interopRequireDefault(_button);

	var _style12 = __webpack_require__(477);

	var _card = __webpack_require__(480);

	var _card2 = _interopRequireDefault(_card);

	var _style13 = __webpack_require__(481);

	var _tag = __webpack_require__(484);

	var _tag2 = _interopRequireDefault(_tag);

	var _style14 = __webpack_require__(487);

	var _modal = __webpack_require__(490);

	var _modal2 = _interopRequireDefault(_modal);

	var _react = __webpack_require__(122);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(307);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _reactRouter = __webpack_require__(313);

	var _utils = __webpack_require__(414);

	var _VideoPlayer = __webpack_require__(378);

	var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var colorLevel = ['#ff3300', '#009933', '#0033cc'];
	var ConceptAggregation = _react2.default.createClass({
	  displayName: 'ConceptAggregation',

	  getInitialState: function getInitialState() {
	    return {
	      concepts: [],
	      courseID: this.props.route.courseID,
	      courseURL: this.props.route.courseURL,
	      selectedLevel: 0,
	      level1_concepts: [],
	      level2_concepts: [],
	      level3_concepts: [],
	      sliderValue: 0
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.fire = _firebase2.default.database().ref(this.state.courseID + '/_concepts');
	    this.fire.on('value', this.updateConcepts);
	  },
	  updateConcepts: function updateConcepts(snapshot) {
	    var conceptsArray = (0, _utils.toArray)(snapshot.val());
	    var marks = (0, _utils.getMarks)(snapshot.val(), 'played', 'word');
	    this.setState({
	      conceptsMap: snapshot.val(),
	      concepts: conceptsArray,
	      marks: marks
	    });
	  },
	  handleLevelChange: function handleLevelChange(level) {
	    if (this.state.selectedLevel != level) {
	      this.setState({ selectedLevel: level });
	    }
	  },
	  handleLevelSubmit: function handleLevelSubmit() {
	    var _this = this;

	    //check if every concept has level
	    var conceptsMap = this.state.conceptsMap;
	    var flag = true;
	    Object.keys(conceptsMap).map(function (key, index) {
	      if (conceptsMap[key]['level'] == undefined) flag = false;
	    });
	    if (flag == false) {
	      _modal2.default.warning({
	        title: 'Some concepts are missing in the levels',
	        content: 'You need to put all the concepts into the level boxes'
	      });
	    } else {
	      Object.keys(conceptsMap).map(function (key, index) {
	        _firebase2.default.database().ref(_this.state.courseID + '/_concepts/' + key).update({ level: conceptsMap[key]['level'] });
	      });
	      window.location.assign('/conceptMapping');
	    }
	  },
	  handleSliderChanged: function handleSliderChanged(value) {
	    this.setState({ sliderValue: value });
	    this.player.seekTo(parseFloat(value));
	  },
	  handleConceptClicked: function handleConceptClicked(key) {
	    var concept = this.state.conceptsMap[key];
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
	  handleConceptMouseOver: function handleConceptMouseOver(time) {
	    var value = time.toFixed(2);
	    this.handleSliderChanged(value);
	  },
	  cardStyle: function cardStyle(level) {
	    if (level == this.state.selectedLevel) return { border: '2px solid ' + colorLevel[level], width: 600 };else return { width: 600 };
	  },
	  showMark: function showMark(value) {
	    var result = this.state.concepts.filter(function (obj) {
	      return parseFloat(obj.played).toFixed(2) == value;
	    });
	    var show = "";
	    result.map(function (obj) {
	      show = show + ' ' + obj.word;
	    });
	    return show;
	  },

	  render: function render() {
	    var _this2 = this;

	    return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 12 }, _react2.default.createElement(_card2.default, { title: 'Level 1', style: this.cardStyle(0), onClick: function onClick() {
	        return _this2.handleLevelChange(0);
	      } }, this.state.level1_concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, null, concept.word);
	    })), _react2.default.createElement(_card2.default, { title: 'Level 2', style: this.cardStyle(1), onClick: function onClick() {
	        return _this2.handleLevelChange(1);
	      } }, this.state.level2_concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, null, concept.word);
	    })), _react2.default.createElement(_card2.default, { title: 'Level 3', style: this.cardStyle(2), onClick: function onClick() {
	        return _this2.handleLevelChange(2);
	      } }, this.state.level3_concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, null, concept.word);
	    })), _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 8, offset: 8 }, _react2.default.createElement(_button2.default, { type: 'primary', size: 'large', style: { margin: 10 }, onClick: function onClick() {
	        return _this2.handleLevelSubmit();
	      } }, ' Finish ')))), _react2.default.createElement(_col2.default, { span: 12 }, _react2.default.createElement(_card2.default, { style: { width: 640 } }, this.state.concepts.map(function (concept, index) {
	      return _react2.default.createElement(_tag2.default, { style: { fontSize: '20px' }, color: colorLevel[concept.level], onMouseEnter: function onMouseEnter() {
	          return _this2.handleConceptMouseOver(concept.played);
	        }, onClick: function onClick() {
	          return _this2.handleConceptClicked(concept.key);
	        } }, concept.word);
	    })), _react2.default.createElement(_slider2.default, { value: this.state.sliderValue, onChange: this.handleSliderChanged, tipFormatter: this.showMark, marks: this.state.marks, min: 0, max: 1, step: 0.01 }), _react2.default.createElement(_VideoPlayer2.default, { ref: function ref(player) {
	        _this2.player = player;
	      }, playing: false, courseURL: this.state.courseURL, width: 640, height: 390, controls: false })));
	  }
	});
	exports.default = ConceptAggregation;

/***/ }

})