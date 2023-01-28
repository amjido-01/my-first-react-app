import React from "react";


function Form() {
    const text = 'text'
    return(
        <>
            <form>
                <label htmlFor="fName"></label>
                <input type={ text } id="fName" />
            </form>
        </>
    )
}

export default Form