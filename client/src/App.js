import React, { Component } from "react";

import "./App.css";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Add from "./components/Add";
import InvAll from "./components/InvAll";
import RecipeAll from "./components/RecipeAll";
import InvItem from "./components/InvItem";
import API from "./utils/api-routes.js";
import RecipeItem from "./components/RecipeItem";
import Login from "./components/Login";

let recipeSearchItems = [];


class App extends Component {
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
    console.log(this.state)
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
      <Container>
        {/* <Nav /> */}
        <Login />
        <div>
          <h1>Prudent Pantry</h1>
        </div>
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
            <div className="columns medium-1 centering">&nbsp;</div>

            <div className="columns medium-10 centering">
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
            <div className="columns medium-1 centering" />
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
