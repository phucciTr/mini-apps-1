module.exports = (db) => {
  return db.queryAsync(
    `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(20) UNIQUE KEY ,
      email VARCHAR(40) UNIQUE KEY,
      password VARCHAR(60)
    );`
  )
    .catch((err) => console.log('CREATING users TABLE ERR = ', err));
};