import React from "react";
// import '../App.css'
function Btn() {
  const value = "sumit".toUpperCase()
  return(
    <form>
      <input type="button" className="btn" value={ value } id="form-text" />
    </form>
  )
}

export default Btn;