import axios from 'axios';

export async function getArticles() {
    const res = await axios('http://blogit-demo.westus2.cloudapp.azure.com:7777/getAll');
    return await res.data;
}