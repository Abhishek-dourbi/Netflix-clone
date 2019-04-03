import { GET_TOPRATED } from '../Actions/Types';

export default (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case GET_TOPRATED:
            return action.payload;
        default:
            return state;
    }
}