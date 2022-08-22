const express = require("express");
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePost)
  .put(isAuthenticated, updateCaption)
  .delete(isAuthenticated, deletePost);
router.route("/posts").get(isAuthenticated, getPostOfFollowing);
// for comments
// to make a comment
router.route("/post/comment/:id").put(isAuthenticated, commentOnPost);
// to delete a comment
router.route("/post/deletecomment/:id").delete(isAuthenticated, deleteComment);
module.exports = router;
