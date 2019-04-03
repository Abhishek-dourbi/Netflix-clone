import {combineReducers} from 'redux';
import getOrginalsReducers from './getOriginalsReducers';
import getTrendingReducers from './getTrendingReducers';
import getTopRatedReducers from './getTopRatedReducers';

export default combineReducers({
    originals: getOrginalsReducers,
    trending: getTrendingReducers,
    top: getTopRatedReducers
})