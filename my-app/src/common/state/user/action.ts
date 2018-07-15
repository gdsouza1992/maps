import axios from 'axios';

export function signup(email, username, password) {
    debugger;
    return axios.post('http://10.0.0.225:7777/signup', {
        email,
        password,
        username
    });
}
