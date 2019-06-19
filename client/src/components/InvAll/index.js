import React from 'react';
import './style.css';
import InvItem from '../InvItem';

function InvAll (props) {


return (
<div>
<div className="container scrolling middling">
{this.state.recipes.map(recipe => {
  <InvItem

  />
})}
</div>

<input type="submit" class="button centering searchRecipes" value="Search Recipies"/>

<hr/>
</div>


)}

export default InvAll;


