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
				cursors: [],
				origin: []
			};
		},
		componentDidMount: function componentDidMount() {
			this.fire = _firebase2.default.database().ref(this.state.courseID + '/_cursors/');
			this.fire.on('value', this.updateCursor);
		},
		updateCursor: function updateCursor(snapshot) {
			var result = snapshot.val();
			var origin = this.state.origin;
			if (result) {
				delete result[this.state.user];
				var cursors = [];
				console.log("*************");
				console.log(result);
				Object.keys(result).map(function (key, index) {
					var x = result[key].cursorX + result[key].mapX - origin.x;
					var y = result[key].cursorY + result[key].mapY - origin.y;
					cursors.push({ cursorX: x, cursorY: y });
					console.log("**");
					console.log(result[key]);
					console.log("cursorX: " + result[key].cursorX);
					console.log("mapX: " + result[key].mapX);
					console.log("originX: " + origin.x);
					console.log("**");
				});
				console.log('Cursors are:');
				console.log(cursors);
				this.setState({ cursors: cursors });
			}
		},
		setMapView: function setMapView(x, y) {
			this.fire.child(this.state.user).update({ mapX: x, mapY: y });
			this.setState({ origin: { X: x, Y: y } });
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
			return _react2.default.createElement('div', { id: 'cursor-panel' }, cursors);
		}
	});

	exports.default = CursorPanel;

/***/ }

})