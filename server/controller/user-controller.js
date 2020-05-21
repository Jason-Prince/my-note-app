const User = require("../model/user-model");
const Note = require("../model/note-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  // // TODO: Register user
  // register: async (req, res, next) => {
  //   try {
  //     const { email, password } = req.body;
  //     const user = await User.findOne({ email });
  //     if (user) throw new Error("Email already taken.");
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     const newUser = new User({ email, hashedPassword });
  //     await newUser.save();
  //     res.status(201).json(newUser);
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  // // TODO: Login user
  // login: async (req, res, next) => {
  //   try {
  //     const { email, password } = req.body;
  //     const user = await User.findOne({ email });
  //     if (!user)
  //       return res
  //         .status(401)
  //         .json({ message: "Incorrect email and/or password." });
  //     bcrypt.compare(password, user.hashedPassword, (err, result) => {
  //       if (!result)
  //         res.status(401).json({ message: "Incorrect email and/or password." });
  //     });
  //     const payload = { email };
  //     const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
  //       expiresIn: "1h",
  //     });
  //     res.status(200).json({ token });
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // // TODO: Make note
  // makeNote: async (req, res, next) => {
  //   try {
  //     const { userID } = req.params;
  //     // Create new note
  //     const newNote = new Note(req.body);
  //     // Get user
  //     const user = await User.findById(userID);
  //     // Assign a user as a note's creator
  //     newNote.user = user;
  //     // Save new note
  //     await newNote.save();
  //     // Add note to the user's note array
  //     user.note.push(newNote);
  //     // Save the user
  //     await user.save();
  //     res.status(201).json(newNote);
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // // TODO: Get all user's notes
  // getAllMyNotes: async (req, res, next) => {
  //   try {
  //     const { userID } = req.params;
  //     const user = await User.findById(userID).populate("note");
  //     res.status(200).json(user.note);
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // // TODO: Get one user's note
  // getMyOneNote: async (req, res, next) => {
  //   try {
  //     const { userID, noteID } = req.params;
  //     const note = await Note.findById(noteID);
  //     if (note.user._id != userID)
  //       throw new Error("Note not found or does not belong to you.");
  //     res.status(200).json(note);
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // TODO: Update one user's note
  updateNote: async (req, res, next) => {
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
  },

  // TODO: Delete one user's note
  deleteNote: async (req, res, next) => {
    try {
      const { userID, noteID } = req.params;
      const note = await Note.findById(noteID);
      if (note.user._id != userID)
        throw new Error("Note not found or does not belong to you.");
      await Note.findByIdAndDelete(noteID);
      res.status(200).json({ message: "Note deleted" });
    } catch (error) {
      next(error);
    }
  },
};
