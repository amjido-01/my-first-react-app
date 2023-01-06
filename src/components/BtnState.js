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
            <Data title={title} counter={counter}/>
            <button onClick={updateTitleState}>update title</button>
            <button onClick={updateCountState}>update counter</button>
        </div>
    )
}

function Data(props) {
    return(
        <div>
            <p>Title: {props.title}</p>
            <p>counter: {props.counter}</p>
        </div>
    )
}

export default StateBtn;