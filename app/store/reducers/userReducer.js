//관리할 상태 정의
const initialState = {
    user : {
        userid      : 'default',
        pw          : 'default',
        username    : 'default',
        birthday    : '1111-11-11',
        sex         : '남',
        tel         : '010-1234-1234',
        photo       : '',
        height      : 1,
        weight      : 1,
        istrainer   : false,
        isable      : true,
        authlevel   : 1,
        creator     : 'default',
        modifier    : 'default',
        modifiydate : new Date(),
        isdelete    : false,
    },
    users : [],
};

//액션 타입 정의
const ADD_USER = 'userReducer/ADD_USER';
const GET_USERS = 'userReducer/GET_USERS';

//액션 생성함수 정의
export const addUser = ({user}) => ({ 
    type: ADD_USER,
    user: {
        userid      : user.userid     ,
        pw          : user.pw         ,
        username    : user.username   ,
        birthday    : user.birthday   ,
        sex         : user.sex        ,
        tel         : user.tel        ,
        photo       : user.photo      ,
        height      : user.height     ,
        weight      : user.weight     ,
        istrainer   : user.istrainer  ,
        authlevel   : user.authlevel  ,
        creator     : user.creator    ,
        modifier    : user.modifier   ,
    }
});
export const getUsers = () => ({ 
    type: GET_USERS,
});


//리듀서 만들기
export default function userReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            return { ...state.user, ...action.user };
        case GET_USERS:
            return state.users;
        default:
            return state;
    }
}