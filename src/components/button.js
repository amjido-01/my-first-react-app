import React from "react";
function Button() {
  const value = "sumit".toUpperCase()
  return(
    <form>
      <input type="button" className="btn" value={ value } id="form-text" />
    </form>
  )
}

export default Button;