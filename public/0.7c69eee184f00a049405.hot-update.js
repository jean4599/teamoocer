webpackHotUpdate(0,{

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(121);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(160);

	var _screenfull = __webpack_require__(378);

	var _screenfull2 = _interopRequireDefault(_screenfull);

	var _reactPlayer = __webpack_require__(379);

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

	    return _react2.default.createElement('div', null, _react2.default.createElement('section', { className: 'section' }, _react2.default.createElement('h1', null, 'ReactPlayer Demo'), _react2.default.createElement(_reactPlayer2.default, {
	      ref: function ref(player) {
	        _this2.player = player;
	      },
	      className: 'react-player',
	      width: 480,
	      height: 270,
	      url: url,
	      playing: playing,
	      playbackRate: playbackRate,
	      volume: volume,
	      soundcloudConfig: soundcloudConfig,
	      vimeoConfig: vimeoConfig,
	      youtubeConfig: youtubeConfig,
	      fileConfig: fileConfig,
	      onReady: function onReady() {
	        return console.log('onReady');
	      },
	      onStart: function onStart() {
	        return console.log('onStart');
	      },
	      onPlay: function onPlay() {
	        return _this2.setState({ playing: true });
	      },
	      onPause: function onPause() {
	        return _this2.setState({ playing: false });
	      },
	      onBuffer: function onBuffer() {
	        return console.log('onBuffer');
	      },
	      onEnded: function onEnded() {
	        return _this2.setState({ playing: false });
	      },
	      onError: function onError(e) {
	        return console.log('onError', e);
	      },
	      onProgress: this.onProgress,
	      onDuration: function onDuration(duration) {
	        return _this2.setState({ duration: duration });
	      }
	    }), _react2.default.createElement('table', null, _react2.default.createElement('tbody', null, _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Controls'), _react2.default.createElement('td', null, _react2.default.createElement('button', { onClick: this.stop }, 'Stop'), _react2.default.createElement('button', { onClick: this.playPause }, playing ? 'Pause' : 'Play'), _react2.default.createElement('button', { onClick: this.onClickFullscreen }, 'Fullscreen'), _react2.default.createElement('button', { onClick: this.setPlaybackRate, value: 1 }, '1'), _react2.default.createElement('button', { onClick: this.setPlaybackRate, value: 1.5 }, '1.5'), _react2.default.createElement('button', { onClick: this.setPlaybackRate, value: 2 }, '2'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Seek'), _react2.default.createElement('td', null, _react2.default.createElement('input', {
	      type: 'range', min: 0, max: 1, step: 'any',
	      value: played,
	      onMouseDown: this.onSeekMouseDown,
	      onChange: this.onSeekChange,
	      onMouseUp: this.onSeekMouseUp
	    }))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Volume'), _react2.default.createElement('td', null, _react2.default.createElement('input', { type: 'range', min: 0, max: 1, step: 'any', value: volume, onChange: this.setVolume }))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Played'), _react2.default.createElement('td', null, _react2.default.createElement('progress', { max: 1, value: played }))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Loaded'), _react2.default.createElement('td', null, _react2.default.createElement('progress', { max: 1, value: loaded })))))), _react2.default.createElement('section', { className: 'section' }, _react2.default.createElement('table', null, _react2.default.createElement('tbody', null, _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'YouTube'), _react2.default.createElement('td', null, this.renderLoadButton('https://www.youtube.com/watch?v=oUFJJNQGwhk', 'Test A'), this.renderLoadButton('https://www.youtube.com/watch?v=jNgP6d9HraI', 'Test B'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'SoundCloud'), _react2.default.createElement('td', null, this.renderLoadButton('https://soundcloud.com/miami-nights-1984/accelerated', 'Test A'), this.renderLoadButton('https://soundcloud.com/tycho/tycho-awake', 'Test B'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Vimeo'), _react2.default.createElement('td', null, this.renderLoadButton('https://vimeo.com/90509568', 'Test A'), this.renderLoadButton('https://vimeo.com/94502406', 'Test B'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Streamable'), _react2.default.createElement('td', null, this.renderLoadButton('https://streamable.com/moo', 'Test A'), this.renderLoadButton('https://streamable.com/ifjh', 'Test B'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Vidme'), _react2.default.createElement('td', null, this.renderLoadButton('https://vid.me/yvi', 'Test A'), this.renderLoadButton('https://vid.me/yvf', 'Test B'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Wistia'), _react2.default.createElement('td', null, this.renderLoadButton('https://home.wistia.com/medias/e4a27b971d', 'Test A'), this.renderLoadButton('https://home.wistia.com/medias/29b0fbf547', 'Test B'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Files'), _react2.default.createElement('td', null, this.renderLoadButton('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', 'MP4'), this.renderLoadButton('http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv', 'OGV'), this.renderLoadButton('http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm', 'WEBM'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Custom URL'), _react2.default.createElement('td', null, _react2.default.createElement('input', { ref: function ref(input) {
	        _this2.urlInput = input;
	      }, type: 'text', placeholder: 'Enter URL' }), _react2.default.createElement('button', { onClick: function onClick() {
	        return _this2.setState({ url: _this2.urlInput.value });
	      } }, 'Load'))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'Custom config'), _react2.default.createElement('td', null, _react2.default.createElement('textarea', { ref: function ref(textarea) {
	        _this2.configInput = textarea;
	      }, placeholder: 'Enter JSON' }), _react2.default.createElement('button', { onClick: this.onConfigSubmit }, 'Update Config'))))), _react2.default.createElement('h2', null, 'State'), _react2.default.createElement('table', null, _react2.default.createElement('tbody', null, _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'url'), _react2.default.createElement('td', { className: !url ? 'faded' : '' }, url || 'null')), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'playing'), _react2.default.createElement('td', null, playing ? 'true' : 'false')), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'volume'), _react2.default.createElement('td', null, volume.toFixed(3))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'played'), _react2.default.createElement('td', null, played.toFixed(3))), _react2.default.createElement('tr', null, _react2.default.createElement('th', null, 'loaded'), _react2.default.createElement('td', null, loaded.toFixed(3)))))));
	  }
	});
	exports.default = VideoPlayer;

/***/ }

})