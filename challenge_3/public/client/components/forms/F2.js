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
      return this.state.address !== '' && this.state.city !== '' && this.state.zip !== '';
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
        type: "text",
        name: "zipcode",
        value: this.state.zipcode,
        onChange: this.handleChange
      })), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
        type: "submit",
        value: "submit"
      })));
    }
  }]);

  return F2;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm1zL0YyLmpzeCJdLCJuYW1lcyI6WyJGMiIsInByb3BzIiwic3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInppcGNvZGUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpc0Zvcm1SZWFkeSIsInJlcXVlc3QiLCJzYXZlTG9jIiwiZ2V0Rm9ybSIsIm5leHRGb3JtIiwidXNlcklkIiwiemlwIiwic3VibWl0Rm9ybSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxFOzs7OztBQUNKLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLEVBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFLEVBRks7QUFHWEMsTUFBQUEsT0FBTyxFQUFFO0FBSEUsS0FBYjtBQU1BLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsK0JBQXBCO0FBVGlCO0FBVWxCOzs7O1dBRUQsc0JBQWFDLENBQWIsRUFBZ0I7QUFDZCxXQUFLQyxRQUFMLHFCQUFpQkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBQTFCLEVBQWlDSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FBMUM7QUFDRDs7O1dBRUQsb0JBQVdKLENBQVgsRUFBYztBQUFBOztBQUNaQSxNQUFBQSxDQUFDLENBQUNLLGNBQUY7O0FBRUEsVUFBSSxLQUFLQyxXQUFMLEVBQUosRUFBd0I7QUFDdEJDLFFBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixLQUFLQyxPQUFMLEVBQWhCLEVBQWdDLFlBQU07QUFDcEMsVUFBQSxNQUFJLENBQUNoQixLQUFMLENBQVdpQixRQUFYO0FBQ0QsU0FGRDtBQUdEO0FBQ0Y7OztXQUVELG1CQUFVO0FBQ1IsYUFBTztBQUNMQyxRQUFBQSxNQUFNLEVBQUUsS0FBS2xCLEtBQUwsQ0FBV2tCLE1BRGQ7QUFFTGhCLFFBQUFBLE9BQU8sRUFBRSxLQUFLRCxLQUFMLENBQVdDLE9BRmY7QUFHTEMsUUFBQUEsSUFBSSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0UsSUFIWjtBQUlMQyxRQUFBQSxPQUFPLEVBQUUsS0FBS0gsS0FBTCxDQUFXRztBQUpmLE9BQVA7QUFNRDs7O1dBRUQsdUJBQWM7QUFDWixhQUFPLEtBQUtILEtBQUwsQ0FBV0MsT0FBWCxLQUF1QixFQUF2QixJQUE2QixLQUFLRCxLQUFMLENBQVdFLElBQVgsS0FBb0IsRUFBakQsSUFBdUQsS0FBS0YsS0FBTCxDQUFXa0IsR0FBWCxLQUFtQixFQUFqRjtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLDBCQUNFLDhDQUNFLHFDQURGLGVBR0U7QUFBTSxRQUFBLFFBQVEsRUFBRSxLQUFLQyxVQUFMLENBQWdCZCxJQUFoQixDQUFxQixJQUFyQjtBQUFoQixzQkFDRSw2REFDVztBQUFPLFFBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBQSxJQUFJLEVBQUMsU0FBeEI7QUFBa0MsUUFBQSxLQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXQyxPQUFwRDtBQUE2RCxRQUFBLFFBQVEsRUFBRSxLQUFLRztBQUE1RSxRQURYLENBREYsb0JBR1csK0JBSFgsZUFLRSwwREFDUTtBQUFPLFFBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBQSxJQUFJLEVBQUMsTUFBeEI7QUFBK0IsUUFBQSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXRSxJQUFqRDtBQUF1RCxRQUFBLFFBQVEsRUFBRSxLQUFLRTtBQUF0RSxRQURSLENBTEYsb0JBT1csK0JBUFgsZUFTRSw4REFDWTtBQUFPLFFBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBQSxJQUFJLEVBQUMsU0FBeEI7QUFBa0MsUUFBQSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXRyxPQUFwRDtBQUE2RCxRQUFBLFFBQVEsRUFBRSxLQUFLQztBQUE1RSxRQURaLENBVEYsb0JBV1csK0JBWFgsZUFhRTtBQUFPLFFBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBQSxLQUFLLEVBQUM7QUFBM0IsUUFiRixDQUhGLENBREY7QUFzQkQ7Ozs7RUEvRGNnQixLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFkZHJlc3M6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICB6aXBjb2RlOiAnJyxcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgc3VibWl0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMuaXNGb3JtUmVhZHkoKSkge1xuICAgICAgcmVxdWVzdC5zYXZlTG9jKHRoaXMuZ2V0Rm9ybSgpLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubmV4dEZvcm0oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZvcm0oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJJZDogdGhpcy5wcm9wcy51c2VySWQsXG4gICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLmFkZHJlc3MsXG4gICAgICBjaXR5OiB0aGlzLnN0YXRlLmNpdHksXG4gICAgICB6aXBjb2RlOiB0aGlzLnN0YXRlLnppcGNvZGVcbiAgICB9XG4gIH1cblxuICBpc0Zvcm1SZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5hZGRyZXNzICE9PSAnJyAmJiB0aGlzLnN0YXRlLmNpdHkgIT09ICcnICYmIHRoaXMuc3RhdGUuemlwICE9PSAnJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkYyPC9oMT5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyl9ID5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBBZGRyZXNzOiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRkcmVzc1wiIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ2l0eTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9sYWJlbD4gPGJyLz5cblxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFppcCBDb2RlOiA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiemlwY29kZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnppcGNvZGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPiA8YnIvPlxuXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0=