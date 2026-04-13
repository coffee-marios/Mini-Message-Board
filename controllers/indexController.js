const messages = require("../db");

async function indexControl(req, res) {
  const messagesArray = messages.messages;
  // console.log(messagesArray);
  return res.render("index", { messages: messagesArray });
}

module.exports = { indexControl };
