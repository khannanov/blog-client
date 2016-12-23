import { SAVE_POST, LOAD_POSTS } from './types';
import { posts } from '../fixtures/posts';

export function savePost(post) {
    return {
        type: SAVE_POST,
        payload: post
    };
}

export function loadPosts() {
    return {
        type: LOAD_POSTS,
        payload: posts
    };
}