const express = require("express");
const authToken = require("../middleware/authToken");
const {
  getPosts,
  addPost,
  createUser,
  getUsers,
  login,
  deleteUser,
  getUser
} = require("../controllers/controller");

const router = express.Router();

/* Creating the routes for the user controller. */
router.post("/createUser", createUser);

router.post("/login",login);

router.get("/users/:name",authToken, getUser);

router.post("/addPost", addPost);

router.get("/posts", getPosts);

router.get("/users", getUsers);

router.delete("/users/:name", deleteUser);

module.exports = router;