const express = require("express");
const app = express();

const path = require("node:path");
const indexRouter = require("./routes/indexRouter.js");
const newRouter = require("./routes/newRouter.js");

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

// If your CSS is inside a folder named 'public'
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
