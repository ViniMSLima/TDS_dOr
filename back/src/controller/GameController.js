const { Game } = require("../models/Game");
require("dotenv").config();

class GameController {
    static async create(req, res) {
        const { name, description, rating, imgPath, bgPath, gamePath } = req.body;

        if (!name || !description || !rating || !imgPath || !bgPath || !gamePath)
            return res.status(400).send({ message: "Field's can't be empty" });

        const game = new Game({
            name,
            description,
            rating,
            imgPath,
            bgPath,
            gamePath,
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

    static async get(req, res) {
        const { id } = req.body;

        try {
            const game = await Game.findById(id);
            return res.status(200).send(game);
        } catch (error) {
            return res.status(404).send({ error: "Game not found!" });
        }
    }
}

module.exports = GameController;
