//액션 타입 정의
const ADD_USER = 'userReducer/ADD_USER';

//액션 생성함수 정의
export const addUser = (user) => ({ 
    type: ADD_USER,
    user: user,
});

//관리할 상태 정의
const initialState = [];


//리듀서 만들기
export default function userReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            return state.concat(action.user);
        default:
            return state;
    }
}