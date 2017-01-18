webpackHotUpdate(0,{

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
	    var time = this.player.getCurrentTime()._settledValue;
	    console.log(time);
	    return time;
	  },
	  jumpToTime: function jumpToTime(time) {
	    this.player.seekTo(time);
	    console.log(time);
	  },
	  render: function render() {
	    var _this2 = this;

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
	      ref: function ref(player) {
	        _this2.player = player.player;
	      },
	      videoId: 'p4XTMvagQ2Q',
	      height: '405',
	      width: '720',
	      playbackState: 'unstarted',
	      configuration: {
	        showinfo: 0,
	        controls: 1
	      }
	    }));
	  }
	});
	exports.default = VideoPlayer;

/***/ }

})