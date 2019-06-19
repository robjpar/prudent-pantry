import axios from "axios";
//import React from "react";
// const db = require("../models");
const BASEURL = "https://api.edamam.com/search?q=";
const APPID= "&app_id=aa550857"
const APIKEY = "&app_key=e12daad5349940b0b60240769dd1d393";


export default {
  // Gets all foods
  getfoods: function() {
    return axios.get("/api/foods");
  },
  // // Gets the food with the given id
  // getfood: function(id) {
  //   return axios.get("/api/foods/" + id);
  // },
  // Deletes the food with the given id
  deletefood: function(id) {
    return axios.delete("/api/foods/" + id);
  },
  // Saves a food to the database
  savefood: function(foodData) {
    return axios.post("/api/foods", foodData);
  },

  getRecipes: function(query) {
    return axios.get(BASEURL + query + APPID + APIKEY);
  }
};

// axios.get(BASEURL + "chicken peas cheese" + APPID + APIKEY).then(
//   function(response) {
//     console.log(response.data.hits[0].recipe.label);
//     console.log(response.data.hits[0].recipe.image);
//     console.log(response.data.hits[0].recipe.url);

//     return <div>
//       <p>{this.response.data.hits[0].recipe.label}</p>
//       <img src={response.data.hits[0].recipe.image} alt="recipe"></img>
//       <p><a href={response.data.hits[0].recipe.url}>Recipe</a></p>
//       </div>
//   }
// );




// // API routes
// module.exports = function(app) {
  
// };

