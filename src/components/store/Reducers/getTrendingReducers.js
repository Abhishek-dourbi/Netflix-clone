import { GET_TRENDING } from '../Actions/Types';

export default (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case GET_TRENDING:
            return action.payload;
        default:
            return state;
    }
}