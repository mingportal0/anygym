import { combineReducers } from 'redux';
import ptReducer from './ptReducer';
import userReducer from './userReducer';

export default combineReducers({
    pt: ptReducer,
    user: userReducer
})