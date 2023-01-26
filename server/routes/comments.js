const express = require("express");
const {
  getComments,
  createComment,
  deleteComment,
  updateComment,
  getCommentsAmount,
} = require("../controllers/commentController.js");

const router = express.Router();

//GET all comments
router.get("/", getComments);

//GET amount of comments
router.get("/amount", getCommentsAmount);

// POST new comment
router.post("/", createComment);

// DELETE comment
router.delete("/:id", deleteComment);

// UPDATE comment
router.patch("/:id", updateComment);

module.exports = router;
