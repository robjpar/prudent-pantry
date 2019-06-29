const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require('./routes');
const users = require("./routes/api/users");

// Connect to MongoDB
require('./config/connection');

// Server configuration
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Auth Route
app.use("/api/users", users);

// Routing
app.use(routes);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log(`Server ${__filename} listening on port ${port}`);
});
