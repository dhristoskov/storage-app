import React, { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import SavedProductItem from './SavedProductItem';

const SingleListItem = () => {

    const { id } = useParams();
    const [ singleItem, setSingleItem ] = useState([]);

    useEffect(() => {
        axios.get(`/archive/single-item/${id}`)
             .then(res => {
                 setSingleItem(res.data.archive)
             }).catch(err => {
                console.log(err)
             })
    }, [id]);

    let expDate = new Date(singleItem.expDate).toLocaleDateString('en-GB');

    return (
        <div>
            <p>Date: {expDate}</p>
            <p>Price: {parseFloat(singleItem.totalListPrice).toFixed(2)} €</p>
            <p>Price: {parseFloat(singleItem.totalListVat).toFixed(2)} €/vat</p>
            <div>
                <p><AiOutlineDelete /></p>
                <p><AiOutlineEdit /></p>                       
            </div>
            {
                singleItem.products &&
                singleItem.products.map(product => {
                    return (
                        <SavedProductItem key={product.id}
                            name={product.name}
                            price={product.price}
                            priceVat={product.priceVat}
                            totalPrice={product.totalPrice}
                            totalVat={product.totalVat}
                            qty={product.qty}
                            type={product.type}
                            storage={product.storage}
                            isDone={product.isDone}/>
                    )
                })
            }
        </div>
    )

}

export default SingleListItem