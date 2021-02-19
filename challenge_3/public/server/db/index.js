"use strict";

var mysql = require('mysql');

var Promise = require('bluebird');

var createTables = require('./schema');

var database = 'checkout';
var connection = mysql.createConnection({
  user: 'root',
  password: ''
});
var db = Promise.promisifyAll(connection);
db.connectAsync().then(function () {
  return db.queryAsync("CREATE DATABASE IF NOT EXISTS ".concat(database));
}).then(function () {
  return db.queryAsync("USE ".concat(database));
}).then(function () {
  return console.log("CONNECTED TO ".concat(database, " DATABASE"));
}).then(function () {
  return createTables(db);
})["catch"](function (err) {
  return console.log('db.connectAsync ERR = ', err);
});
module.exports = db;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9kYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJteXNxbCIsInJlcXVpcmUiLCJQcm9taXNlIiwiY3JlYXRlVGFibGVzIiwiZGF0YWJhc2UiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsInVzZXIiLCJwYXNzd29yZCIsImRiIiwicHJvbWlzaWZ5QWxsIiwiY29ubmVjdEFzeW5jIiwidGhlbiIsInF1ZXJ5QXN5bmMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCOztBQUNBLElBQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBdkI7O0FBQ0EsSUFBTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsVUFBRCxDQUE1Qjs7QUFDQSxJQUFNRyxRQUFRLEdBQUcsVUFBakI7QUFHQSxJQUFNQyxVQUFVLEdBQUdMLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUI7QUFDeENDLEVBQUFBLElBQUksRUFBRSxNQURrQztBQUV4Q0MsRUFBQUEsUUFBUSxFQUFFO0FBRjhCLENBQXZCLENBQW5CO0FBS0EsSUFBTUMsRUFBRSxHQUFHUCxPQUFPLENBQUNRLFlBQVIsQ0FBc0JMLFVBQXRCLENBQVg7QUFFQUksRUFBRSxDQUFDRSxZQUFILEdBQ0dDLElBREgsQ0FDUTtBQUFBLFNBQU1ILEVBQUUsQ0FBQ0ksVUFBSCx5Q0FBK0NULFFBQS9DLEVBQU47QUFBQSxDQURSLEVBRUdRLElBRkgsQ0FFUTtBQUFBLFNBQU1ILEVBQUUsQ0FBQ0ksVUFBSCxlQUFxQlQsUUFBckIsRUFBTjtBQUFBLENBRlIsRUFHR1EsSUFISCxDQUdRO0FBQUEsU0FBTUUsT0FBTyxDQUFDQyxHQUFSLHdCQUE0QlgsUUFBNUIsZUFBTjtBQUFBLENBSFIsRUFJR1EsSUFKSCxDQUlRO0FBQUEsU0FBTVQsWUFBWSxDQUFDTSxFQUFELENBQWxCO0FBQUEsQ0FKUixXQUtTLFVBQUNPLEdBQUQ7QUFBQSxTQUFTRixPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0MsR0FBdEMsQ0FBVDtBQUFBLENBTFQ7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxFQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG15c3FsID0gcmVxdWlyZSgnbXlzcWwnKTtcbmNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuY29uc3QgY3JlYXRlVGFibGVzID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbmNvbnN0IGRhdGFiYXNlID0gJ2NoZWNrb3V0JztcblxuXG5jb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG4gIHVzZXI6ICdyb290JyxcbiAgcGFzc3dvcmQ6ICcnLFxufSk7XG5cbmNvbnN0IGRiID0gUHJvbWlzZS5wcm9taXNpZnlBbGwoKGNvbm5lY3Rpb24pKTtcblxuZGIuY29ubmVjdEFzeW5jKClcbiAgLnRoZW4oKCkgPT4gZGIucXVlcnlBc3luYyhgQ1JFQVRFIERBVEFCQVNFIElGIE5PVCBFWElTVFMgJHtkYXRhYmFzZX1gKSlcbiAgLnRoZW4oKCkgPT4gZGIucXVlcnlBc3luYyhgVVNFICR7ZGF0YWJhc2V9YCkpXG4gIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKGBDT05ORUNURUQgVE8gJHtkYXRhYmFzZX0gREFUQUJBU0VgKSlcbiAgLnRoZW4oKCkgPT4gY3JlYXRlVGFibGVzKGRiKSlcbiAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKCdkYi5jb25uZWN0QXN5bmMgRVJSID0gJywgZXJyKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGI7Il19