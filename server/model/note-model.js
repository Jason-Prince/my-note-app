const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: String,
  comment: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Note = mongoose.model("note", noteSchema);
module.exports = Note;
