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
      zipcode: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(F2, [{
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
        request.saveLoc(this.getForm(), function () {
          _this2.props.addToSummary(_this2.getForm());

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
        zipcode: this.state.zipcode
      };
    }
  }, {
    key: "isFormReady",
    value: function isFormReady() {
      return this.state.address !== '' && this.state.city !== '' && this.state.zipcode !== '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "F2"), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.submitForm.bind(this)
      }, /*#__PURE__*/React.createElement("label", null, "Address: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "address",
        value: this.state.address,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "City: ", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "city",
        value: this.state.city,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Zip Code: ", /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "zipcode",
        value: this.state.zipcode,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "next"
      })));
    }
  }]);

  return F2;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YyLmpzeCJdLCJuYW1lcyI6WyJGMiIsInByb3BzIiwic3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInppcGNvZGUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpc0Zvcm1SZWFkeSIsInJlcXVlc3QiLCJzYXZlTG9jIiwiZ2V0Rm9ybSIsImFkZFRvU3VtbWFyeSIsIm5leHRGb3JtIiwidXNlcklkIiwic3VibWl0Rm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxFOzs7OztBQUNKLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLEVBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFLEVBRks7QUFHWEMsTUFBQUEsT0FBTyxFQUFFO0FBSEUsS0FBYjtBQU1BLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBVGlCO0FBVWxCOzs7O1dBRUQsc0JBQWFDLENBQWIsRUFBZ0I7QUFDZCxXQUFLQyxRQUFMLHFCQUFpQkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQTFCLEVBQWlDSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBMUM7QUFDRDs7O1dBRUQsb0JBQVdKLENBQVgsRUFBYztBQUFBOztBQUNaQSxNQUFBQSxDQUFDLENBQUNLLGNBQUY7O0FBRUEsVUFBSSxLQUFLQyxXQUFMLEVBQUosRUFBd0I7QUFDdEJDLFFBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxPQUFMLEVBQWhCLEVBQWdDLFlBQU07QUFDcEMsVUFBQSxNQUFJLENBQUNoQixLQUFMLENBQVdpQixZQUFYLENBQXdCLE1BQUksQ0FBQ0QsT0FBTCxFQUF4Qjs7QUFDQSxVQUFBLE1BQUksQ0FBQ2hCLEtBQUwsQ0FBV2tCLFFBQVg7QUFDRCxTQUhEO0FBSUQ7QUFDRjs7O1dBRUQsbUJBQVU7QUFDUixhQUFPO0FBQ0xDLFFBQUFBLE1BQU0sRUFBRSxLQUFLbkIsS0FBTCxDQUFXbUIsTUFEZDtBQUVMakIsUUFBQUEsT0FBTyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsT0FGZjtBQUdMQyxRQUFBQSxJQUFJLEVBQUUsS0FBS0YsS0FBTCxDQUFXRSxJQUhaO0FBSUxDLFFBQUFBLE9BQU8sRUFBRSxLQUFLSCxLQUFMLENBQVdHO0FBSmYsT0FBUDtBQU1EOzs7V0FFRCx1QkFBYztBQUNaLGFBQU8sS0FBS0gsS0FBTCxDQUFXQyxPQUFYLEtBQXVCLEVBQXZCLElBQTZCLEtBQUtELEtBQUwsQ0FBV0UsSUFBWCxLQUFvQixFQUFqRCxJQUF1RCxLQUFLRixLQUFMLENBQVdHLE9BQVgsS0FBdUIsRUFBckY7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCwwQkFDRSw4Q0FDRSxxQ0FERixlQUdFO0FBQU0sUUFBQSxRQUFRLEVBQUUsS0FBS2dCLFVBQUwsQ0FBZ0JkLElBQWhCLENBQXFCLElBQXJCO0FBQWhCLHNCQUNFLDZEQUNXO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLElBQUksRUFBQyxTQUF4QjtBQUFrQyxRQUFBLEtBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdDLE9BQXBEO0FBQTZELFFBQUEsUUFBUSxFQUFFLEtBQUtHO0FBQTVFLFFBRFgsQ0FERixvQkFHVywrQkFIWCxlQUtFLDBEQUNRO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLElBQUksRUFBQyxNQUF4QjtBQUErQixRQUFBLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVdFLElBQWpEO0FBQXVELFFBQUEsUUFBUSxFQUFFLEtBQUtFO0FBQXRFLFFBRFIsQ0FMRixvQkFPVywrQkFQWCxlQVNFLDhEQUNZO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLElBQUksRUFBQyxTQUExQjtBQUFvQyxRQUFBLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVdHLE9BQXREO0FBQStELFFBQUEsUUFBUSxFQUFFLEtBQUtDO0FBQTlFLFFBRFosQ0FURixvQkFXVywrQkFYWCxlQWFFO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLEtBQUssRUFBQztBQUEzQixRQWJGLENBSEYsQ0FERjtBQXNCRDs7OztFQWhFY2dCLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEYyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWRkcmVzczogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHppcGNvZGU6ICcnLFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBzdWJtaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5pc0Zvcm1SZWFkeSgpKSB7XG4gICAgICByZXF1ZXN0LnNhdmVMb2ModGhpcy5nZXRGb3JtKCksICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRUb1N1bW1hcnkodGhpcy5nZXRGb3JtKCkpO1xuICAgICAgICB0aGlzLnByb3BzLm5leHRGb3JtKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRGb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VySWQ6IHRoaXMucHJvcHMudXNlcklkLFxuICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5hZGRyZXNzLFxuICAgICAgY2l0eTogdGhpcy5zdGF0ZS5jaXR5LFxuICAgICAgemlwY29kZTogdGhpcy5zdGF0ZS56aXBjb2RlXG4gICAgfVxuICB9XG5cbiAgaXNGb3JtUmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuYWRkcmVzcyAhPT0gJycgJiYgdGhpcy5zdGF0ZS5jaXR5ICE9PSAnJyAmJiB0aGlzLnN0YXRlLnppcGNvZGUgIT09ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RjI8L2gxPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX0gPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEFkZHJlc3M6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyZXNzXCIgdmFsdWU9e3RoaXMuc3RhdGUuYWRkcmVzc30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+IDxici8+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDaXR5OiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHZhbHVlPXt0aGlzLnN0YXRlLmNpdHl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgWmlwIENvZGU6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInppcGNvZGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS56aXBjb2RlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJuZXh0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==