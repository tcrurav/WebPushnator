module.exports = app => {
  const bicycles = require("../controllers/bicycle.controller");

  var router = require("express").Router();

  router.post("/", bicycles.create);

  router.get("/", bicycles.findAll);

  app.use("/api/bicycles", router);
}