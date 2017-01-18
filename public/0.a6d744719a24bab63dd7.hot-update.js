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
	    })), _react2.default.createElement(_col2.default, null, _react2.default.createElement(_card2.default, { title: 'Level 1', style: { width: 300 } }), _react2.default.createElement(_card2.default, { title: 'Level 2', style: { width: 300 } }), _react2.default.createElement(_card2.default, { title: 'Level 3', style: { width: 300 } })));
	  }
	});
	exports.default = ConceptAggregation;

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(29);

	__webpack_require__(433);

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(434);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(434, function() {
				var newContent = __webpack_require__(434);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports


	// module
	exports.push([module.id, ".ant-card {\n  background: #fff;\n  border-radius: 2px;\n  font-size: 12px;\n  position: relative;\n  overflow: hidden;\n  transition: all .3s;\n}\n.ant-card:hover {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);\n  border-color: transparent;\n  z-index: 1;\n}\n.ant-card-bordered {\n  border: 1px solid #e9e9e9;\n}\n.ant-card-head {\n  height: 48px;\n  line-height: 48px;\n  border-bottom: 1px solid #e9e9e9;\n  padding: 0 24px;\n}\n.ant-card-head-title {\n  font-size: 14px;\n  display: inline-block;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.ant-card-extra {\n  position: absolute;\n  right: 24px;\n  top: 14px;\n}\n.ant-card-body {\n  padding: 24px;\n}\n.ant-card-loading .ant-card-body {\n  user-select: none;\n}\n.ant-card-loading-block {\n  display: inline-block;\n  margin: 5px 1% 0;\n  height: 14px;\n  border-radius: 2px;\n  background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));\n  animation: card-loading 1.4s ease infinite;\n  background-size: 600% 600%;\n}\n@keyframes card-loading {\n  0%,\n  100% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n", ""]);

	// exports


/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(37);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(153);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(120);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(151);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	  var t = {};
	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	  }return t;
	};

	exports["default"] = function (props) {
	  var _classNames;

	  var _props$prefixCls = props.prefixCls,
	      prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
	      className = props.className,
	      extra = props.extra,
	      bodyStyle = props.bodyStyle,
	      title = props.title,
	      loading = props.loading,
	      _props$bordered = props.bordered,
	      bordered = _props$bordered === undefined ? true : _props$bordered,
	      others = __rest(props, ["prefixCls", "className", "extra", "bodyStyle", "title", "loading", "bordered"]);

	  var children = props.children;
	  var classString = (0, _classnames2["default"])(prefixCls, className, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3["default"])(_classNames, prefixCls + '-bordered', bordered), _classNames));
	  if (loading) {
	    children = _react2["default"].createElement(
	      'div',
	      null,
	      _react2["default"].createElement('p', { className: prefixCls + '-loading-block', style: { width: '94%' } }),
	      _react2["default"].createElement(
	        'p',
	        null,
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '28%' } }),
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '62%' } })
	      ),
	      _react2["default"].createElement(
	        'p',
	        null,
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '22%' } }),
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '66%' } })
	      ),
	      _react2["default"].createElement(
	        'p',
	        null,
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '56%' } }),
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '39%' } })
	      ),
	      _react2["default"].createElement(
	        'p',
	        null,
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '21%' } }),
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '15%' } }),
	        _react2["default"].createElement('span', { className: prefixCls + '-loading-block', style: { width: '40%' } })
	      )
	    );
	  }
	  var head = void 0;
	  if (!title) {
	    head = null;
	  } else {
	    head = typeof title === 'string' ? _react2["default"].createElement(
	      'div',
	      { className: prefixCls + '-head' },
	      _react2["default"].createElement(
	        'h3',
	        { className: prefixCls + '-head-title' },
	        title
	      )
	    ) : _react2["default"].createElement(
	      'div',
	      { className: prefixCls + '-head' },
	      _react2["default"].createElement(
	        'div',
	        { className: prefixCls + '-head-title' },
	        title
	      )
	    );
	  }
	  return _react2["default"].createElement(
	    'div',
	    (0, _extends3["default"])({}, others, { className: classString }),
	    head,
	    extra ? _react2["default"].createElement(
	      'div',
	      { className: prefixCls + '-extra' },
	      extra
	    ) : null,
	    _react2["default"].createElement(
	      'div',
	      { className: prefixCls + '-body', style: bodyStyle },
	      children
	    )
	  );
	};

	module.exports = exports['default'];

/***/ }

})