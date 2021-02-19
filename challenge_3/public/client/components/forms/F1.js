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
      form: {},
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
    key: "submitForm",
    value: function submitForm(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.isFormReady()) {
        request.createUser(this.getForm(), function () {
          _this2.props.nextForm();
        });
      }
    }
  }, {
    key: "getForm",
    value: function getForm() {
      this.state.form.username = this.state.name;
      this.state.form.email = this.state.email;
      this.state.form.password = this.state.password;
      return this.state.form;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YxLmpzeCJdLCJuYW1lcyI6WyJGMSIsInByb3BzIiwic3RhdGUiLCJmb3JtIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiaXNGb3JtUmVhZHkiLCJyZXF1ZXN0IiwiY3JlYXRlVXNlciIsImdldEZvcm0iLCJuZXh0Rm9ybSIsInVzZXJuYW1lIiwic3VibWl0Rm9ybSIsImJpbmQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsRTs7Ozs7QUFDSixjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLElBQUksRUFBRSxFQURLO0FBRVhDLE1BQUFBLElBQUksRUFBRSxFQUZLO0FBR1hDLE1BQUFBLEtBQUssRUFBRSxFQUhJO0FBSVhDLE1BQUFBLFFBQVEsRUFBRTtBQUpDLEtBQWI7QUFIaUI7QUFVbEI7Ozs7V0FFRCwwQkFBaUJDLENBQWpCLEVBQW9CO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUFFSixRQUFBQSxJQUFJLEVBQUVHLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFqQixPQUFkO0FBQ0Q7OztXQUVELDJCQUFrQkgsQ0FBbEIsRUFBcUI7QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQUVILFFBQUFBLEtBQUssRUFBRUUsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQWxCLE9BQWQ7QUFDRDs7O1dBRUQsOEJBQXFCSCxDQUFyQixFQUF3QjtBQUN0QixXQUFLQyxRQUFMLENBQWM7QUFBRUYsUUFBQUEsUUFBUSxFQUFFQyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBckIsT0FBZDtBQUNEOzs7V0FFRCxvQkFBV0gsQ0FBWCxFQUFjO0FBQUE7O0FBQ1pBLE1BQUFBLENBQUMsQ0FBQ0ksY0FBRjs7QUFFQSxVQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUN0QkMsUUFBQUEsT0FBTyxDQUFDQyxVQUFSLENBQW1CLEtBQUtDLE9BQUwsRUFBbkIsRUFBbUMsWUFBTTtBQUN2QyxVQUFBLE1BQUksQ0FBQ2QsS0FBTCxDQUFXZSxRQUFYO0FBQ0QsU0FGRDtBQUdEO0FBQ0Y7OztXQUVELG1CQUFVO0FBQ1IsV0FBS2QsS0FBTCxDQUFXQyxJQUFYLENBQWdCYyxRQUFoQixHQUEyQixLQUFLZixLQUFMLENBQVdFLElBQXRDO0FBQ0EsV0FBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCRSxLQUFoQixHQUF3QixLQUFLSCxLQUFMLENBQVdHLEtBQW5DO0FBQ0EsV0FBS0gsS0FBTCxDQUFXQyxJQUFYLENBQWdCRyxRQUFoQixHQUEyQixLQUFLSixLQUFMLENBQVdJLFFBQXRDO0FBQ0EsYUFBTyxLQUFLSixLQUFMLENBQVdDLElBQWxCO0FBQ0Q7OztXQUVELHVCQUFjO0FBQ1osYUFBTyxLQUFLRCxLQUFMLENBQVdFLElBQVgsS0FBb0IsRUFBcEIsSUFBMEIsS0FBS0YsS0FBTCxDQUFXRyxLQUFYLEtBQXFCLEVBQS9DLElBQXFELEtBQUtILEtBQUwsQ0FBV0ksUUFBWCxLQUF3QixFQUFwRjtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLDBCQUNFLDhDQUNFLHFDQURGLGVBR0U7QUFBTSxRQUFBLFFBQVEsRUFBRSxLQUFLWSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQjtBQUFoQixzQkFDRSwwREFDUTtBQUFPLFFBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBQSxLQUFLLEVBQUUsS0FBS2pCLEtBQUwsQ0FBV0UsSUFBckM7QUFBMkMsUUFBQSxRQUFRLEVBQUUsS0FBS2dCLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQjtBQUFyRCxRQURSLENBREYsb0JBR1csK0JBSFgsZUFLRSwyREFDUztBQUFPLFFBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBQSxZQUFZLEVBQUMsVUFBaEM7QUFBMkMsUUFBQSxLQUFLLEVBQUUsS0FBS2pCLEtBQUwsQ0FBV0csS0FBN0Q7QUFBb0UsUUFBQSxRQUFRLEVBQUUsS0FBS2dCLGlCQUFMLENBQXVCRixJQUF2QixDQUE0QixJQUE1QjtBQUE5RSxRQURULENBTEYsb0JBT1csK0JBUFgsZUFTRSw4REFDWTtBQUFPLFFBQUEsSUFBSSxFQUFDLFVBQVo7QUFBdUIsUUFBQSxZQUFZLEVBQUMsY0FBcEM7QUFBbUQsUUFBQSxLQUFLLEVBQUUsS0FBS2pCLEtBQUwsQ0FBV0ksUUFBckU7QUFBK0UsUUFBQSxRQUFRLEVBQUUsS0FBS2dCLG9CQUFMLENBQTBCSCxJQUExQixDQUErQixJQUEvQjtBQUF6RixRQURaLENBVEYsb0JBV1csK0JBWFgsZUFhRTtBQUFPLFFBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBQSxLQUFLLEVBQUM7QUFBM0IsUUFiRixDQUhGLENBREY7QUFzQkQ7Ozs7RUFyRWNJLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybToge30sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUVtYWlsQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBzdWJtaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5pc0Zvcm1SZWFkeSgpKSB7XG4gICAgICByZXF1ZXN0LmNyZWF0ZVVzZXIodGhpcy5nZXRGb3JtKCksICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXh0Rm9ybSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Rm9ybSgpIHtcbiAgICB0aGlzLnN0YXRlLmZvcm0udXNlcm5hbWUgPSB0aGlzLnN0YXRlLm5hbWU7XG4gICAgdGhpcy5zdGF0ZS5mb3JtLmVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbDtcbiAgICB0aGlzLnN0YXRlLmZvcm0ucGFzc3dvcmQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkO1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmZvcm07XG4gIH1cblxuICBpc0Zvcm1SZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5uYW1lICE9PSAnJyAmJiB0aGlzLnN0YXRlLmVtYWlsICE9PSAnJyAmJiB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSAnJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkYxPC9oMT5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRW1haWw6IDxpbnB1dCB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cInVzZXJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFBhc3N3b3JkOiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIi8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=