const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  birth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
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
