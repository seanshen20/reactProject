import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-9cfda.firebaseio.com/'
});

export default instance;