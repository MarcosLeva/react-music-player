"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _downloadjs = _interopRequireDefault(require("downloadjs"));

var _isMobile = _interopRequireDefault(require("is-mobile"));

var _Slider = _interopRequireDefault(require("rc-slider/lib/Slider"));

var _rcSwitch = _interopRequireDefault(require("rc-switch"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _AudioListsPanel = _interopRequireDefault(require("./components/AudioListsPanel"));

var _CircleProcessBar = _interopRequireDefault(require("./components/CircleProcessBar"));

var _Icon = require("./components/Icon");

var _PlayerMobile = _interopRequireDefault(require("./components/PlayerMobile"));

var _PlayModel = _interopRequireDefault(require("./components/PlayModel"));

var _animate = require("./config/animate");

var _keycode = require("./config/keycode");

var _locale = _interopRequireDefault(require("./config/locale"));

var _mediaQuery = require("./config/mediaQuery");

var _mode = require("./config/mode");

var _audioState = require("./config/audioState");

var _playMode2 = _interopRequireDefault(require("./config/playMode"));

var _propTypes = _interopRequireDefault(require("./config/propTypes"));

var _slider = require("./config/slider");

var _theme = require("./config/theme");

var _volumeFade = require("./config/volumeFade");

var _player = require("./config/player");

var _sortable = _interopRequireDefault(require("./config/sortable"));

var _locale2 = _interopRequireDefault(require("./locale"));

var _lyric = _interopRequireDefault(require("./lyric"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Sortable.mount(new Swap())
var IS_MOBILE = (0, _isMobile["default"])();
var DEFAULT_ICON = {
  pause: /*#__PURE__*/_react["default"].createElement(_Icon.AnimatePauseIcon, null),
  play: /*#__PURE__*/_react["default"].createElement(_Icon.AnimatePlayIcon, null),
  destroy: /*#__PURE__*/_react["default"].createElement(_Icon.CloseIcon, null),
  close: /*#__PURE__*/_react["default"].createElement(_Icon.CloseIcon, null),
  "delete": /*#__PURE__*/_react["default"].createElement(_Icon.DeleteIcon, {
    size: 24
  }),
  download: /*#__PURE__*/_react["default"].createElement(_Icon.DownloadIcon, {
    size: 26
  }),
  toggle: /*#__PURE__*/_react["default"].createElement(_Icon.FaMinusSquareOIcon, null),
  lyric: /*#__PURE__*/_react["default"].createElement(_Icon.LyricIcon, null),
  volume: /*#__PURE__*/_react["default"].createElement(_Icon.VolumeUnmuteIcon, {
    size: 26
  }),
  mute: /*#__PURE__*/_react["default"].createElement(_Icon.VolumeMuteIcon, {
    size: 26
  }),
  next: /*#__PURE__*/_react["default"].createElement(_Icon.NextAudioIcon, null),
  prev: /*#__PURE__*/_react["default"].createElement(_Icon.PrevAudioIcon, null),
  playLists: /*#__PURE__*/_react["default"].createElement(_Icon.PlayListsIcon, null),
  reload: /*#__PURE__*/_react["default"].createElement(_Icon.ReloadIcon, {
    size: 22
  }),
  loop: /*#__PURE__*/_react["default"].createElement(_Icon.LoopIcon, {
    size: 26
  }),
  order: /*#__PURE__*/_react["default"].createElement(_Icon.OrderPlayIcon, {
    size: 26
  }),
  orderLoop: /*#__PURE__*/_react["default"].createElement(_Icon.RepeatIcon, {
    size: 26
  }),
  shuffle: /*#__PURE__*/_react["default"].createElement(_Icon.ShufflePlayIcon, {
    size: 26
  }),
  loading: /*#__PURE__*/_react["default"].createElement(_Icon.LoadIcon, null),
  packUpPanelMobile: /*#__PURE__*/_react["default"].createElement(_Icon.ArrowDownIcon, {
    size: 26
  }),
  empty: /*#__PURE__*/_react["default"].createElement(_Icon.EmptyIcon, null)
};

var ReactJkMusicPlayer = /*#__PURE__*/function (_PureComponent) {
  _inherits(ReactJkMusicPlayer, _PureComponent);

  var _super = _createSuper(ReactJkMusicPlayer);

  function ReactJkMusicPlayer(props) {
    var _this;

    _classCallCheck(this, ReactJkMusicPlayer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isDrag", false);

    _defineProperty(_assertThisInitialized(_this), "initPlayId", '');

    _defineProperty(_assertThisInitialized(_this), "state", {
      audioLists: [],
      playId: _this.initPlayId,
      // 播放id
      name: '',
      // 当前歌曲名
      cover: '',
      // 当前歌曲封面
      singer: '',
      // 当前歌手
      musicSrc: '',
      // 当前歌曲链
      lyric: '',
      // 当前歌词
      currentLyric: '',
      isMobile: IS_MOBILE,
      toggle: _this.props.mode === _mode.MODE.FULL,
      playing: false,
      currentTime: 0,
      soundValue: _player.DEFAULT_VOLUME,
      moveX: 0,
      moveY: 0,
      loading: false,
      audioListsPanelVisible: false,
      playModelNameVisible: false,
      theme: _this.props.theme || _this.darkThemeName,
      playMode: _this.props.playMode || _this.props.defaultPlayMode || '',
      // 当前播放模式
      currentAudioVolume: 0,
      // 当前音量  静音后恢复到之前记录的音量
      initAnimate: false,
      isInitAutoPlay: _this.props.autoPlay,
      isInitRemember: false,
      loadedProgress: 0,
      removeId: _player.DEFAULT_REMOVE_ID,
      isNeedMobileHack: IS_MOBILE,
      audioLyricVisible: false,
      isAutoPlayWhenUserClicked: false,
      playIndex: _this.props.playIndex || _this.props.defaultPlayIndex || _player.DEFAULT_PLAY_INDEX,
      canPlay: false,
      currentVolumeFade: _volumeFade.VOLUME_FADE.NONE,
      currentVolumeFadeInterval: undefined,
      updateIntervalEndVolume: undefined,
      isAudioSeeking: false,
      isResetCoverRotate: false
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayIndex", function () {
      var playIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.playIndex;
      var audioLists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.audioLists;
      return Math.max(_player.DEFAULT_PLAY_INDEX, Math.min(audioLists.length - 1, playIndex));
    });

    _defineProperty(_assertThisInitialized(_this), "onCoverClick", function () {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _mode.MODE.FULL;
      var showMiniModeCover = _this.props.showMiniModeCover;
      var cover = _this.state.cover;

      if (!showMiniModeCover && mode === _mode.MODE.MINI) {
        return;
      }

      if (_this.props.onCoverClick && cover) {
        _this.props.onCoverClick(mode, _this.state.audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAudioTitle", function () {
      var _ref = _this.locale || {},
          audioTitle = _ref.audioTitle;

      var _this$state = _this.state,
          name = _this$state.name,
          singer = _this$state.singer;

      if (typeof audioTitle === 'function' && _this.audio) {
        return audioTitle(_this.getBaseAudioInfo());
      }

      return audioTitle || "".concat(name).concat(singer ? " - ".concat(singer) : '');
    });

    _defineProperty(_assertThisInitialized(_this), "renderAudioTitle", function () {
      var _this$state2 = _this.state,
          isMobile = _this$state2.isMobile,
          name = _this$state2.name;

      if (_this.props.renderAudioTitle) {
        return _this.props.renderAudioTitle(_this.getBaseAudioInfo(), isMobile);
      }

      return isMobile ? name : _this.getAudioTitle();
    });

    _defineProperty(_assertThisInitialized(_this), "toggleAudioLyric", function () {
      _this.setState({
        audioLyricVisible: !_this.state.audioLyricVisible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePlayMode", function () {
      var index = _this._PLAY_MODE_.findIndex(function (mode) {
        return mode === _this.state.playMode;
      });

      var playMode = index === _this._PLAY_MODE_LENGTH_ - 1 ? _this._PLAY_MODE_[0] : _this._PLAY_MODE_[++index];

      _this.setState({
        playMode: playMode,
        playModelNameVisible: true,
        playModeTipVisible: true
      });

      _this.props.onPlayModeChange && _this.props.onPlayModeChange(playMode);
      clearTimeout(_this.playModelTimer);
      _this.playModelTimer = setTimeout(function () {
        _this.setState({
          playModelNameVisible: false,
          playModeTipVisible: false
        });
      }, _this.props.playModeShowTime);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPlayModeIcon", function (playMode) {
      var animateProps = {
        className: 'react-jinke-music-player-mode-icon'
      };
      var IconNode = null;

      switch (playMode) {
        case _playMode2["default"].order:
          IconNode = /*#__PURE__*/(0, _react.cloneElement)(_this.iconMap.order, animateProps);
          break;

        case _playMode2["default"].orderLoop:
          IconNode = /*#__PURE__*/(0, _react.cloneElement)(_this.iconMap.orderLoop, animateProps);
          break;

        case _playMode2["default"].singleLoop:
          IconNode = /*#__PURE__*/(0, _react.cloneElement)(_this.iconMap.loop, animateProps);
          break;

        case _playMode2["default"].shufflePlay:
          IconNode = /*#__PURE__*/(0, _react.cloneElement)(_this.iconMap.shuffle, animateProps);
          break;

        default:
          IconNode = /*#__PURE__*/(0, _react.cloneElement)(_this.iconMap.order, animateProps);
      }

      return IconNode;
    });

    _defineProperty(_assertThisInitialized(_this), "audioListsPlay", function (playId) {
      var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state;
      var currentPlayId = state.playId,
          playing = state.playing,
          audioLists = state.audioLists,
          loading = state.loading,
          canPlay = state.canPlay;

      if (Array.isArray(audioLists) && audioLists.length === 0) {
        // eslint-disable-next-line no-console
        return console.warn('Warning: Your playlist has no songs. and cannot play !');
      }

      if (loading && playId === currentPlayId) {
        return;
      }

      var playIndex = audioLists.findIndex(function (audio) {
        return audio[_player.PLAYER_KEY] === playId;
      });

      var _ref2 = audioLists[playIndex] || {},
          name = _ref2.name,
          cover = _ref2.cover,
          musicSrc = _ref2.musicSrc,
          singer = _ref2.singer,
          _ref2$lyric = _ref2.lyric,
          lyric = _ref2$lyric === void 0 ? '' : _ref2$lyric;

      var loadAudio = function loadAudio(originMusicSrc) {
        _this.setState({
          name: name,
          cover: cover,
          musicSrc: originMusicSrc,
          singer: singer,
          playId: playId,
          lyric: lyric,
          currentTime: 0,
          playing: false,
          loading: true,
          canPlay: false,
          loadedProgress: 0,
          playIndex: playIndex,
          isAutoPlayWhenUserClicked: true
        }, function () {
          _this.lyric && _this.lyric.stop();

          _this.audio.load();

          _this.updateMediaSessionMetadata();

          setTimeout(function () {
            _this.initLyricParser();
          }, 0);
        });
      }; // 如果点击当前项 就暂停 或者播放


      if (playId === currentPlayId && !ignore) {
        _this.setState({
          playing: !playing
        });

        if (!playing) {
          if (canPlay) {
            _this.play();

            return;
          }

          return loadAudio(musicSrc);
        }

        return _this.audio.pause();
      }

      _this.props.onAudioPlayTrackChange && _this.props.onAudioPlayTrackChange(playId, audioLists, _this.getBaseAudioInfo());
      _this.props.onPlayIndexChange && _this.props.onPlayIndexChange(playIndex);

      switch (_typeof(musicSrc)) {
        case 'function':
          musicSrc().then(loadAudio, _this.onAudioError);
          break;

        default:
          loadAudio(musicSrc);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetAudioStatus", function () {
      _this.audio.pause();

      _this.lyric && _this.lyric.stop();

      _this.initPlayInfo([]);

      _this.resetAudioPlayStatus();

      _this.resetAudioPlayId();
    });

    _defineProperty(_assertThisInitialized(_this), "resetAudioPlayId", function () {
      _this.setState({
        playId: _this.initPlayId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearAudioLists", function () {
      _this.props.onAudioListsChange && _this.props.onAudioListsChange('', [], {});

      _this.resetAudioStatus();
    });

    _defineProperty(_assertThisInitialized(_this), "onDeleteAudioLists", function (audioId) {
      return function (e) {
        e.stopPropagation(); // 如果不 传 id  删除全部

        var _this$state3 = _this.state,
            audioLists = _this$state3.audioLists,
            playId = _this$state3.playId;

        if (audioLists.length < 1) {
          return;
        }

        _this.lyric && _this.lyric.stop();

        if (!audioId) {
          _this.clearAudioLists();

          return;
        }

        var newAudioLists = _toConsumableArray(audioLists).filter(function (audio) {
          return audio[_player.PLAYER_KEY] !== audioId;
        }); // 触发删除动画,等动画结束 删除列表


        _this.setState({
          removeId: audioId
        });

        setTimeout(function () {
          _this.setState({
            audioLists: newAudioLists,
            removeId: -1
          }, function () {
            if (!newAudioLists.length) {
              return _this.resetAudioStatus();
            } // 如果删除的是当前正在播放的 顺延下一首播放


            if (audioId === playId) {
              _this.handlePlay(_playMode2["default"].orderLoop);
            }
          });
        }, _animate.AUDIO_LIST_REMOVE_ANIMATE_TIME);
        _this.props.onAudioListsChange && _this.props.onAudioListsChange(playId, newAudioLists, _this.getBaseAudioInfo());
      };
    });

    _defineProperty(_assertThisInitialized(_this), "openAudioListsPanel", function () {
      _this.setState(function (_ref3) {
        var audioListsPanelVisible = _ref3.audioListsPanelVisible;
        return {
          initAnimate: true,
          audioListsPanelVisible: !audioListsPanelVisible
        };
      });

      _this.props.onAudioListsPanelChange && _this.props.onAudioListsPanelChange(!_this.state.audioListsPanelVisible);
    });

    _defineProperty(_assertThisInitialized(_this), "closeAudioListsPanel", function (e) {
      e.stopPropagation();

      _this._closeAudioListsPanel();
    });

    _defineProperty(_assertThisInitialized(_this), "_closeAudioListsPanel", function () {
      var audioListsPanelVisible = _this.state.audioListsPanelVisible;

      _this.setState({
        audioListsPanelVisible: false
      });

      if (audioListsPanelVisible) {
        _this.props.onAudioListsPanelChange && _this.props.onAudioListsPanelChange(false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "themeChange", function (isLight) {
      var theme = isLight ? _theme.THEME.LIGHT : _theme.THEME.DARK;

      _this.setState({
        theme: theme
      });

      _this.props.onThemeChange && _this.props.onThemeChange(theme);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioDownload", function () {
      var musicSrc = _this.state.musicSrc;

      if (_this.state.musicSrc) {
        var customDownloader = _this.props.customDownloader;

        var baseAudioInfo = _this.getBaseAudioInfo();

        var onBeforeAudioDownload = _this.props.onBeforeAudioDownload(baseAudioInfo);

        var transformedDownloadAudioInfo = {};

        if (onBeforeAudioDownload && onBeforeAudioDownload.then) {
          onBeforeAudioDownload.then(function (info) {
            var src = info.src,
                filename = info.filename,
                mimeType = info.mimeType;
            transformedDownloadAudioInfo = info;

            if (customDownloader) {
              customDownloader(info);
            } else {
              (0, _downloadjs["default"])(src, filename, mimeType);
            }
          });
        } else {
          customDownloader ? customDownloader({
            src: musicSrc
          }) : (0, _downloadjs["default"])(musicSrc);
        }

        _this.props.onAudioDownload && _this.props.onAudioDownload(baseAudioInfo, transformedDownloadAudioInfo);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDrag", function (e, _ref4) {
      var x = _ref4.x,
          y = _ref4.y;
      var _this$state4 = _this.state,
          moveX = _this$state4.moveX,
          moveY = _this$state4.moveY;
      _this.isDrag = true; // mousedown will trigger drag event on android devices (react-draggable) :(

      if (moveX === x && moveY === y) {
        _this.isDrag = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDragStart", function (e, _ref5) {
      var x = _ref5.x,
          y = _ref5.y;
      _this.isDrag = false;

      _this.setState({
        moveX: x,
        moveY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDragStop", function (e, _ref6) {
      var x = _ref6.x,
          y = _ref6.y;

      if (_this.props.showDestroy && _this.destroyBtn && _this.destroyBtn.current && _this.destroyBtn.current.contains(e.target)) {
        _this.onDestroyPlayer();

        return;
      }

      if (!_this.isDrag) {
        if (_this.state.isNeedMobileHack) {
          _this.loadAndPlayAudio();

          _this.setState({
            isNeedMobileHack: false
          });
        }

        _this.onOpenPanel();
      }

      _this.setState({
        moveX: x,
        moveY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResetVolume", function () {
      var currentAudioVolume = _this.state.currentAudioVolume;

      _this.setAudioVolume(_this.getVolumeBarValue(currentAudioVolume || 0.1));
    });

    _defineProperty(_assertThisInitialized(_this), "setAudioVolume", function (volumeBarValue) {
      _this.audio.volume = _this.getListeningVolume(volumeBarValue);

      _this.setState({
        currentAudioVolume: volumeBarValue,
        soundValue: volumeBarValue
      }); // Update fade-in interval to transition to new volume


      if (_this.state.currentVolumeFade === _volumeFade.VOLUME_FADE.IN) {
        _this.state.updateIntervalEndVolume && _this.state.updateIntervalEndVolume(volumeBarValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopAll", function (target) {
      target.stopPropagation();
      target.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "getBoundingClientRect", function (ele) {
      var _ele$getBoundingClien = ele.getBoundingClientRect(),
          left = _ele$getBoundingClien.left,
          top = _ele$getBoundingClien.top;

      return {
        left: left,
        top: top
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getListeningVolume", function (volumeBarValue) {
      return Math.pow(volumeBarValue, 2);
    });

    _defineProperty(_assertThisInitialized(_this), "getVolumeBarValue", function (listeningVolume) {
      return Math.sqrt(listeningVolume);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioReload", function () {
      if (_this.props.audioLists.length) {
        _this.handlePlay(_playMode2["default"].singleLoop);

        _this.props.onAudioReload && _this.props.onAudioReload(_this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onOpenPanel", function () {
      var _this$props = _this.props,
          toggleMode = _this$props.toggleMode,
          spaceBar = _this$props.spaceBar;

      if (toggleMode) {
        _this.setState({
          toggle: true
        });

        _this.props.onModeChange && _this.props.onModeChange(_mode.MODE.FULL);

        if (spaceBar && _this.player.current) {
          _this.player.current.focus({
            preventScroll: true
          });
        }
      }

      _this.onCoverClick(_mode.MODE.MINI);
    });

    _defineProperty(_assertThisInitialized(_this), "onHidePanel", function () {
      _this.setState({
        toggle: false,
        audioListsPanelVisible: false
      });

      _this.props.onModeChange && _this.props.onModeChange(_mode.MODE.MINI);
    });

    _defineProperty(_assertThisInitialized(_this), "onDestroyPlayer", function () {
      if (_this.props.onBeforeDestroy) {
        var onBeforeDestroy = Promise.resolve(_this.props.onBeforeDestroy(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo()));

        if (onBeforeDestroy && onBeforeDestroy.then) {
          onBeforeDestroy.then(function () {
            _this._onDestroyPlayer();
          }) // ignore unhandledrejection handler
          ["catch"](function () {});
        }

        return;
      }

      _this._onDestroyPlayer();
    });

    _defineProperty(_assertThisInitialized(_this), "_onDestroyPlayer", function () {
      _this.unInstallPlayer();
    });

    _defineProperty(_assertThisInitialized(_this), "_onDestroyed", function () {
      _this.setState({
        isPlayDestroyed: true
      });

      if (_this.props.onDestroyed) {
        _this.props.onDestroyed(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentPlayIndex", function () {
      return _this.state.audioLists.findIndex(function (audio) {
        return audio[_player.PLAYER_KEY] === _this.state.playId;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetAudioPlayStatus", function () {
      return new Promise(function (res) {
        _this.setState({
          currentTime: 0,
          loading: false,
          playing: false,
          canPlay: false,
          lyric: '',
          currentLyric: '',
          loadedProgress: 0,
          playIndex: _player.DEFAULT_PLAY_INDEX
        }, res);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTogglePlay", function () {
      _this.setState({
        isAudioSeeking: false
      });

      if (_this.state.audioLists.length >= 1) {
        var _ref7 = _this.props.volumeFade || {},
            fadeIn = _ref7.fadeIn,
            fadeOut = _ref7.fadeOut;

        var _this$state5 = _this.state,
            currentVolumeFade = _this$state5.currentVolumeFade,
            currentVolumeFadeInterval = _this$state5.currentVolumeFadeInterval;
        var isCurrentlyFading = currentVolumeFade === _volumeFade.VOLUME_FADE.IN || currentVolumeFade === _volumeFade.VOLUME_FADE.OUT;
        /**
         * Currently in middle of fading in/out, so need to cancel the current interval and do the opposite action.
         * E.g. if currently fading out, then we need to cancel the fade-out and do a fade-in starting at current volume.
         */

        if (isCurrentlyFading) {
          // Clear current fade-in/out
          clearInterval(currentVolumeFadeInterval);

          _this.setState({
            currentVolumeFadeInterval: undefined,
            updateIntervalEndVolume: undefined
          });
        } // Currently playing track or in the middle of fading in


        if (!isCurrentlyFading && _this.state.playing || currentVolumeFade === _volumeFade.VOLUME_FADE.IN) {
          _this.setState({
            currentVolumeFade: _volumeFade.VOLUME_FADE.OUT
          }); // Fade in from current volume to 0


          var _adjustVolume = (0, _utils.adjustVolume)(_this.audio, _this.audio.volume, 0, {
            duration: fadeOut
          }, function () {
            _this.audio.pause();

            _this.setState({
              currentVolumeFade: _volumeFade.VOLUME_FADE.NONE,
              currentVolumeFadeInterval: undefined,
              playing: false,
              updateIntervalEndVolume: undefined
            }); // Restore volume so slider does not reset to zero


            // Restore volume so slider does not reset to zero
            _this.audio.volume = _this.getListeningVolume(_this.state.soundValue);
          }),
              fadeOutInterval = _adjustVolume.fadeInterval,
              updateIntervalEndVolume = _adjustVolume.updateIntervalEndVolume;

          _this.setState({
            currentVolumeFadeInterval: fadeOutInterval,
            updateIntervalEndVolume: updateIntervalEndVolume
          });
        } else {
          _this.setState({
            currentVolumeFade: _volumeFade.VOLUME_FADE.IN
          }); // Start volume may not be 0 if interrupting a fade-out


          var startVolume = isCurrentlyFading ? _this.audio.volume : 0;

          var endVolume = _this.getListeningVolume(_this.state.soundValue);

          var _adjustVolume2 = (0, _utils.adjustVolume)(_this.audio, startVolume, endVolume, {
            duration: fadeIn
          }, function () {
            _this.setState({
              currentVolumeFade: _volumeFade.VOLUME_FADE.NONE,
              currentVolumeFadeInterval: undefined,
              updateIntervalEndVolume: undefined
            }); // It's possible that the volume level in the UI has changed since beginning of fade


            // It's possible that the volume level in the UI has changed since beginning of fade
            _this.audio.volume = _this.getListeningVolume(_this.state.soundValue);
          }),
              fadeInInterval = _adjustVolume2.fadeInterval,
              _updateIntervalEndVolume = _adjustVolume2.updateIntervalEndVolume;

          _this.setState({
            currentVolumeFadeInterval: fadeInInterval,
            updateIntervalEndVolume: _updateIntervalEndVolume,
            isAutoPlayWhenUserClicked: true
          }, function () {
            if (fadeInInterval) {
              _this.audio.volume = startVolume;
            }

            _this.loadAndPlayAudio();
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playAudio", function () {
      var isLoaded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (_this.isAudioCanPlay || isLoaded) {
        if (isLoaded) {
          _this.setAudioLoaded();
        }

        _this.loadAndPlayAudio(isLoaded);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setAudioLoaded", function () {
      _this.setState({
        loading: false,
        playing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioPause", function () {
      _this.setState({
        playing: false
      });

      _this.props.onAudioPause && _this.props.onAudioPause(_this.getBaseAudioInfo());

      if (_this.state.lyric && _this.lyric) {
        _this.lyric.togglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioPlay", function () {
      // Audio currentTime changed will be trigger audio playing event
      if (_this.state.isAudioSeeking) {
        return;
      }

      _this.setState({
        playing: true,
        loading: false
      });

      _this.props.onAudioPlay && _this.props.onAudioPlay(_this.getBaseAudioInfo());

      if (_this.state.lyric && _this.lyric) {
        _this.lyric.togglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSetAudioLoadedProgress", function () {
      var _this$audio = _this.audio,
          timeRanges = _this$audio.buffered,
          duration = _this$audio.duration;

      if (timeRanges.length && timeRanges.end) {
        var loadedProgress = timeRanges.end(timeRanges.length - 1) / duration * 100;

        _this.setState({
          loadedProgress: loadedProgress
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadAndPlayAudio", function () {
      var isLoaded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var remember = _this.props.remember;
      var _this$state6 = _this.state,
          isInitRemember = _this$state6.isInitRemember,
          musicSrc = _this$state6.musicSrc;
      var _this$audio2 = _this.audio,
          networkState = _this$audio2.networkState,
          readyState = _this$audio2.readyState;

      if (!musicSrc) {
        return;
      }

      if (networkState === _audioState.AUDIO_NETWORK_STATE.NETWORK_NO_SOURCE || networkState === _audioState.AUDIO_NETWORK_STATE.NETWORK_EMPTY) {
        return _this.onAudioError({
          reason: "\n          [loadAndPlayAudio]: Failed to load because no supported source was found.\n          current network status is ".concat(networkState, ".\n        ")
        });
      }

      _this.setState({
        playing: false,
        loading: true,
        isAudioSeeking: false,
        isResetCoverRotate: false
      });

      if (isLoaded || readyState >= _audioState.AUDIO_READY_STATE.HAVE_FUTURE_DATA) {
        var _this$getLastPlayStat = _this.getLastPlayStatus(),
            playing = _this$getLastPlayStat.playing;

        var isLastPause = remember && !isInitRemember && !playing;
        var canPlay = remember ? !isLastPause : _this.isAudioCanPlay;

        _this.setState({
          playing: canPlay,
          loading: false
        }, function () {
          if (canPlay) {
            _this.play();
          }

          _this.setState({
            isInitAutoPlay: true,
            isInitRemember: true,
            isAutoPlayWhenUserClicked: false
          });
        });
      } else {
        _this.audio.load();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioError", function (error) {
      var _this$state7 = _this.state,
          playMode = _this$state7.playMode,
          audioLists = _this$state7.audioLists,
          playId = _this$state7.playId,
          musicSrc = _this$state7.musicSrc;
      var loadAudioErrorPlayNext = _this.props.loadAudioErrorPlayNext;
      var isSingleLoop = playMode === _playMode2["default"].singleLoop;
      var currentPlayMode = isSingleLoop ? _playMode2["default"].order : playMode;
      _this.lyric && _this.lyric.stop(); // 如果删除歌曲或其他原因导致列表为空时
      // 这时候会触发 https://developer.mozilla.org/en-US/docs/Web/API/MediaError

      if (musicSrc) {
        // 如果当前音乐加载出错 尝试播放下一首
        if (loadAudioErrorPlayNext && audioLists.length) {
          var isLastAudio = (playMode === _playMode2["default"].order || playMode === _playMode2["default"].orderLoop) && playId === audioLists[audioLists.length - 1][_player.PLAYER_KEY];

          if (!isLastAudio) {
            _this.handlePlay(currentPlayMode, true);
          }
        }

        _this.props.onAudioError && _this.props.onAudioError(_this.audio.error || error && error.reason || null, playId, audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlay", function (playMode) {
      var isNext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$state8 = _this.state,
          playId = _this$state8.playId,
          audioLists = _this$state8.audioLists;
      var audioListsLen = audioLists.length;

      if (!audioListsLen) {
        return;
      }

      var currentPlayIndex = _this.getCurrentPlayIndex();

      switch (playMode) {
        // 顺序播放
        case _playMode2["default"].order:
          // 拖拽排序后 或者 正常播放 到最后一首歌 就暂停
          if (currentPlayIndex === audioListsLen - 1) {
            _this.audio.pause();

            return;
          }

          _this.audioListsPlay(isNext ? audioLists[currentPlayIndex + 1][_player.PLAYER_KEY] : audioLists[currentPlayIndex - 1][_player.PLAYER_KEY]);

          break;
        // 列表循环

        case _playMode2["default"].orderLoop:
          if (isNext) {
            if (currentPlayIndex === audioListsLen - 1) {
              return _this.audioListsPlay(audioLists[0][_player.PLAYER_KEY]);
            }

            _this.audioListsPlay(audioLists[currentPlayIndex + 1][_player.PLAYER_KEY]);
          } else {
            if (currentPlayIndex === 0) {
              return _this.audioListsPlay(audioLists[audioListsLen - 1][_player.PLAYER_KEY]);
            }

            _this.audioListsPlay(audioLists[currentPlayIndex - 1][_player.PLAYER_KEY]);
          }

          break;
        // 单曲循环

        case _playMode2["default"].singleLoop:
          _this.audio.currentTime = 0;

          _this.audioListsPlay(playId, true);

          break;
        // 随机播放

        case _playMode2["default"].shufflePlay:
          {
            var randomIndex = (0, _utils.createRandomNum)(0, audioListsLen - 1);

            if (randomIndex === _this.getCurrentPlayIndex()) {
              randomIndex = _this.getPlayIndex(randomIndex + 1);
            }

            var randomPlayId = (audioLists[randomIndex] || {})[_player.PLAYER_KEY];

            _this.audioListsPlay(randomPlayId, true);
          }
          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioEnd", function () {
      _this.props.onAudioEnded && _this.props.onAudioEnded(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo());

      _this.handlePlay(_this.state.playMode);
    });

    _defineProperty(_assertThisInitialized(_this), "audioPrevAndNextBasePlayHandle", function () {
      var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var playMode = _this.state.playMode;
      var _playMode = '';

      switch (playMode) {
        case _playMode2["default"].shufflePlay:
          _playMode = playMode;
          break;

        default:
          _playMode = _playMode2["default"].orderLoop;
          break;
      }

      _this.handlePlay(_playMode, isNext);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayPrevAudio", function () {
      var restartCurrentOnPrev = _this.props.restartCurrentOnPrev;

      if (restartCurrentOnPrev && _this.audio.currentTime > 1) {
        _this.audio.currentTime = 0;
        return;
      }

      _this.audioPrevAndNextBasePlayHandle(false);
    });

    _defineProperty(_assertThisInitialized(_this), "onPlayNextAudio", function () {
      _this.audioPrevAndNextBasePlayHandle(true);
    });

    _defineProperty(_assertThisInitialized(_this), "audioTimeUpdate", function () {
      var currentTime = _this.audio.currentTime;

      _this.setState({
        currentTime: currentTime
      });

      if (_this.props.remember) {
        _this.saveLastPlayStatus();
      }

      _this.props.onAudioProgress && _this.props.onAudioProgress(_this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioSoundChange", function (value) {
      _this.setAudioVolume(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioVolumeChange", function () {
      var volume = _this.audio.volume;
      var _this$state9 = _this.state,
          currentVolumeFade = _this$state9.currentVolumeFade,
          currentAudioVolume = _this$state9.currentAudioVolume;

      if (currentVolumeFade !== _volumeFade.VOLUME_FADE.NONE || currentAudioVolume === volume) {
        return;
      }

      var volumeBarValue = _this.getVolumeBarValue(volume);

      _this.setState({
        soundValue: volumeBarValue
      });

      if (_this.props.onAudioVolumeChange) {
        var formattedVolume = parseFloat(volume.toFixed(4));

        _this.props.onAudioVolumeChange(formattedVolume);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onProgressChange", function (currentTime) {
      if (_this.audio) {
        _this.audio.currentTime = currentTime;
      }

      _this.setState({
        currentTime: currentTime,
        isAudioSeeking: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioSeeked", function (currentTime) {
      _this.setState({
        isAudioSeeking: true
      });

      if (!_this.state.audioLists.length) {
        return;
      }

      _this.lyric && _this.lyric.seek(currentTime * 1000);

      if (!_this.state.playing) {
        _this.lyric && _this.lyric.stop();
      }

      if (_this.audio) {
        _this.audio.currentTime = currentTime;
      }

      _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
      setTimeout(function () {
        _this.setState({
          isAudioSeeking: false
        });
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioMute", function () {
      _this.setState({
        soundValue: 0,
        currentAudioVolume: _this.audio.volume
      }, function () {
        _this.audio.volume = 0;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioAbort", function (e) {
      var _this$state10 = _this.state,
          audioLists = _this$state10.audioLists,
          playId = _this$state10.playId;

      var audioInfo = _this.getBaseAudioInfo();

      var mergedAudioInfo = _objectSpread(_objectSpread({}, e), audioInfo);

      _this.props.onAudioAbort && _this.props.onAudioAbort(playId, audioLists, mergedAudioInfo);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMode", function (mode) {
      if (mode === _mode.MODE.FULL) {
        _this.setState({
          toggle: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleTheme", function (theme) {
      _this.setState({
        theme: theme
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioListsSortEnd", function (_ref8) {
      var oldIndex = _ref8.oldIndex,
          newIndex = _ref8.newIndex;

      if (oldIndex === newIndex) {
        return;
      }

      var _this$state11 = _this.state,
          playId = _this$state11.playId,
          audioLists = _this$state11.audioLists;

      var _audioLists = _toConsumableArray(audioLists);

      var item = _audioLists.splice(oldIndex, 1)[0];

      _audioLists.splice(newIndex, 0, item); // 如果拖动正在播放的歌曲 播放Id 等于 拖动后的index


      var _playId = oldIndex === playId ? newIndex : playId;

      _this.setState({
        audioLists: _audioLists,
        playId: _playId
      });

      _this.props.onAudioListsSortEnd && _this.props.onAudioListsSortEnd(oldIndex, newIndex);
      _this.props.onAudioListsChange && _this.props.onAudioListsChange(_playId, _audioLists, _this.getBaseAudioInfo()); // TODO: remove

      if (_this.props.onAudioListsDragEnd) {
        // eslint-disable-next-line no-console
        console.warn('[Deprecated] onAudioListsDragEnd is deprecated. please use onAudioListsSortEnd(oldIndex, newIndex){}');

        _this.props.onAudioListsDragEnd(oldIndex, newIndex);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveLastPlayStatus", function () {
      var _this$state12 = _this.state,
          currentTime = _this$state12.currentTime,
          playId = _this$state12.playId,
          theme = _this$state12.theme,
          soundValue = _this$state12.soundValue,
          playMode = _this$state12.playMode,
          name = _this$state12.name,
          cover = _this$state12.cover,
          singer = _this$state12.singer,
          musicSrc = _this$state12.musicSrc;
      var lastPlayStatus = JSON.stringify({
        currentTime: currentTime,
        playId: playId,
        theme: theme,
        playMode: playMode,
        soundValue: soundValue,
        name: name,
        cover: cover,
        singer: singer,
        musicSrc: musicSrc
      });
      localStorage.setItem('lastPlayStatus', lastPlayStatus);
    });

    _defineProperty(_assertThisInitialized(_this), "getLastPlayStatus", function () {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          defaultPlayMode = _this$props2.defaultPlayMode,
          playMode = _this$props2.playMode,
          defaultPlayIndex = _this$props2.defaultPlayIndex,
          playIndex = _this$props2.playIndex;
      var status = {
        currentTime: 0,
        playMode: playMode || defaultPlayMode || _playMode2["default"].order,
        name: '',
        cover: '',
        singer: '',
        musicSrc: '',
        lyric: '',
        playId: _this.getDefaultPlayId(),
        theme: theme,
        playing: true,
        playIndex: playIndex || defaultPlayIndex || 0
      };

      try {
        return JSON.parse(localStorage.getItem('lastPlayStatus')) || status;
      } catch (error) {
        return status;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkCurrentPlayingAudioIsInUpdatedAudioLists", function () {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      var _this$state13 = _this.state,
          playId = _this$state13.playId,
          musicSrc = _this$state13.musicSrc;

      if (!nextProps.quietUpdate || !Array.isArray(nextProps.audioLists)) {
        return false;
      }

      return playId && nextProps.audioLists.some(function (newAudioInfo) {
        return newAudioInfo[_player.PLAYER_KEY] === playId || newAudioInfo.musicSrc === musicSrc;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      // https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
      var playPromise = _this.audio.play();

      if (playPromise && playPromise.then) {
        playPromise.then(function () {
          _this.setState({
            loading: false,
            playing: true
          });
        })["catch"](function () {
          _this.setState({
            loading: false,
            playing: false
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mockAutoPlayForMobile", function () {
      if (_this.props.autoPlay && !_this.state.playing) {
        _this.audio.load();

        _this.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "bindMobileAutoPlayEvents", function () {
      document.addEventListener('touchstart', function () {
        _this.mockAutoPlayForMobile();
      }, {
        once: true
      }); // 监听微信准备就绪事件

      document.addEventListener('WeixinJSBridgeReady', function () {
        _this.mockAutoPlayForMobile();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bindSafariAutoPlayEvents", function () {
      document.addEventListener('click', function () {
        _this.mockAutoPlayForMobile();
      }, {
        once: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "unBindEvents", function () {
      var _this2;

      (_this2 = _this).bindEvents.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "bindEvents", function () {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.audio;
      var eventsNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        waiting: _this.loadAndPlayAudio,
        canplay: _this.onAudioCanPlay,
        error: _this.onAudioError,
        ended: _this.onAudioEnd,
        pause: _this.onAudioPause,
        play: _this.onAudioPlay,
        timeupdate: _this.audioTimeUpdate,
        volumechange: _this.onAudioVolumeChange,
        abort: _this.onAudioAbort,
        progress: _this.onSetAudioLoadedProgress
      };
      var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var once = _this.props.once;

      for (var name in eventsNames) {
        var _events = eventsNames[name];

        if (target) {
          bind ? target.addEventListener(name, _events, {
            once: !!(once && name === 'play')
          }) : target.removeEventListener(name, _events);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayId", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.audioLists;

      var playIndex = _this.getPlayIndex(undefined, audioLists);

      var playId = _this.state.playId || audioLists[playIndex] && audioLists[playIndex][_player.PLAYER_KEY];
      return playId;
    });

    _defineProperty(_assertThisInitialized(_this), "_getPlayInfo", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var playId = _this.getPlayId(audioLists);

      var _ref9 = audioLists.find(function (audio) {
        return audio[_player.PLAYER_KEY] === playId;
      }) || {},
          _ref9$name = _ref9.name,
          name = _ref9$name === void 0 ? '' : _ref9$name,
          _ref9$cover = _ref9.cover,
          cover = _ref9$cover === void 0 ? '' : _ref9$cover,
          _ref9$singer = _ref9.singer,
          singer = _ref9$singer === void 0 ? '' : _ref9$singer,
          _ref9$musicSrc = _ref9.musicSrc,
          musicSrc = _ref9$musicSrc === void 0 ? '' : _ref9$musicSrc,
          _ref9$lyric = _ref9.lyric,
          lyric = _ref9$lyric === void 0 ? '' : _ref9$lyric;

      return {
        name: name,
        cover: cover,
        singer: singer,
        musicSrc: musicSrc,
        lyric: lyric,
        audioLists: audioLists,
        playId: playId
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayInfo", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var newAudioLists = audioLists.filter(function (audio) {
        return !audio[_player.PLAYER_KEY];
      });
      var lastAudioLists = audioLists.filter(function (audio) {
        return audio[_player.PLAYER_KEY];
      });
      var mergedAudioLists = [].concat(_toConsumableArray(lastAudioLists), _toConsumableArray(newAudioLists.map(function (info) {
        return _objectSpread(_objectSpread({}, info), {}, _defineProperty({}, _player.PLAYER_KEY, (0, _utils.uuId)()));
      })));
      return _this._getPlayInfo(mergedAudioLists);
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayInfoOfNewList", function (nextProps) {
      var _nextProps$audioLists = nextProps.audioLists,
          audioLists = _nextProps$audioLists === void 0 ? [] : _nextProps$audioLists;

      var _audioLists = audioLists.map(function (info) {
        var prevAudioBeforeUpdate = nextProps.quietUpdate && _this.state.audioLists.find(function (_ref10) {
          var musicSrc = _ref10.musicSrc;
          return musicSrc === info.musicSrc;
        }) || {};
        return _objectSpread(_objectSpread({}, info), {}, _defineProperty({}, _player.PLAYER_KEY, prevAudioBeforeUpdate[_player.PLAYER_KEY] || (0, _utils.uuId)()));
      });

      return _this._getPlayInfo(_audioLists);
    });

    _defineProperty(_assertThisInitialized(_this), "initPlayInfo", function (audioLists, cb) {
      var info = _this.getPlayInfo(audioLists);

      switch (_typeof(info.musicSrc)) {
        case 'function':
          info.musicSrc().then(function (originMusicSrc) {
            _this.setState(_objectSpread(_objectSpread({}, info), {}, {
              musicSrc: originMusicSrc
            }), cb);
          }, _this.onAudioError);
          break;

        default:
          _this.setState(info, cb);

      }
    });

    _defineProperty(_assertThisInitialized(_this), "addMatchMediaListener", function (query, handler) {
      var media = window.matchMedia(query);
      handler(media);

      if ('addEventListener' in media) {
        media.addEventListener('change', handler);
      } else {
        media.addListener(handler);
      }

      return media;
    });

    _defineProperty(_assertThisInitialized(_this), "removeMatchMediaListener", function (media, handler) {
      if (media) {
        if ('removeEventListener' in media) {
          media.removeEventListener('change', handler);
        } else {
          media.removeListener && media.removeListener(handler);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addMobileListener", function () {
      _this.mobileMedia = _this.addMatchMediaListener(_this.props.mobileMediaQuery, _this.mobileMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "removeMobileListener", function () {
      _this.removeMatchMediaListener(_this.mobileMedia, _this.mobileMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "addSystemThemeListener", function () {
      _this.systemThemeMedia = _this.addMatchMediaListener(_mediaQuery.MEDIA_QUERY.DARK_THEME, _this.systemThemeMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "removeSystemThemeListener", function () {
      _this.removeMatchMediaListener(_this.systemThemeMedia, _this.systemThemeMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "mobileMediaHandler", function (_ref11) {
      var matches = _ref11.matches;

      _this.setState({
        isMobile: !!matches
      });
    });

    _defineProperty(_assertThisInitialized(_this), "systemThemeMediaHandler", function (_ref12) {
      var matches = _ref12.matches;

      if (_this.props.theme === _theme.THEME.AUTO) {
        var theme = matches ? _theme.THEME.DARK : _theme.THEME.LIGHT;

        _this.updateTheme(theme);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setDefaultAudioVolume", function () {
      var _this$props3 = _this.props,
          defaultVolume = _this$props3.defaultVolume,
          remember = _this$props3.remember; // 音量 [0-1]

      _this.defaultVolume = Math.max(0, Math.min(defaultVolume, 1));

      var _this$getLastPlayStat2 = _this.getLastPlayStatus(),
          _this$getLastPlayStat3 = _this$getLastPlayStat2.soundValue,
          soundValue = _this$getLastPlayStat3 === void 0 ? _this.defaultVolume : _this$getLastPlayStat3;

      _this.setAudioVolume(remember ? soundValue : _this.defaultVolume);
    });

    _defineProperty(_assertThisInitialized(_this), "getDefaultPlayId", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.audioLists;

      var playIndex = _this.getPlayIndex();

      return audioLists[playIndex] && audioLists[playIndex][_player.PLAYER_KEY];
    });

    _defineProperty(_assertThisInitialized(_this), "initLyricParser", function () {
      _this.lyric = new _lyric["default"](_this.state.lyric, _this.onLyricChange);

      _this.setState({
        currentLyric: _this.lyric.lines[0] && _this.lyric.lines[0].text
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLyricChange", function (_ref13) {
      var lineNum = _ref13.lineNum,
          txt = _ref13.txt;

      _this.setState({
        currentLyric: txt
      });

      _this.props.onAudioLyricChange && _this.props.onAudioLyricChange(lineNum, txt);
    });

    _defineProperty(_assertThisInitialized(_this), "updateTheme", function (theme) {
      if (theme && theme !== _this.props.theme && Object.values(_theme.THEME).includes(theme)) {
        _this.setState({
          theme: theme
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMode", function (mode) {
      if (mode && mode !== _this.props.mode && Object.values(_mode.MODE).includes(mode)) {
        _this.setState({
          toggle: mode === _mode.MODE.FULL
        });

        if (mode === _mode.MODE.MINI) {
          _this._closeAudioListsPanel();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updatePlayMode", function (playMode) {
      if (!Object.values(_playMode2["default"]).includes(playMode)) {
        return;
      }

      if (playMode !== _this.props.playMode) {
        _this.setState({
          playMode: playMode
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateAudioLists", function (audioLists) {
      var newAudioLists = [].concat(_toConsumableArray(_this.state.audioLists), _toConsumableArray(audioLists.filter(function (audio) {
        return _this.state.audioLists.findIndex(function (v) {
          return v.musicSrc === audio.musicSrc;
        }) === -1;
      })));

      _this.initPlayInfo(newAudioLists);

      _this.bindEvents(_this.audio);

      _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, audioLists, _this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "loadNewAudioLists", function (nextProps) {
      var audioLists = nextProps.audioLists,
          remember = nextProps.remember,
          playMode = nextProps.playMode,
          theme = nextProps.theme,
          autoPlayInitLoadPlayList = nextProps.autoPlayInitLoadPlayList,
          playIndex = nextProps.playIndex;

      if (!Array.isArray(audioLists) || !audioLists.length) {
        return;
      }

      var info = _this.getPlayInfoOfNewList(nextProps);

      var lastPlayStatus = remember ? _this.getLastPlayStatus() : {
        playMode: playMode || _playMode2["default"].order,
        playIndex: playIndex || _player.DEFAULT_PLAY_INDEX
      };

      if (theme !== _theme.THEME.AUTO) {
        lastPlayStatus.theme = theme;
      }

      var audioInfo = _objectSpread(_objectSpread(_objectSpread({}, info), lastPlayStatus), {}, {
        isInitAutoPlay: autoPlayInitLoadPlayList,
        playing: _this.isAudioCanPlay
      });

      if (_this.checkCurrentPlayingAudioIsInUpdatedAudioLists(nextProps)) {
        _this.setState({
          audioLists: info.audioLists
        });

        return;
      }

      switch (_typeof(info.musicSrc)) {
        case 'function':
          info.musicSrc().then(function (musicSrc) {
            _this.setState(_objectSpread(_objectSpread({}, audioInfo), {}, {
              musicSrc: musicSrc
            }));
          }, _this.onAudioError);
          break;

        default:
          _this.setState(audioInfo);

      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetPlayId", function () {
      return new Promise(function (res) {
        _this.setState({
          playId: _this.initPlayId
        }, res);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeAudioLists", function (nextProps) {
      if (!_this.checkCurrentPlayingAudioIsInUpdatedAudioLists(nextProps)) {
        _this.resetAudioStatus();
      }

      _this.resetPlayId().then(function () {
        _this.loadNewAudioLists(nextProps);

        _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, nextProps.audioLists, _this.getBaseAudioInfo());
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updatePlayIndex", function (playIndex) {
      var currentPlayIndex = _this.getCurrentPlayIndex();

      if (playIndex !== undefined && currentPlayIndex !== playIndex) {
        _this.resetAudioPlayStatus().then(function () {
          var currentPlayAudio = _this.state.audioLists[_this.getPlayIndex(playIndex)];

          if (currentPlayAudio && currentPlayAudio[_player.PLAYER_KEY]) {
            _this.audioListsPlay(currentPlayAudio[_player.PLAYER_KEY], true);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playByIndex", function (index) {
      _this.updatePlayIndex(index);
    });

    _defineProperty(_assertThisInitialized(_this), "getEnhanceAudio", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          audio = _assertThisInitialize.audio;

      [{
        name: 'destroy',
        value: _this.onDestroyPlayer
      }, {
        name: 'updatePlayIndex',
        value: _this.updatePlayIndex
      }, {
        name: 'playByIndex',
        value: _this.playByIndex
      }, {
        name: 'playNext',
        value: _this.onPlayNextAudio
      }, {
        name: 'playPrev',
        value: _this.onPlayPrevAudio
      }, {
        name: 'togglePlay',
        value: _this.onTogglePlay
      }, {
        name: 'clear',
        value: _this.clearAudioLists
      }
      /*{
        name: 'sortable',
        value: this.sortable,
      },*/
      ].forEach(function (_ref14) {
        var name = _ref14.name,
            value = _ref14.value;
        Object.defineProperty(audio, name, {
          value: value,
          writable: false
        });
      });
      return audio;
    });

    _defineProperty(_assertThisInitialized(_this), "onGetAudioInstance", function () {
      if (_this.props.getAudioInstance) {
        _this.props.getAudioInstance(_this.getEnhanceAudio());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMediaSessionMetadata", function () {
      if ('mediaSession' in navigator && _this.props.showMediaSession) {
        var _this$state14 = _this.state,
            name = _this$state14.name,
            cover = _this$state14.cover,
            singer = _this$state14.singer;
        var mediaMetaDataConfig = {
          title: name,
          artist: singer,
          album: name
        };

        if (cover) {
          mediaMetaDataConfig.artwork = ['96x96', '128x128', '192x192', '256x256', '384x384', '512x512'].map(function (size) {
            return {
              src: cover,
              sizes: size,
              type: 'image/png'
            };
          });
        }

        navigator.mediaSession.metadata = new MediaMetadata(mediaMetaDataConfig);

        _this.updateMediaSessionPositionState();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMediaSessionPositionState", function () {
      if ('setPositionState' in navigator.mediaSession) {
        try {
          var _assertThisInitialize2 = _assertThisInitialized(_this),
              audio = _assertThisInitialize2.audio;

          navigator.mediaSession.setPositionState({
            duration: _this.audioDuration,
            playbackRate: audio.playbackRate || 1,
            position: audio.currentTime || 0
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Update media session position state failed: ', error);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddMediaSession", function () {
      if ('mediaSession' in navigator && _this.props.showMediaSession) {
        var defaultSkipTime = 10;
        navigator.mediaSession.setActionHandler('play', _this.onTogglePlay);
        navigator.mediaSession.setActionHandler('pause', _this.onTogglePlay);
        navigator.mediaSession.setActionHandler('seekbackward', function (details) {
          var skipTime = details.seekOffset || defaultSkipTime;
          _this.audio.currentTime = Math.max(_this.audio.currentTime - skipTime, 0);
          _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
        });
        navigator.mediaSession.setActionHandler('seekforward', function (details) {
          var skipTime = details.seekOffset || defaultSkipTime;
          _this.audio.currentTime = Math.min(_this.audio.currentTime + skipTime, _this.audioDuration);
          _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
        });
        navigator.mediaSession.setActionHandler('previoustrack', _this.onPlayPrevAudio);
        navigator.mediaSession.setActionHandler('nexttrack', _this.onPlayNextAudio);
        setTimeout(function () {
          _this.updateMediaSessionMetadata();
        }, 0);

        try {
          navigator.mediaSession.setActionHandler('seekto', function (event) {
            if (event.fastSeek && 'fastSeek' in _this.audio) {
              _this.audio.fastSeek(event.seekTime);

              return;
            }

            _this.audio.currentTime = event.seekTime;

            _this.updateMediaSessionPositionState();
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn('Warning! The "seekto" media session action is not supported.');
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "bindUnhandledRejection", function () {
      window.addEventListener('unhandledrejection', _this.onAudioError);
    });

    _defineProperty(_assertThisInitialized(_this), "unBindUnhandledRejection", function () {
      window.removeEventListener('unhandledrejection', _this.onAudioError);
    });

    _defineProperty(_assertThisInitialized(_this), "bindKeyDownEvents", function () {
      if (_this.props.spaceBar && _this.player.current) {
        _this.player.current.addEventListener('keydown', _this.onKeyDown, false);

        _this.player.current.focus({
          preventScroll: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unBindKeyDownEvents", function () {
      if (_this.player.current) {
        _this.player.current.removeEventListener('keydown', _this.onKeyDown, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var spaceBar = _this.props.spaceBar;

      if (spaceBar && e.keyCode === _keycode.SPACE_BAR_KEYCODE) {
        _this.onTogglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initPlayer", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.audioLists;
      var isBindKeyDownEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var resetAudioVolume = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (resetAudioVolume) {
        _this.setDefaultAudioVolume();
      }

      if (!Array.isArray(audioLists) || !audioLists.length) {
        return;
      }

      _this.bindUnhandledRejection();

      _this.bindEvents(_this.audio);

      _this.initLyricParser();

      _this.onAddMediaSession();

      if (IS_MOBILE) {
        _this.bindMobileAutoPlayEvents();
      } else {
        if (isBindKeyDownEvents) {
          _this.bindKeyDownEvents();
        }

        if ((0, _utils.isSafari)()) {
          _this.bindSafariAutoPlayEvents();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeLyric", function () {
      if (_this.lyric) {
        _this.lyric.stop();

        _this.lyric = undefined;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unInstallPlayer", function () {
      _this.unBindEvents(_this.audio, undefined, false);

      _this.unBindUnhandledRejection();

      _this.unBindKeyDownEvents();

      _this.removeMobileListener();

      _this.removeLyric();

      _this._onDestroyed(); //this.sortable && this.sortable.destroy()

    });

    _defineProperty(_assertThisInitialized(_this), "onAudioCanPlay", function () {
      if (_this.state.isAudioSeeking) {
        return;
      }

      _this.setState({
        canPlay: true
      }, function () {
        _this.playAudio(true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initSortableAudioLists", function () {
      var _this$props4 = _this.props,
          audioLists = _this$props4.audioLists,
          sortableOptions = _this$props4.sortableOptions;

      var selector = _sortable["default"].selector,
          defaultOptions = _objectWithoutProperties(_sortable["default"], ["selector"]);

      var container = document.querySelector(".".concat(selector));

      if (Array.isArray(audioLists) && !audioLists.length || !container) {
        return;
      }
      /*if (this.sortable) {
        this.sortable.destroy()
      }*/

      /*this.sortable = new Sortable(container, {
        onEnd: this.onAudioListsSortEnd,
        ...defaultOptions,
        ...sortableOptions,
      })*/

    });

    _this.audio = null;
    _this.targetId = 'music-player-controller';
    _this._PLAY_MODE_ = Object.values(_playMode2["default"]);
    _this._PLAY_MODE_LENGTH_ = _this._PLAY_MODE_.length;
    _this.player = /*#__PURE__*/(0, _react.createRef)();
    _this.destroyBtn = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  _createClass(ReactJkMusicPlayer, [{
    key: "locale",
    get: // 初始播放id
    function get() {
      var locale = this.props.locale;

      if (typeof locale === 'string') {
        return _locale2["default"][this.props.locale];
      }

      return locale ? _objectSpread(_objectSpread({}, _locale2["default"][_locale["default"].en_US]), locale) : {};
    }
  }, {
    key: "audioDuration",
    get: function get() {
      var _this$state15 = this.state,
          audioLists = _this$state15.audioLists,
          playId = _this$state15.playId;

      if (!audioLists.length || !this.audio) {
        return 0;
      }

      var _ref15 = audioLists.find(function (audio) {
        return audio[_player.PLAYER_KEY] === playId;
      }) || {},
          duration = _ref15.duration;

      return Math.max(Number(duration) || this.audio.duration || 0, 0);
    }
  }, {
    key: "isAudioCanPlay",
    get: function get() {
      var autoPlay = this.props.autoPlay;
      var _this$state16 = this.state,
          isInitAutoPlay = _this$state16.isInitAutoPlay,
          isAutoPlayWhenUserClicked = _this$state16.isAutoPlayWhenUserClicked,
          canPlay = _this$state16.canPlay;
      return canPlay && (isInitAutoPlay || autoPlay || isAutoPlayWhenUserClicked);
    }
  }, {
    key: "iconMap",
    get: function get() {
      var _this3 = this;

      var Spin = function Spin() {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: "loading group"
        }, _this3.props.icon.loading);
      };

      return _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_ICON), this.props.icon), {}, {
        loading: /*#__PURE__*/_react["default"].createElement(Spin, null)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props5 = this.props,
          className = _this$props5.className,
          drag = _this$props5.drag,
          style = _this$props5.style,
          showDownload = _this$props5.showDownload,
          showPlay = _this$props5.showPlay,
          showReload = _this$props5.showReload,
          showPlayMode = _this$props5.showPlayMode,
          showThemeSwitch = _this$props5.showThemeSwitch,
          toggleMode = _this$props5.toggleMode,
          showMiniModeCover = _this$props5.showMiniModeCover,
          extendsContent = _this$props5.extendsContent,
          defaultPlayMode = _this$props5.defaultPlayMode,
          seeked = _this$props5.seeked,
          showProgressLoadBar = _this$props5.showProgressLoadBar,
          bounds = _this$props5.bounds,
          defaultPosition = _this$props5.defaultPosition,
          showMiniProcessBar = _this$props5.showMiniProcessBar,
          preload = _this$props5.preload,
          glassBg = _this$props5.glassBg,
          remove = _this$props5.remove,
          lyricClassName = _this$props5.lyricClassName,
          showLyric = _this$props5.showLyric,
          getContainer = _this$props5.getContainer,
          autoHiddenCover = _this$props5.autoHiddenCover,
          showDestroy = _this$props5.showDestroy,
          responsive = _this$props5.responsive;
      var locale = this.locale;
      var _this$state17 = this.state,
          toggle = _this$state17.toggle,
          playing = _this$state17.playing,
          currentTime = _this$state17.currentTime,
          soundValue = _this$state17.soundValue,
          moveX = _this$state17.moveX,
          moveY = _this$state17.moveY,
          loading = _this$state17.loading,
          audioListsPanelVisible = _this$state17.audioListsPanelVisible,
          theme = _this$state17.theme,
          name = _this$state17.name,
          cover = _this$state17.cover,
          singer = _this$state17.singer,
          musicSrc = _this$state17.musicSrc,
          playId = _this$state17.playId,
          isMobile = _this$state17.isMobile,
          playMode = _this$state17.playMode,
          playModeTipVisible = _this$state17.playModeTipVisible,
          playModelNameVisible = _this$state17.playModelNameVisible,
          initAnimate = _this$state17.initAnimate,
          loadedProgress = _this$state17.loadedProgress,
          audioLists = _this$state17.audioLists,
          removeId = _this$state17.removeId,
          currentLyric = _this$state17.currentLyric,
          audioLyricVisible = _this$state17.audioLyricVisible,
          isPlayDestroyed = _this$state17.isPlayDestroyed,
          isResetCoverRotate = _this$state17.isResetCoverRotate;
      var preloadState = preload === false || preload === 'none' ? {} : preload === true ? {
        preload: 'auto'
      } : {
        preload: preload
      };
      var panelToggleAnimate = initAnimate ? {
        show: audioListsPanelVisible,
        hide: !audioListsPanelVisible
      } : {
        show: audioListsPanelVisible
      };
      var currentPlayMode = _playMode2["default"][playMode || defaultPlayMode] || _playMode2["default"].order;
      var currentPlayModeName = locale.playModeText[currentPlayMode];
      var miniModeCoverConfig = showMiniModeCover && !autoHiddenCover || autoHiddenCover && cover ? {
        style: {
          backgroundImage: "url(".concat(cover, ")")
        }
      } : {};
      var formattedCurrentTime = (0, _utils.formatTime)(currentTime);
      var formattedAudioDuration = (0, _utils.formatTime)(this.audioDuration);
      var progressHandler = seeked ? {
        onChange: this.onProgressChange,
        onAfterChange: this.onAudioSeeked
      } : {};

      var ProgressBar = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showProgressLoadBar && /*#__PURE__*/_react["default"].createElement("div", {
        className: "progress-load-bar",
        style: {
          width: "".concat(Math.min(loadedProgress, 100), "%")
        }
      }), /*#__PURE__*/_react["default"].createElement(_Slider["default"], _extends({
        max: Math.ceil(this.audioDuration),
        defaultValue: 0,
        value: Math.ceil(currentTime)
      }, progressHandler, _slider.PROGRESS_BAR_SLIDER_OPTIONS)));

      var DownloadComponent = showDownload && /*#__PURE__*/_react["default"].createElement("span", {
        className: "group audio-download",
        onClick: this.onAudioDownload,
        title: locale.downloadText
      }, this.iconMap.download);

      var ThemeSwitchComponent = showThemeSwitch && /*#__PURE__*/_react["default"].createElement("span", {
        className: "group theme-switch"
      }, /*#__PURE__*/_react["default"].createElement(_rcSwitch["default"], {
        className: "theme-switch-container",
        onChange: this.themeChange,
        checkedChildren: locale.lightThemeText,
        unCheckedChildren: locale.darkThemeText,
        checked: theme === _theme.THEME.LIGHT,
        title: locale.switchThemeText
      }));

      var ReloadComponent = showReload && /*#__PURE__*/_react["default"].createElement("span", {
        className: "group reload-btn",
        onClick: this.onAudioReload,
        title: locale.reloadText
      }, this.iconMap.reload);

      var LyricComponent = showLyric && /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])('group lyric-btn', {
          'lyric-btn-active': audioLyricVisible
        }),
        onClick: this.toggleAudioLyric,
        title: locale.toggleLyricText
      }, this.iconMap.lyric);

      var PlayModeComponent = showPlayMode && /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])('group loop-btn'),
        onClick: this.togglePlayMode,
        title: locale.playModeText[currentPlayMode]
      }, this.renderPlayModeIcon(currentPlayMode));

      var miniProcessBarR = isMobile ? 30 : 40;

      var DestroyComponent = showDestroy && /*#__PURE__*/_react["default"].createElement("span", {
        title: locale.destroyText,
        className: "group destroy-btn",
        ref: this.destroyBtn,
        onClick: !drag || toggle ? this.onDestroyPlayer : undefined
      }, this.iconMap.destroy);

      var AudioController = /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('react-jinke-music-player'),
        style: defaultPosition,
        tabIndex: "-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('music-player')
      }, showMiniProcessBar && /*#__PURE__*/_react["default"].createElement(_CircleProcessBar["default"], {
        progress: currentTime / this.audioDuration,
        r: miniProcessBarR
      }), /*#__PURE__*/_react["default"].createElement("div", _extends({
        id: this.targetId,
        className: (0, _classnames["default"])('scale', 'music-player-controller', {
          'music-player-playing': playing
        })
      }, miniModeCoverConfig, {
        onClick: !drag ? this.onOpenPanel : undefined
      }), loading ? this.iconMap.loading : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "controller-title"
      }, locale.controllerTitle), /*#__PURE__*/_react["default"].createElement("div", {
        className: "music-player-controller-setting"
      }, toggle ? locale.closeText : locale.openText))), DestroyComponent));

      var container = getContainer() || document.body;
      var audioTitle = this.getAudioTitle();

      if (isPlayDestroyed) {
        return null;
      }

      var shouldShowPlayIcon = !playing || this.state.currentVolumeFade === _volumeFade.VOLUME_FADE.OUT;
      return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('react-jinke-music-player-main', {
          'light-theme': theme === _theme.THEME.LIGHT,
          'dark-theme': theme === _theme.THEME.DARK
        }, className),
        style: style,
        ref: this.player,
        tabIndex: "-1"
      }, toggle && isMobile && responsive && /*#__PURE__*/_react["default"].createElement(_PlayerMobile["default"], {
        playing: playing,
        loading: loading,
        name: name,
        singer: singer,
        cover: cover,
        themeSwitch: ThemeSwitchComponent,
        duration: formattedAudioDuration,
        currentTime: formattedCurrentTime,
        progressBar: ProgressBar,
        onPlay: this.onTogglePlay,
        currentPlayModeName: currentPlayModeName,
        playMode: PlayModeComponent,
        audioNextPlay: this.onPlayNextAudio,
        audioPrevPlay: this.onPlayPrevAudio,
        icon: _objectSpread(_objectSpread({}, this.iconMap), {}, {
          reload: ReloadComponent,
          download: DownloadComponent,
          lyric: LyricComponent
        }),
        playModeTipVisible: playModeTipVisible,
        openAudioListsPanel: this.openAudioListsPanel,
        onClose: this.onHidePanel,
        extendsContent: extendsContent,
        glassBg: glassBg,
        autoHiddenCover: autoHiddenCover,
        onCoverClick: this.onCoverClick,
        locale: locale,
        toggleMode: toggleMode,
        renderAudioTitle: this.renderAudioTitle,
        shouldShowPlayIcon: shouldShowPlayIcon,
        isResetCoverRotate: isResetCoverRotate
      }), toggle ? undefined : drag ? /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
        bounds: bounds,
        position: {
          x: moveX,
          y: moveY
        },
        onDrag: this.onControllerDrag,
        onStop: this.onControllerDragStop,
        onStart: this.onControllerDragStart
      }, AudioController) : AudioController, toggle && (!isMobile || !responsive) && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('music-player-panel', 'translate', {
          'glass-bg': glassBg
        })
      }, /*#__PURE__*/_react["default"].createElement("section", {
        className: "panel-content"
      }, (!autoHiddenCover || autoHiddenCover && cover) && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('img-content', 'img-rotate', {
          'img-rotate-pause': !playing || !cover,
          'img-rotate-reset': isResetCoverRotate
        }),
        style: {
          backgroundImage: "url(".concat(cover, ")")
        },
        onClick: function onClick() {
          return _this4.onCoverClick();
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "progress-bar-content"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "audio-title",
        title: audioTitle
      }, this.renderAudioTitle()), /*#__PURE__*/_react["default"].createElement("section", {
        className: "audio-main"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "current-time",
        title: formattedCurrentTime
      }, loading ? '--' : formattedCurrentTime), /*#__PURE__*/_react["default"].createElement("div", {
        className: "progress-bar"
      }, ProgressBar), /*#__PURE__*/_react["default"].createElement("span", {
        className: "duration",
        title: formattedAudioDuration
      }, loading ? '--' : formattedAudioDuration))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "player-content"
      }, !showPlay ? loading && this.iconMap.loading : /*#__PURE__*/_react["default"].createElement("span", {
        className: "group"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "group prev-audio",
        title: locale.previousTrackText,
        onClick: this.onPlayPrevAudio
      }, this.iconMap.prev), loading ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "group loading-icon",
        title: locale.loadingText
      }, this.iconMap.loading) : /*#__PURE__*/_react["default"].createElement("span", {
        className: "group play-btn",
        onClick: this.onTogglePlay,
        title: shouldShowPlayIcon ? locale.clickToPlayText : locale.clickToPauseText
      }, shouldShowPlayIcon ? this.iconMap.play : this.iconMap.pause), /*#__PURE__*/_react["default"].createElement("span", {
        className: "group next-audio",
        title: locale.nextTrackText,
        onClick: this.onPlayNextAudio
      }, this.iconMap.next)), ReloadComponent, DownloadComponent, ThemeSwitchComponent, extendsContent || null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "group play-sounds",
        title: locale.volumeText
      }, soundValue === 0 ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "sounds-icon",
        onClick: this.onResetVolume
      }, this.iconMap.mute) : /*#__PURE__*/_react["default"].createElement("span", {
        className: "sounds-icon",
        onClick: this.onAudioMute
      }, this.iconMap.volume), /*#__PURE__*/_react["default"].createElement(_Slider["default"], _extends({
        value: soundValue,
        onChange: this.onAudioSoundChange,
        className: "sound-operation"
      }, _slider.VOLUME_BAR_SLIDER_OPTIONS))), PlayModeComponent, LyricComponent, /*#__PURE__*/_react["default"].createElement("span", {
        className: "group audio-lists-btn",
        title: locale.playListsText,
        onClick: this.openAudioListsPanel
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "audio-lists-icon"
      }, this.iconMap.playLists), /*#__PURE__*/_react["default"].createElement("span", {
        className: "audio-lists-num"
      }, audioLists.length)), toggleMode && /*#__PURE__*/_react["default"].createElement("span", {
        className: "group hide-panel",
        title: locale.toggleMiniModeText,
        onClick: this.onHidePanel
      }, this.iconMap.toggle), DestroyComponent))), /*#__PURE__*/_react["default"].createElement(_AudioListsPanel["default"], {
        playing: playing,
        playId: playId,
        loading: loading,
        visible: audioListsPanelVisible,
        audioLists: audioLists,
        onPlay: this.audioListsPlay,
        onCancel: this.closeAudioListsPanel,
        icon: this.iconMap,
        isMobile: isMobile,
        panelToggleAnimate: panelToggleAnimate,
        glassBg: glassBg,
        cover: cover,
        remove: remove,
        onDelete: this.onDeleteAudioLists,
        removeId: removeId,
        locale: locale
      }), !isMobile && /*#__PURE__*/_react["default"].createElement(_PlayModel["default"], {
        visible: playModelNameVisible,
        value: currentPlayModeName
      }), audioLyricVisible && /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('music-player-lyric', lyricClassName)
      }, currentLyric || locale.emptyLyricText)), /*#__PURE__*/_react["default"].createElement("audio", _extends({
        className: "music-player-audio",
        title: audioTitle
      }, preloadState, {
        src: musicSrc,
        ref: function ref(node) {
          _this4.audio = node;
        }
      }))), container);
    }
  }, {
    key: "getBaseAudioInfo",
    value: // 返回给使用者的 音乐信息
    function getBaseAudioInfo() {
      var _this$state18 = this.state,
          cover = _this$state18.cover,
          name = _this$state18.name,
          musicSrc = _this$state18.musicSrc,
          soundValue = _this$state18.soundValue,
          lyric = _this$state18.lyric,
          audioLists = _this$state18.audioLists,
          currentLyric = _this$state18.currentLyric;

      var _ref16 = this.audio || {},
          currentTime = _ref16.currentTime,
          muted = _ref16.muted,
          networkState = _ref16.networkState,
          readyState = _ref16.readyState,
          played = _ref16.played,
          paused = _ref16.paused,
          ended = _ref16.ended,
          startDate = _ref16.startDate;

      var currentPlayIndex = this.getCurrentPlayIndex();
      var currentAudioListInfo = audioLists[currentPlayIndex] || {};
      return _objectSpread(_objectSpread({}, currentAudioListInfo), {}, {
        cover: cover,
        name: name,
        musicSrc: musicSrc,
        volume: soundValue,
        currentTime: currentTime,
        duration: this.audioDuration,
        muted: muted,
        networkState: networkState,
        readyState: readyState,
        played: played,
        paused: paused,
        ended: ended,
        startDate: startDate,
        lyric: lyric,
        currentLyric: currentLyric,
        playIndex: currentPlayIndex
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (prevState.musicSrc !== this.state.musicSrc) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isResetCoverRotate: true
        });
      }
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var _this5 = this;

      var audioLists = nextProps.audioLists,
          playIndex = nextProps.playIndex,
          theme = nextProps.theme,
          mode = nextProps.mode,
          playMode = nextProps.playMode,
          clearPriorAudioLists = nextProps.clearPriorAudioLists;
      var isEqualAudioLists = (0, _utils.arrayEqual)(audioLists)(this.props.audioLists);

      if (!isEqualAudioLists) {
        if (clearPriorAudioLists) {
          this.changeAudioLists(nextProps);
        } else {
          this.updateAudioLists(audioLists);
        }

        if (!this.checkCurrentPlayingAudioIsInUpdatedAudioLists(nextProps)) {
          this.initPlayer(audioLists, false, false);
        }

        setTimeout(function () {
          return _this5.initSortableAudioLists();
        }, 200);
      }

      this.updatePlayIndex(!isEqualAudioLists && clearPriorAudioLists ? _player.DEFAULT_PLAY_INDEX : playIndex);
      this.updateTheme(theme);
      this.updateMode(mode);
      this.updatePlayMode(playMode);
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this6 = this;

      var _this$props6 = this.props,
          audioLists = _this$props6.audioLists,
          remember = _this$props6.remember;

      if (Array.isArray(audioLists) && audioLists.length >= 1) {
        var playInfo = this.getPlayInfo(audioLists);
        var lastPlayStatus = remember ? this.getLastPlayStatus() : {};

        switch (_typeof(playInfo.musicSrc)) {
          case 'function':
            playInfo.musicSrc().then(function (val) {
              _this6.setState(_objectSpread(_objectSpread({}, playInfo), {}, {
                musicSrc: val
              }, lastPlayStatus));
            }, this.onAudioError);
            break;

          default:
            this.setState(_objectSpread(_objectSpread({}, playInfo), lastPlayStatus));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unInstallPlayer();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addMobileListener();
      this.addSystemThemeListener();
      this.initPlayer();
      this.initSortableAudioLists();
      this.onGetAudioInstance();
    }
  }]);

  return ReactJkMusicPlayer;
}(_react.PureComponent);

exports["default"] = ReactJkMusicPlayer;

_defineProperty(ReactJkMusicPlayer, "defaultProps", {
  audioLists: [],
  theme: _theme.THEME.DARK,
  mode: _mode.MODE.MINI,
  defaultPlayMode: _playMode2["default"].order,
  defaultPosition: {
    left: 0,
    top: 0
  },
  once: false,
  // onAudioPlay 事件  是否只触发一次
  drag: true,
  toggleMode: true,
  // 能换在迷你 和完整模式下 互相切换
  showMiniModeCover: true,
  // 迷你模式下 是否显示封面图
  showDownload: true,
  showPlay: true,
  showReload: true,
  showPlayMode: true,
  showThemeSwitch: true,
  showLyric: false,
  playModeTipVisible: false,
  // 手机端切换播放模式
  autoPlay: true,
  defaultVolume: 1,
  showProgressLoadBar: true,
  // 音频预加载进度
  seeked: true,
  playModeShowTime: 600,
  // 播放模式提示 显示时间,
  bounds: 'body',
  // mini 模式拖拽的可移动边界
  showMiniProcessBar: false,
  // 是否在迷你模式 显示进度条
  loadAudioErrorPlayNext: true,
  // 加载音频失败时 是否尝试播放下一首
  preload: false,
  // 是否在页面加载后立即加载音频
  glassBg: false,
  // 是否是毛玻璃效果
  remember: false,
  // 是否记住当前播放状态
  remove: true,
  // 音乐是否可以删除
  defaultPlayIndex: 0,
  // 默认播放索引
  getContainer: function getContainer() {
    return document.body;
  },
  // 播放器挂载的节点
  autoHiddenCover: false,
  // 当前播放歌曲没有封面时是否自动隐藏
  onBeforeAudioDownload: function onBeforeAudioDownload() {},
  // 下载前转换音频地址等
  spaceBar: false,
  // 是否可以通过空格键 控制播放暂停
  showDestroy: false,
  showMediaSession: false,
  locale: _locale["default"].en_US,
  responsive: true,
  icon: DEFAULT_ICON,
  quietUpdate: false,
  // 更新后的播放列表如果有当前正在播放的歌曲不打断当前播放状态
  mobileMediaQuery: _mediaQuery.MEDIA_QUERY.MOBILE,
  // 音频暂停播放 淡入淡出
  volumeFade: {
    fadeIn: 0,
    fadeOut: 0
  },
  restartCurrentOnPrev: false,
  // https://github.com/SortableJS/Sortable#options
  sortableOptions: {}
});

_defineProperty(ReactJkMusicPlayer, "propTypes", _propTypes["default"]);