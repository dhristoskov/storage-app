import React, { useState, useEffect, Fragment } from 'react';
import axios from '../../axios';
import { useParams, useHistory } from 'react-router-dom';

import SavedProductsList from '../components/SavedProductsList';
import Loader from '../../shared-components/components/Loader/Loader';
import Modal from '../../shared-components/components/Modal/Modal';
import DeleteWarning from '../../shared-components/components/DeleteWarning/DeleteWarning';

const StorageListsPage = () => {
  
    const { id } = useParams();
    const history = useHistory();
    const [showWarning, setShowWarning ] = useState(false);
    const [ itemToDelete, setItemToDelete ] = useState(null); 
    const [ isLoading, setIsLoading ] = useState(false);
    const [ savedLists, setSavedLists ] = useState([]);
    const [ storageName, setStorageName ] = useState('');
    
    //Fix first letter in the storage Name
    const fixedName = storageName.replace(/^./, str => str.toUpperCase());

    //Get storage name prop
    useEffect(() => {
        axios.get(`/storages/${id}`)
             .then(res => {
                setStorageName(res.data.storage.name)
             }).catch(err => {
                 console.log(err)
             })
    }, [id]);

    //Get archives by id
    useEffect(() => {
        setIsLoading(true);
        axios.get(`/archive/${id}`)
             .then(res => {
                setIsLoading(false);
                setSavedLists(res.data.lists)
             }).catch(err => {
                setIsLoading(false);
                console.log(err)
             })
    }, [id]);

    //Delete a list in the storage
    const deleteStorageList = async () => {
        await axios.delete(`/archive/${itemToDelete}`)
                   .then(res => {
                       setShowWarning(false);
                       const newList = savedLists.filter(list => list.id !== itemToDelete);
                       setSavedLists(newList);
                   }).catch(err => {
                    console.log(err)
                   });
    };

    const showDeleteWarning = (storageId) => {
        setShowWarning(true);
        setItemToDelete(storageId);
    };

    const hideDeleteWarning = () => {
        setShowWarning(false);
        setItemToDelete(null)
    };

    //Move to Single List Item Page
    const singleItemHandler = (id) => {
        history.push(`/storage/storage-item/${id}`)
    }

    return (
        <Fragment>
             {
                showWarning &&   
                <Modal removeModal={hideDeleteWarning}>
                    <DeleteWarning msg={'Do you want to proceed and delete this list? Please note that it cant be undone thereafter.And you will lose all data'}
                    delete={deleteStorageList}
                    cancel={hideDeleteWarning}/>
                </Modal>
            }
            <div className='main-wrapper'>
                {
                    isLoading 
                    ? <Loader />
                    :
                    <Fragment>
                        <p className='storage-name'>You are in <span>{fixedName}</span> storage.</p>
                        <SavedProductsList savedLists={savedLists}
                                showDeleteWarning={showDeleteWarning}
                                fixedName={fixedName}
                                singleItemHandler={singleItemHandler}/>
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}

export default StorageListsPage;