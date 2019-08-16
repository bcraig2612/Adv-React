import React from 'react';
// /api/products

function DisplayProductsRender(props) {
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
    console.log('Props within product display Render Props', props);

    return (
        <div>
            <h1><u>Products w/ Render Props</u></h1>
            {displayProducts}
        </div>
    )
}

export default DisplayProductsRender;