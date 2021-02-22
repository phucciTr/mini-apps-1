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
      userId: 0,
      summary: {}
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.saveId = _this.saveId.bind(_assertThisInitialized(_this));
    _this.addToSummary = _this.addToSummary.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "next",
    value: function next() {
      this.setState({
        step: this.state.step += 1
      });
    }
  }, {
    key: "getHomePage",
    value: function getHomePage() {
      this.setState({
        step: 0
      });
      this.setState({
        userId: 0
      });
    }
  }, {
    key: "addToSummary",
    value: function addToSummary(form) {
      this.setState({
        summary: Object.assign(this.state.summary, form)
      });
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
      return this.state.step === 0 ? /*#__PURE__*/React.createElement(Checkout, {
        checkOut: this.next
      }) : /*#__PURE__*/React.createElement(Form, {
        step: this.state.step,
        next: this.next,
        saveId: this.saveId,
        userId: this.state.userId,
        addToSummary: this.addToSummary,
        summary: this.state.summary,
        getHome: this.getHomePage.bind(this)
      });
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInN0ZXAiLCJ1c2VySWQiLCJzdW1tYXJ5IiwibmV4dCIsImJpbmQiLCJzYXZlSWQiLCJhZGRUb1N1bW1hcnkiLCJzZXRTdGF0ZSIsImZvcm0iLCJPYmplY3QiLCJhc3NpZ24iLCJpZCIsImdldEhvbWVQYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxHOzs7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLENBREs7QUFFWEMsTUFBQUEsTUFBTSxFQUFFLENBRkc7QUFHWEMsTUFBQUEsT0FBTyxFQUFFO0FBSEUsS0FBYjtBQU1BLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsK0JBQVo7QUFDQSxVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLCtCQUFkO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQiwrQkFBcEI7QUFYaUI7QUFZbEI7Ozs7V0FFRCxnQkFBTztBQUNMLFdBQUtHLFFBQUwsQ0FBYztBQUFFUCxRQUFBQSxJQUFJLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxJQUFYLElBQW1CO0FBQTNCLE9BQWQ7QUFDRDs7O1dBRUQsdUJBQWM7QUFDWixXQUFLTyxRQUFMLENBQWM7QUFBRVAsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBZDtBQUNBLFdBQUtPLFFBQUwsQ0FBYztBQUFFTixRQUFBQSxNQUFNLEVBQUU7QUFBVixPQUFkO0FBQ0Q7OztXQUVELHNCQUFhTyxJQUFiLEVBQW1CO0FBQ2pCLFdBQUtELFFBQUwsQ0FBYztBQUFFTCxRQUFBQSxPQUFPLEVBQUVPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtYLEtBQUwsQ0FBV0csT0FBekIsRUFBa0NNLElBQWxDO0FBQVgsT0FBZDtBQUNEOzs7V0FFRCxnQkFBT0csRUFBUCxFQUFXO0FBQ1QsV0FBS0osUUFBTCxDQUFjO0FBQUVOLFFBQUFBLE1BQU0sRUFBRVU7QUFBVixPQUFkO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsYUFBTyxLQUFLWixLQUFMLENBQVdDLElBQVgsS0FBb0IsQ0FBcEIsZ0JBQ04sb0JBQUMsUUFBRDtBQUFVLFFBQUEsUUFBUSxFQUFFLEtBQUtHO0FBQXpCLFFBRE0sZ0JBRU4sb0JBQUMsSUFBRDtBQUFNLFFBQUEsSUFBSSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0MsSUFBdkI7QUFBNkIsUUFBQSxJQUFJLEVBQUUsS0FBS0csSUFBeEM7QUFBOEMsUUFBQSxNQUFNLEVBQUUsS0FBS0UsTUFBM0Q7QUFBbUUsUUFBQSxNQUFNLEVBQUUsS0FBS04sS0FBTCxDQUFXRSxNQUF0RjtBQUE4RixRQUFBLFlBQVksRUFBRSxLQUFLSyxZQUFqSDtBQUErSCxRQUFBLE9BQU8sRUFBRSxLQUFLUCxLQUFMLENBQVdHLE9BQW5KO0FBQTRKLFFBQUEsT0FBTyxFQUFFLEtBQUtVLFdBQUwsQ0FBaUJSLElBQWpCLENBQXNCLElBQXRCO0FBQXJLLFFBRkQ7QUFHRDs7OztFQXBDZVMsS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RlcDogMCxcbiAgICAgIHVzZXJJZDogMCxcbiAgICAgIHN1bW1hcnk6IHt9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZUlkID0gdGhpcy5zYXZlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZFRvU3VtbWFyeSA9IHRoaXMuYWRkVG9TdW1tYXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGVwOiB0aGlzLnN0YXRlLnN0ZXAgKz0gMSB9KTtcbiAgfVxuXG4gIGdldEhvbWVQYWdlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGVwOiAwIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VySWQ6IDAgfSk7XG4gIH1cblxuICBhZGRUb1N1bW1hcnkoZm9ybSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdW1tYXJ5OiBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuc3VtbWFyeSwgZm9ybSkgfSk7XG4gIH1cblxuICBzYXZlSWQoaWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdXNlcklkOiBpZCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdGVwID09PSAwID9cbiAgICAoPENoZWNrb3V0IGNoZWNrT3V0PXt0aGlzLm5leHR9Lz4pIDpcbiAgICAoPEZvcm0gc3RlcD17dGhpcy5zdGF0ZS5zdGVwfSBuZXh0PXt0aGlzLm5leHR9IHNhdmVJZD17dGhpcy5zYXZlSWR9IHVzZXJJZD17dGhpcy5zdGF0ZS51c2VySWR9IGFkZFRvU3VtbWFyeT17dGhpcy5hZGRUb1N1bW1hcnl9IHN1bW1hcnk9e3RoaXMuc3RhdGUuc3VtbWFyeX0gZ2V0SG9tZT17dGhpcy5nZXRIb21lUGFnZS5iaW5kKHRoaXMpfSAvPilcbiAgfVxufVxuIl19