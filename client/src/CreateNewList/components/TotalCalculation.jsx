import React from 'react';

const TotalCalculation = (props) => {

    //VAT %
    const taxes = 20;

    //Calculating Total Price for all products
    const totalPrice = props.products.reduce((prev, cur) =>  {
        return prev + (cur.price * cur.qty)
    }, 0);

    //Total with VAT
    const priceWithVat = parseFloat(totalPrice * (1 + taxes / 100) * props.products.qty).toFixed(2);

    return (
        <p>Total: {totalPrice} - with VAT {priceWithVat}</p>
    )

}

export default TotalCalculation;