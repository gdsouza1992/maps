import {ApiQuery, makeError, post} from "../../utils/api";

export function SignUp(username, email, password) {
    const query: Partial<ApiQuery> = {
        baseResource: 'signup'
    }
    post(query, { username, email, password })
    .then(data => {
        return data
    })
    .catch(err => {
        return makeError(err);
    });
}

export function SignIn(username, password) {
    const query: Partial<ApiQuery> = {
        baseResource: 'signin'
    }
    post(query, { username, password })
    .then(data1 => {
        console.log(data1);
        return data1;
    })
    .catch(err => {
        return makeError(err);
    });
}
