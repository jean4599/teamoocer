webpackHotUpdate(0,{

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _firebase = __webpack_require__(278);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var Cursor = _react2.default.createClass({
		displayName: 'Cursor',

		render: function render() {
			return _react2.default.createElement('p', { className: 'cursor', style: { backgroundColor: this.props.color, top: this.props.y, left: this.props.x } });
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
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/networks/cursors/');
			this.fire.on('value', this.updateCursor);
		},
		updateCursor: function updateCursor(snapshot) {
			var result = snapshot.val();
			if (result) {
				delete result[this.state.user];
				console.log('Cursors are: ');
				console.log(result);
				this.setState({ cursors: toArray(snapshot.val) });
			}
		},
		render: function render() {
			// const cursors=this.state.cursors.map((cursor,index)=>
			// 	<Cursor x={cursor.x} y={cursor.y} color={cursor.color} />
			// 	)
			var cursors = _react2.default.createElement(Cursor, { x: this.props.cursorX, y: this.props.cursorY, color: 'red' });
			return _react2.default.createElement('div', { id: 'cursor-panel' }, cursors);
		}
	});

	exports.default = CursorPanel;

/***/ }

})