const User = require("../model/user-model");
const Note = require("../model/note-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (user) throw new Error("Username already taken.");
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, hashedPassword });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user)
        return res
          .status(401)
          .json({ message: "Incorrect username and/or password." });
      bcrypt.compare(password, user.hashedPassword, (err, result) => {
        if (!result)
          res
            .status(401)
            .json({ message: "Incorrect username and/or password." });
      });
      const payload = { username: username };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  },

  makeNote: async (req, res, next) => {
    try {
      const { id } = req.params;
      // Create new note
      const newNote = new Note(req.body);
      // Get user
      const user = await User.findById(id);
      // Assign a user as a note's creator
      newNote.user = user;
      // Save new note
      await newNote.save();
      // Add note to the user's note array
      user.note.push(newNote);
      // Save the user
      await user.save();
      res.status(201).json(newNote);
    } catch (error) {
      next(error);
    }
  },
};
