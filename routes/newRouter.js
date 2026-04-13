const { Router } = require("express");
const newController = require("../controllers/newController.js");

const newRouter = Router();

newRouter.get("/", newController.showForm);
newRouter.post("/", newController.createMessage);

module.exports = newRouter;
