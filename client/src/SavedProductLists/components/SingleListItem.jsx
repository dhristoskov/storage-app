import React from 'react';
import { useParams } from 'react-router-dom';

const SingleListItem = () => {

    const { id } = useParams();

    return (
        <p>Single Item {id}</p>
    )

}

export default SingleListItem