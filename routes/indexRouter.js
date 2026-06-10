const { Router } = require("express");
const indexController = require("../controllers/indexController.js");

const indexRouter = Router();

indexRouter.get("/", indexController.indexControl);
indexRouter.get("/message/:id", indexController.singleMessage);
indexRouter.post("/delete-all", indexController.deleteEverything);

module.exports = indexRouter;
