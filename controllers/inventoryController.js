const mongoose = require('mongoose');
const db = require('../models');

module.exports = {
  // Get the inventory for given user
  findAll: function(req, res) {
    db.inventory
      .find({
        userId: mongoose.Types.ObjectId(req.params.user_id)
      })
      .populate('storePlace')
      .sort({ expireDate: 1 })
      .then(function(inventory) {
        res.json(inventory);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  // Add an inventory item.
  // Example of the body of the request:
  // {
  //   name: 'milk',
  //   expireDate: '2019-06-20T01:48:21.458Z',
  //   qty: 1,
  //   unit: 'gal',
  //   storePlace: [ { name: 'refrigerator' } ],
  //   dateIn: '2019-06-14T01:48:21.458Z',
  //   userId: '5d1582b6a6c28915d89c457d'
  // }
  create: function(req, res) {
    db.storages
      .findOneAndUpdate(
        { name: req.body.storePlace[0].name },
        { $set: { name: req.body.storePlace[0].name } },
        { upsert: true, new: true }
      )
      .then(function(storage) {
        return db.inventory.findOneAndUpdate(
          {
            name: req.body.name,
            expireDate: req.body.expireDate,
            userId: mongoose.Types.ObjectId(req.body.userId)
          },
          {
            $set: {
              name: req.body.name,
              expireDate: req.body.expireDate,
              qty: req.body.qty,
              unit: req.body.unit,
              dateIn: req.body.dateIn,
              userId: mongoose.Types.ObjectId(req.body.userId)
            },
            $push: {
              storePlace: storage._id
            }
          },
          {
            upsert: true,
            new: true
          }
        );
      })
      .then(function(item) {
        res.json(item);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  // Delete an inventory item
  remove: function(req, res) {
    db.inventory
      .deleteOne({
        _id: req.params.item_id
      })
      .then(function(item) {
        res.json(item);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  }
};
