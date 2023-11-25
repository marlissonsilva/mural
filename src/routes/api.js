const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const posts = require("../model/posts");

router.get("/all", (req, res) => {
  const allPosts = posts.getAll();
  res.json(allPosts);
});

router.post("/new", bodyParser.json(), (req, res) => {
  let {title, description} = req.body;

  posts.newPost(title, description);
  console.log(posts);
  res.send("Post adcionado");
});

router.patch("/update/:postId"),
  (req, res) => {
    const postId = req.params.postId;
    console.log(postId);
    res.send("Post atualizado");
  };

router.delete("/delete/:postId", (req, res) => {
  const postId = req.params.postId;
  console.log(postId);
  res.send("Post apagado");
});

module.exports = router;
