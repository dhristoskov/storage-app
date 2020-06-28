import React from 'react';

const StorageCounter = (props) => {
    return (
        //Return list of storage available to choose from 
        <p className='counter' style={{textAlign: 'center'}}>list contains - {props.storages.length} {props.storages.length !== 1 
            ? 'storages' 
            : 'storage'}
        </p>  
    )
}

export default StorageCounter