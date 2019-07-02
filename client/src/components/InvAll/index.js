import React from "react";
import "./style.css";

export default function InvAll({ children }) {
  return (
    <div>
      <div className="main-container">
        <div className="row">
          
          <div className="columns medium-12 centering">
            <h5 className="shadowing">Pick Ingredients</h5>
              <ul className="list">
                <div className="container scrollinger shadow">{children}</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
