import { browserHistory } from 'react-router';
import axios from 'axios';
import {
    CHANGE_AUTH,
    AUTH_USER,
    AUTH_ERROR,
    UN_AUTH_USER,
    FETCH_MESSAGE
} from './types';

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}

const ROOT_URL = 'http://localhost:3000';

export function signInUser({ email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {

                dispatch({ type: AUTH_USER });

                localStorage.setItem('token', response.data.token);

                browserHistory.push('/resources');
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signUpUser({ email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/resources');
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function signOutUser() {
    localStorage.removeItem('token');
    return { type: UN_AUTH_USER };
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token')}
        })
            .then(response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                })
            });
    }
}

// export function fetchMessage() {
//     const request = axios.get(ROOT_URL, {
//         headers: { authorization: localStorage.getItem('token')}
//     });
//
//     return {
//         type: FETCH_MESSAGE,
//         payload: request
//     };
// }

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}