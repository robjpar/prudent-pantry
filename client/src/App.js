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
import DeleteBtn from "./components/DeleteBtn";

class Foods extends Component {
  // Setting our component's initial state
  state = {
    inventory: [],
    recipes: [],
    name: "",
    expireDate: "",
    qty: "",
    unit: "",
    storePlace: "",
    dateIn: ""
  };

  // When the component mounts, load all foods and save them to this.state.foods
  componentDidMount() {
    this.loadFoods();
  }

  // loadRecipes = () => {
  //   API.getRecipes().then(res =>
  //     this.setState({
  //       recipes: res.data
  //     })
  //   );
  // };

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
    API.getRecipes(this.state.RecipeSearch).then(res =>
      this.setState({ recipes: res.data })
    );
  };

  render() {
    return (
      <Container>
        <Nav />
        <Add
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="main-container">
          <div className="row">
            <div className="columns medium-1 centering">
              <span>&nbsp;</span>
            </div>

            <div className="columns medium-10 centering">
              <h5>inventory</h5>
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
                    >
                      {/* <DeleteBtn onClick={() => this.deleteFood(item._id)} /> */}
                    </InvItem>
                  );
                })}
              </InvAll>

              <hr />
              <h5>Recipes</h5>
              {/* <RecipeAll>
                {this.state.recipes.map(item => {
                  return (
                    <RecipeItem 
                      
                  )
                })}
              <br /> */}
            </div>
            <div className="columns medium-1 centering" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Foods;
