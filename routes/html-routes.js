const express = require("express");
const path = require("path");

// Html routes
module.exports = function(app) {
  // The index page html route end-point
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  // server static assets if in production
  if(process.env.NODE_ENV === 'production')
  {
    // set static folder
    app.use(express.static(__dirname, 'client', 'build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    }); 
  }
  else{
    // Any unmatched html routes end-point
  app.get("*", function(req, res) {
    res.status(404).send("404 Not Found");
  });
  }
  
};
