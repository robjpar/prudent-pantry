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
};
