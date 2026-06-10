const db = require("../db/queries");

function showForm(req, res) {
  return res.render("form");
}

async function newUser(req, res) {
  // render the form
  res.render("form", {
    title: "User list",
  });
}

async function newUserPost(req, res) {
  const { message, username } = req.body;
  await db.insertUsername(message, username);
  res.redirect("/");
}

module.exports = { showForm, newUser, newUserPost };
