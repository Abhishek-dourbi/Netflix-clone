import video from '../.././../apis/video';
import { GET_ORIGINALS, GET_TRENDING, GET_TOPRATED } from './Types';

export const getOriginals = () => async dispatch => {
    const response = await video('/discover/tv', {
        params: {
            with_networks: '213'
        }
    })
    dispatch({
        type: GET_ORIGINALS,
        payload: response.data.results
    })
}

export const getTrending = () => async dispatch => {
    const response = await video('/trending/all/day', {
        params: {
            
        }
    })
    dispatch({
        type: GET_TRENDING,
        payload: response.data.results
    })
}

export const getTopRated = () => async dispatch => {
    const response = await video('/movie/top_rated', {
        params: {
            
        }
    })
    dispatch({
        type: GET_TOPRATED,
        payload: response.data.results
    })
}
