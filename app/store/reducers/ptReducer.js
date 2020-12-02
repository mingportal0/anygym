const initialState = {
    trainers: [
        {id: 1, name: '홍길동', awards: '수상경력1', intro: '수업소개1'},
        {id: 2, name: '고길동', awards: '수상경력2', intro: '수업소개2'},
        {id: 3, name: '이유하', awards: '수상경력3', intro: '수업소개3'}
    ]
}

export default (state = initialState, action) => {
    return state;
}