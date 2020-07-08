import React, { useState, useEffect, Fragment } from 'react';
import axios from '../../axios';
import { useParams } from 'react-router-dom';

import SavedProductsList from '../components/SavedProductsList';
import Loader from '../../shared-components/components/Loader/Loader';
//import ProductStat from '../../shared-components/ProductStat/ProductStat';

const StorageListsPage = () => {
  
    const [ isLoading, setIsLoading ] = useState(false);
    const [ savedLists, setSavedLists ] = useState([])
    const { storageName } = useParams();
    
    //Fix first letter in the storage Name
    const fixedName = storageName.replace(/^./, str => str.toUpperCase());

    useEffect(() => {
        setIsLoading(true);
        axios.get(`/archive/${storageName}`)
             .then(res => {
                setIsLoading(false);
                setSavedLists(res.data.lists)
             }).catch(err => {
                setIsLoading(false);
                console.log(err)
             })
    }, [storageName])

    return (
        <div className='main-wrapper'>
            {
                isLoading 
                ? <Loader />
                :
                <Fragment>
                    <p className='storage-name'>You are in <span>{fixedName}</span> storage.</p>
                    <SavedProductsList savedLists={savedLists}
                                    fixedName={fixedName}/>
                </Fragment>
            }
            {/* <ProductStat /> */}
        </div>
    )
}

export default StorageListsPage;