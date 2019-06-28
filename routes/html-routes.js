const path = require('path');

// Html routes
module.exports = function(app) {
  // The index page html route end-point
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
};
