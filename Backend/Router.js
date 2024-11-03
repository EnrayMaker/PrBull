const express = require("express");
const router = new express.Router();
const PostController = require("./PostController.js");
const StorageSer = require("./StorageSer.js");

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);
router.post("/img", StorageSer.single("image"), (req, res) => {
  PostController.saveimg(req, res);
});

module.exports = router;
