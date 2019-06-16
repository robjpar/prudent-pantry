import React, { Component } from "react";
//import DeleteBtn from "../../components/DeleteBtn";
import 
//import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
//import { Input, TextArea, FormBtn } from "../../components/Form";

class Foods extends Component {
  // Setting our component's initial state
  state = {
    foods: [],
    name: "",
    expireDate:"",
    qty: "",
    unit: "",
    storePlace: "",
    dateIn: ""
  };

  // When the component mounts, load all foods and save them to this.state.foods
  componentDidMount() {
    this.loadFoods();
  }

  // Loads all foods  and sets them to this.state.foodss
  loadFoods = () => {
    API.getFoods()
      .then(res =>
        this.setState({ foods: res.data,
            name: this.state.name,
            expireDate: this.state.expireDate,
            qty: this.state.qty,
            unit: this.state.unit,
            storePlace: this.state.storePlace,
            dateIn: ""})
      )
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
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.expireDate && this.state.qty && this.state.unit && this.state.storePlace) {
      API.savefood({
        foods: res.data,
            name: this.state.name,
            expireDate: this.state.expireDate,
            qty: this.state.qty,
            unit: this.state.unit,
            storePlace: this.state.storePlace,
            dateIn: ""
      })
        .then(res => this.loadfoods())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What foods Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit food
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>foods On My List</h1>
            </Jumbotron>
            {this.state.foods.length ? (
              <List>
                {this.state.foods.map(food => {
                  return (
                    <ListItem key={food._id}>
                      <a href={"/foods/" + food._id}>
                        <strong>
                          {food.title} by {food.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deletefood(food._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default foods;
