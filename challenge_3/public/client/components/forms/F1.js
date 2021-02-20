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
        request.createUser(this.getForm(), function (userId) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YxLmpzeCJdLCJuYW1lcyI6WyJGMSIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpc0Zvcm1SZWFkeSIsInJlcXVlc3QiLCJjcmVhdGVVc2VyIiwiZ2V0Rm9ybSIsInVzZXJJZCIsInNhdmVJZCIsIm5leHRGb3JtIiwidXNlcm5hbWUiLCJzdWJtaXRGb3JtIiwiYmluZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxFOzs7OztBQUNKLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLEVBREs7QUFFWEMsTUFBQUEsS0FBSyxFQUFFLEVBRkk7QUFHWEMsTUFBQUEsUUFBUSxFQUFFO0FBSEMsS0FBYjtBQUhpQjtBQVNsQjs7OztXQUVELDBCQUFpQkMsQ0FBakIsRUFBb0I7QUFDbEIsV0FBS0MsUUFBTCxDQUFjO0FBQUVKLFFBQUFBLElBQUksRUFBRUcsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQWpCLE9BQWQ7QUFDRDs7O1dBRUQsMkJBQWtCSCxDQUFsQixFQUFxQjtBQUNuQixXQUFLQyxRQUFMLENBQWM7QUFBRUgsUUFBQUEsS0FBSyxFQUFFRSxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBbEIsT0FBZDtBQUNEOzs7V0FFRCw4QkFBcUJILENBQXJCLEVBQXdCO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYztBQUFFRixRQUFBQSxRQUFRLEVBQUVDLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFyQixPQUFkO0FBQ0Q7OztXQUVELG9CQUFXSCxDQUFYLEVBQWM7QUFBQTs7QUFDWkEsTUFBQUEsQ0FBQyxDQUFDSSxjQUFGOztBQUVBLFVBQUksS0FBS0MsV0FBTCxFQUFKLEVBQXdCO0FBQ3RCQyxRQUFBQSxPQUFPLENBQUNDLFVBQVIsQ0FBbUIsS0FBS0MsT0FBTCxFQUFuQixFQUFtQyxVQUFDQyxNQUFELEVBQVk7QUFDN0MsVUFBQSxNQUFJLENBQUNkLEtBQUwsQ0FBV2UsTUFBWCxDQUFrQkQsTUFBbEI7O0FBQ0EsVUFBQSxNQUFJLENBQUNkLEtBQUwsQ0FBV2dCLFFBQVg7QUFDRCxTQUhEO0FBSUQ7QUFDRjs7O1dBRUQsbUJBQVU7QUFDUixhQUFPO0FBQ0xDLFFBQUFBLFFBQVEsRUFBRSxLQUFLaEIsS0FBTCxDQUFXQyxJQURoQjtBQUVMQyxRQUFBQSxLQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXRSxLQUZiO0FBR0xDLFFBQUFBLFFBQVEsRUFBRSxLQUFLSCxLQUFMLENBQVdHO0FBSGhCLE9BQVA7QUFLRDs7O1dBRUQsdUJBQWM7QUFDWixhQUFPLEtBQUtILEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixFQUFwQixJQUEwQixLQUFLRCxLQUFMLENBQVdFLEtBQVgsS0FBcUIsRUFBL0MsSUFBcUQsS0FBS0YsS0FBTCxDQUFXRyxRQUFYLEtBQXdCLEVBQXBGO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0UsOENBQ0UscUNBREYsZUFHRTtBQUFNLFFBQUEsUUFBUSxFQUFFLEtBQUtjLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCO0FBQWhCLHNCQUNFLDBEQUNRO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLEtBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXQyxJQUFyQztBQUEyQyxRQUFBLFFBQVEsRUFBRSxLQUFLa0IsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCO0FBQXJELFFBRFIsQ0FERixvQkFHVywrQkFIWCxlQUtFLDJEQUNTO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLFlBQVksRUFBQyxVQUFoQztBQUEyQyxRQUFBLEtBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXRSxLQUE3RDtBQUFvRSxRQUFBLFFBQVEsRUFBRSxLQUFLa0IsaUJBQUwsQ0FBdUJGLElBQXZCLENBQTRCLElBQTVCO0FBQTlFLFFBRFQsQ0FMRixvQkFPVywrQkFQWCxlQVNFLDhEQUNZO0FBQU8sUUFBQSxJQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFBLFlBQVksRUFBQyxjQUFwQztBQUFtRCxRQUFBLEtBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXRyxRQUFyRTtBQUErRSxRQUFBLFFBQVEsRUFBRSxLQUFLa0Isb0JBQUwsQ0FBMEJILElBQTFCLENBQStCLElBQS9CO0FBQXpGLFFBRFosQ0FURixvQkFXVywrQkFYWCxlQWFFO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLEtBQUssRUFBQztBQUEzQixRQWJGLENBSEYsQ0FERjtBQXNCRDs7OztFQXRFY0ksS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRjEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUVtYWlsQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBzdWJtaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5pc0Zvcm1SZWFkeSgpKSB7XG4gICAgICByZXF1ZXN0LmNyZWF0ZVVzZXIodGhpcy5nZXRGb3JtKCksICh1c2VySWQpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlSWQodXNlcklkKTtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXh0Rm9ybSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Rm9ybSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICB9XG4gIH1cblxuICBpc0Zvcm1SZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5uYW1lICE9PSAnJyAmJiB0aGlzLnN0YXRlLmVtYWlsICE9PSAnJyAmJiB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSAnJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkYxPC9oMT5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRW1haWw6IDxpbnB1dCB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cInVzZXJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFBhc3N3b3JkOiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIi8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=