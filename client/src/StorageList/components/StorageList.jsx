import React from 'react';
import { AiOutlineDelete, 
    AiOutlineEdit, 
    AiOutlineOrderedList } from 'react-icons/ai'

import shop from '../../assets/shop.svg'

const StorageList = (props) => {

      //Check if storages list is empty array and show message
      if(!props.storages.length) {
        return(
            <div className='empty-list'>
                <p>Your storages list is empty </p>
                <p className='line'/>
            </div>  
        )   
    };

    return (
        <div className='storage-wrapper'>
            {
                props.storages.map( item => {
                    return (
                        <div className='storage-item' key={item.id}>
                            <p>{(item.name).replace(/^./, str => str.toUpperCase())}</p>
                            <img src={shop} alt='shop' />
                            <div className='stgs-btn'>
                                <button onClick={() => props.showDeleteWarning(item.id)}>
                                    <AiOutlineDelete /></button>
                                <button onClick={() => props.moveToCreateList(item.id)}>
                                    <AiOutlineEdit /></button>
                                <button onClick={() => props.moveToStoragePage(item.id)}>
                                    < AiOutlineOrderedList /></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StorageList