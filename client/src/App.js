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

class Foods extends Component {
  // Setting our component's initial state
  state = {
    inventory: [],
    recipes: [],
    name: '',
    expireDate: '',
    qty: '',
    unit: '',
    storePlace: "",


  };

  // When the component mounts, load all foods and save them to this.state.foods
  // componentDidMount() {
  //   this.loadFoods();
  // }

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
        
        })
      })
      .catch(err => console.log(err));
  };

  // Deletes a food from the database with a given id, then reloads foods from the db
  deletefood = id => {
    API.deletefood(id)
      .then(res => this.loadfoods())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.savefood method to save the food data
  // Then reload foods from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name && this.state.expireDate && this.state.qty && this.state.unit && this.state.storePlace) {
  //     API.savefood({

  //           name: this.state.name,
  //           expireDate: this.state.expireDate,
  //           qty: this.state.qty,
  //           unit: this.state.unit,
  //           storePlace: this.state.storePlace,
  //           dateIn: ""
  //     })
  //       .then(res => this.loadfoods())
  //       .catch(err => console.log(err));
  //   }
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (
    //   this.state.name &&
    //   this.state.expireDate &&
    //   this.state.qty &&
    //   this.state.unit &&
    //   this.state.storePlace
    // ) {
      API.saveItem({
        name: this.state.name,
        expireDate: this.state.expireDate,
        qty: this.state.qty,
        unit: this.state.unit,
        storePlace: [{name: this.state.storePlace}],
        dateIn: new Date()
      }
      )
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
                      expireDate={item.expireDate}
                      storePlace={item.storePlace[0].name}
                    />
                  );
                })}
              </InvAll>
              />
              {/* <hr />
              <h5>Recipes</h5>
              <RecipeAll>
                {this.state.recipes.map(item => {
                  return (
                    <RecipeItem 
                      
                  )
                })} */}
              <br />
            </div>
            <div className="columns medium-1 centering" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Foods;
