"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LyricIcon", {
  enumerable: true,
  get: function get() {
    return _fa.FaBook;
  }
});
Object.defineProperty(exports, "FaHeadphonesIcon", {
  enumerable: true,
  get: function get() {
    return _fa.FaHeadphones;
  }
});
Object.defineProperty(exports, "FaMinusSquareOIcon", {
  enumerable: true,
  get: function get() {
    return _fa.FaRegMinusSquare;
  }
});
Object.defineProperty(exports, "LoadIcon", {
  enumerable: true,
  get: function get() {
    return _fa.FaSpinner;
  }
});
Object.defineProperty(exports, "ReloadIcon", {
  enumerable: true,
  get: function get() {
    return _fa.FaSyncAlt;
  }
});
Object.defineProperty(exports, "ArrowDownIcon", {
  enumerable: true,
  get: function get() {
    return _fi.FiChevronsDown;
  }
});
Object.defineProperty(exports, "VolumeMuteIcon", {
  enumerable: true,
  get: function get() {
    return _go.GoMute;
  }
});
Object.defineProperty(exports, "VolumeUnmuteIcon", {
  enumerable: true,
  get: function get() {
    return _go.GoUnmute;
  }
});
Object.defineProperty(exports, "CloseIcon", {
  enumerable: true,
  get: function get() {
    return _md.MdClose;
  }
});
Object.defineProperty(exports, "EmptyIcon", {
  enumerable: true,
  get: function get() {
    return _md.MdLibraryMusic;
  }
});
Object.defineProperty(exports, "RepeatIcon", {
  enumerable: true,
  get: function get() {
    return _md.MdRepeat;
  }
});
Object.defineProperty(exports, "LoopIcon", {
  enumerable: true,
  get: function get() {
    return _md.MdRepeatOne;
  }
});
Object.defineProperty(exports, "PrevAudioIcon", {
  enumerable: true,
  get: function get() {
    return _md.MdSkipPrevious;
  }
});
Object.defineProperty(exports, "OrderPlayIcon", {
  enumerable: true,
  get: function get() {
    return _md.MdViewHeadline;
  }
});
Object.defineProperty(exports, "NextAudioIcon", {
  enumerable: true,
  get: function get() {
    return _md.MdSkipNext;
  }
});
Object.defineProperty(exports, "DeleteIcon", {
  enumerable: true,
  get: function get() {
    return _ri.RiDeleteBinLine;
  }
});
Object.defineProperty(exports, "PlayListsIcon", {
  enumerable: true,
  get: function get() {
    return _ri.RiPlayList2Fill;
  }
});
Object.defineProperty(exports, "ShufflePlayIcon", {
  enumerable: true,
  get: function get() {
    return _ti.TiArrowShuffle;
  }
});
Object.defineProperty(exports, "DownloadIcon", {
  enumerable: true,
  get: function get() {
    return _ti.TiDownload;
  }
});
exports.AnimatePauseIcon = exports.AnimatePlayIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _fa = require("react-icons/fa");

var _fi = require("react-icons/fi");

var _go = require("react-icons/go");

var _md = require("react-icons/md");

var _ri = require("react-icons/ri");

var _ti = require("react-icons/ti");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AnimatePlayIcon = function AnimatePlayIcon() {
  return /*#__PURE__*/_react["default"].createElement(_fa.FaPlayCircle, {
    className: "react-jinke-music-player-play-icon"
  });
};

exports.AnimatePlayIcon = AnimatePlayIcon;

var AnimatePauseIcon = function AnimatePauseIcon() {
  return /*#__PURE__*/_react["default"].createElement(_fa.FaPauseCircle, {
    className: "react-jinke-music-player-pause-icon"
  });
};

exports.AnimatePauseIcon = AnimatePauseIcon;