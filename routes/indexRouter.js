const { Router } = require("express");
const indexController = require("../controllers/indexController.js");

const indexRouter = Router();

indexRouter.get("/", indexController.indexControl);
indexRouter.get("/message/:id", indexController.singleMessage);

module.exports = indexRouter;
