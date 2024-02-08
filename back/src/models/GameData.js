const mongoose = require('mongoose');

const GameDataSchema = new mongoose.Schema({
    data:
    {
        type: String
    },
    game:
    {
        type: String
    },
    part:
    {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const GameData = mongoose.model('GameData', GameDataSchema);
exports.GameData = GameData;
exports.GameDataSchema = GameDataSchema;