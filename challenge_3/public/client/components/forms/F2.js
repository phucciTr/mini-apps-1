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

var F2 = /*#__PURE__*/function (_React$Component) {
  _inherits(F2, _React$Component);

  var _super = _createSuper(F2);

  function F2(props) {
    var _this;

    _classCallCheck(this, F2);

    _this = _super.call(this, props);
    _this.state = {
      address: '',
      city: '',
      zip: ''
    };
    return _this;
  }

  _createClass(F2, [{
    key: "handleAddressChange",
    value: function handleAddressChange(e) {
      this.setState({
        address: e.target.value
      });
    }
  }, {
    key: "handleCityChange",
    value: function handleCityChange(e) {
      this.setState({
        city: e.target.value
      });
    }
  }, {
    key: "handleZipChange",
    value: function handleZipChange(e) {
      this.setState({
        zip: e.target.value
      });
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      var _this2 = this;

      e.preventDefault();
      var form = this.getForm();

      if (this.isFormReady()) {
        request.saveLoc(this.getForm(), function () {
          _this2.props.nextForm();
        });
      }
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return {
        userId: this.props.userId,
        address: this.state.address,
        city: this.state.city,
        zipcode: this.state.zip
      };
    }
  }, {
    key: "isFormReady",
    value: function isFormReady() {
      return this.state.address !== '' && this.state.city !== '' && this.state.zip !== '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "F2"), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.submitForm.bind(this)
      }, /*#__PURE__*/React.createElement("label", null, "Address: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.address,
        onChange: this.handleAddressChange.bind(this)
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "City: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.city,
        onChange: this.handleCityChange.bind(this)
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Zip Code: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: this.state.zip,
        onChange: this.handleZipChange.bind(this)
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "submit"
      })));
    }
  }]);

  return F2;
}(React.Component); // var F2 = () => (
//   <div>
//     <h1>F2</h1>
//   </div>
// );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YyLmpzeCJdLCJuYW1lcyI6WyJGMiIsInByb3BzIiwic3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInppcCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiZ2V0Rm9ybSIsImlzRm9ybVJlYWR5IiwicmVxdWVzdCIsInNhdmVMb2MiLCJuZXh0Rm9ybSIsInVzZXJJZCIsInppcGNvZGUiLCJzdWJtaXRGb3JtIiwiYmluZCIsImhhbmRsZUFkZHJlc3NDaGFuZ2UiLCJoYW5kbGVDaXR5Q2hhbmdlIiwiaGFuZGxlWmlwQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxFOzs7OztBQUNKLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLEVBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFLEVBRks7QUFHWEMsTUFBQUEsR0FBRyxFQUFFO0FBSE0sS0FBYjtBQUhpQjtBQVFsQjs7OztXQUVELDZCQUFvQkMsQ0FBcEIsRUFBdUI7QUFDckIsV0FBS0MsUUFBTCxDQUFjO0FBQUVKLFFBQUFBLE9BQU8sRUFBRUcsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQXBCLE9BQWQ7QUFDRDs7O1dBRUQsMEJBQWlCSCxDQUFqQixFQUFvQjtBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFBRUgsUUFBQUEsSUFBSSxFQUFFRSxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBakIsT0FBZDtBQUNEOzs7V0FFRCx5QkFBZ0JILENBQWhCLEVBQW1CO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUFFRixRQUFBQSxHQUFHLEVBQUVDLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFoQixPQUFkO0FBQ0Q7OztXQUVELG9CQUFXSCxDQUFYLEVBQWM7QUFBQTs7QUFDWkEsTUFBQUEsQ0FBQyxDQUFDSSxjQUFGO0FBRUEsVUFBSUMsSUFBSSxHQUFHLEtBQUtDLE9BQUwsRUFBWDs7QUFFQSxVQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUN0QkMsUUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEtBQUtILE9BQUwsRUFBaEIsRUFBZ0MsWUFBTTtBQUNwQyxVQUFBLE1BQUksQ0FBQ1gsS0FBTCxDQUFXZSxRQUFYO0FBQ0QsU0FGRDtBQUdEO0FBQ0Y7OztXQUVELG1CQUFVO0FBQ1IsYUFBTztBQUNMQyxRQUFBQSxNQUFNLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV2dCLE1BRGQ7QUFFTGQsUUFBQUEsT0FBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsT0FGZjtBQUdMQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0YsS0FBTCxDQUFXRSxJQUhaO0FBSUxjLFFBQUFBLE9BQU8sRUFBRSxLQUFLaEIsS0FBTCxDQUFXRztBQUpmLE9BQVA7QUFNRDs7O1dBRUQsdUJBQWM7QUFDWixhQUFPLEtBQUtILEtBQUwsQ0FBV0MsT0FBWCxLQUF1QixFQUF2QixJQUE2QixLQUFLRCxLQUFMLENBQVdFLElBQVgsS0FBb0IsRUFBakQsSUFBdUQsS0FBS0YsS0FBTCxDQUFXRyxHQUFYLEtBQW1CLEVBQWpGO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0UsOENBQ0UscUNBREYsZUFHRTtBQUFNLFFBQUEsUUFBUSxFQUFFLEtBQUtjLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCO0FBQWhCLHNCQUNFLDZEQUNXO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLEtBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXQyxPQUFyQztBQUE4QyxRQUFBLFFBQVEsRUFBRSxLQUFLa0IsbUJBQUwsQ0FBeUJELElBQXpCLENBQThCLElBQTlCO0FBQXhELFFBRFgsQ0FERixvQkFHVywrQkFIWCxlQUtFLDBEQUNRO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLEtBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXRSxJQUFyQztBQUEyQyxRQUFBLFFBQVEsRUFBRSxLQUFLa0IsZ0JBQUwsQ0FBc0JGLElBQXRCLENBQTJCLElBQTNCO0FBQXJELFFBRFIsQ0FMRixvQkFPVywrQkFQWCxlQVNFLDhEQUNZO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLEtBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXRyxHQUFyQztBQUEwQyxRQUFBLFFBQVEsRUFBRSxLQUFLa0IsZUFBTCxDQUFxQkgsSUFBckIsQ0FBMEIsSUFBMUI7QUFBcEQsUUFEWixDQVRGLG9CQVdXLCtCQVhYLGVBY0U7QUFBTyxRQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUEsS0FBSyxFQUFDO0FBQTNCLFFBZEYsQ0FIRixDQURGO0FBdUJEOzs7O0VBeEVjSSxLQUFLLENBQUNDLFMsR0EyRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICB6aXA6ICcnLFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFkZHJlc3NDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNpdHlDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVppcENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHppcDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBzdWJtaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgZm9ybSA9IHRoaXMuZ2V0Rm9ybSgpO1xuXG4gICAgaWYgKHRoaXMuaXNGb3JtUmVhZHkoKSkge1xuICAgICAgcmVxdWVzdC5zYXZlTG9jKHRoaXMuZ2V0Rm9ybSgpLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubmV4dEZvcm0oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZvcm0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJJZDogdGhpcy5wcm9wcy51c2VySWQsXG4gICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLmFkZHJlc3MsXG4gICAgICBjaXR5OiB0aGlzLnN0YXRlLmNpdHksXG4gICAgICB6aXBjb2RlOiB0aGlzLnN0YXRlLnppcFxuICAgIH1cbiAgfVxuXG4gIGlzRm9ybVJlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmFkZHJlc3MgIT09ICcnICYmIHRoaXMuc3RhdGUuY2l0eSAhPT0gJycgJiYgdGhpcy5zdGF0ZS56aXAgIT09ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RjI8L2gxPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX0gPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEFkZHJlc3M6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFkZHJlc3NDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ2l0eTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuY2l0eX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2l0eUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDwvbGFiZWw+IDxici8+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBaaXAgQ29kZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuemlwfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVaaXBDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gdmFyIEYyID0gKCkgPT4gKFxuLy8gICA8ZGl2PlxuLy8gICAgIDxoMT5GMjwvaDE+XG4vLyAgIDwvZGl2PlxuLy8gKTsiXX0=