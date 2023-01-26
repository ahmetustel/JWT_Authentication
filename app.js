const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
    res.status(200).json({ alive: "True" });
  });

module.exports = app;