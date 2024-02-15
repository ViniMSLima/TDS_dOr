const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
var CryptoJS = require("crypto-js");

require("dotenv").config();

class UserController {
  static async register(req, res) {

    var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    const decryptd = bytes.toString(CryptoJS.enc.Utf8);
    const json = JSON.parse(decryptd);

    const { email, cpf, name, birthday, password, confirmPassword, isAdm } = json;

    if (!email) return res.status(400).json({ message: "E-mail is mandatory" });

    if (!cpf) return res.status(400).json({ message: "CPF is mandatory" });

    if (!name) return res.status(400).json({ message: "Name is mandatory" });

    if (!birthday) return res.status(400).json({ message: "Birth date is mandatory" });

    if (!password)
      return res.status(400).json({ message: "Password is mandatory" });

    if (password != confirmPassword)
      return res.status(400).json({ message: "Passwords doesn't match" });

    const userExist = await User.findOne({ email: email });

    if (userExist)
      return res.status(422).json({ message: "E-mail already in use" });

    const passwordCrypt = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET
    ).toString();

    const user = new User({
      email,
      cpf,
      name,
      birthday,
      isAdm,
      password: passwordCrypt,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      removedAt: null,
    });

    try {
      await User.create(user);
      res.status(201).send({ message: "User registered successfully" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something failed", data: error.message });
    }
  }

  static async login(req, res) {
    var decryptedEm = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET).toString(CryptoJS.enc.Utf8);
    const json = JSON.parse(decryptedEm);
    const { email, password } = json;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).send({ message: "Invalid Email or password" });

    var decryptedPw = CryptoJS.AES.decrypt(user.password, process.env.SECRET).toString(CryptoJS.enc.Utf8);

    if (password != decryptedPw)
      return res.status(400).send({ message: "Invalid Email or password" });

    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
        isAdm: user.isAdm
      },
      secret,
      {
        expiresIn: "2 days",
      }
    );

    try {
      var decoded = jwt.verify(token, secret);
    } catch (err) {
      return res.status(400).send({ message: 'Ta me tiranu menó?' });
    }

    return res.status(200).send({ token: token });
  }

  static async isAdm(req, res) {
    const { id } = req.body;
    try {
      const user = await User.findById(id)
      let is = false
      if(user.isAdm)
        is = true
      return res.status(200).send({ is });
    } catch (error) {
      return res.status(404).send({ error: 'Game not found!' });
    }
  }
}

module.exports = UserController;
