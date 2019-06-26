import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
// import Nav from "./components/Nav";

class App extends Component {
  // Setting our component's initial state
  state = {
    isLoggedIn: false,
  
  };
  
  handleLoginStatusChanged = (userId) => {
    this.setState({ isLoggedIn: true });
  }

  handleAccountCreated = (data) => {
    this.setState({ isLoggedIn: true });
  }
 

  render() {
    return (
      <Container>
        <h2>Prudent Pantry</h2>
        {/* <p>hello</p> */}

        {this.state.isLoggedIn ?
        (<Router>
          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              {/* <Route exact path="/books" component={Books} />
              <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} /> */}
            </Switch>
          </div>
        </Router>) :
        <Auth
          loginStatusChanged={this.handleLoginStatusChanged}
          accountCreated={this.handleAccountCreated} />
        }
          </Container>
  
    );
}
};
export default App;