"use strict";

var _inferno = require("inferno");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    var self = _assertThisInitialized(_assertThisInitialized(_this));

    self.direction = props.direction;

    function event(press) {
      if (self.direction.includes("L")) gm.input.left(press);
      if (self.direction.includes("U")) gm.input.up(press);
      if (self.direction.includes("R")) gm.input.right(press);
      if (self.direction.includes("D")) gm.input.down(press);
    }

    self.press = function () {
      event(true);
    };

    self.release = function () {
      event(false);
    };

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return (0, _inferno.createVNode)(1, "button", null, this.direction, 0, {
        "onmousedown": (0, _inferno.linkEvent)(this, this.press),
        "onmouseup": (0, _inferno.linkEvent)(this, this.release)
      });
    }
  }]);

  return Button;
}(_inferno.Component);

(0, _inferno.render)((0, _inferno.createVNode)(1, "div", null, [(0, _inferno.createComponentVNode)(2, Button, {
  "direction": "LU"
}), (0, _inferno.createComponentVNode)(2, Button, {
  "direction": "U"
}), (0, _inferno.createComponentVNode)(2, Button, {
  "direction": "RU"
}), (0, _inferno.createComponentVNode)(2, Button, {
  "direction": "L"
}), (0, _inferno.createComponentVNode)(2, Button, {
  "direction": "__"
}), (0, _inferno.createComponentVNode)(2, Button, {
  "direction": "R"
}), (0, _inferno.createComponentVNode)(2, Button, {
  "direction": "DL"
}), (0, _inferno.createComponentVNode)(2, Button, {
  "direction": "D"
}), (0, _inferno.createComponentVNode)(2, Button, {
  "direction": "DR"
})], 4), document.getElementById("interface"));
