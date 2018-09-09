import { combineReducers } from 'redux';
import products from './products';
import editItem from './editItem';
const appReducers = combineReducers({
    products,
    editItem
});
export default appReducers;