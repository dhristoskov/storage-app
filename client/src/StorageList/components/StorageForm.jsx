import React, { useState } from 'react';

const StorageForm = (props) => {

    const [ name, setName ] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.addStorage({name: name});
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