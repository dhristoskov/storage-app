import React from 'react';

import SavedListItem from './SavedListItem';

const SavedProductsList = (props) => {

     //If saved list is empty array
     if(!props.savedLists.length) {
        return(
            <div className='empty-list'>
                <p>Your product list is empty </p>
                <p className='line'/>
            </div>  
        )   
    }

    return (
        <div>
            {
                props.savedLists.map(list => {
                    return (
                        <SavedListItem key={list.id}
                        storage={list.storage}
                        data={list.data}
                        totalPrice={list.totalPrice}
                        totalVat={list.totalVat}
                        products={list.products}/>
                    )
                })
            }
        </div>
    )
}

export default SavedProductsList;