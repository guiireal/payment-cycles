const express = require("express");

require("dotenv").config();

class Server {
  constructor() {
    this.port = process.env.SERVER_PORT;
    this.app = express();
    this.restfulService = null;
  }

  start() {
    this.bootstrap();
    this.app.listen(this.port, () => {
      console.log(`Server running at ${this.port} port`);
    });
  }

  bootstrap() {
    this.database();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(require("./middlewares/cors"));
    this.app.use(require("express-query-int")());
  }

  database() {
    require("./database");
  }

  routes() {
    require("./routes")(this.app);
  }
}

module.exports = new Server();
