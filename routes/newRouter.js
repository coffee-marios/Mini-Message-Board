const { Router } = require("express");
const newController = require("../controllers/newController.js");

const newRouter = Router();

// newRouter.get("/", newController.showForm);
newRouter.get("/", newController.newUser);
newRouter.post("/", newController.newUserPost);

module.exports = newRouter;
