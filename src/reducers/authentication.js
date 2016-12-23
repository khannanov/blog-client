import { AUTH_USER, UN_AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from '../actions/types';

export default function(state = false, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UN_AUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: payload };
        case FETCH_MESSAGE:
            return { ...state, message: payload}
    }

    return state;
}