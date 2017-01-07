import { browserHistory } from 'react-router';
import axios from 'axios';
import { SAVE_POST, LOAD_POSTS, LOAD_POST_BY_ID } from './types';

const ROOT_URL = 'http://localhost:3000';

export function savePost(post) {
    return dispatch => {
        axios.post(`${ROOT_URL}/post/save`, { post })
            .then(response => {
                dispatch({
                    type: SAVE_POST,
                    payload: response.data
                });

                browserHistory.push('/');
            })
            .catch(() => {
                // dispatch()
            })
    };
}

export function loadPosts(limit, offset = 0) {
    return dispatch => {

        axios.get(`${ROOT_URL}/posts`, {
            params: {
                limit: limit,
                offset: offset
            }
        })
            .then(response => {
                dispatch({
                    type: LOAD_POSTS,
                    payload: response.data
                });
            })
            .catch(() => {
                // dispatch()
            })
    };
}

export function loadPost(id) {
    return dispatch => {
        axios.get(`${ROOT_URL}/post/${id}`)
            .then(response => {
               dispatch({
                   type: LOAD_POST_BY_ID,
                   payload: response.data
               });
            })
            .catch(() => {

            });
    }
}