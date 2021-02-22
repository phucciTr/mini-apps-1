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

var F3 = /*#__PURE__*/function (_React$Component) {
  _inherits(F3, _React$Component);

  var _super = _createSuper(F3);

  function F3(props) {
    var _this;

    _classCallCheck(this, F3);

    _this = _super.call(this, props);
    _this.state = {
      cardNumber: '',
      expDate: '',
      cvv: '',
      zipCode: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(F3, [{
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
        var form = this.getForm();
        request.saveCard(this.getForm(), function () {
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
        card_number: this.state.cardNumber,
        cvv: this.state.cvv,
        zipcode: this.state.zipCode
      };
    }
  }, {
    key: "isFormReady",
    value: function isFormReady() {
      return this.state.cardNumber !== '' && this.state.expDate !== '' && this.state.cvv !== '' && this.state.zipCode !== '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "F3"), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.submitForm.bind(this)
      }, /*#__PURE__*/React.createElement("label", null, "Card #: ", /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "cardNumber",
        value: this.state.cardNumber,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Exp Date: ", /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "expDate",
        value: this.state.expDate,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "CVV: ", /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "cvv",
        value: this.state.cvv,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "Zip Code: ", /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "zipCode",
        value: this.state.zipCode,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "next"
      })));
    }
  }]);

  return F3;
}(React.Component);

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YzLmpzeCJdLCJuYW1lcyI6WyJGMyIsInByb3BzIiwic3RhdGUiLCJjYXJkTnVtYmVyIiwiZXhwRGF0ZSIsImN2diIsInppcENvZGUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJnZXRGb3JtIiwicmVxdWVzdCIsInNhdmVDYXJkIiwiYWRkVG9TdW1tYXJ5IiwibmV4dEZvcm0iLCJ1c2VySWQiLCJjYXJkX251bWJlciIsInppcGNvZGUiLCJzdWJtaXRGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLEU7Ozs7O0FBQ0osY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxVQUFVLEVBQUUsRUFERDtBQUVYQyxNQUFBQSxPQUFPLEVBQUUsRUFGRTtBQUdYQyxNQUFBQSxHQUFHLEVBQUUsRUFITTtBQUlYQyxNQUFBQSxPQUFPLEVBQUU7QUFKRSxLQUFiO0FBT0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFWaUI7QUFXbEI7Ozs7V0FFRCxzQkFBYUMsQ0FBYixFQUFnQjtBQUNkLFdBQUtDLFFBQUwscUJBQWlCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFBMUIsRUFBaUNILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUExQztBQUNEOzs7V0FFRCxvQkFBV0osQ0FBWCxFQUFjO0FBQUE7O0FBQ1pBLE1BQUFBLENBQUMsQ0FBQ0ssY0FBRjs7QUFFQSxVQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUN0QixZQUFJQyxJQUFJLEdBQUcsS0FBS0MsT0FBTCxFQUFYO0FBRUFDLFFBQUFBLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQixLQUFLRixPQUFMLEVBQWpCLEVBQWlDLFlBQU07QUFDckMsVUFBQSxNQUFJLENBQUNoQixLQUFMLENBQVdtQixZQUFYLENBQXdCLE1BQUksQ0FBQ0gsT0FBTCxFQUF4Qjs7QUFDQSxVQUFBLE1BQUksQ0FBQ2hCLEtBQUwsQ0FBV29CLFFBQVg7QUFDRCxTQUhEO0FBSUQ7QUFDRjs7O1dBRUQsbUJBQVU7QUFDUixhQUFPO0FBQ0xDLFFBQUFBLE1BQU0sRUFBRSxLQUFLckIsS0FBTCxDQUFXcUIsTUFEZDtBQUVMQyxRQUFBQSxXQUFXLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV0MsVUFGbkI7QUFHTEUsUUFBQUEsR0FBRyxFQUFFLEtBQUtILEtBQUwsQ0FBV0csR0FIWDtBQUlMbUIsUUFBQUEsT0FBTyxFQUFFLEtBQUt0QixLQUFMLENBQVdJO0FBSmYsT0FBUDtBQU1EOzs7V0FFRCx1QkFBYztBQUNaLGFBQU8sS0FBS0osS0FBTCxDQUFXQyxVQUFYLEtBQTBCLEVBQTFCLElBQWdDLEtBQUtELEtBQUwsQ0FBV0UsT0FBWCxLQUF1QixFQUF2RCxJQUE2RCxLQUFLRixLQUFMLENBQVdHLEdBQVgsS0FBbUIsRUFBaEYsSUFBc0YsS0FBS0gsS0FBTCxDQUFXSSxPQUFYLEtBQXVCLEVBQXBIO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0UsOENBQ0UscUNBREYsZUFHRTtBQUFNLFFBQUEsUUFBUSxFQUFFLEtBQUttQixVQUFMLENBQWdCakIsSUFBaEIsQ0FBcUIsSUFBckI7QUFBaEIsc0JBQ0UsNERBQ1U7QUFBTyxRQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUEsSUFBSSxFQUFDLFlBQTFCO0FBQXVDLFFBQUEsS0FBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsVUFBekQ7QUFBcUUsUUFBQSxRQUFRLEVBQUUsS0FBS0k7QUFBcEYsUUFEVixDQURGLG9CQUdXLCtCQUhYLGVBS0UsOERBQ1k7QUFBTyxRQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUEsSUFBSSxFQUFDLFNBQTFCO0FBQW9DLFFBQUEsS0FBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0UsT0FBdEQ7QUFBK0QsUUFBQSxRQUFRLEVBQUUsS0FBS0c7QUFBOUUsUUFEWixDQUxGLG9CQU9XLCtCQVBYLGVBU0UseURBQ087QUFBTyxRQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUEsSUFBSSxFQUFDLEtBQTFCO0FBQWdDLFFBQUEsS0FBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0csR0FBbEQ7QUFBdUQsUUFBQSxRQUFRLEVBQUUsS0FBS0U7QUFBdEUsUUFEUCxDQVRGLG9CQVdXLCtCQVhYLGVBYUUsOERBQ1k7QUFBTyxRQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUEsSUFBSSxFQUFDLFNBQTFCO0FBQW9DLFFBQUEsS0FBSyxFQUFFLEtBQUtMLEtBQUwsQ0FBV0ksT0FBdEQ7QUFBK0QsUUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFBOUUsUUFEWixDQWJGLG9CQWVXLCtCQWZYLGVBaUJFO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLEtBQUssRUFBQztBQUEzQixRQWpCRixDQUhGLENBREY7QUEwQkQ7Ozs7RUF2RWNtQixLQUFLLENBQUNDLFM7O0FBeUV0QiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEYzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2FyZE51bWJlcjogJycsXG4gICAgICBleHBEYXRlOiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICB6aXBDb2RlOiAnJ1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLmlzRm9ybVJlYWR5KCkpIHtcbiAgICAgIGxldCBmb3JtID0gdGhpcy5nZXRGb3JtKCk7XG5cbiAgICAgIHJlcXVlc3Quc2F2ZUNhcmQodGhpcy5nZXRGb3JtKCksICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRUb1N1bW1hcnkodGhpcy5nZXRGb3JtKCkpO1xuICAgICAgICB0aGlzLnByb3BzLm5leHRGb3JtKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRGb3JtKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VySWQ6IHRoaXMucHJvcHMudXNlcklkLFxuICAgICAgY2FyZF9udW1iZXI6IHRoaXMuc3RhdGUuY2FyZE51bWJlcixcbiAgICAgIGN2djogdGhpcy5zdGF0ZS5jdnYsXG4gICAgICB6aXBjb2RlOiB0aGlzLnN0YXRlLnppcENvZGVcbiAgICB9XG4gIH1cblxuICBpc0Zvcm1SZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jYXJkTnVtYmVyICE9PSAnJyAmJiB0aGlzLnN0YXRlLmV4cERhdGUgIT09ICcnICYmIHRoaXMuc3RhdGUuY3Z2ICE9PSAnJyAmJiB0aGlzLnN0YXRlLnppcENvZGUgIT09ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RjM8L2gxPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ2FyZCAjOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjYXJkTnVtYmVyXCIgdmFsdWU9e3RoaXMuc3RhdGUuY2FyZE51bWJlcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+IDxici8+XG5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBFeHAgRGF0ZTogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZXhwRGF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmV4cERhdGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ1ZWOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjdnZcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jdnZ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgWmlwIENvZGU6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInppcENvZGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS56aXBDb2RlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJuZXh0XCIgLz5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufTtcbiJdfQ==