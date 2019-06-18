import React from 'react';
import './style.css';
import { Container, Row, Col } from "../Grid";

function RecipeItem (thumbnail = "https://placehold.it/300x300",
title,
ingredients,
href) {
    

return (

<div className="row itemrow bordering">
    <div className="columns medium-2 bordering">
        <img src={thumbnail} className="imaging"/>
    </div>
    <div className="columns medium-2 bordering">
        <span>qty: </span>
    </div>
    <div className="columns medium-1 bordering">
        <span>unit: </span>
    </div>
    <div className="columns medium-1 bordering">
        <span>title: {title}</span>
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
