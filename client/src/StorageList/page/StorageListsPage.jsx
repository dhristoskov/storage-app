import React from 'react';
import { useParams } from 'react-router-dom';

const StorageListsPage = () => {
    
    const { name } = useParams();

    return (
        <p>{name}</p>
    )
}

export default StorageListsPage;