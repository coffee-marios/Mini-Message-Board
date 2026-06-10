const messages = require("../db");
const db = require("../db/queries");

async function indexControl(req, res) {
  const allBlogs = await db.getAllUsernames();
  console.log("Usernames: ", allBlogs);
  usernames = allBlogs;
  // res.send("Usernames: " + allBlogs.map((user) => user.message).join(", "));
  // const messagesArray = messages.messages;
  // console.log(messagesArray);
  return res.render("index", { messages: allBlogs });
}

async function deleteEverything(req, res) {
  await db.deleteAll();
  res.redirect("/");
}

function singleMessage(req, res) {
  const id = req.params.id;
  const msg = messages.messages[id];

  //console.log("msg", messages);
  return res.render("message", { msg });
}

module.exports = { indexControl, singleMessage, deleteEverything };
