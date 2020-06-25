import React from 'react';

const ProductForm = () => {

    return(
        <div>
            <form>
                <input type="text" placeholder='Name' name='name'/>
                <input type="number" placeholder='Price' name='price'/>
                <input type="number" placeholder='Quantity' name='qty'/>
                <input type="text" placeholder='Storage' name='storage'/>
                <input type="submit" value='submit'/>
            </form>
        </div>
    )
}

export default ProductForm;

// id: '04',
// name: 'Oranges',
// price: 1.55,
// priceWithVat: 1.86,
// qty: 55,
// type: 'kg',
// storage: 'Storage Two'