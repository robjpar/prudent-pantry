import React from "react";
import "./style.css";
import InvItem from "../InvItem";

function InvAll() {
  return (
    <div>
      <div className="container scrolling middling">
        <p></p>
      </div>

      <input
        type="submit"
        className="button centering searchRecipes"
        value="Search Recipies"
      />

      <hr />
    </div>
  );
}

export default InvAll;
