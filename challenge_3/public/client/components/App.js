"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      step: 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "next",
    value: function next() {
      this.setState({
        step: this.state.step += 1
      });
      console.log('this.state.step = ', this.state.step);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.step === 0 ? /*#__PURE__*/React.createElement(Button, {
        checkOut: this.next
      }) : /*#__PURE__*/React.createElement(Form, {
        step: this.state.step,
        next: this.next
      });
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInN0ZXAiLCJuZXh0IiwiYmluZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsRzs7Ozs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLElBQUksRUFBRTtBQURLLEtBQWI7QUFJQSxVQUFLQyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVQyxJQUFWLCtCQUFaO0FBUGlCO0FBUWxCOzs7O1dBRUQsZ0JBQU87QUFDTCxXQUFLQyxRQUFMLENBQWM7QUFBRUgsUUFBQUEsSUFBSSxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxJQUFtQjtBQUEzQixPQUFkO0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDLEtBQUtOLEtBQUwsQ0FBV0MsSUFBN0M7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxhQUFPLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixDQUFwQixnQkFDTixvQkFBQyxNQUFEO0FBQVEsUUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFBdkIsUUFETSxnQkFFTixvQkFBQyxJQUFEO0FBQU0sUUFBQSxJQUFJLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxJQUF2QjtBQUE2QixRQUFBLElBQUksRUFBRSxLQUFLQztBQUF4QyxRQUZEO0FBR0Q7Ozs7RUFwQmVLLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0ZXA6IDAsXG4gICAgfTtcblxuICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RlcDogdGhpcy5zdGF0ZS5zdGVwICs9IDEgfSk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdGUuc3RlcCA9ICcsIHRoaXMuc3RhdGUuc3RlcCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RlcCA9PT0gMCA/XG4gICAgKDxCdXR0b24gY2hlY2tPdXQ9e3RoaXMubmV4dH0vPikgOlxuICAgICg8Rm9ybSBzdGVwPXt0aGlzLnN0YXRlLnN0ZXB9IG5leHQ9e3RoaXMubmV4dH0gLz4pXG4gIH1cbn1cbiJdfQ==