import React from 'react';
import './style.css';

function Add (props) {


return ( 

 
    <form className="input-group groupInput">
        <div className="row">
          <div className="columns medium-3">
            <span className="input-group-label">Name:</span>
            <input className="input-group-field nameInput" type="text"/>
          </div>
          <div className="columns medium-2">
            <span className="input-group-label">Unit:</span>
            <input className="input-group-field unitInput" type="text"/>
          </div>
          <div className="columns medium-2">
            <span className="input-group-label">Qty:</span>
            <input className="input-group-field qtyInput" type="number"/>
          </div>
          <div className="columns medium-3">
            <span className="input-group-label">Expires:</span>
            <input className="input-group-field expiresInput" type="date"/>
          </div>
          <div className="input-group-button">
              <input type="submit" className="button buttonInput" value="Submit"/>
          </div>
        </div>
        <div className="row">
          <fieldset className="large-7 card">
                <legend>Add food item to:</legend>
                <input type="radio" name="pokemon" value="Red" id="pokemonRed" required/><label for="pokemonRed">pantry</label>
                <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"/><label for="pokemonBlue">fridge</label>
                <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"/><label for="pokemonYellow">freezer</label>
              </fieldset>
        </div> 
    </form>
    
    
    
 


);


};

export default Add;
