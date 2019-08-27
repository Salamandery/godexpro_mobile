import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.15.7/',
    baseURL: 'https://godexpro1.herokuapp.com/',
    timeout: 1000,
    headers: {
        'key': 'atomiccodes@godexpro'
    }
});

export default api;