const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: Number,
  calories: Schema.Types.Decimal128,
  sourceLink: String,
  imgSource: String,
  dateIn: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;