import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineDown } from 'react-icons/ai';

import SavedProductItem from './SavedProductItem';
import StorageTableHeader from './StorageTableHeader';

const SavedListItem = (props) => {

    const [ showDetails, setShowDetails ] = useState(false);  
    let expDate = new Date(props.expDate).toLocaleDateString('en-GB');

    const onDetailsHandler = () => {
        setShowDetails(prevState => !prevState);
    };

    return (
        <div>
            <div className='storage-list-item' style={showDetails ? {backgroundColor: '#D2DDBB'} : null}>
                <p className='storageName'>{props.storage}</p>
                <p className='data'>Date: {expDate}</p>
                <p className='price'>Price: {parseFloat(props.totalListPrice).toFixed(2)} €</p>
                <p className='vatPrice'>Price: {parseFloat(props.totalListVat).toFixed(2)} €/vat</p>
                <div className='detail-settings'>
                    <p onClick={props.showDeleteWarning}><AiOutlineDelete /></p>
                    <p onClick={onDetailsHandler}><AiOutlineDown /></p>                      
                </div>
            </div>
            {
                showDetails &&
                <div className='list-wrapper'>
                    <StorageTableHeader />
                    {
                        props.products.map(product => {
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