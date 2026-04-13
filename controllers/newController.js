const messages = require("../db");

function showForm(req, res) {
  return res.render("form");
}

function createMessage(req, res) {
  console.log(res);
  // save form data
  messages.messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
}

module.exports = { showForm, createMessage };
