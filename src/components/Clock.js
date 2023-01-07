import React from "react";

const Clock = () => {
    const date = new Date();
    const time = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    return(
        <h1 style={{ color: 'blue' }}>
        { time }
      </h1>
    )
}

export default Clock;