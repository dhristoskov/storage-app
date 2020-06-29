import React, { useState } from 'react';

const ProductsUpload = () => {

    const [file, setFile] = useState();

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
    }

    return (
        <div className='upload-file'>
            <form className='upload-form' onSubmit={submitFile}>
                <input type='file' accept='text/plain, .csv, .pdf' onChange={uploadFile} required/>
                <input type='submit' value='upload' />
            </form>
        </div>
    )
}

export default ProductsUpload;