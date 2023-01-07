import React from "react";

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
]

const Data = () => {
    const listItems = products.map((product, index) => 
        <li
         key = { index }
         style = {{ color: product.isFruit ? 'green' : 'red' }}
        >
            {product.title}
        </li>    
    );

    return(
        <>
            <ul>
                { listItems }
            </ul>
        </>
    )
}

export default Data;