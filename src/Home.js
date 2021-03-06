import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

            <div className="home--row">
            <Product 
               id='01'
               title='Airpods Pro'
               price={1}
               image='https://m.media-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg'
               />

              <Product 
               id='02'
               title='I phone 11 (64GB)'
               price={1}
               image='https://m.media-amazon.com/images/I/71QE00iB9IL._SL1500_.jpg'
               />

              <Product 
               id='03'
               title='I phone 12 pro max (128GB)'
               price={7}
               image='https://m.media-amazon.com/images/I/71fJ-gmBZtL._SL1500_.jpg'
               />
            
            
            </div>
            <div className="home--row">
            <Product 
               id='04'
               title='I phone 8 plus (64GB)'
               price={5}
               image='https://m.media-amazon.com/images/I/51WMaE0DPiL._SL1024_.jpg'
               />

              <Product 
               id='05'
               title='I phone 13 pro max (1TB)'
               price={17}
               image='https://m.media-amazon.com/images/I/61i8Vjb17SL._SL1500_.jpg'
               /> 
               <Product 
               id='06'
               title='NIke Air Jordan'
               price={4900}
               image='https://cdn.shopify.com/s/files/1/0603/3031/1875/products/CU0449-100a-L_1512x.jpg?v=1633762219'
               />
               
            </div>
            <div className="home--row">
            <Product 
               id='07'
               title='I phone 13 (128GB)'
               price={8}
               image='https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg'
               />

               <Product 
               id='08'
               title='HoverBoard self balancing scooter'
               price={16999}
               image='https://m.media-amazon.com/images/I/41sRL7+aHAL.jpg'
               /> 
               <Product 
               id='09'
               title='HoverBoard self balancing scooter'
               price={49999}
               image='https://m.media-amazon.com/images/I/71ZDXihwaLL._SL1500_.jpg'
               /> 
            </div>

          </div>  
        </div>
    )
}

export default Home
 