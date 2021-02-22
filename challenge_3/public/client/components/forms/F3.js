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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YzLmpzeCJdLCJuYW1lcyI6WyJGMyIsInByb3BzIiwic3RhdGUiLCJjYXJkTnVtYmVyIiwiZXhwRGF0ZSIsImN2diIsInppcENvZGUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpc0Zvcm1SZWFkeSIsInJlcXVlc3QiLCJzYXZlQ2FyZCIsImdldEZvcm0iLCJhZGRUb1N1bW1hcnkiLCJuZXh0Rm9ybSIsInVzZXJJZCIsImNhcmRfbnVtYmVyIiwiemlwY29kZSIsInN1Ym1pdEZvcm0iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsRTs7Ozs7QUFDSixjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLFVBQVUsRUFBRSxFQUREO0FBRVhDLE1BQUFBLE9BQU8sRUFBRSxFQUZFO0FBR1hDLE1BQUFBLEdBQUcsRUFBRSxFQUhNO0FBSVhDLE1BQUFBLE9BQU8sRUFBRTtBQUpFLEtBQWI7QUFPQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLCtCQUFwQjtBQVZpQjtBQVdsQjs7OztXQUVELHNCQUFhQyxDQUFiLEVBQWdCO0FBQ2QsV0FBS0MsUUFBTCxxQkFBaUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQUExQixFQUFpQ0gsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBQTFDO0FBQ0Q7OztXQUVELG9CQUFXSixDQUFYLEVBQWM7QUFBQTs7QUFDWkEsTUFBQUEsQ0FBQyxDQUFDSyxjQUFGOztBQUVBLFVBQUksS0FBS0MsV0FBTCxFQUFKLEVBQXdCO0FBQ3RCQyxRQUFBQSxPQUFPLENBQUNDLFFBQVIsQ0FBaUIsS0FBS0MsT0FBTCxFQUFqQixFQUFpQyxZQUFNO0FBQ3JDLFVBQUEsTUFBSSxDQUFDakIsS0FBTCxDQUFXa0IsWUFBWCxDQUF3QixNQUFJLENBQUNELE9BQUwsRUFBeEI7O0FBQ0EsVUFBQSxNQUFJLENBQUNqQixLQUFMLENBQVdtQixRQUFYO0FBQ0QsU0FIRDtBQUlEO0FBQ0Y7OztXQUVELG1CQUFVO0FBQ1IsYUFBTztBQUNMQyxRQUFBQSxNQUFNLEVBQUUsS0FBS3BCLEtBQUwsQ0FBV29CLE1BRGQ7QUFFTEMsUUFBQUEsV0FBVyxFQUFFLEtBQUtwQixLQUFMLENBQVdDLFVBRm5CO0FBR0xFLFFBQUFBLEdBQUcsRUFBRSxLQUFLSCxLQUFMLENBQVdHLEdBSFg7QUFJTGtCLFFBQUFBLE9BQU8sRUFBRSxLQUFLckIsS0FBTCxDQUFXSTtBQUpmLE9BQVA7QUFNRDs7O1dBRUQsdUJBQWM7QUFDWixhQUFPLEtBQUtKLEtBQUwsQ0FBV0MsVUFBWCxLQUEwQixFQUExQixJQUFnQyxLQUFLRCxLQUFMLENBQVdFLE9BQVgsS0FBdUIsRUFBdkQsSUFBNkQsS0FBS0YsS0FBTCxDQUFXRyxHQUFYLEtBQW1CLEVBQWhGLElBQXNGLEtBQUtILEtBQUwsQ0FBV0ksT0FBWCxLQUF1QixFQUFwSDtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLDBCQUNFLDhDQUNFLHFDQURGLGVBR0U7QUFBTSxRQUFBLFFBQVEsRUFBRSxLQUFLa0IsVUFBTCxDQUFnQmhCLElBQWhCLENBQXFCLElBQXJCO0FBQWhCLHNCQUNFLDREQUNVO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLElBQUksRUFBQyxZQUExQjtBQUF1QyxRQUFBLEtBQUssRUFBRSxLQUFLTixLQUFMLENBQVdDLFVBQXpEO0FBQXFFLFFBQUEsUUFBUSxFQUFFLEtBQUtJO0FBQXBGLFFBRFYsQ0FERixvQkFHVywrQkFIWCxlQUtFLDhEQUNZO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLElBQUksRUFBQyxTQUExQjtBQUFvQyxRQUFBLEtBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdFLE9BQXREO0FBQStELFFBQUEsUUFBUSxFQUFFLEtBQUtHO0FBQTlFLFFBRFosQ0FMRixvQkFPVywrQkFQWCxlQVNFLHlEQUNPO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLElBQUksRUFBQyxLQUExQjtBQUFnQyxRQUFBLEtBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdHLEdBQWxEO0FBQXVELFFBQUEsUUFBUSxFQUFFLEtBQUtFO0FBQXRFLFFBRFAsQ0FURixvQkFXVywrQkFYWCxlQWFFLDhEQUNZO0FBQU8sUUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFBLElBQUksRUFBQyxTQUExQjtBQUFvQyxRQUFBLEtBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdJLE9BQXREO0FBQStELFFBQUEsUUFBUSxFQUFFLEtBQUtDO0FBQTlFLFFBRFosQ0FiRixvQkFlVywrQkFmWCxlQWlCRTtBQUFPLFFBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBQSxLQUFLLEVBQUM7QUFBM0IsUUFqQkYsQ0FIRixDQURGO0FBMEJEOzs7O0VBckVja0IsS0FBSyxDQUFDQyxTOztBQXVFdEIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhcmROdW1iZXI6ICcnLFxuICAgICAgZXhwRGF0ZTogJycsXG4gICAgICBjdnY6ICcnLFxuICAgICAgemlwQ29kZTogJydcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBzdWJtaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5pc0Zvcm1SZWFkeSgpKSB7XG4gICAgICByZXF1ZXN0LnNhdmVDYXJkKHRoaXMuZ2V0Rm9ybSgpLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkVG9TdW1tYXJ5KHRoaXMuZ2V0Rm9ybSgpKTtcbiAgICAgICAgdGhpcy5wcm9wcy5uZXh0Rm9ybSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Rm9ybSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcklkOiB0aGlzLnByb3BzLnVzZXJJZCxcbiAgICAgIGNhcmRfbnVtYmVyOiB0aGlzLnN0YXRlLmNhcmROdW1iZXIsXG4gICAgICBjdnY6IHRoaXMuc3RhdGUuY3Z2LFxuICAgICAgemlwY29kZTogdGhpcy5zdGF0ZS56aXBDb2RlXG4gICAgfVxuICB9XG5cbiAgaXNGb3JtUmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY2FyZE51bWJlciAhPT0gJycgJiYgdGhpcy5zdGF0ZS5leHBEYXRlICE9PSAnJyAmJiB0aGlzLnN0YXRlLmN2diAhPT0gJycgJiYgdGhpcy5zdGF0ZS56aXBDb2RlICE9PSAnJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkYzPC9oMT5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIENhcmQgIzogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiY2FyZE51bWJlclwiIHZhbHVlPXt0aGlzLnN0YXRlLmNhcmROdW1iZXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRXhwIERhdGU6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImV4cERhdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5leHBEYXRlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIENWVjogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiY3Z2XCIgdmFsdWU9e3RoaXMuc3RhdGUuY3Z2fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFppcCBDb2RlOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ6aXBDb2RlXCIgdmFsdWU9e3RoaXMuc3RhdGUuemlwQ29kZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvbGFiZWw+IDxici8+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibmV4dFwiIC8+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn07XG4iXX0=