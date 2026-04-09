const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Album", albumSchema);