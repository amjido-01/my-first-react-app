import React from "react";

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
]

const Data = () => {
    const listItems = product.map(product => 
        <li
        key={product.id} style={{color: product.isFruit ? 'green' : 'blue'}}
        >{product.title}</li>
    );

    return(
        <>
            <ul>{listItems}</ul>
        </>
    )
};

export default Data;