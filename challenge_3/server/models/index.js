const db = require('./../db/index');
const Promise = require('bluebird');

const User = {
  create: (user, cb) => {
    db.queryAsync('INSERT INTO users SET ?', user)
      .then((results) => cb(null, results))
      .catch((err) => {
        console.log(`INSERT NEW USER "${user.username}" ERR = `, err)
        cb(err, null);
      });
  }
};
User.create = Promise.promisify(User.create);

module.exports.User = User;
