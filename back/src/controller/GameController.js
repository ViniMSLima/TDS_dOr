const { Game } = require("../models/Game");
require("dotenv").config();

class GameController {
    static async create(req, res) {
        const { name, description } = req.body;

        if (!name || !description)
            return res.status(400).send({ message: "Field's can't be empty" });

        const game = new Game({
            name,
            description,
            release: Date.now(),
            createdAt: Date.now(),
        });

        try {
            await game.save();
            res.status(201).send({ message: "Game registered successfully" });
        } catch (error) {
            return res.status(500).send({ message: "Something failed while create a game" });
        }
    }
}

module.exports = GameController;
