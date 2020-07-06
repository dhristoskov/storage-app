export default ( state, action ) => {
    switch(action.type){
        case 'GET':
            return action.storages;
        case 'ADD':
            return [...state, action.storage ]
        case 'DELETE':
            return state.filter(storage => storage.id !== action.id);
        default:
            return state;
    }
};