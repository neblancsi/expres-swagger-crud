const mongoose = require("mongoose");
const User = require("../models/user");

//every function returns a promise

const getUsers = () => {
  return User.find().exec();
};

const getOneUser = (id) => {
  return User.findById(id).exec();
};

const createUser = (name, email) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    email: email,
  });
  return user.save();
};

const updateUser = (id, options) => {
  const updateOps = {};

  for (const ops of options) {
    updateOps[ops.propName] = ops.value;
  }
  return User.updateOne({ _id: id }, { $set: updateOps }).exec();
};

const deleteUser = (id) => {
  return User.deleteOne({ _id: id }).exec();
};

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
