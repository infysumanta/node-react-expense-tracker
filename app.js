const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

// Router
app.use("/api", require("./routes/routes"));
app.use(notFound);
app.use(errorHandler);

module.exports = app;
