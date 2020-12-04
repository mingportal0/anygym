import { FETCH_TRAINER_INFO } from "../actions/ptActions";

const initialState = {
    trainer_info: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRAINER_INFO:
            return {
                ...state,
                trainer_info: action.payload
            }
        default:
            return state
    }
}