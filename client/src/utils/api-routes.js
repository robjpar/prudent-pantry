import axios from "axios";


export default {
  // Gets all inventory
  getInventory: function() {
    return axios.get("/api/inventory");
  },
  // // Gets the food with the given id
  // getfood: function(id) {
  //   return axios.get("/api/foods/" + id);
  // },
  // Deletes the food with the given id
  deleteFood: function(id) {
    return axios.delete("/api/inventory/" + id);
  },
  // Saves a food to the database
  saveItem: function(itemData) {
    console.log(itemData);
    return axios.post("/api/inventory", itemData);

  },

  getRecipes: function(query) {
    return axios.get("api/recipes" + query);
  }
};

