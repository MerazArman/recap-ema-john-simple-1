import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product)
    const {img , name, seller, price , stock } = props.product;
    return (
        <div className="products-container">
            
            <div>
                <img src={img} alt="" />

            </div>
            <div className='product-ditails'>
                <h4 className="product-name"> {name} </h4>
                <p> by {seller} </p>
                <p> $ {price} </p>
                <p> only {stock}  left in stock - order soon </p>
                <br />
                <button className="add-cart-btn" onClick={ () => props.hendelerAddCart( props.product)}>  <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;