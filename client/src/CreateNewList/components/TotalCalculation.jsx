import React from 'react';

const TotalCalculation = (props) => {

    //VAT %
    const taxes = 20;

    //Calculating Total Price for all products
    const totalPrice = props.products.reduce((prev, cur) =>  {
        return prev + (cur.price * cur.qty)
    }, 0);

    //Total with VAT
    const priceWithVat = parseFloat(totalPrice * (1 + taxes / 100)).toFixed(2);

    return (
        <p className='total-price'>Total: <span>{parseFloat(totalPrice).toFixed(2)} €</span> - with VAT
        <span> {priceWithVat} €</span></p>
    )

}

export default TotalCalculation;