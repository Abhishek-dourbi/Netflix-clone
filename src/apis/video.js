import axios from 'axios';

const KEY = 'fc0f000bb81f54be4d69948eee19e754';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: KEY
    }
});