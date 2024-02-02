const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
var CryptoJS = require("crypto-js");

require("dotenv").config();

class UserController {
  static async register(req, res) {

    // var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    // const decryptd = bytes.toString(CryptoJS.enc.Utf8);
    // const json = JSON.parse(decryptd);

    const { name, birth, email, password, confirmPassword, isAdm } = req.body;

    if (!name) return res.status(400).json({ message: "Name is mandatory" });

    if (!email) return res.status(400).json({ message: "E-mail is mandatory" });

    if (!birth) return res.status(400).json({ message: "Birth date is mandatory" });

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
      name,
      birth,
      email,
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
    const { email, password } = req.body;
    var decryptedEm = CryptoJS.AES.decrypt(email, "senhasecreta").toString(CryptoJS.enc.Utf8);
    var decryptedPw = CryptoJS.AES.decrypt(password, "senhasecreta").toString(CryptoJS.enc.Utf8);

    const user = await User.findOne({ decryptedEm });
    if (!user)
      return res.status(400).send({ message: "Invalid Email or password" });
    if (!(await bcrypt.compare(decryptedPw, user.password))) {
      return res.status(400).send({ message: "Invalid Email or password" });
    }
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret,
      {
        expiresIn: "2 days",
      }
    );

    try {
      var decoded = jwt.verify(token, secret);
      console.log(decoded.id)
    } catch (err) {
      return res.status(400).send({ message: 'Ta me tiranu menó?' });
    }

    return res.status(200).send({ token: token });
  }
}

module.exports = UserController;
