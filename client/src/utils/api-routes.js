import axios from "axios";


export default {
  // Gets all inventory for given user
  getInventory: function(userId) {
    return axios.get("/api/inventory/" + userId);
  },
  
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
    console.log(query);
    return axios.get("/api/recipes", { params: { q: query } });
  }

}