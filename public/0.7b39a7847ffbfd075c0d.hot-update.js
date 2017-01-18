webpackHotUpdate(0,{

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _style3 = __webpack_require__(368);

	var _row = __webpack_require__(371);

	var _row2 = _interopRequireDefault(_row);

	var _style4 = __webpack_require__(375);

	var _col = __webpack_require__(376);

	var _col2 = _interopRequireDefault(_col);

	var _react = __webpack_require__(121);

	var _react2 = _interopRequireDefault(_react);

	var _VideoPlayer = __webpack_require__(377);

	var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

	var _InputConcept = __webpack_require__(431);

	var _InputConcept2 = _interopRequireDefault(_InputConcept);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var ConceptExtraction = _react2.default.createClass({
		displayName: 'ConceptExtraction',
		getPlayedTime: function getPlayedTime() {
			return this.refs.player.getPlayedTime();
		},
		jumpToTime: function jumpToTime(time) {
			this.refs.player.jumpToTime(time);
		},
		render: function render() {
			return _react2.default.createElement(_row2.default, null, _react2.default.createElement(_col2.default, { span: 16 }, _react2.default.createElement(_VideoPlayer2.default, { ref: 'player' })), _react2.default.createElement(_col2.default, { span: 8 }, _react2.default.createElement(_InputConcept2.default, { getPlayedTime: this.getPlayedTime, jumpToTime: this.jumpToTime })));
		}
	});
	exports.default = ConceptExtraction;

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(121);

	var _react2 = _interopRequireDefault(_react);

	var _reactYoutubePlayer = __webpack_require__(378);

	var _reactYoutubePlayer2 = _interopRequireDefault(_reactYoutubePlayer);

	var _reactDom = __webpack_require__(160);

	var _screenfull = __webpack_require__(418);

	var _screenfull2 = _interopRequireDefault(_screenfull);

	var _reactPlayer = __webpack_require__(419);

	var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var VideoPlayer = _react2.default.createClass({
	  displayName: 'VideoPlayer',
	  getInitialState: function getInitialState() {
	    return {
	      url: null,
	      playing: true,
	      volume: 0.8,
	      played: 0,
	      loaded: 0,
	      duration: 0,
	      playbackRate: 1.0,
	      seeking: false,
	      youtubeConfig: { controls: 2 }
	    };
	  },
	  load: function load(url) {
	    this.setState({
	      url: url,
	      played: 0,
	      loaded: 0
	    });
	  },
	  playPause: function playPause() {
	    this.setState({ playing: !this.state.playing });
	  },
	  stop: function stop() {
	    this.setState({ url: null, playing: false });
	  },
	  setVolume: function setVolume(e) {
	    this.setState({ volume: parseFloat(e.target.value) });
	  },
	  setPlaybackRate: function setPlaybackRate(e) {
	    console.log(parseFloat(e.target.value));
	    this.setState({ playbackRate: parseFloat(e.target.value) });
	  },
	  onSeekMouseDown: function onSeekMouseDown(e) {
	    this.setState({ seeking: true });
	  },
	  onSeekChange: function onSeekChange(e) {
	    this.setState({ played: parseFloat(e.target.value) });
	  },
	  onSeekMouseUp: function onSeekMouseUp(e) {
	    this.setState({ seeking: false });
	    this.player.seekTo(parseFloat(e.target.value));
	    console.log(this.state.duration);
	    console.log(parseFloat(e.target.value));
	  },
	  onProgress: function onProgress(state) {
	    // We only want to update time slider if we are not currently seeking
	    if (!this.state.seeking) {
	      this.setState(state);
	    }
	  },
	  onClickFullscreen: function onClickFullscreen() {
	    _screenfull2.default.request((0, _reactDom.findDOMNode)(this.player));
	  },
	  onConfigSubmit: function onConfigSubmit() {
	    var config = void 0;
	    try {
	      config = JSON.parse(this.configInput.value);
	    } catch (error) {
	      config = {};
	      console.error('Error setting config:', error);
	    }
	    this.setState(config);
	  },
	  renderLoadButton: function renderLoadButton(url, label) {
	    var _this = this;

	    return _react2.default.createElement('button', { onClick: function onClick() {
	        return _this.load(url);
	      } }, label);
	  },
	  getPlayedTime: function getPlayedTime() {
	    return this.state.played;
	  },
	  jumpToTime: function jumpToTime(time) {
	    this.player.seekTo(time);
	    console.log(time);
	  },
	  render: function render() {
	    var _state = this.state,
	        url = _state.url,
	        playing = _state.playing,
	        volume = _state.volume,
	        played = _state.played,
	        loaded = _state.loaded,
	        duration = _state.duration,
	        playbackRate = _state.playbackRate,
	        soundcloudConfig = _state.soundcloudConfig,
	        vimeoConfig = _state.vimeoConfig,
	        youtubeConfig = _state.youtubeConfig,
	        fileConfig = _state.fileConfig;

	    return _react2.default.createElement('div', null, _react2.default.createElement(_reactYoutubePlayer2.default, {
	      videoId: 'p4XTMvagQ2Q',
	      playbackState: 'unstarted',
	      configuration: {
	        height: '360',
	        width: '640',
	        showinfo: 0,
	        controls: 1
	      }
	    }));
	  }
	});
	exports.default = VideoPlayer;

/***/ }

})