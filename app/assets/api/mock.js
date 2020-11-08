import { getToken } from './token';


const mockSuccess = (value) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 2000);
    });
};

const mockFailure = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(value), 2000);
    });
};

export const login = (userid, pw, shouldSucceed = true) => {
    console.log(userid, pw);
    let isAuth = false;
    let notUserid = false;
    let notPw = false;
    let loginUser = {};
    getUsers().users.forEach(user => {
        if(user.userid === userid){
            if(user.pw != pw){
                //비번이 올바르지 않습니다.
                notPw = true;
            }else{
                isAuth = true;
                loginUser = user;
            }
        }else{
            //아이디가 존재하지 않습니다.
            notUserid = true;
        }
    })

    if (!shouldSucceed) {
        return mockFailure({ error: 500, message: 'Something went wrong!' });
    }

    if(isAuth){
        return mockSuccess({ auth_token: 'successful_fake_token', loginUser: loginUser });
    }
    if(notPw){
        return mockFailure({ error: 500, message: '비번이 올바르지 않습니다.' });
    }
    if(notUserid){
        return mockFailure({ error: 500, message: '아이디가 존재하지 않습니다.' });
    }

    return mockFailure({ error: 500, message: 'Something went wrong!' });
};

export const createAccount = (userid, pw, shouldSucceed = true) => {
    console.log(userid, pw);

    if (!shouldSucceed) {
        return mockFailure({ error: 500, message: 'Something went wrong!' });
    }

    return mockSuccess({ auth_token: 'successful_fake_token' });
};

const getAuthenticationToken = () => 'successful_fake_token';

export const getUsers = () => {

    return {
        users: [
            {
            userid: 'test',
            pw: 'test',
            name: '테스트'
            },
            {
            userid: 'test2',
            pw: 'test2',
            name: '테스트2'
            },
        ]
    };
};