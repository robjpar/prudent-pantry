import React from 'react';
import './style.css';

function Add (props) {


return ( 

 
    <form className="input-group groupInput">
        <div className="row">
          <div className="columns medium-3">
            <span className="input-group-label">Name:</span>
            <input value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="(ex. Milk)"className="input-group-field nameInput" type="text"/>
          </div>
          <div className="columns medium-2">
            <span className="input-group-label">Unit:</span>
            <input 
            value={this.state.unit}
            onChange={this.handleInputChange}
            name=""
            placeholder="(ex. Gallon)"className="input-group-field unitInput" type="text"/>
          </div>
          <div className="columns medium-2">
            <span className="input-group-label">Qty:</span>
            <input value={this.state.qty}
                onChange={this.handleInputChange}
                name="qty"
                className="input-group-field qtyInput" type="number"/>
          </div>
          <div className="columns medium-3">
            <span className="input-group-label">Expires:</span>
            <input 
            value={this.state.expireDate}
            onChange={this.handleInputChange}
            name="expireDate"
            placeholder="(mm/dd/yy) "className="input-group-field expiresInput" type="date"/>
          </div>
          <div className="input-group-button">
              <input 
              disabled={!(this.state.name && this.state.unit && this.state.qty && this.state.expireDate)}
              onClick={this.handleFormSubmit} type="submit" className="button buttonInput" value="Submit"/>
          </div>
        </div>
        <div className="row">
          <fieldset className="large-7 card">
                <legend>Add food item to:</legend>
                <input type="radio" name="pokemon" value="Red" id="pokemonRed" required/><label htmlFor="pokemonRed">pantry</label>
                <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"/><label htmlFor="pokemonBlue">fridge</label>
                <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"/><label htmlFor="pokemonYellow">freezer</label>
              </fieldset>
        </div> 
    </form>
    
    
    
 


);


};

export default Add;
