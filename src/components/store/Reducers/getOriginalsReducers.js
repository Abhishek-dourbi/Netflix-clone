import { GET_ORIGINALS } from '../Actions/Types';

export default (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case GET_ORIGINALS:
            return action.payload;
        default:
            return state;
    }
}