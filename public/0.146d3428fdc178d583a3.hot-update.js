webpackHotUpdate(0,{

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style5 = __webpack_require__(377);

	var _button = __webpack_require__(380);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(401);

	var _input = __webpack_require__(404);

	var _input2 = _interopRequireDefault(_input);

	var _style7 = __webpack_require__(504);

	var _icon = __webpack_require__(161);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(533);

	var _form = __webpack_require__(537);

	var _form2 = _interopRequireDefault(_form);

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(308);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(415);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var FormItem = _form2.default.Item;

	var NormalLoginForm = _form2.default.create()(_react2.default.createClass({
	  displayName: 'NormalLoginForm',

	  componentDidMount: function componentDidMount() {
	    var _this = this;
	    _firebase2.default.auth().onAuthStateChanged(function (user) {
	      if (user) {
	        //user has logged in!
	        (0, _utils.setCookie)('userEmail', user['email'], 1);
	        (0, _utils.setCookie)('uid', user['uid'], 1);
	        window.location.assign(_this.state.courseID);
	      }
	    });
	  },
	  handleSubmit: function handleSubmit(e) {
	    var _this2 = this;

	    e.preventDefault();
	    this.props.form.validateFields(function (err, values) {
	      if (!err) {
	        console.log('Received values of form: ', values);
	        _this2.login(values['email'], values['password']);
	        //courseID
	        _this2.setState({ courseID: values['courseID'] });
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
	    })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'lock' }), type: 'password', placeholder: 'Password' }))), _react2.default.createElement(FormItem, null, getFieldDecorator('courseID', {
	      rules: [{ required: true, message: 'Please input your course ID!' }]
	    })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'rocket' }), placeholder: 'Course ID', onPressEnter: this.handleSubmit }))), _react2.default.createElement(FormItem, null, _react2.default.createElement(_button2.default, { type: 'primary', htmlType: 'submit', className: 'login-form-button' }, 'Log in'), 'Or ', _react2.default.createElement('a', null, 'register now!'), _react2.default.createElement('a', { className: 'login-form-forgot' }, 'Forgot password')));
	  }
	}));

	exports.default = NormalLoginForm;

/***/ }

})