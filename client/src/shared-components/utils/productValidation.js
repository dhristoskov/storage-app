const ValidateEmail = RegExp(/^\S+@\S+\.\S+$/);

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
        case 'username':
            errors.username = value.length < 3
                ? 'Username must be at least 3 characters long!'
                : '';
                break; 
        case 'price':
            errors.price = value < 0
                ? 'Product must have a positive number as a price!'
                : '';
                break;   
        case 'qty':
            errors.qty = value < 0
                ? 'Product must have a positive number as a quantity!'
                : '';
                break;  
        case 'type':
            errors.type = value === null
                ? 'Product must have a type kg or pcs!'
                : '';
                break;   
        case 'email':
            errors.email = ValidateEmail.test(value)
                ? ''
                : 'Email is not valid!';
                break;   
        case 'password':
            errors.password = value.length < 6
                ? 'Password must be at least 6 characters long!'
                : '';   
                break;    
        case 'password2':
            errors.password2 = value.length < 6
                ? 'Password must be at least 6 characters long!'
                : '';   
                break;       
        default:
            throw new Error('Something went wrong!');
    };
    return errors
};