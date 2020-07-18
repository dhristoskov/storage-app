import React, { createContext, useReducer } from 'react';

import productsReducer from './productsReducer';

export const ProductsContext = createContext();

const ProductsContextProcider = (props) => {

    const [ products, dispatch ] = useReducer(productsReducer, []);

    return(
        <ProductsContext.Provider value={{ products, dispatch }}>
            {props.children}
        </ProductsContext.Provider>
    )
};

export default ProductsContextProcider;