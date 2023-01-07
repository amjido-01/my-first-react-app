import React from "react";

export const PropsExample = (props) => {
    return(
        <>
            <h1 
                style = {{ color: props.person.color}}
                >
                {props.name} <br/> {props.person.firstName}
            </h1>

        </>
    )
}

