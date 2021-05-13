import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
   // console.log(cart);


    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const prod = cart[i];
        //console.log(prod);
        total = total + prod.price;
        //console.log(total);
    }

    let shipping = 0
    if (total > 50 ) {
        shipping = 0    
    } 
    else if (total > 10 ){
        shipping = 5
    }

    const tax = total / 20 ;

    function formateNumber (num) {
        const x = num.toFixed(2)
        return Number(x)
    }
   
    return (
        <div>
            <h3>Order Summary</h3>
            <h5> Items Ordared: {cart.length} </h5>
            <p>product {formateNumber(total) } </p>
            <p>Shipping {formateNumber(shipping )} </p>
            <p>Tax/VAT: {formateNumber(tax)} </p>
            <h5>Total: {formateNumber(total + shipping + tax)} </h5>
            <br />
            <button>Review Order</button>
        </div>
    );
};

export default Cart;