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
      data: [],
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
      var data = this.getInputs();
      console.log('data = ', data);

      if (this.areFormsFilled()) {
        this.props.next();
      }
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      this.state.data.push({
        name: this.state.name
      });
      this.state.data.push({
        email: this.state.email
      });
      this.state.data.push({
        password: this.state.password
      });
      return this.state.data;
    }
  }, {
    key: "areFormsFilled",
    value: function areFormsFilled() {
      return this.state.name !== '' && this.state.email !== '' && this.state.password !== '';
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "F1"), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.getNextForm.bind(this)
      }, /*#__PURE__*/React.createElement("label", null, "Name: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.name,
        onChange: this.handleNameChange.bind(this)
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Email: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.email,
        onChange: this.handleEmailChange.bind(this)
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Password: ", /*#__PURE__*/React.createElement("input", (_React$createElement = {
        type: "text"
      }, _defineProperty(_React$createElement, "type", "password"), _defineProperty(_React$createElement, "value", this.state.password), _defineProperty(_React$createElement, "onChange", this.handlePasswordChange.bind(this)), _React$createElement))), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "submit"
      })));
    }
  }]);

  return F1;
}(React.Component); // var F1 = () => (
//   <div>
//     <h1>F1</h1>
//   </div>
// );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YxLmpzeCJdLCJuYW1lcyI6WyJGMSIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0SW5wdXRzIiwiY29uc29sZSIsImxvZyIsImFyZUZvcm1zRmlsbGVkIiwibmV4dCIsInB1c2giLCJnZXROZXh0Rm9ybSIsImJpbmQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxFOzs7OztBQUNKLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLEVBREs7QUFFWEMsTUFBQUEsSUFBSSxFQUFFLEVBRks7QUFHWEMsTUFBQUEsS0FBSyxFQUFFLEVBSEk7QUFJWEMsTUFBQUEsUUFBUSxFQUFFO0FBSkMsS0FBYjtBQUhpQjtBQVVsQjs7OztXQUVELDBCQUFpQkMsQ0FBakIsRUFBb0I7QUFDbEIsV0FBS0MsUUFBTCxDQUFjO0FBQUVKLFFBQUFBLElBQUksRUFBRUcsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQWpCLE9BQWQ7QUFDRDs7O1dBRUQsMkJBQWtCSCxDQUFsQixFQUFxQjtBQUNuQixXQUFLQyxRQUFMLENBQWM7QUFBRUgsUUFBQUEsS0FBSyxFQUFFRSxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBbEIsT0FBZDtBQUNEOzs7V0FFRCw4QkFBcUJILENBQXJCLEVBQXdCO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYztBQUFFRixRQUFBQSxRQUFRLEVBQUVDLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFyQixPQUFkO0FBQ0Q7OztXQUVELHFCQUFZSCxDQUFaLEVBQWU7QUFDYkEsTUFBQUEsQ0FBQyxDQUFDSSxjQUFGO0FBRUEsVUFBSVIsSUFBSSxHQUFHLEtBQUtTLFNBQUwsRUFBWDtBQUNBQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCWCxJQUF2Qjs7QUFFQSxVQUFJLEtBQUtZLGNBQUwsRUFBSixFQUEyQjtBQUN6QixhQUFLZCxLQUFMLENBQVdlLElBQVg7QUFDRDtBQUNGOzs7V0FFRCxxQkFBWTtBQUNWLFdBQUtkLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmMsSUFBaEIsQ0FBcUI7QUFBRWIsUUFBQUEsSUFBSSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0U7QUFBbkIsT0FBckI7QUFDQSxXQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JjLElBQWhCLENBQXFCO0FBQUVaLFFBQUFBLEtBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdHO0FBQXBCLE9BQXJCO0FBQ0EsV0FBS0gsS0FBTCxDQUFXQyxJQUFYLENBQWdCYyxJQUFoQixDQUFxQjtBQUFFWCxRQUFBQSxRQUFRLEVBQUUsS0FBS0osS0FBTCxDQUFXSTtBQUF2QixPQUFyQjtBQUNBLGFBQU8sS0FBS0osS0FBTCxDQUFXQyxJQUFsQjtBQUNEOzs7V0FFRCwwQkFBaUI7QUFDZixhQUFPLEtBQUtELEtBQUwsQ0FBV0UsSUFBWCxLQUFvQixFQUFwQixJQUEwQixLQUFLRixLQUFMLENBQVdHLEtBQVgsS0FBcUIsRUFBL0MsSUFBcUQsS0FBS0gsS0FBTCxDQUFXSSxRQUFYLEtBQXdCLEVBQXBGO0FBQ0Q7OztXQUVELGtCQUFTO0FBQUE7O0FBQ1AsMEJBQ0UsOENBQ0UscUNBREYsZUFHRTtBQUFNLFFBQUEsUUFBUSxFQUFFLEtBQUtZLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCO0FBQWhCLHNCQUNFLDBEQUNRO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLEtBQUssRUFBRSxLQUFLakIsS0FBTCxDQUFXRSxJQUFyQztBQUEyQyxRQUFBLFFBQVEsRUFBRSxLQUFLZ0IsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCO0FBQXJELFFBRFIsQ0FERixvQkFHVywrQkFIWCxlQUtFLDJEQUNTO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLEtBQUssRUFBRSxLQUFLakIsS0FBTCxDQUFXRyxLQUFyQztBQUE0QyxRQUFBLFFBQVEsRUFBRSxLQUFLZ0IsaUJBQUwsQ0FBdUJGLElBQXZCLENBQTRCLElBQTVCO0FBQXRELFFBRFQsQ0FMRixvQkFPVywrQkFQWCxlQVNFLDhEQUNZO0FBQU8sUUFBQSxJQUFJLEVBQUM7QUFBWix1REFBd0IsVUFBeEIsa0RBQTBDLEtBQUtqQixLQUFMLENBQVdJLFFBQXJELHFEQUF5RSxLQUFLZ0Isb0JBQUwsQ0FBMEJILElBQTFCLENBQStCLElBQS9CLENBQXpFLHlCQURaLENBVEYsb0JBV1csK0JBWFgsZUFhRTtBQUFPLFFBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBQSxLQUFLLEVBQUM7QUFBM0IsUUFiRixDQUhGLENBREY7QUFzQkQ7Ozs7RUF0RWNJLEtBQUssQ0FBQ0MsUyxHQXlFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEYxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUVtYWlsQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBnZXROZXh0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IGRhdGEgPSB0aGlzLmdldElucHV0cygpO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhID0gJywgZGF0YSk7XG5cbiAgICBpZiAodGhpcy5hcmVGb3Jtc0ZpbGxlZCgpKSB7XG4gICAgICB0aGlzLnByb3BzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRJbnB1dHMoKSB7XG4gICAgdGhpcy5zdGF0ZS5kYXRhLnB1c2goeyBuYW1lOiB0aGlzLnN0YXRlLm5hbWUgfSk7XG4gICAgdGhpcy5zdGF0ZS5kYXRhLnB1c2goeyBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCB9KTtcbiAgICB0aGlzLnN0YXRlLmRhdGEucHVzaCh7IHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkIH0pO1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRhdGE7XG4gIH1cblxuICBhcmVGb3Jtc0ZpbGxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5uYW1lICE9PSAnJyAmJiB0aGlzLnN0YXRlLmVtYWlsICE9PSAnJyAmJiB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSAnJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkYxPC9oMT5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5nZXROZXh0Rm9ybS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEVtYWlsOiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgUGFzc3dvcmQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDwvbGFiZWw+IDxici8+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCIvPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyB2YXIgRjEgPSAoKSA9PiAoXG4vLyAgIDxkaXY+XG4vLyAgICAgPGgxPkYxPC9oMT5cbi8vICAgPC9kaXY+XG4vLyApOyJdfQ==