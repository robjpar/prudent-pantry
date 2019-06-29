import React from 'react';
import './style.css';

function Add (props) {


return ( 
  <div>
    <div className="centering">
      <i className="fas fa-utensil-spoon" alt="spoon" />
      <h5 className="shadowing centering">Add Item:</h5>
      <i className="fas fa-utensil-spoon" alt="spoon" />
    </div>
    <form className="input-group groupInput">
        <div className="row">
          <div className="columns medium-3">
            <span className="input-group-label">Name:</span>
            <input 
                onChange={props.handleInputChange}
                name="name"
                placeholder="(ex. Milk)"className="input-group-field nameInput" type="text"/>
          </div>
          <div className="columns medium-2">
            <span className="input-group-label">Unit:</span>
            <input 
            onChange={props.handleInputChange}
            name="unit"
            placeholder="(ex. Gallon)"className="input-group-field unitInput" type="text"/>
          </div>
          <div className="columns medium-2">
            <span className="input-group-label">Qty:</span>
            <input 
                onChange={props.handleInputChange}
                name="qty"
                className="input-group-field qtyInput" type="number"/>
          </div>
          <div className="columns medium-5">
            <span className="input-group-label expiresLabel">Expires:</span>
            <input
            onChange={props.handleInputChange}
            name="expireDate"
            placeholder="(mm/dd/yy) "className="input-group-field expiresInput" type="date" style={{textAlign:'center'}}/>
          </div>
          <div className="columns medium-0"></div>
          
        </div>
        <div className="row">
        <div className="centering">
          <i className="fas fa-utensil-spoon" alt="spoon" />
          <h5 className="shadowing centering">Add food item to:</h5>
          <i className="fas fa-utensil-spoon" alt="spoon" />
        </div>
        <fieldset className="large-7 card centering addOption">
          <input type="radio" onChange={props.handleInputChange} name="storePlace" value="pantry" id="pokemonRed" required/><label htmlFor="pokemonRed">pantry</label>
          <input type="radio" onChange={props.handleInputChange} name="storePlace" value="fridge" id="pokemonBlue"/><label htmlFor="pokemonBlue">fridge</label>
          <input type="radio" onChange={props.handleInputChange} name="storePlace" value="freezer" id="pokemonYellow"/><label htmlFor="pokemonYellow">freezer</label>
        </fieldset>
          <div className="input-group-button">
            <input type="submit" onClick={props.handleFormSubmit} className="button buttonInput" value="Submit"/>
          </div>
        </div> 
    </form>
  </div>
    
    
    
 


);


};

export default Add;
