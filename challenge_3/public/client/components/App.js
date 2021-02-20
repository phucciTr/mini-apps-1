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
      step: 0,
      userId: 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.saveId = _this.saveId.bind(_assertThisInitialized(_this));
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
    key: "saveId",
    value: function saveId(id) {
      this.setState({
        userId: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.step === 0 ? /*#__PURE__*/React.createElement(Button, {
        checkOut: this.next
      }) : /*#__PURE__*/React.createElement(Form, {
        step: this.state.step,
        next: this.next,
        saveId: this.saveId,
        userId: this.state.userId
      });
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInN0ZXAiLCJ1c2VySWQiLCJuZXh0IiwiYmluZCIsInNhdmVJZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImlkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLENBREs7QUFFWEMsTUFBQUEsTUFBTSxFQUFFO0FBRkcsS0FBYjtBQUtBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsK0JBQVo7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLCtCQUFkO0FBVGlCO0FBVWxCOzs7O1dBRUQsZ0JBQU87QUFDTCxXQUFLRSxRQUFMLENBQWM7QUFBRUwsUUFBQUEsSUFBSSxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxJQUFtQjtBQUEzQixPQUFkO0FBQ0FNLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDLEtBQUtSLEtBQUwsQ0FBV0MsSUFBN0M7QUFDRDs7O1dBRUQsZ0JBQU9RLEVBQVAsRUFBVztBQUNULFdBQUtILFFBQUwsQ0FBYztBQUFFSixRQUFBQSxNQUFNLEVBQUVPO0FBQVYsT0FBZDtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLGFBQU8sS0FBS1QsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLENBQXBCLGdCQUNOLG9CQUFDLE1BQUQ7QUFBUSxRQUFBLFFBQVEsRUFBRSxLQUFLRTtBQUF2QixRQURNLGdCQUVOLG9CQUFDLElBQUQ7QUFBTSxRQUFBLElBQUksRUFBRSxLQUFLSCxLQUFMLENBQVdDLElBQXZCO0FBQTZCLFFBQUEsSUFBSSxFQUFFLEtBQUtFLElBQXhDO0FBQThDLFFBQUEsTUFBTSxFQUFFLEtBQUtFLE1BQTNEO0FBQW1FLFFBQUEsTUFBTSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0U7QUFBdEYsUUFGRDtBQUdEOzs7O0VBMUJlUSxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGVwOiAwLFxuICAgICAgdXNlcklkOiAwXG4gICAgfTtcblxuICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZUlkID0gdGhpcy5zYXZlSWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0ZXA6IHRoaXMuc3RhdGUuc3RlcCArPSAxIH0pO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlLnN0ZXAgPSAnLCB0aGlzLnN0YXRlLnN0ZXApO1xuICB9XG5cbiAgc2F2ZUlkKGlkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJJZDogaWQgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RlcCA9PT0gMCA/XG4gICAgKDxCdXR0b24gY2hlY2tPdXQ9e3RoaXMubmV4dH0vPikgOlxuICAgICg8Rm9ybSBzdGVwPXt0aGlzLnN0YXRlLnN0ZXB9IG5leHQ9e3RoaXMubmV4dH0gc2F2ZUlkPXt0aGlzLnNhdmVJZH0gdXNlcklkPXt0aGlzLnN0YXRlLnVzZXJJZH0gLz4pXG4gIH1cbn1cbiJdfQ==