const db = require('./../db/index');
const Promise = require('bluebird');

const User = {
  create: (user, cb) => {
    db.queryAsync('INSERT INTO users SET ?', user)
      .then(({insertId}) => cb(null, insertId))
      .catch((err) => {
        console.log(`INSERT NEW USER "${user.username}" ERR = `, err);
        cb(err, null);
      });
  },

  saveAddress: (location, cb) => {
    db.queryAsync('INSERT INTO addresses SET ?', location)
      .then((results) => cb(null, results))
      .catch((err) => {
        db.queryAsync(userQuery, location.userId)
          .then(([{username}]) => {
            console.log(`INSERTING NEW ADDRESS FOR USER "${username}" ERR = `, err);
            cb(err, null);
          });
      })
  },

  saveCard: (cardInfo, cb) => {
    db.queryAsync('INSERT INTO credit_card SET ?', cardInfo)
      .then((results) => {
        console.log('results = ', results);
        cb(null, results);
      })
      .catch((err) => {
        db.queryAsync(userQuery, cardInfo.userId)
          .then(([{username}]) => {
            console.log(`INSERTING CARD INFO FOR USER "${username}" ERR = `, err);
            cb(err, null);
          });
      });
  }
};

User.create = Promise.promisify(User.create);
User.saveAddress = Promise.promisify(User.saveAddress);
User.saveCard = Promise.promisify(User.saveCard);
module.exports.User = User;


var userQuery = `SELECT username from users WHERE users.id = ?`;
