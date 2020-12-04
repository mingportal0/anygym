import axios from 'axios';

export const FETCH_TRAINER_INFO = 'FETCH_TRAINER_INFO';
export const fetchTrainerInfo = () => dispatch => {
    axios.get('http://localhost:3355/trainer_info').then((result) => dispatch({
        type: FETCH_TRAINER_INFO,
        payload: result.data
    }))
}