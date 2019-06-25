import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="inv-xbutton" {...props} role="button" tabIndex="0">
        X
    </span>
  );
}

export default DeleteBtn;