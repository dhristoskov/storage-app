import React from 'react'

//Info Warning message
const InfoMessage = (props) => {
    return(
        <div className='delete-container'>
            <h3>Information Message</h3>
            <p>{props.msg}</p>
            <div className='delete-btns'>
                <p className='cancel' onClick={props.cancel}>ok</p>
            </div>
        </div>
    )
}

export default InfoMessage;