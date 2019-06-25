import React from "react";
import "./style.css";

export default function InvAll({ children }) {
  return (
    <div>
      <ul className="list">
        <div className="container scrolling shadow">{children}</div>
      </ul>
     
    </div>
  );
}
