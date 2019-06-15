const db = require("../models");

// Defining methods for the controller
module.exports = {
  findAll: function(req, res) {
    db.inventorySchema
      .find(req.query)
      .sort({ expireDate: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.inventorySchema
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.inventorySchema
      .findByName({ name: req.body.name })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
