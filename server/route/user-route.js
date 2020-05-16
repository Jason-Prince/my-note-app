const express = require("express");

const userController = require("../controller/user-controller");
const jwtAuth = require("../middleware/user-auth");

const router = express.Router();

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
router
  .route("/:userID/note")
  .post(jwtAuth, userController.makeNote)
  .get(jwtAuth, userController.getAllMyNotes);

router
  .route("/:userID/note/:noteID")
  .get(jwtAuth, userController.getMyOneNote)
  .patch(jwtAuth, userController.updateNote)
  .delete(jwtAuth, userController.deleteNote);

module.exports = router;
