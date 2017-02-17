webpackHotUpdate(0,{

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	exports.toArray = toArray;
	exports.getMarks = getMarks;
	exports.retrieveData = retrieveData;
	exports.setCookie = setCookie;

	var _react = __webpack_require__(124);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function toArray(obj) {
	  if (!obj) return [];

	  var arr = Object.keys(obj).map(function (key, index) {
	    var result = clone(obj[key]);
	    result.key = key;
	    return result;
	  });
	  return arr;
	}
	function getMarks(obj, getkeys, values) {
	  var result = {};
	  Object.keys(obj).map(function (key, index) {
	    var r_key = obj[key][getkeys].toFixed(2);
	    var r_value = obj[key][values];
	    if (result[r_key] != null) {
	      console.log(result[r_key]['value']);
	      r_value = result[r_key]['value'] + ' ,' + r_value;
	    }
	    result[r_key] = '';
	  });
	  return result;
	}
	function retrieveData(obj, froms, tos) {
	  if (obj && froms && tos && froms.length == tos.length) {
	    var result = Object.keys(obj).map(function (key, index) {
	      var r = {};
	      for (var i = 0; i < froms.length; i++) {
	        r[tos[i]] = obj[key][froms[i]];
	      }
	      return r;
	    });
	    return result;
	  }
	}
	function setCookie(cname, cvalue, exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	  var expires = "expires=" + d.toGMTString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	function clone(obj) {
	  if (null == obj || "object" != (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) return obj;
	  var copy = obj.constructor();
	  for (var attr in obj) {
	    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	  }
	  return copy;
	}

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(371);

	var _row = __webpack_require__(374);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(384);

	var _col = __webpack_require__(385);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(124);

	var _react2 = _interopRequireDefault(_react);

	var _LoginForm = __webpack_require__(525);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var IndexView = _react2.default.createClass({
		displayName: 'IndexView',

		render: function render() {
			var _ = this.state;
			return _react2.default.createElement('div', null, _react2.default.createElement(_row2.default, { type: 'flex', justify: 'center', className: 'title' }, _react2.default.createElement(_col2.default, { span: 8 }, 'TEAMoocer')), _react2.default.createElement(_row2.default, { type: 'flex', justify: 'center' }, _react2.default.createElement(_col2.default, { span: 24, className: 'slogan' }, ' Join us and start progressive peer learning! ')), _react2.default.createElement(_row2.default, { type: 'flex', justify: 'center' }, ' ', _react2.default.createElement(_LoginForm2.default, null), ' '));
		}
	});
	exports.default = IndexView;

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style5 = __webpack_require__(378);

	var _button = __webpack_require__(381);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(402);

	var _input = __webpack_require__(405);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(504);

	var _icon = __webpack_require__(162);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(539);

	var _form = __webpack_require__(543);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(124);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(309);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(416);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var FormItem = _form2.default.Item;

	var NormalLoginForm = _form2.default.create()(_react2.default.createClass({
	  displayName: 'NormalLoginForm',

	  componentDidMount: function componentDidMount() {
	    _firebase2.default.auth().onAuthStateChanged(function (user) {
	      if (user) {
	        //user has logged in!
	        window.location.assign('/conceptExtraction');
	      }
	    });
	  },
	  handleSubmit: function handleSubmit(e) {
	    var _this = this;

	    e.preventDefault();
	    this.props.form.validateFields(function (err, values) {
	      if (!err) {
	        console.log('Received values of form: ', values);
	        _this.login(values['email'], values['password']);
	      }
	    });
	  },
	  login: function login(email, password) {
	    var promise = _firebase2.default.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
	      // Handle Errors here.
	      var errorCode = error.code;
	      var errorMessage = error.message;
	      if (errorCode === 'auth/wrong-password') {
	        alert('Wrong password.');
	      } else {
	        alert(errorMessage);
	      }
	      console.log(error);
	    });
	  },
	  render: function render() {
	    var getFieldDecorator = this.props.form.getFieldDecorator;

	    return _react2.default.createElement(_form2.default, { onSubmit: this.handleSubmit, className: 'login-form' }, _react2.default.createElement(FormItem, null, getFieldDecorator('email', {
	      rules: [{
	        type: 'email', message: 'The input is not valid E-mail!'
	      }, {
	        required: true, message: 'Please input your E-mail!'
	      }]
	    })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'mail' }), placeholder: 'E-mail' }))), _react2.default.createElement(FormItem, null, getFieldDecorator('password', {
	      rules: [{ required: true, message: 'Please input your Password!' }]
	    })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'lock' }), type: 'password', placeholder: 'Password' }))), _react2.default.createElement(FormItem, null, _react2.default.createElement(_button2.default, { type: 'primary', htmlType: 'submit', className: 'login-form-button' }, 'Log in'), 'Or ', _react2.default.createElement('a', null, 'register now!'), _react2.default.createElement('a', { className: 'login-form-forgot' }, 'Forgot password')));
	  }
	}));

	exports.default = NormalLoginForm;

/***/ }

})