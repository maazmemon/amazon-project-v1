import React from 'react';
import './CheckProduct.css';

function CheckoutProduct({id, title, price, image}) {
    return (
        <div className="checkoutProduct">
            <img className='checkoutProductImage' src={image} alt='img' />

            <div className='CheckoutProduct--info'>
                <p className='CheckoutProduct--title'>{title}</p>
                <p className='CheckoutProduct--price'>{price}
                <bold>₹</bold>
                <strong>{price}</strong>
                </p>
              
            </div>
            <button>Remove From Cart</button>

        </div>
    )
}

export default CheckoutProduct
