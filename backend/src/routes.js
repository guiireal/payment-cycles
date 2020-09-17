const express = require("express");

module.exports = (server) => {
  const router = express.Router();
  server.use("/api", router);

  const billingCycle = require("./restful");
  billingCycle.register(router, "billing-cycles");
};
