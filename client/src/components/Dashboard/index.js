
import React, { Component } from "react";

import "./style.css";
import Add from "../Add";
import InvAll from "../InvAll";
import RecipeAll from "../RecipeAll";
import InvItem from "../InvItem";
import API from "../../utils/api-routes.js";
import RecipeItem from "../RecipeItem";

let recipeSearchItems = [];


class Dashboard extends Component {
  // Setting our component's initial state
  state = {
    inventory: [],
    recipes: [],
    name: "",
    expireDate: "",
    qty: "",
    unit: "",
    storePlace: "",
    dateIn: "",
    itemsToSearch: '',
  
  };
  
  
  handleToggleChange = event => {
    let toggledItem = event.target.id;
    console.log(toggledItem);
    if (recipeSearchItems.includes(toggledItem)){
      recipeSearchItems.splice( recipeSearchItems.indexOf(toggledItem), 1 );
    } else {
      recipeSearchItems.push(toggledItem);
    }
    console.log(recipeSearchItems);
    this.setState({itemsToSearch: recipeSearchItems})
    console.log(this.state.itemsToSearch)
  }
 
  

  // When the component mounts, load all foods and save them to this.state.foods
  componentDidMount() {
    this.loadFoods();
  }


  // Loads all foods  and sets them to this.state.foodss
  loadFoods = () => {
    API.getInventory()
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // Deletes a food from the database with a given id, then reloads foods from the db
  deleteFood = id => {
    console.log("delete");
    API.deleteFood(id)
      .then(res => this.loadFoods())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.saveItem({
      name: this.state.name,
      expireDate: this.state.expireDate,
      qty: this.state.qty,
      unit: this.state.unit,
      storePlace: [{ name: this.state.storePlace }],
      dateIn: new Date()
    })
      .then(res => this.loadFoods())
      .catch(err => console.log(err));
    //}
};

  handleClick = event => {
    event.preventDefault();
    console.log("click");
    API.getRecipes(this.state.itemsToSearch.join()).then(res =>
      this.setState({ recipes: res.data }));
      console.log(this.state.recipes);
    
  
    
  };

  render() {
    return (
      
     <div>
        <div classname="centering">
          <i class="fas fa-utensil-spoon" alt="spoon" />
          <h5 className="shadowing centering">Add Item:</h5>
          <i class="fas fa-utensil-spoon" alt="spoon" />
        </div>
        <Add
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="main-container">
          <div className="row">
            

            <div className="columns centering">
              <h5 className="shadowing">Inventory</h5>
              <InvAll>
                {this.state.inventory.map(item => {
                  return (
                    <InvItem
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      qty={item.qty["$numberDecimal"]}
                      unit={item.unit}
                      expireDate={new Date(
                        item.expireDate
                      ).toLocaleDateString()}
                      storePlace={item.storePlace[0].name}
                      dateIn={new Date(item.dateIn).toLocaleDateString()}
                      deleteFood={this.deleteFood}
                      handleClick={this.handleClick}
                      handleFormSubmit={this.handleFormSubmit}
                      toggle={this.toggle}
                      handleToggleChange={this.handleToggleChange}
                    />
                  );
                })}
              </InvAll>
              <input
                className="button z-button centering searchRecipes"
                value="Search Recipes"
                type="submit"
                onClick={this.handleClick}
              />

              <hr />
              <hr />
              <h5 className="shadowing">Recipes</h5>
              <RecipeAll>
                {this.state.recipes.map(item => {
                  return (
                    <RecipeItem
                      key={item.recipe.uri}
                      name={item.recipe.label}
                      href={item.recipe.shareAs}
                      src={item.recipe.image}
                      calories={item.recipe.calories}
                      fat={item.recipe.totalNutrients.FAT.quantity}
                      protein={item.recipe.totalNutrients.PROCNT.quantity}
                      carbs={item.recipe.totalNutrients.CHOCDF.quantity}
                    />
                  );
                })}
              </RecipeAll>
              <br />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;