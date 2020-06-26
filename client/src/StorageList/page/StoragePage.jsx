import React from 'react';

import StorageForm from '../components/StorageForm';
import StorageList from '../components/StorageList';

const StoragePage = () => {

    return (
        <div>
            <StorageForm />
            <StorageList />
        </div>
    )
}

export default StoragePage;