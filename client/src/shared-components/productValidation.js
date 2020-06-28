export const  productValidation = (name, value) => {

    let errors = {
        name: '',
        price: '',
        qty: ''
    };

    switch(name){
        case 'name':
            errors.name = value.length < 2
                ? 'Product name must be at least 2 characters long!'
                : '';
                break; 
        case 'price':
            errors.price = value < 0
                ? 'Product must have a positive number price!'
                : '';
                break;   
        case 'qty':
            errors.qty = value < 0
                ? 'Product must have a positive number quantity!'
                : '';
                break;      
        default:
            throw new Error('Something went wrong!');
    };
    return errors
};