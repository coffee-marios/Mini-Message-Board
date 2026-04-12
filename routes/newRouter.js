const { Router } = require("express");
const { newControl } = require("../controllers/newController.js");

const newRouter = Router();

newRouter.get("/", newControl);

module.exports = newRouter;
