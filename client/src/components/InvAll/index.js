import React from "react";
import "./style.css";

export default function InvAll({ children }) {
  return (
    <div>
      <ul className="list">
        <div className="container scrolling shadow">{children}</div>
      </ul>
      <input
        className="button centering searchRecipes"
        value="Search Recipes"
        type="submit"
        className="button z-button centering searchRecipes"
        value="Search Recipies"
      />

      <hr />
    </div>
  );
}
// import React from 'react';
// import './style.css';
// import InvItem from '../InvItem';

// function InvAll (props) {

// return (
// <div>
// <div className="container scrolling shadow">
//   <InvItem
//   />
//   <InvItem
//   />
//   <InvItem
//   />
//   <InvItem
//   />
//   <InvItem
//   />
//   <InvItem
//   />
//    <InvItem
//   />
//   <InvItem
//   />
//   <InvItem
//   />
// </div>

// <input type="submit" className="button z-button centering searchRecipes" value="Search Recipies"/>

// <hr/>
// </div>

// );

// }
