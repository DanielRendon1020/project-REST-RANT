const mongoose = require("mongoose");

let commentSchema = new mongoose.Schema({
  author: { type: String, default: "Anonymous" },
  rant: { type: Boolean, required: true, default: false },
  stars: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  content: { type: String, default: "" },
});


module.exports = mongoose.model("Comment", commentSchema);
