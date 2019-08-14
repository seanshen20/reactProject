import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    headers: {
        common: {'Authorization': 'AUTH TOKEN FROM INSTANCE'}
    }

});

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;