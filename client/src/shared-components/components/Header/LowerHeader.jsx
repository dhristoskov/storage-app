import React, { useContext, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { StorageContext } from '../../contexts/StorageContext/StorageContext';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const LowerHeader = (props) => {

    const history = useHistory();
    const { storages } = useContext(StorageContext);
    const { isLoggedIn, name } = useContext(AuthContext);
    const [ toggleStorages, setToggleStorages ] = useState(false);

    const moveToStorage = (id) => {
        history.push(`/storage/storage-list/${id}`);
    };

    //Drop-down storage list menu
    const toggleStoragesView = () => {
        if(storages.length){
            setToggleStorages(prevState => !prevState);
        }
    }

    return (
        //Lower Header Component to switch between storages 
        //and for more user information
        <div className='lower-header'>
            {
                isLoggedIn &&
                <Fragment>
                    <p className='welcome'>Welcome, <span>{name}</span></p>
                    <p className='storage-btn' onClick={toggleStoragesView}>Storages</p>
                    {
                        toggleStorages 
                        && <div className='storage-options'>
                                {
                                    storages.map( button => {
                                        return (
                                            <p onClick={() => moveToStorage(button.id)} 
                                            key={button.id}>{(button.name).replace(/^./, str => str.toUpperCase())}</p>
                                        )
                                    })
                                }
                        </div>
                    }
                </Fragment>
            }
        </div>
    )
}

export default LowerHeader;