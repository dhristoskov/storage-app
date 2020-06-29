import React from 'react';

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
        <p>List</p>
    )
}

export default SavedProductsList;