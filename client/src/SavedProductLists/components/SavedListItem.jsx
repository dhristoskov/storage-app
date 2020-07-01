import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineDown } from 'react-icons/ai';

import SavedProductItem from './SavedProductItem';

const SavedListItem = (props) => {

    const [ showDetails, setShowDetails ] = useState(false);  

    const onDetailsHandler = () => {
        setShowDetails(prevState => !prevState);
    };

    return (
        <div>
            <div className='storage-list-item' style={showDetails ? {backgroundColor: '#D2DDBB'} : null}>
                <p className='storageName'>{props.storage}</p>
                <p className='data'>Date: {props.data}</p>
                <p className='price'>Price: {props.totalPrice} €</p>
                <p className='vatPrice'>Price: {props.totalVat} €/vat</p>
                <div className='detail-settings'>
                    <p><AiOutlineDelete /></p>
                    <p onClick={onDetailsHandler}><AiOutlineDown /></p>                      
                </div>
            </div>
            {
                showDetails &&
                <div className='list-wrapper'>
                {
                    props.products.map(product => {
                        return (
                            <SavedProductItem key={product.id}
                            name={product.name}
                            price={product.price}
                            priceWithVat={product.priceWithVat}
                            qty={product.qty}
                            type={product.type}
                            storage={product.storage}
                            isDone={product.isDone} />
                        )
                    })
                }
                </div>
            }
        </div>
    )

}

export default SavedListItem;