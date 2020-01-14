const express = require("express");

const Plants = require("./plantsModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Plants.find()
    .then(plant => {
      res.json(plant);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get plants list" });
    });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Plants.findById(id)
    .then(plants => {
      res.json(plants);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get plants list" });
    });
});

router.post("/", (req, res) => {
  const plantData = req.body;

  Plants.add(plantData)
    .then(plant => {
      res.status(201).json(plantData);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to save plant" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Plants.findById(id)
    .then(plant => {
      if (plant) {
        Plants.update(changes, id).then(updatedPlant => {
          res.status(200).json(updatedPlant);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find plant with the given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update plant" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Plants.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find comment with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete comment" });
    });
});

module.exports = router;
