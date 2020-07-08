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
                        storage={props.fixedName}
                        addDate={list.addDate}
                        totalListPrice={list.totalListPrice}
                        totalListVat={list.totalListVat}
                        expDate={list.expDate}
                        products={list.products}
                        showDeleteWarning={() => props.showDeleteWarning(list.id)}/>
                    )
                })
            }
        </div>
    )
}

export default SavedProductsList;