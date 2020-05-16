const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  hashedPassword: String,
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: "note",
    },
  ],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
