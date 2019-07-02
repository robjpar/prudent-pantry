import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Add from "./components/Add";
import InvAll from "./components/InvAll";
import RecipeAll from "./components/RecipeAll";
import InvItem from "./components/InvItem";
// import InvAlert from "./components/InvAlert";
import API from "./utils/api-routes.js";
import RecipeItem from "./components/RecipeItem";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Breadcrumbs from "./components/Breadcrumbs";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

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
    itemsToSearch: [],
    userId: "",
    currentPage: "Add"
  };

  handleToggleChange = event => {
    let toggledItem = event.target.id;

    if (recipeSearchItems.includes(toggledItem)) {
      recipeSearchItems.splice(recipeSearchItems.indexOf(toggledItem), 1);
    } else {
      recipeSearchItems.push(toggledItem);
    }

    this.setState({ itemsToSearch: recipeSearchItems });
  };
  
  // Loads all foods  and sets them to this.state.foods
  loadFoods = userId => {
    API.getInventory(userId)
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
    .then(res => this.loadFoods(this.state.userId))
    .catch(err => console.log(err));
  };
  
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Add Item and Add/Submit buttons
  handleFormSubmit = event => {
    event.preventDefault();
    
    API.saveItem({
      name: this.state.name,
      expireDate: this.state.expireDate,
      qty: this.state.qty,
      unit: this.state.unit,
      storePlace: [{ name: this.state.storePlace }],
      dateIn: new Date(),
      userId: this.state.userId
    })
    .then(res => this.loadFoods(this.state.userId))
    .catch(err => console.log(err));
    //}
  };

  handleFormSubmitTwo = event => {
    event.preventDefault();
    this.handlePageChange("InvAll");

  };

  handleClick = event => {
    event.preventDefault();
    console.log("click");
    if(this.state.itemsToSearch.length < 1 || this.state.itemsToSearch.length === undefined){
   
      alert("please select ingredients");
      return;
    } else {
    this.handlePageChange("RecipeAll");
    API.getRecipes(this.state.itemsToSearch.join()).then(res =>
      this.setState({ recipes: res.data })
    );
    console.log(this.state.recipes);}
  };

  // When the user id is available, load all inventory items and save them to this.state.inventory
  handleUserId = (userId) => {
    this.setState({userId}, () => this.loadFoods(this.state.userId));
  }

  // Router for Add/InvAll/RecipeAll
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  // All the content of Add/Inv/Recipe is in renderPage()
  renderPage = () => {
    if (this.state.currentPage === "Add") {
      return <div><Add
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}
    />
    <div className="input-group-button pad-button">
    <input type="submit" onClick={this.handleFormSubmitTwo} className="button" value="See List"/>
  </div></div>;
    } else if (this.state.currentPage === "InvAll") {
      return <div>
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
    {/* Search Recipe Button */}
    <input
    className="button z-button centering searchRecipes"
    value="Search Recipes"
    type="submit"
    onClick={this.handleClick}
    /></div>;
    } else if (this.state.currentPage === "RecipeAll") {
      return <div><RecipeAll>
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
      <br />
      
    </RecipeAll>
    </div>;
    } else {
      return <InvAll />;
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
            <Container>
              {/* <InvAlert /> */}
              
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard}>
                  <Dashboard onLogin={this.handleUserId}/>
                  <Breadcrumbs
                  currentPage={this.state.currentPage}
                  handlePageChange={this.handlePageChange} />
                  
                  {/* Breadcrumb menu selects Add/Inv/Recipe here */}
                  {this.renderPage()}
                  
                </PrivateRoute>
              </Switch>
            </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
