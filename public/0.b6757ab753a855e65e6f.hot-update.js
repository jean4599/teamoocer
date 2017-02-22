webpackHotUpdate(0,{

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(123);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(308);

	var _firebase2 = _interopRequireDefault(_firebase);

	var _utils = __webpack_require__(415);

	var _reactCursorPosition = __webpack_require__(526);

	var _reactCursorPosition2 = _interopRequireDefault(_reactCursorPosition);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Cursor = _react2.default.createClass({
		displayName: 'Cursor',

		render: function render() {
			return _react2.default.createElement('div', null, _react2.default.createElement('p', null, this.props.cursorPosition.x, ', ', this.props.cursorPosition.y), _react2.default.createElement('p', { className: 'cursor', style: { backgroundColor: this.props.color, top: this.props.cursorPosition.y, left: this.props.cursorPosition.x } }));
		}
	});
	var CursorPanel = _react2.default.createClass({
		displayName: 'CursorPanel',

		getInitialState: function getInitialState() {
			return {
				courseID: this.props.courseID,
				user: this.props.user,
				cursors: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/_cursors/');
			this.fire.on('value', this.updateCursor);
		},
		updateCursor: function updateCursor(snapshot) {
			var result = snapshot.val();
			if (result) {
				delete result[this.state.user];
				this.setState({ cursors: (0, _utils.toArray)(result) });
			}
		},
		handleMouseMove: function handleMouseMove(x, y) {
			var offsetX = x - 30;
			var offsetY = y - 30;
			this.fire.child(this.state.user).update({ cursorX: offsetX, cursorY: offsetY });
		},
		render: function render() {
			var cursors = this.state.cursors.map(function (cursor, index) {
				return _react2.default.createElement(Cursor, { key: index, x: cursor.cursorX, y: cursor.cursorY, color: 'red' });
			});
			return _react2.default.createElement(_reactCursorPosition2.default, { id: 'cursor-panel' }, cursors);
		}
	});

	exports.default = CursorPanel;

/***/ }

})