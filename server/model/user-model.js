const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: "note",
    },
  ],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
