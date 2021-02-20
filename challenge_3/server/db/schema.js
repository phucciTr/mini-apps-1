module.exports = (db) => {
  return db.queryAsync(
    `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(20) UNIQUE KEY ,
      email VARCHAR(40) UNIQUE KEY,
      password VARCHAR(60)
    );`
  )
    .then(() => {
      return db.queryAsync(
        `CREATE TABLE IF NOT EXISTS addresses (
          id INT AUTO_INCREMENT PRIMARY KEY,
          userId INT UNIQUE KEY,
          address VARCHAR(60) UNIQUE KEY,
          city VARCHAR(50),
          zipcode INT,
          FOREIGN KEY (userId) REFERENCES users(id)
        );`
      )
    })
    .catch((err) => console.log('CREATING users TABLE ERR = ', err));
};
