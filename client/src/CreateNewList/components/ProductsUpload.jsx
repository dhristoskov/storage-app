import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const ProductsUpload = () => {

    const [file, setFile] = useState();
    const [ showForm, setShowForm ] = useState(false);
    //const [previewText, setPreviewText] = useState();

    // useEffect(() => {
    //     if (!file) {
    //       return;
    //     }
    //     const fileReader = new FileReader();
    //     fileReader.onload = () => {
    //         setPreviewText(fileReader.result);
    //     };
    //     fileReader.readAsText(file);
    // }, [file]);

    const uploadFile = (e) => {
        let newFile;
        if (e.target.files && e.target.files.length === 1) {
            newFile = e.target.files[0];
            setFile(newFile)  
        }                
    }

    const submitFile = (e) => {
        e.preventDefault();
        console.log(file);

        if (file) {
          let data = new FormData();
          data.append('file', file);
        }
    };

    const onFormHandler = () => {
        setShowForm(prevState => !prevState);
    };

    return (
        <div className='upload-file'>
            {
                showForm 
                ? <p className='toggle-upload' onClick={onFormHandler}><AiOutlineMinusCircle /></p> 
                : <p className='toggle-upload' onClick={onFormHandler}><AiOutlinePlusCircle /></p>
            } 
            {
                showForm
                ?   <form className='upload-form' onSubmit={submitFile}>
                        <input className='upload-input' type='file' 
                        accept='text/plain, .csv, .pdf' onChange={uploadFile} required/>
                        <input type='submit' value='upload' />
                    </form>
                :   <p>Upload File</p>
            }
        </div>
    )
}

export default ProductsUpload;