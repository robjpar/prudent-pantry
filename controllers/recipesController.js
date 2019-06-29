const axios = require('axios');

module.exports = {
  // Get recipes for given list of ingredients
  // Example of the query of the request:
  // /api/recipes?q=chicken,eggs,cheese
  find: function(req, res) {
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
        res.status(422).json(err);
      });
  }
};
