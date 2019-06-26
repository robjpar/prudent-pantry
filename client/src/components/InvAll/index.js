import React from "react";
import "./style.css";

export default function InvAll({ children }) {
  return (
    <div>
      <div className="main-container">
        <div className="row">
          <div className="columns medium-1 centering">&nbsp;</div>
          <div className="columns medium-10 centering">
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
