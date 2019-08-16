import React from 'react';
import myHOC from './HOC';
import '../../App.scss'

function ProductDisplay(props) {
    const displayProducts = props.data.map((product, i) => {
        return (
            <div
                key={i}
                className="display-container"
            >
                <img
                    src={product.image}
                    alt="products"
                />
                <b>{product.price}</b>
                <h1>{product.name}</h1>
            </div>
        )
    })
    console.log('Props within product display HOC', props);
    return (
        <div>
            <h1><u>Products w/ HOC</u></h1>
            {displayProducts}
        </div>
    )
}

export default myHOC(ProductDisplay, "/api/products");