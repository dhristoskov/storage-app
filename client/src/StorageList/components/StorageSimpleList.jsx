import React from 'react';
import { AiOutlineDelete, 
    AiOutlineEdit, 
    AiOutlineOrderedList } from 'react-icons/ai'

const StorageSimpleList = (props) => {

    
    //If storages list is empty array
    if(!props.storages.length) {
        return(
            <div className='empty-list'>
                <p>Your storages list is empty </p>
                <p className='line'/>
            </div>  
        )   
    }

    return (
        <div className='simple-wrapper'>
            {
                props.storages.map( item => {
                    return (
                        <div className='simple-item' key={item.id}>
                            <p>{(item.name).replace(/^./, str => str.toUpperCase())}</p>
                            <div className='simple-btn'>
                                <button onClick={() => props.showDeleteWarning(item.id)}>
                                    <AiOutlineDelete /></button>
                                <button onClick={() => props.moveToCreateList(item.id)}>
                                    <AiOutlineEdit /></button>
                                <button onClick={() => props.moveToStoragePage(item.ide)}>
                                    <AiOutlineOrderedList /></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StorageSimpleList