const express = require("express");
const router = new express.Router();
const PostController = require("./PostController.js");
const StorageSer = require("./StorageSer.js");
const controller = require("./1authController.js");
const { check } = require("express-validator");
const authMiddleware = require("./authMiddleware.js");
const RoleMiddleware = require("./RoleMiddleware.js");

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);
router.post("/img", StorageSer.single("image"), (req, res) => {
  PostController.saveimg(req, res);
});
router.post(
  "/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен иметь от 4 до 10 символов").isLength({
      min: 4,
      max: 10,
    }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users", RoleMiddleware(["USER", "ADMIN"]), controller.getUsers);

module.exports = router;
