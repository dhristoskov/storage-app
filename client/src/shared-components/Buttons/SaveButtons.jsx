import React from 'react';
import { AiOutlineFilePdf, AiOutlineFileText, AiOutlineMail } from 'react-icons/ai';

const SaveButtons = (props) => {

    return (
        <div className='save-btn'>
            <p className='save-list'><span>save as </span><AiOutlineFileText /></p> 
            <p className='save-list'><span>save as </span><AiOutlineFilePdf /></p>
            <p className='save-list'><span>send as </span><AiOutlineMail /></p> 
        </div>
    )

}

export default SaveButtons;