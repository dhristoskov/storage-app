import React from 'react';

const StorageList = (props) => {

    if(!props.storagesList) {
        return (
            <div>List is empty!</div>
        )
    }

    return (
        <div>
            {
                props.storagesList.map( item => {
                    return (
                        <p key={item.id}>{item.name}</p>
                    )
                })
            }
        </div>
    )
}

export default StorageList