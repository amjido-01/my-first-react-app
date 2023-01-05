import React from "react";
function Btn() {
    const value = "submit"
    return(
      <form>
        <input type="button" value={ value } id="form-text" />
      </form>
    )
}

export default Btn;