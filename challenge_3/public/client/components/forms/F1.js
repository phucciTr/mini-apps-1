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

var F1 = /*#__PURE__*/function (_React$Component) {
  _inherits(F1, _React$Component);

  var _super = _createSuper(F1);

  function F1(props) {
    var _this;

    _classCallCheck(this, F1);

    _this = _super.call(this, props);
    _this.state = {
      // data: [],
      data: {},
      name: '',
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(F1, [{
    key: "handleNameChange",
    value: function handleNameChange(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: "handleEmailChange",
    value: function handleEmailChange(e) {
      this.setState({
        email: e.target.value
      });
    }
  }, {
    key: "handlePasswordChange",
    value: function handlePasswordChange(e) {
      this.setState({
        password: e.target.value
      });
    }
  }, {
    key: "getNextForm",
    value: function getNextForm(e) {
      e.preventDefault();

      if (this.isFormReady()) {
        var form = this.getInputs();
        console.log('data = ', form);
        request.createUser(form);
        this.props.next();
      }
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      // this.state.data.push({ name: this.state.name });
      // this.state.data.push({ email: this.state.email });
      // this.state.data.push({ password: this.state.password });
      this.state.data.name = this.state.name;
      this.state.data.email = this.state.email;
      this.state.data.password = this.state.password;
      return this.state.data;
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
        onSubmit: this.getNextForm.bind(this)
      }, /*#__PURE__*/React.createElement("label", null, "Name: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.name,
        onChange: this.handleNameChange.bind(this)
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Email: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        autoComplete: "username",
        value: this.state.email,
        onChange: this.handleEmailChange.bind(this)
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Password: ", /*#__PURE__*/React.createElement("input", {
        type: "password",
        autoComplete: "new-password",
        value: this.state.password,
        onChange: this.handlePasswordChange.bind(this)
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "submit"
      })));
    }
  }]);

  return F1;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YxLmpzeCJdLCJuYW1lcyI6WyJGMSIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiZ2V0SW5wdXRzIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJjcmVhdGVVc2VyIiwibmV4dCIsImdldE5leHRGb3JtIiwiYmluZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxFOzs7OztBQUNKLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxNQUFBQSxJQUFJLEVBQUUsRUFGSztBQUdYQyxNQUFBQSxJQUFJLEVBQUUsRUFISztBQUlYQyxNQUFBQSxLQUFLLEVBQUUsRUFKSTtBQUtYQyxNQUFBQSxRQUFRLEVBQUU7QUFMQyxLQUFiO0FBSGlCO0FBV2xCOzs7O1dBRUQsMEJBQWlCQyxDQUFqQixFQUFvQjtBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFBRUosUUFBQUEsSUFBSSxFQUFFRyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBakIsT0FBZDtBQUNEOzs7V0FFRCwyQkFBa0JILENBQWxCLEVBQXFCO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYztBQUFFSCxRQUFBQSxLQUFLLEVBQUVFLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFsQixPQUFkO0FBQ0Q7OztXQUVELDhCQUFxQkgsQ0FBckIsRUFBd0I7QUFDdEIsV0FBS0MsUUFBTCxDQUFjO0FBQUVGLFFBQUFBLFFBQVEsRUFBRUMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQXJCLE9BQWQ7QUFDRDs7O1dBRUQscUJBQVlILENBQVosRUFBZTtBQUNiQSxNQUFBQSxDQUFDLENBQUNJLGNBQUY7O0FBRUEsVUFBSSxLQUFLQyxXQUFMLEVBQUosRUFBd0I7QUFFdEIsWUFBSUMsSUFBSSxHQUFHLEtBQUtDLFNBQUwsRUFBWDtBQUNBQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxJQUF2QjtBQUVBSSxRQUFBQSxPQUFPLENBQUNDLFVBQVIsQ0FBbUJMLElBQW5CO0FBRUEsYUFBS1osS0FBTCxDQUFXa0IsSUFBWDtBQUNEO0FBQ0Y7OztXQUVELHFCQUFZO0FBQ1Y7QUFDQTtBQUNBO0FBRUEsV0FBS2pCLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsSUFBaEIsR0FBdUIsS0FBS0YsS0FBTCxDQUFXRSxJQUFsQztBQUNBLFdBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkUsS0FBaEIsR0FBd0IsS0FBS0gsS0FBTCxDQUFXRyxLQUFuQztBQUNBLFdBQUtILEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkcsUUFBaEIsR0FBMkIsS0FBS0osS0FBTCxDQUFXSSxRQUF0QztBQUNBLGFBQU8sS0FBS0osS0FBTCxDQUFXQyxJQUFsQjtBQUNEOzs7V0FFRCx1QkFBYztBQUNaLGFBQU8sS0FBS0QsS0FBTCxDQUFXRSxJQUFYLEtBQW9CLEVBQXBCLElBQTBCLEtBQUtGLEtBQUwsQ0FBV0csS0FBWCxLQUFxQixFQUEvQyxJQUFxRCxLQUFLSCxLQUFMLENBQVdJLFFBQVgsS0FBd0IsRUFBcEY7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCwwQkFDRSw4Q0FDRSxxQ0FERixlQUdFO0FBQU0sUUFBQSxRQUFRLEVBQUUsS0FBS2MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEI7QUFBaEIsc0JBQ0UsMERBQ1E7QUFBTyxRQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUEsS0FBSyxFQUFFLEtBQUtuQixLQUFMLENBQVdFLElBQXJDO0FBQTJDLFFBQUEsUUFBUSxFQUFFLEtBQUtrQixnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0I7QUFBckQsUUFEUixDQURGLG9CQUdXLCtCQUhYLGVBS0UsMkRBQ1M7QUFBTyxRQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUEsWUFBWSxFQUFDLFVBQWhDO0FBQTJDLFFBQUEsS0FBSyxFQUFFLEtBQUtuQixLQUFMLENBQVdHLEtBQTdEO0FBQW9FLFFBQUEsUUFBUSxFQUFFLEtBQUtrQixpQkFBTCxDQUF1QkYsSUFBdkIsQ0FBNEIsSUFBNUI7QUFBOUUsUUFEVCxDQUxGLG9CQU9XLCtCQVBYLGVBU0UsOERBQ1k7QUFBTyxRQUFBLElBQUksRUFBQyxVQUFaO0FBQXVCLFFBQUEsWUFBWSxFQUFDLGNBQXBDO0FBQW1ELFFBQUEsS0FBSyxFQUFFLEtBQUtuQixLQUFMLENBQVdJLFFBQXJFO0FBQStFLFFBQUEsUUFBUSxFQUFFLEtBQUtrQixvQkFBTCxDQUEwQkgsSUFBMUIsQ0FBK0IsSUFBL0I7QUFBekYsUUFEWixDQVRGLG9CQVdXLCtCQVhYLGVBYUU7QUFBTyxRQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUEsS0FBSyxFQUFDO0FBQTNCLFFBYkYsQ0FIRixDQURGO0FBc0JEOzs7O0VBOUVjSSxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGRhdGE6IFtdLFxuICAgICAgZGF0YToge30sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUVtYWlsQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBnZXROZXh0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMuaXNGb3JtUmVhZHkoKSkge1xuXG4gICAgICBsZXQgZm9ybSA9IHRoaXMuZ2V0SW5wdXRzKCk7XG4gICAgICBjb25zb2xlLmxvZygnZGF0YSA9ICcsIGZvcm0pO1xuXG4gICAgICByZXF1ZXN0LmNyZWF0ZVVzZXIoZm9ybSk7XG5cbiAgICAgIHRoaXMucHJvcHMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldElucHV0cygpIHtcbiAgICAvLyB0aGlzLnN0YXRlLmRhdGEucHVzaCh7IG5hbWU6IHRoaXMuc3RhdGUubmFtZSB9KTtcbiAgICAvLyB0aGlzLnN0YXRlLmRhdGEucHVzaCh7IGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsIH0pO1xuICAgIC8vIHRoaXMuc3RhdGUuZGF0YS5wdXNoKHsgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQgfSk7XG5cbiAgICB0aGlzLnN0YXRlLmRhdGEubmFtZSA9IHRoaXMuc3RhdGUubmFtZTtcbiAgICB0aGlzLnN0YXRlLmRhdGEuZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsO1xuICAgIHRoaXMuc3RhdGUuZGF0YS5wYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmQ7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF0YTtcbiAgfVxuXG4gIGlzRm9ybVJlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm5hbWUgIT09ICcnICYmIHRoaXMuc3RhdGUuZW1haWwgIT09ICcnICYmIHRoaXMuc3RhdGUucGFzc3dvcmQgIT09ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RjE8L2gxPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmdldE5leHRGb3JtLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRW1haWw6IDxpbnB1dCB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cInVzZXJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFBhc3N3b3JkOiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIi8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=