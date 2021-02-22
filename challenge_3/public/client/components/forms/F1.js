"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var F1 = /*#__PURE__*/function (_React$Component) {
  _inherits(F1, _React$Component);

  var _super = _createSuper(F1);

  function F1(props) {
    var _this;

    _classCallCheck(this, F1);

    _this = _super.call(this, props);
    _this.state = {
      name: '',
      email: '',
      password: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(F1, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.isFormReady()) {
        request.createUser(this.getForm(), function (userId) {
          _this2.props.addToSummary(_this2.getForm());

          _this2.props.saveId(userId);

          _this2.props.nextForm();
        });
      }
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return {
        username: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
    }
  }, {
    key: "isFormReady",
    value: function isFormReady() {
      return this.state.name !== '' && this.state.email !== '' && this.state.password !== '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "F1"), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.submitForm.bind(this)
      }, /*#__PURE__*/React.createElement("label", null, "Name: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name",
        value: this.state.name,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Email: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "email",
        autoComplete: "username",
        value: this.state.email,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Password: ", /*#__PURE__*/React.createElement("input", {
        type: "password",
        name: "password",
        autoComplete: "new-password",
        value: this.state.password,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "next"
      })));
    }
  }]);

  return F1;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YxLmpzeCJdLCJuYW1lcyI6WyJGMSIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiaXNGb3JtUmVhZHkiLCJyZXF1ZXN0IiwiY3JlYXRlVXNlciIsImdldEZvcm0iLCJ1c2VySWQiLCJhZGRUb1N1bW1hcnkiLCJzYXZlSWQiLCJuZXh0Rm9ybSIsInVzZXJuYW1lIiwic3VibWl0Rm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxFOzs7OztBQUNKLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLEVBREs7QUFFWEMsTUFBQUEsS0FBSyxFQUFFLEVBRkk7QUFHWEMsTUFBQUEsUUFBUSxFQUFFO0FBSEMsS0FBYjtBQU1BLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBVGlCO0FBVWxCOzs7O1dBRUQsc0JBQWFDLENBQWIsRUFBZ0I7QUFDZCxXQUFLQyxRQUFMLHFCQUFpQkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNQLElBQTFCLEVBQWlDSyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBMUM7QUFDRDs7O1dBRUQsb0JBQVdILENBQVgsRUFBYztBQUFBOztBQUNaQSxNQUFBQSxDQUFDLENBQUNJLGNBQUY7O0FBRUEsVUFBSSxLQUFLQyxXQUFMLEVBQUosRUFBd0I7QUFDdEJDLFFBQUFBLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQixLQUFLQyxPQUFMLEVBQW5CLEVBQW1DLFVBQUNDLE1BQUQsRUFBWTtBQUM3QyxVQUFBLE1BQUksQ0FBQ2hCLEtBQUwsQ0FBV2lCLFlBQVgsQ0FBd0IsTUFBSSxDQUFDRixPQUFMLEVBQXhCOztBQUNBLFVBQUEsTUFBSSxDQUFDZixLQUFMLENBQVdrQixNQUFYLENBQWtCRixNQUFsQjs7QUFDQSxVQUFBLE1BQUksQ0FBQ2hCLEtBQUwsQ0FBV21CLFFBQVg7QUFDRCxTQUpEO0FBS0Q7QUFDRjs7O1dBRUQsbUJBQVU7QUFDUixhQUFPO0FBQ0xDLFFBQUFBLFFBQVEsRUFBRSxLQUFLbkIsS0FBTCxDQUFXQyxJQURoQjtBQUVMQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXRSxLQUZiO0FBR0xDLFFBQUFBLFFBQVEsRUFBRSxLQUFLSCxLQUFMLENBQVdHO0FBSGhCLE9BQVA7QUFLRDs7O1dBRUQsdUJBQWM7QUFDWixhQUFPLEtBQUtILEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixFQUFwQixJQUEwQixLQUFLRCxLQUFMLENBQVdFLEtBQVgsS0FBcUIsRUFBL0MsSUFBcUQsS0FBS0YsS0FBTCxDQUFXRyxRQUFYLEtBQXdCLEVBQXBGO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0UsOENBQ0UscUNBREYsZUFHRTtBQUFNLFFBQUEsUUFBUSxFQUFFLEtBQUtpQixVQUFMLENBQWdCZixJQUFoQixDQUFxQixJQUFyQjtBQUFoQixzQkFDRSwwREFDUTtBQUFPLFFBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBQSxJQUFJLEVBQUMsTUFBeEI7QUFBK0IsUUFBQSxLQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXQyxJQUFqRDtBQUF1RCxRQUFBLFFBQVEsRUFBRSxLQUFLRztBQUF0RSxRQURSLENBREYsb0JBR1csK0JBSFgsZUFLRSwyREFDUztBQUFPLFFBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBQSxJQUFJLEVBQUMsT0FBeEI7QUFBZ0MsUUFBQSxZQUFZLEVBQUMsVUFBN0M7QUFBd0QsUUFBQSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXRSxLQUExRTtBQUFpRixRQUFBLFFBQVEsRUFBRSxLQUFLRTtBQUFoRyxRQURULENBTEYsb0JBT1csK0JBUFgsZUFTRSw4REFDWTtBQUFPLFFBQUEsSUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBQSxJQUFJLEVBQUMsVUFBNUI7QUFBdUMsUUFBQSxZQUFZLEVBQUMsY0FBcEQ7QUFBbUUsUUFBQSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXRyxRQUFyRjtBQUErRixRQUFBLFFBQVEsRUFBRSxLQUFLQztBQUE5RyxRQURaLENBVEYsb0JBV1csK0JBWFgsZUFhRTtBQUFPLFFBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBQSxLQUFLLEVBQUM7QUFBM0IsUUFiRixDQUhGLENBREY7QUFzQkQ7Ozs7RUFoRWNpQixLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBzdWJtaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5pc0Zvcm1SZWFkeSgpKSB7XG4gICAgICByZXF1ZXN0LmNyZWF0ZVVzZXIodGhpcy5nZXRGb3JtKCksICh1c2VySWQpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRUb1N1bW1hcnkodGhpcy5nZXRGb3JtKCkpO1xuICAgICAgICB0aGlzLnByb3BzLnNhdmVJZCh1c2VySWQpO1xuICAgICAgICB0aGlzLnByb3BzLm5leHRGb3JtKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRGb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIH1cbiAgfVxuXG4gIGlzRm9ybVJlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm5hbWUgIT09ICcnICYmIHRoaXMuc3RhdGUuZW1haWwgIT09ICcnICYmIHRoaXMuc3RhdGUucGFzc3dvcmQgIT09ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RjE8L2gxPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgTmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEVtYWlsOiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBhdXRvQ29tcGxldGU9XCJ1c2VybmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFBhc3N3b3JkOiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIm5leHRcIi8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=