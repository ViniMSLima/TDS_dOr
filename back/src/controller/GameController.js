const { Game } = require('../models/Game');
const  buf2str = require('buffer');


class GameController {
  static async create(req, res) {
    const { name, description, rating, imgPath, bgPath } = req.body;

    if (!name || !description || !rating || !imgPath || !bgPath)
      return res.status(400).send({ message: 'Field\'s can\'t be empty' });

    const game = new Game({
      name,
      description,
      rating,
      imgPath,
      bgPath,
      release: Date.now(),
      createdAt: Date.now(),
    });

    if (req.file) {
        var a = req.file.buffer.toString('base64')
        game.gamePath = a
    }

    try {
    //   await game.save();
      res.status(201).send({ message: 'Game registered successfully' });
    } catch (error) {
      return res.status(500).send({ message: 'Something failed while creating a game' });
    }
  }

  static async get(req, res) {
    const { id } = req.params;

    try {
      const game = await Game.findById(id).populate('gamePath');
      return res.status(200).send({ game });
    } catch (error) {
      return res.status(404).send({ error: 'Game not found!' });
    }
  }
}

module.exports = GameController;