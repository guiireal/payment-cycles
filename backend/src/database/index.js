const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(
  `mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
