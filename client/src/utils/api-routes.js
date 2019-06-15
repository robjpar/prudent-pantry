import axios from "axios";
import React from "react";
// const db = require("../models");
const BASEURL = "https://api.edamam.com/search?q=";
const APPID= "&app_id=aa550857"
const APIKEY = "&app_key=e12daad5349940b0b60240769dd1d393";



axios.get(BASEURL + "chicken peas cheese" + APPID + APIKEY).then(
  function(response) {
    console.log(response.data.hits[0].recipe.label);
    console.log(response.data.hits[0].recipe.image);
    console.log(response.data.hits[0].recipe.url);

    return <div>
      <p>{this.response.data.hits[0].recipe.label}</p>
      <img src={response.data.hits[0].recipe.image} alt="recipe"></img>
      <p><a href={response.data.hits[0].recipe.url}>Recipe</a></p>
      </div>
  }
);

export default Recipe;


// // API routes
// module.exports = function(app) {
  
// };

