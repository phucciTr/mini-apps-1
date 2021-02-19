const db = require('./../db/index');

const User = {
  create: (user) => {
    console.log('user = ', user);

    db.queryAsync(``)
  }
};

module.exports = { User };

