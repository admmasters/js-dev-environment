import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/users", function(req, res) {
  res.json([
    {
      id: 1,
      firstName: "Test1",
      lastName: "Smith 1",
      email: "john.smith@example.com"
    },
    {
      id: 2,
      firstName: "Test2",
      lastName: "Smith 2",
      email: "john.smith2@example.com"
    },
    {
      id: 3,
      firstName: "Test3",
      lastName: "Smith 3",
      email: "john.smith3@example.com"
    }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
