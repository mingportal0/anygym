import { combineReducers } from 'redux';
import ptReducer from './ptReducer';

export default combineReducers({
    pt: ptReducer
})