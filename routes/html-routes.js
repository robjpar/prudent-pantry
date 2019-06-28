const path = require('path');

// Html routes
module.exports = function(app) {
  // The index page html route end-point
  if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
    });
  } else {
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
    app.get('*', function(req, res) {
      res.status(404).send('404 Not Found');
    });
  }
};
