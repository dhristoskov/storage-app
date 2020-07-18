export default ( state, action ) => {
    switch(action.type){
        case 'GET':
            return action.products;
        case 'ADD':
            return [ action.product, ...state ]
        case 'DELETE':
            return state.filter(product => product.id !== action.id);
        case 'CLEAR':
            return action.currentPart = [];
        case 'UPDATE_PRODUCT':
            return state.map(product => {
                if(product.id === action.id){ 
                return {
                    ...product,
                    ...action.update
                }               
            }
            return product
        });
        case 'DONE':
            return state.map(product => product.id === action.id ? { ...product, isDone: true}: product);
        case 'UNDONE':
            return state.map(product => product.id === action.id ? { ...product, isDone: false}: product);           
        case 'DESC':
            return state.slice().sort((a, b) => b.name.localeCompare(a.name));
        case 'ASC':
            return state.slice().sort((a, b) => a.name.localeCompare(b.name));
        case 'HIGH_FIRST':
            return state.slice().sort((a, b) => b.price - a.price);
        case 'LOW_FIRST':
            return state.slice().sort((a, b) => a.price - b.price);
        default:
            return state;
    }
};
