import React from "react";
import { useState } from "react";



function StateBtn() {
    const [title, setTitle] = useState("");
    const [counter, setCount] = useState(0);

    const updateTitleState = () => {
        setTitle("we set a new title!")
    }
    const updateCountState = () => {
        setCount(counter + 1)
    }

    return(
        <div>
            <p>title: { title }</p>
            <p>counter: { counter }</p>
            <button onClick={updateTitleState}>update title</button>
            <button onClick={updateCountState}>update counter</button>
        </div>
    )
}

export default StateBtn;