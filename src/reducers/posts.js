import { SAVE_POST, LOAD_POSTS, LOAD_POST_BY_ID } from '../actions/types';

const initialState = {
    posts: [],
    total: 0,
    loading: false
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SAVE_POST:
            return { ...state, ...payload };
        case LOAD_POSTS:
            return { ...state, ...payload };
        case LOAD_POST_BY_ID:
            return { ...state, posts: [{ ...payload }] };
    }

    return state;
}