const axios = require('axios');
require('dotenv').config();

module.exports = {
  // Get recipes for given list of ingredients
  // Example of the query of the request:
  // /api/recipes?q=chicken,eggs,cheese
  find: function(req, res) {
    const url = 'https://api.edamam.com/search';
    const params = {
      q: req.query.q,
      app_id: process.env.APP_ID,
      app_key: process.env.APP_KEY
    };
    axios
      .get(url, { params: params })
      .then(function(response) {
        res.json(response.data.hits);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  }
};
