import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';

const LowerHeader = (props) => {

    const history = useHistory();
    const [ buttonList, setButtonList ] = useState([]);

    useEffect(() => {
        axios.get('/storage')
             .then(res => {
                setButtonList(res.data.storages)
             }).catch(err => {
                 console.log(err)
             });
    }, []);

    const moveToStorage = (storageID) => {
        history.push(`/storage/storage-list/${storageID}`);
    };

    return (
        //Lower Header Component to switch fast storages 
        //and for more user information
        <div className='lower-header'>
            <p className='welcome'>Hello, <span>( Guest )</span></p>
            <p className='storage-btn' onClick={props.toggleStoragesView}>Storages</p>
            {
                props.toggleStorages 
                && <div className='storage-options'>
                        {
                            buttonList.map( button => {
                                return (
                                    <p onClick={() => moveToStorage(button.id)} 
                                    key={button.id}>{button.name}</p>
                                )
                            })
                        }
                   </div>
            }
        </div>
    )
}

export default LowerHeader;