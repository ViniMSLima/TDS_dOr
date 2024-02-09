const { Game } = require('../models/Game');
const { GameData } = require('../models/GameData');

const fs = require('fs');
const { promisify } = require('util');
const unlink = promisify(fs.unlink);

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
      // 16700000
      var zip = req.file.buffer.toString('base64');

      var partsLength = 9e6
      var gameLength = zip.length
      var parts = gameLength / partsLength
      var exactParts = Math.floor(parts);

      var k = 0;

      for (var j = 0; j < exactParts; j++) {
        const actualPart = new GameData({
          data: zip.slice(k, k + partsLength),
          game: name,
          part: j,
          createdAt: Date.now(),
        });
        await actualPart.save();
        k += partsLength;
      }

      const lastPart = new GameData({
        data: zip.slice(k),
        game: name,
        part: j,
        createdAt: Date.now(),
      });

      await lastPart.save();
    }

    try {
      await game.save();

      res.status(201).send({ message: 'Game registered successfully' });
    } catch (error) {
      return res.status(500).send({ message: 'Something failed while creating a game' });
    }
  }

  static async get(req, res) {
    const { id } = req.body;

    try {
      const game = await Game.findById(id).populate('gamePath');
      return res.status(200).send({ game });
    } catch (error) {
      return res.status(404).send({ error: 'Game not found!' });
    }
  }

  static async getAll(req, res) {
    try {
      const game = await Game.find();
      return res.status(200).send({ game });
    } catch (error) {
      return res.status(404).send({ error: 'Game not found!' });
    }
  }

  static async DeleteById(req, res) {
    const { id }= req.body

    try {
      const game = await Game.findById(id);
      console.log(game.name);
      const games = await GameData.find({game: game.name});
      // console.log(games);
      games.forEach(async gameID => {
        console.log(gameID.id)
        const deletedGameData = await Game.findOneAndDelete({id: gameID.id});
      });
      // const deletedGame = await Game.findByIdAndDelete(id).populate('gamePath');
      return res.status(200).send({ message: "Game and GameData deleted!" });
    } catch (error) {
      return res.status(404).send({ error: 'Game not found!' });
    }
  }

  static async getZip(req, res) {
    const { name } = req.body;

    try {
      const games = await GameData.find({ game: name });
      const parts = games.map(game => Buffer.from(game.data, 'base64'));
      const buffer = Buffer.concat(parts);

      fs.writeFileSync('output.zip', buffer);
      const readStream = fs.createReadStream('output.zip');
      readStream.on('error', (error) => {
        console.error('Erro ao ler o arquivo:', error);
        res.status(500).send({ error: 'Erro ao ler o arquivo' });
      });

      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Disposition', `attachment; filename=${name}.zip`);
      readStream.pipe(res);
    } catch (error) {
      console.error('Erro ao baixar o arquivo:', error);
      res.status(404).send({ error: 'Game not found!' });
    }
  }

  static async deleteZip(req, res) {

    try {
      await Promise.all([unlink(`output.zip`)]);
      return res.status(200).send({ message: "deletado com sucesso" })

    } catch (error) {
      console.error('Erro ao goiabar o arquivo:', error);
      res.status(404).send({ error: 'Game not found!' });
    }
  }
}

module.exports = GameController;