"use strict";

module.exports = function (db) {
  return db.queryAsync("CREATE TABLE IF NOT EXISTS users (\n      id INT AUTO_INCREMENT PRIMARY KEY,\n      username VARCHAR(20),\n      email VARCHAR(40),\n      password VARCHAR(60)\n    );").then(function () {
    return console.log('users TABLE SUCCESSFULLY CREATED');
  })["catch"](function (err) {
    return console.log('CREATING users TABLE ERR = ', err);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RiL3NjaGVtYS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZGIiLCJxdWVyeUFzeW5jIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFDQyxFQUFELEVBQVE7QUFDdkIsU0FBT0EsRUFBRSxDQUFDQyxVQUFILDRLQVFKQyxJQVJJLENBUUM7QUFBQSxXQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWixDQUFOO0FBQUEsR0FSRCxXQVNFLFVBQUNDLEdBQUQ7QUFBQSxXQUFTRixPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ0MsR0FBM0MsQ0FBVDtBQUFBLEdBVEYsQ0FBUDtBQVVELENBWEQiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChkYikgPT4ge1xuICByZXR1cm4gZGIucXVlcnlBc3luYyhcbiAgICBgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXNlcnMgKFxuICAgICAgaWQgSU5UIEFVVE9fSU5DUkVNRU5UIFBSSU1BUlkgS0VZLFxuICAgICAgdXNlcm5hbWUgVkFSQ0hBUigyMCksXG4gICAgICBlbWFpbCBWQVJDSEFSKDQwKSxcbiAgICAgIHBhc3N3b3JkIFZBUkNIQVIoNjApXG4gICAgKTtgXG4gIClcbiAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygndXNlcnMgVEFCTEUgU1VDQ0VTU0ZVTExZIENSRUFURUQnKSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ0NSRUFUSU5HIHVzZXJzIFRBQkxFIEVSUiA9ICcsIGVycikpO1xufTsiXX0=