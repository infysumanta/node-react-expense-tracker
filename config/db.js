const mongoose = require("mongoose");
const config = require(".");

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((x) => {
      console.log(
        `Connected to Mongo 🔥! Database name: "${x.connections[0].name}"`
      );
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err);
    });
};

module.exports = { connectDB };
