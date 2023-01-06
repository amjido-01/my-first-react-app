import React from "react";
// import '../App.css'
function Btn() {
    const value = "submit"
    return(
      <form>
        <input type="button" className="btn" style={{ color: 'green', backgroundColor: 'blue'}} value={ value } id="form-text" />
      </form>
    )
}

export default Btn;