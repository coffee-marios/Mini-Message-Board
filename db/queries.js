const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT message, username FROM messages");
  // console.log(process.argv);
  return rows;
}

async function insertUsername(message, username) {
  await pool.query("INSERT INTO messages (message, username) VALUES ($1, $2)", [
    message,
    username,
  ]);
}

async function deleteAll() {
  await pool.query("TRUNCATE TABLE messages");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAll,
};
