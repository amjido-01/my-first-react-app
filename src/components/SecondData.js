import React from "react";

const SecondData = (props) => {
    return(
        <div>
            <p style={{ color: 'red'}}>{ props.userId }</p><br/>
            <p>{ props.id }</p><br/>
            <p>{ props.title }</p><br/>
            <p>{ props.body }</p>
        </div>
    )
}

export default SecondData;