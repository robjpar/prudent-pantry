import React from 'react';
import './style.css';
import { Container, Row, Col } from "../Grid";

function RecipeItem ()
{
    

return (

<div className="row itemrow bordering">
    <div className="columns medium-2 bordering">
        <a href={this.response.data.hits[0].recipe.url}><img src={this.response.data.hits[0].recipe.image}  alt={this.response.data.hits[0].recipe.label} className="imaging"/></a>
    </div>
    <div className="columns medium-2 bordering">
        <span>qty: </span>
    </div>
    <div className="columns medium-1 bordering">
        <span>unit: </span>
    </div>
    <div className="columns medium-1 bordering">
        <span>title: {this.response.data.hits[0].recipe.label}</span>
    </div>
    <div className="columns medium-2 bordering">
        <span>energy</span>
    </div>
    <div className="columns medium-2 bordering">
        <span>nutrients</span><br/>
          <span>protein:</span><br/>
          <span>fat:</span><br/>
          <span>carbs:</span>
    </div>
    <div className="columns medium-2 bordering">
        <button>Select</button>
    </div>
  
</div>



);

}

export default RecipeItem;
