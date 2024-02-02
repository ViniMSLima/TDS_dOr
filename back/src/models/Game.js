const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  release: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
  },
  rate: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
  removedAt: {
    type: Date,
    required: false,
  },
});

const Game = mongoose.model("Game", GameSchema);
exports.Game = Game;
exports.GameSchema = GameSchema;
