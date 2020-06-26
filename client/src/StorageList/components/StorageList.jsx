import React from 'react';

const StorageList = (props) => {

    if(!props.storages.length) {
        return (
            <div>List is empty!</div>
        )
    }

    return (
        <div>
            {
                props.storages.map( item => {
                    return (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <button onClick={() => props.deleteStorage(item.id)}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StorageList