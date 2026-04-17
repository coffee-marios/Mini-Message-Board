const messages = require("../db");

async function indexControl(req, res) {
  const messagesArray = messages.messages;
  // console.log(messagesArray);
  return res.render("index", { messages: messagesArray });
}

function singleMessage(req, res) {
  const id = req.params.id;
  const msg = messages.messages[id];

  //console.log("msg", messages);
  return res.render("message", { msg });
}

module.exports = { indexControl, singleMessage };
