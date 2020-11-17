
const mockSuccess = (value) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 1000);
    });
};

const mockFailure = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(value), 1000);
    });
};

export const login = (userid, pw, shouldSucceed = true) => {
    //console.log(userid, pw);
    //console.log(getUsers().users);
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

export const getAuthenticationToken = () => 'successful_fake_token';


//유저 데이터 가져오기 (현재 테스트 데이터)
export const getUsers = () => {

    return {
        users: [
            {
                userid      : 'test1',
                pw          : 'test1',
                username    : '유저1',
                birthday    : '1991-11-29',
                sex         : '남',
                tel         : '010-1234-1234',
                photo       : '',
                height      : 180,
                weight      : 70,
                istrainer   : false,
                isable      : true,
                authlevel   : 3,
                creator     : 'test2',
                modifier    : 'test2',
                modifiydate : '2020-11-12',
                isdelete    : false
            },
            {
                userid      : 'test2',
                pw          : 'test2',
                username    : '트레이너2',
                birthday    : '1998-12-01',
                sex         : '여',
                tel         : '010-4321-4352',
                photo       : '',
                height      : 185,
                weight      : 80,
                istrainer   : true,
                isable      : true,
                authlevel   : 2,
                creator     : 'test3',
                modifier    : 'test3',
                modifiydate : '2020-11-12',
                isdelete    : false
            },
            {
                userid      : 'test3',
                pw          : 'test3',
                username    : '관리자3',
                birthday    : '1988-01-01',
                sex         : '남',
                tel         : '010-1321-6354',
                photo       : '',
                height      : 178,
                weight      : 63,
                istrainer   : false,
                isable      : true,
                authlevel   : 1,
                creator     : 'test3',
                modifier    : 'test3',
                modifiydate : '2020-11-12',
                isdelete    : false
            }
        ]
    };
};