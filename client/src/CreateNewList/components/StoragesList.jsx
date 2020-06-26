import React from 'react';

const SHOPS = [ 
    { id: '001', name: 'Storage First'},
    { id: '002', name: 'Storage Second'},
    { id: '003', name: 'Storage Third'},
];

const StoragesList = (props) => {

    return (
        <select name={props.name} value={props.value} onChange={props.onChangeHandler} required>
            {
                SHOPS.map( shop => {
                    return (
                        <option value={shop.name} key={shop.id}>{shop.name}</option>
                    )
                })
            }           
        </select>
    )

}

export default StoragesList;