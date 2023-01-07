import React from "react";

const Clock = ({time, color}) => {
   return(
    <h1 style={{ color: color }}>
        { time }
    </h1>
   )
}

export default Clock;