const axios = require('axios');
const db = require('../models');
const axios = require("axios")
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

// API routes
module.exports = function(app) {
  // Get the inventory
  app.get('/api/inventory', function(req, res) {
    db.inventory
      .find({})
      .populate('storePlace')
      .then(function(inventory) {
        res.json(inventory);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Add an inventory item.
  // Example of the body of the request:
  // {
  //   name: 'milk',
  //   expireDate: '2019-06-20T01:48:21.458Z',
  //   qty: 1,
  //   unit: 'gal',
  //   storePlace: [ { name: 'refrigerator' } ],
  //   dateIn: '2019-06-14T01:48:21.458Z'
  // }
  app.post('/api/inventory', function(req, res) {
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
            expireDate: req.body.expireDate
          },
          {
            $set: {
              name: req.body.name,
              expireDate: req.body.expireDate,
              qty: req.body.qty,
              unit: req.body.unit,
              dateIn: req.body.dateIn
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
        res.json(err);
      });
  });

  // Update an inventory item
  app.put('/api/inventory/:item_id', function(req, res) {
    db.storages
      .findOneAndUpdate(
        { name: req.body.storePlace[0].name },
        { $set: { name: req.body.storePlace[0].name } },
        { upsert: true, new: true }
      )
      .then(function(storage) {
        return db.inventory.findOneAndUpdate(
          {
            _id: req.params.item_id
          },
          {
            $set: {
              name: req.body.name,
              expireDate: req.body.expireDate,
              qty: req.body.qty,
              unit: req.body.unit,
              dateIn: req.body.dateIn
            },
            $push: {
              storePlace: storage._id
            }
          },
          {
            new: true
          }
        );
      })
      .then(function(item) {
        res.json(item);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Delete an inventory item
  app.delete('/api/inventory/:item_id', function(req, res) {
    db.inventory
      .deleteOne({
        _id: req.params.item_id
      })
      .then(function(item) {
        res.json(item);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Get recipes for given list of ingredients
  // Example of the query of the request:
  // /api/recipes?q=chicken,eggs,cheese
  app.get('/api/recipes', function(req, res) {
    axios
      .get(
        'https://api.edamam.com/search?app_id=d1219d60&app_key=edf5e4d50fb0abcd48b0f405e76f4b6e',
        {
          params: req.query
        }
      )
      .then(function(response) {
        res.json(response.data.hits);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};
