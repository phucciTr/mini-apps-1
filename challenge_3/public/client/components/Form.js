"use strict";

var Form = function Form(_ref) {
  var step = _ref.step,
      next = _ref.next,
      saveId = _ref.saveId,
      userId = _ref.userId;

  if (step === 1) {
    return /*#__PURE__*/React.createElement(F1, {
      nextForm: next,
      saveId: saveId
    });
  }

  if (step === 2) {
    return /*#__PURE__*/React.createElement(F2, {
      nextForm: next,
      userId: userId
    });
  }

  if (step === 3) {
    return /*#__PURE__*/React.createElement(F3, {
      nextForm: next
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJzdGVwIiwibmV4dCIsInNhdmVJZCIsInVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQztBQUFBLE1BQWhDQyxJQUFnQyxRQUFoQ0EsSUFBZ0M7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBcEJDLE1BQW9CLFFBQXBCQSxNQUFvQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFDM0MsTUFBSUgsSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFBRSx3QkFBTyxvQkFBQyxFQUFEO0FBQUksTUFBQSxRQUFRLEVBQUVDLElBQWQ7QUFBb0IsTUFBQSxNQUFNLEVBQUVDO0FBQTVCLE1BQVA7QUFBZ0Q7O0FBQ2xFLE1BQUlGLElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQUUsd0JBQU8sb0JBQUMsRUFBRDtBQUFJLE1BQUEsUUFBUSxFQUFFQyxJQUFkO0FBQW9CLE1BQUEsTUFBTSxFQUFFRTtBQUE1QixNQUFQO0FBQWdEOztBQUNsRSxNQUFJSCxJQUFJLEtBQUssQ0FBYixFQUFnQjtBQUFFLHdCQUFPLG9CQUFDLEVBQUQ7QUFBSSxNQUFBLFFBQVEsRUFBRUM7QUFBZCxNQUFQO0FBQStCO0FBQ2xELENBSkQiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRm9ybSA9ICh7c3RlcCwgbmV4dCwgc2F2ZUlkLCB1c2VySWR9KSA9PiB7XG4gIGlmIChzdGVwID09PSAxKSB7IHJldHVybiA8RjEgbmV4dEZvcm09e25leHR9IHNhdmVJZD17c2F2ZUlkfSAvPjsgfVxuICBpZiAoc3RlcCA9PT0gMikgeyByZXR1cm4gPEYyIG5leHRGb3JtPXtuZXh0fSB1c2VySWQ9e3VzZXJJZH0gLz47IH1cbiAgaWYgKHN0ZXAgPT09IDMpIHsgcmV0dXJuIDxGMyBuZXh0Rm9ybT17bmV4dH0vPjsgfVxufVxuXG4iXX0=