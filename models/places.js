const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "/images/NIA.jpg" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Whoville" },
  state: { type: String, default: "USA" },
  founded: Number,
});

module.exports = mongoose.model("Place", placeSchema);
