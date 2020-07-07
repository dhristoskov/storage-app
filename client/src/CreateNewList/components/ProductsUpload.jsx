import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import axios from '../../axios';

import { StorageContext } from '../../shared-components/contexts/StorageContext/storageContext';

const ProductsUpload = (props) => {

    const [file, setFile] = useState();
    const [ showForm, setShowForm ] = useState(false);
    const [ previewText, setPreviewText ] = useState();
    const { storages, dispatch } = useContext(StorageContext);

    useEffect(() => {
        if (!file) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewText(fileReader.result);
        };
        fileReader.readAsText(file);
    }, [file]);

    const uploadFile = (e) => {
        let newFile;
        if (e.target.files && e.target.files.length === 1) {
            newFile = e.target.files[0];
            setFile(newFile)  
        }                
    }

    const submitFile = (e) => {
        e.preventDefault();

        if (file) {
          let data = new FormData();
          data.append('file', file);
        }
        addUploaded();
    };

    const onFormHandler = () => {
        setShowForm(prevState => !prevState);
    };

    const addUploaded = () => {
        let storageNames = storages.map(e => e.name);
        if(file){
            const array = previewText.toString().split("\n").map(item => item.trim());
            for(let i = 0; i < array.length; i++) {
                const line = array[i].split(',').map(e => e.trim());
                const [ name, price, qty, type, storage ] = line;

                //Add new Storage if not exist
                if(!storageNames.includes(storage.toLowerCase())){
                        const data = {
                            name: storage
                        }
                        axios.post('/storages', data,
                             { 'Content-Type': 'application/json' })
                             .then(res => {
                              dispatch({ type:'ADD', 
                              storage: {id: res.data.storage._id, ...res.data.storage}})
                            }).catch(err => {
                                console.log(err)
                            });
                }
  
                const product = {
                    name,
                    price,
                    qty,
                    type,
                    storage,
                    isDone: false
                };    
                props.addNewProduct(product);
            }
        }
    }

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