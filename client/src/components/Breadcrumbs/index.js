import React from "react";
import { Menu,MenuItem } from 'react-foundation';
import './style.css';




function Breadcrumbs(props) {

  
  
return (
 
<div className="nav nav-tabs menu-active-state-example breadcrumb-counter-nav">
    <Menu className="row">
      <MenuItem isActive className="nav-item columns small-4 breadcrumb-counter-nav-item ">
        <a
          href="#Add"
          onClick={() => props.handlePageChange("Add")}
          className={props.currentPage === "Add" ? "nav-link active" : "nav-link"}
        >
          Add Items
        </a>
      </MenuItem>
      <MenuItem className="nav-item columns small-4 breadcrumb-counter-nav-item ">
        <a
          href="#InvAll"
          onClick={() => props.handlePageChange("InvAll")}
          className={props.currentPage === "InvAll" ? "nav-link active" : "nav-link"}
        >
          Pick Ingredients
        </a>
      </MenuItem>
      <MenuItem className="nav-item columns small-4 breadcrumb-counter-nav-item ">
        <a
          href="#RecipeAll"
          onClick={() => props.handlePageChange("RecipeAll")}
          className={props.currentPage === "RecipeAll" ? "nav-link active" : "nav-link"}
        >
          Search Recipes
        </a>
      </MenuItem>
      </Menu>
    </div>




//   <div className="menu-active-state-example">
//   <Menu>
//     <MenuItem isActive><a>Login</a></MenuItem>
//     <MenuItem><a>Add items</a></MenuItem>
//     <MenuItem><a>Select items</a></MenuItem>
//     <MenuItem><a>Search Recipes</a></MenuItem>
//   </Menu>
// </div>

      
    );
  
}

export default Breadcrumbs