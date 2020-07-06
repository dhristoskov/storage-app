import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StorageContext } from '../../contexts/StorageContext/storageContext';

const LowerHeader = (props) => {

    const history = useHistory();
    const { storages } = useContext(StorageContext);
    const [ toggleStorages, setToggleStorages ] = useState(false);

    const moveToStorage = (name) => {
        history.push(`/storage/storage-list/${name.toLowerCase()}`);
    };

    //Drop-down storage list
    const toggleStoragesView = () => {
        if(storages.length){
            setToggleStorages(prevState => !prevState);
        }
    }

    return (
        //Lower Header Component to switch fast storages 
        //and for more user information
        <div className='lower-header'>
            <p className='welcome'>Hello, <span>( Guest )</span></p>
            <p className='storage-btn' onClick={toggleStoragesView}>Storages</p>
            {
                toggleStorages 
                && <div className='storage-options'>
                        {
                            storages.map( button => {
                                return (
                                    <p onClick={() => moveToStorage(button.name)} 
                                    key={button.id}>{(button.name).replace(/^./, str => str.toUpperCase())}</p>
                                )
                            })
                        }
                   </div>
            }
        </div>
    )
}

export default LowerHeader;