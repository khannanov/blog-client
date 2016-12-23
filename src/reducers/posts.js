import { SAVE_POST, LOAD_POSTS } from '../actions/types';

export default function (posts = [], action) {
    const { type, payload } = action;
    switch(type) {
        case SAVE_POST:
            return [ ...posts, payload ];
        case LOAD_POSTS:
            return payload; //todo mutability check!

    }

    return posts;
}