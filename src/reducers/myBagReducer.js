import initialState from './initialState';

/**
 * Takes an empty array as initial state, spreads
 * and adds a new dishe to the Bag array, or removes the object with the specified ID
 */
export default function myBag(state = initialState.myBag, action) {
    switch (action.type) {
        case 'ADD':            
            return [...state, action.item];
        case 'REMOVE':            
            return state.filter( i => i.id !== action.item.id);       
        default:
            return state;
    }
};