import React, { useState } from 'react';

const StorageForm = () => {

    const [ name, setName ] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const storage = {
            id: Date.now(), 
            name: name
        };

        console.log(storage);
        setName('')
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <input type='text' name='name' placeholder='Name' value={name}
            onChange={e => setName(e.target.value)} required/>
            <input type='submit' value='submit' />
        </form>
    )

}

export default StorageForm;