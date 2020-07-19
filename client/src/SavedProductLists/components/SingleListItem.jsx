import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

import SavedProductItem from './SavedProductItem';
import StorageTableHeader from './StorageTableHeader';
import Loader from '../../shared-components/components/Loader/Loader';

const SingleListItem = () => {

    const { id } = useParams();
    const [ singleItem, setSingleItem ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    //Get single list item by id
    useEffect(() => {
        setIsLoading(true);
        axios.get(`/archive/single-item/${id}`)
             .then(res => {
                setIsLoading(false);
                setSingleItem(res.data.archive)
             }).catch(err => {
                setIsLoading(false);
                console.log(err)
             })
    }, [id]);

    let expDate = new Date(singleItem.expDate).toLocaleDateString('en-GB');

    return (
        <Fragment>
            {
                isLoading ? <Loader />             
                : <Fragment>
                    <div className='storage-list-item'>
                        <p className='data'>Date: {expDate}</p>
                        <p className='price'>Price: {parseFloat(singleItem.totalListPrice).toFixed(2)} €</p>
                        <p className='vatPrice'>Price: {parseFloat(singleItem.totalListVat).toFixed(2)} €/vat</p>
                    </div>
                    <div className='list-wrapper'>
                        <StorageTableHeader />
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
                </Fragment>
            }
        </Fragment>
    )

}

export default SingleListItem