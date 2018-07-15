import axios from 'axios';

export function getArticles() {
    return axios.get('http://blogit-demo.westus2.cloudapp.azure.com:7777/getAll');
}
