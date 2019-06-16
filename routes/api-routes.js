const db = require('../models');

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
};
