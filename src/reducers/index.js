import { combineReducers } from 'redux';
import myBag from './myBagReducer';
import dishes from './dishesReducer';

const rootReducer = combineReducers({
    myBag,
    dishes
});

export default rootReducer;