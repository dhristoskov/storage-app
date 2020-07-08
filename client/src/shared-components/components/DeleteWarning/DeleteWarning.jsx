import React from 'react'

//Warning to prevent deleting importand data
const DeleteWarning = (props) => {
    return(
        <div className='delete-container'>
            <h3>Are you sure?</h3>
            <p>{props.msg}</p>
            <div className='delete-btns'>
                <p className='cancel' onClick={props.cancel}>Cancel</p>
                <p className='delete' onClick={props.delete}>Delete</p>
            </div>
        </div>
    )
}

export default DeleteWarning;