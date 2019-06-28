import React from "react";
import "./style.css";

export default function InvAll({ children }) {
  return (
    <div>
      <div className="main-container">
        <div className="row">
          
          <div className="columns medium-12 centering">
            <h5 className="shadowing">Inventory</h5>
              <ul className="list">
                <div className="container scrolling shadow">{children}</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
