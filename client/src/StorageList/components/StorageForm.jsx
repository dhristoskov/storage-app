import React, { useState } from 'react';

const StorageForm = (props) => {

    const [ name, setName ] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const storage = {
            id: Date.now(), 
            name: name
        };

        props.addStorage(storage);
        setName('')
    }


    return (
        <div className='storage-form'>
            <p>Create Storage</p>
            <form onSubmit={onSubmitHandler}>
                <input type='text' name='name' placeholder='Name' value={name}
                onChange={e => setName(e.target.value)} required/>
                <input type='submit' value='Create' />
            </form>
        </div>
    )

}

export default StorageForm;