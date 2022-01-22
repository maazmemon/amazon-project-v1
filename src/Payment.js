import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';



function Payment() {
    const [{cart,user}, dispatch] = useStateValue();



    return (
        <div className='payment'>
            <div className='payment--container'>

           <div className='payment--section'>
           <div classname="payment--title">
               <h3>Delivery Address:</h3>
               </div>
               <div className='payment--address'>
                   <p>Maaz Memon</p>
                   <p>Flat 301, Hiranandani</p>
                   <p>Andheri, India </p>

                           
               </div>
        
           </div>

           <div className='payment--section'>
           <div classname="payment--title">
               <h3>Review your Item in Cart:</h3>
               </div>
               <div className='payment--items'>
               {cart.map( item => (
           <CheckoutProduct
            id = {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
           /> 
          ))}

               </div>
           </div>

           <div className='payment--section'>
               
               <h3>Payment Method:</h3>
               <div className='payment--details'></div>
                  {/*Stripe secret Code*/}

           </div>
          </div>
         </div>
    )
}

export default Payment
