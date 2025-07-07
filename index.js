const debuggerStartup = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const Joi = require("joi");
const morgan = require("morgan");
const express = require("express");
const app = express();
const courses = require("./routes/courses");
const home = require("./routes/home");

app.use("api/courses", courses);
app.use("/", home);

// if (app.get("env") === "development") {
//   app.use(morgan("tiny"));
//   debuggerStartup("Morgan Enabled");
// }

// db work
// dbDebugger("Connected to database");

// custom middleware
// app.use(function (res, req, next) {
//   console.log("Logging....");
//   next();
// });

app.set("view engine", "pug");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}... `));

// middleware
// built in middlewares
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static());
