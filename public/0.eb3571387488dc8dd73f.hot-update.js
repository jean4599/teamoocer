webpackHotUpdate(0,{

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _style5 = __webpack_require__(378);

	var _button = __webpack_require__(381);

	var _button2 = _interopRequireDefault(_button);

	var _style6 = __webpack_require__(504);

	var _icon = __webpack_require__(162);

	var _icon2 = _interopRequireDefault(_icon);

	var _style7 = __webpack_require__(402);

	var _input = __webpack_require__(405);

	var _input2 = _interopRequireDefault(_input);

	var _style8 = __webpack_require__(539);

	var _form = __webpack_require__(543);

	var _form2 = _interopRequireDefault(_form);

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(124);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var FormItem = _form2.default.Item;

	var NormalLoginForm = _form2.default.create()(_react2.default.createClass({
	  displayName: 'NormalLoginForm',
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	    this.props.form.validateFields(function (err, values) {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	  },
	  render: function render() {
	    var getFieldDecorator = this.props.form.getFieldDecorator;

	    return _react2.default.createElement(_form2.default, { onSubmit: this.handleSubmit, className: 'login-form' }, _react2.default.createElement(FormItem, _extends({}, formItemLayout, {
	      label: 'E-mail',
	      hasFeedback: true
	    }), getFieldDecorator('email', {
	      rules: [{
	        type: 'email', message: 'The input is not valid E-mail!'
	      }, {
	        required: true, message: 'Please input your E-mail!'
	      }]
	    })(_react2.default.createElement(_input2.default, null))), _react2.default.createElement(FormItem, null, getFieldDecorator('password', {
	      rules: [{ required: true, message: 'Please input your Password!' }]
	    })(_react2.default.createElement(_input2.default, { addonBefore: _react2.default.createElement(_icon2.default, { type: 'lock' }), type: 'password', placeholder: 'Password' }))), _react2.default.createElement(FormItem, null, _react2.default.createElement(_button2.default, { type: 'primary', htmlType: 'submit', className: 'login-form-button' }, 'Log in'), 'Or ', _react2.default.createElement('a', null, 'register now!'), _react2.default.createElement('a', { className: 'login-form-forgot' }, 'Forgot password')));
	  }
	}));

	exports.default = NormalLoginForm;

/***/ }

})