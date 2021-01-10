import {ADD_USER} from "../actions/userAction";

//관리할 상태 정의
const initialState = [];


//리듀서 만들기
export default function userReducer(state = initialState, action){
    console.log("userReducer", action);
    switch(action.type){
        case ADD_USER:
            return state.concat(action.user);
        default:
            return state;
    }
}