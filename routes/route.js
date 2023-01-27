const express = require("express");

const {
  getUsers,
  getUser,
  addUser,
  createUser,
  login,
  deleteUser
} = require("../controllers/controller");

const router = express.Router();

/* Creating the routes for the user controller. */
router.get("/users", getUsers);

router.get("/users/:name", getUser);

router.post("/addUser", addUser);

router.post("/createUser", createUser);

router.post("/login",login);

router.delete("/users/:name", deleteUser);

module.exports = router;