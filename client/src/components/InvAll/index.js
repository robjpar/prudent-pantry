import React from "react";
import "./style.css";


export default function InvAll({children}) {
  return (
    <div>
    <ul className="list">
    

      <div className="container scrolling middling">
        {children}
      </div>
      </ul>
      <input
        type="submit"
        className="button centering searchRecipes"
        value="Search Recipes"
      />

      <hr />
    </div>
  );
}

