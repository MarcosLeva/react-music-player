"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// 迷你模式进度条
var CircleProcessBar = function CircleProcessBar() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress,
      _ref$r = _ref.r,
      r = _ref$r === void 0 ? 40 : _ref$r;

  var currentProgress = progress.toFixed(2);
  var perimeter = Math.PI * 2 * r;
  var strokeDasharray = "".concat(Math.floor(perimeter * currentProgress), " ").concat(Math.floor(perimeter * (1 - currentProgress)));
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "audio-circle-process-bar"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: r,
    cy: r,
    r: r - 1,
    fill: "none",
    className: "stroke",
    strokeDasharray: strokeDasharray
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: r,
    cy: r,
    r: r - 1,
    fill: "none",
    className: "bg",
    strokeDasharray: "0 1000"
  }));
};

var _default = /*#__PURE__*/(0, _react.memo)(CircleProcessBar);

exports["default"] = _default;