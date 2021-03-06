import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10Data = fakeData.slice(0,10);
    const [products , setProducts] = useState(first10Data)

    const [cart , setCart] = useState([]);

    // btn hendeler er funtion 
    function hendelerAddCart (product){
        // console.log('click' , product);
        let newCart = [...cart , product];
        setCart(newCart);
    }
    // ****************

    return (
        <div className ='shop-style'>
        
            <div className="product-container">
             
                {
                    products.map(pd => <Product product={pd}  hendelerAddCart = {hendelerAddCart}> </Product>)
                }
            

            </div>

            <div className="cart-container">
              <Cart cart={cart}>  </Cart>
            </div>

            
        </div>
    );
};

export default Shop;