const User = require("../model/user-model");
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
};
