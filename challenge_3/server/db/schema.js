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
          zipcode INT
        );`
      )
    })
    .then(() => {
      return db.queryAsync(
        `CREATE TABLE IF NOT EXISTS credit_card (
          id INT AUTO_INCREMENT PRIMARY KEY,
          userId INT UNIQUE KEY,
          card_number INT UNIQUE KEY,
          cvv INT,
          zipcode INT
        );`
      )
    })
    .catch((err) => console.log('CREATING TABLE ERR = ', err));
};
