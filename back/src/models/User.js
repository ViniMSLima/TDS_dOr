const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 3,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  cpf: {
    type: String,
    required: true,
    minlength: 3,
  },
  birthday: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  isAdm: {
    type: Boolean,
    required: true,
    minlength: 3,
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

const User = mongoose.model("User", UserSchema);
exports.User = User;
exports.UserSchema = UserSchema;
