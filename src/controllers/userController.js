const userService = require("../services/userService");

const getAll = (req, res) => {
  userService
    .getUsers()
    .then((docs) => {
      if (docs.length != 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({ message: "no entry in the database" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const getById = (req, res) => {
  const id = req.params.id;
  userService
    .getOneUser(id)
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "no entry for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

const saveUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  userService
    .createUser(name, email)
    .then((result) => {
      res.status(201).json({
        message: "Creating a user",
        createdUser: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

const patchUser = (req, res) => {
  const id = req.params.id;
  const options = req.body;

  userService
    .updateUser(id, options)
    .then((result) => {
      if (result.n == 0) {
        res.status(404).json({ error: "no user with the provided ID" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      if (err.name == "CastError") {
        res.status(404).json({ error: "user not found" });
      } else {
        res.status(500).json({ error: err });
      }
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  userService
    .deleteUser(id)
    .then((result) => {
      if (result.n == 0) {
        res.status(404).json({ error: "no user with the provided ID" });
      } else {
        res.status(200).json({ message: "user with the provided id deleted" });
      }
    })
    .catch((err) => {
      if (err.name == "CastError") {
        res.status(404).send({ error: "user not found" });
      } else {
        res.status(500).json({ error: err });
      }
    });
};

module.exports = {
  getAll,
  getById,
  saveUser,
  patchUser,
  deleteUser,
};
