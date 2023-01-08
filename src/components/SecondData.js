import React from "react";

const SecondData = (props) => {
    // const style = {
    //     color: props.userId > 1 ? 'red' : 'yellow'
    // }
    return(
        <div>
            <p style={{ color: props.id > 1 ? 'green' : 'yellow', border: '2px solid red'}}>{ props.id }</p><br/>
            <p>{ props.userId }</p><br/>
            <p>{ props.title }</p><br/>
            <p>{ props.body }</p>
        </div>
    )
}

export default SecondData;