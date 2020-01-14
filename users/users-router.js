const express = require("express");

const db = require("../data/dbConfig.js");

const Users = require("./usersModel.js");

const router = express.Router();

router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get specific user" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.findById(id)
    .then(user => {
      if (user) {
        Users.update(changes, id).then(updatedUser => {
          res.status(200).json(updatedUser);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find user with the given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update user" });
    });
});

module.exports = router;
