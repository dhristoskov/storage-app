import React from 'react';
import { AiOutlineDelete, 
    AiOutlineEdit, 
    AiOutlineOrderedList } from 'react-icons/ai'

import shop from '../../assets/shop.svg'

const StorageList = (props) => {

    if(!props.storages.length) {
        return (
            <div>List is empty!</div>
        )
    }

    return (
        <div className='storage-wrapper'>
            {
                props.storages.map( item => {
                    return (
                        <div className='storage-item' key={item.id}>
                            <p>{item.name}</p>
                            <img src={shop} alt='shop' />
                            <div className='stgs-btn'>
                                <button onClick={() => props.deleteStorage(item.id)}>
                                    <AiOutlineDelete /></button>
                                <button onClick={() => props.moveToStoragePage(item.name)}>
                                    <AiOutlineEdit /></button>
                                <button onClick={() => props.moveToCreateList(item.name)}>< AiOutlineOrderedList /></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StorageList