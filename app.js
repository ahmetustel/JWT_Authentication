const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./routes/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
    res.status(200).json({ alive: "True" });
  });

  /* Telling the server to use the routes in the UserRoutes file. */
app.use("/", Routes);

module.exports = app;