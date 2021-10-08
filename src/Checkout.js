import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className='checkout'>

            <div classname='checkout--left'>
                <img classname='checkout--adv' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt='adv'/>
                 <h3 classname='checkout--title'>Your Shopping Details</h3>
            </div>
           
            <div classname='checkout--right'>

                <h3>SubTotal (2 item):</h3>
            </div>    

            
        </div>
    )
}

export default Checkout
