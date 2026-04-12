const { Router } = require("express");
const { indexControl } = require("../controllers/indexController.js");

const indexRouter = Router();

indexRouter.get("/", indexControl);

module.exports = indexRouter;
