// Express and middlewares
const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// Routers
const testAPIRouter = require("./routes/testAPI");
const todoRouter = require("./routes/todo");
const fitnessRouter = require("./routes/fitness");
const planningRouter = require("./routes/planning");
const stellarisRouter = require("./routes/stellaris");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/testAPI", testAPIRouter);
app.use("/todo", todoRouter);
app.use("/fitness", fitnessRouter);
app.use("/planning", planningRouter);
app.use("/stellaris", stellarisRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
