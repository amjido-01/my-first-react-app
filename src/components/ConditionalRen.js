import React from "react";

const Items = (props) => {
    if (props.isPacked) {
        return <li>{props.name}✔</li>
    }
    return <li>{props.name}</li>
};


export const ConditionalRen = () => {
    return(
        <>
           <ul>
              <Items name='honda' isPacked={true} />
              <Items name='honda' isPacked={false} />
              <Items name='honda' isPacked={true} />
              <Items name='honda' isPacked={false} />
           </ul>
        </>
    )
}