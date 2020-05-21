require("dotenv").config();
const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const jwtAuth = require("../middleware/user-auth");
const bcrypt = require("bcrypt");

const userController = require("../controller/user-controller");
const User = require("../model/user-model");
const Note = require("../model/note-model");

// Registration
router.route("/register").post(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email)
      return res.status(400).json({ message: "Please provide email" });
    if (!password)
      return res.status(400).json({ message: "Please provide password" });
    const user = await User.findOne({ email });
    if (user)
      return res.status(409).json({ message: "Email already registered" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// Login
router.route("/login").post(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(401)
        .json({ message: "Incorrect email and/or password." });
    await bcrypt.compare(password, user.password, (err, isMatch) => {
      if (isMatch == false)
        return res
          .status(401)
          .json({ message: "Incorrect email and/or password." });
      if (isMatch == true) {
        const payload = { email };
        const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({ token, userID: user._id });
      }
    });
  } catch (error) {
    next(error);
  }
});

router
  .route("/:userID/note")
  .post(jwtAuth, async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userID); // Get user
      const newNote = new Note(req.body); // Create new note
      newNote.user = user; // Assign a user as a note's creator
      await newNote.save(); // Save new note
      user.note.push(newNote); // Add note to the user's note array
      await user.save(); // Save the user
      res.status(201).json(newNote);
    } catch (error) {
      next(error);
    }
  })
  .get(jwtAuth, async (req, res, next) => {
    try {
      const { userID } = req.params;
      const user = await User.findById(userID).populate("note");
      res.status(200).json(user.note);
    } catch (error) {
      next(error);
    }
  });

router
  .route("/:userID/note/:noteID")
  .patch(jwtAuth, async (req, res, next) => {
    try {
      const { userID, noteID } = req.params;
      const updatedNote = req.body;
      const note = await Note.findById(noteID);
      if (note.user._id != userID)
        throw new Error("Note not found or does not belong to you.");
      await Note.findByIdAndUpdate(noteID, updatedNote);
      res.status(200).json(updatedNote);
    } catch (error) {
      next(error);
    }
  })
  .delete(jwtAuth, userController.deleteNote);

module.exports = router;
