import React from 'react';
import './style.css';
import InvItem from '../InvItem';

function InvAll (props) {


return (
<div>
<div className="container scrolling shadow">
  <InvItem
  />
  <InvItem
  />
  <InvItem
  /> 
  <InvItem
  />
  <InvItem
  />
  <InvItem
  />
   <InvItem
  />
  <InvItem
  />
  <InvItem
  />
</div>

<input type="submit" className="button z-button centering searchRecipes" value="Search Recipies"/>

<hr/>
</div>



);

}

export default InvAll;


