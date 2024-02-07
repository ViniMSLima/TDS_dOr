const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  imgPath: { type: String, required: true },
  bgPath: { type: String, required: true },
  gamePath: { type: String, required: false },
  release: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

const Game = mongoose.model("Game", GameSchema);
exports.Game = Game;
exports.GameSchema = GameSchema;
