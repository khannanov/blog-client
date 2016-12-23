import { expect } from 'chai';
import postsReducer from '../../src/reducers/posts';
import { SAVE_POST, LOAD_POSTS } from '../../src/actions/types';

describe('Posts Reducer', () => {
    it('handles action with unknown type', () => {
        expect(postsReducer(undefined, {})).to.eql([]);
    });

    it('SAVE_POST', () => {
        const action = {
            type: SAVE_POST,
            payload: {
                id: 1,
                title: 'test title',
                content: 'test content'
            }
        };

        expect(postsReducer([], action)).to.include({
            id: 1,
            title: 'test title',
            content: 'test content'
        })
    });

    it('LOAD_ARTICLES', () => {
        const posts = [
            {
                id: 1,
                title: 'test title',
                content: 'test content'
            },
            {
                id: 2,
                title: 'test title',
                content: 'test content'
            }
        ];

        const action = {
            type: LOAD_POSTS,
            payload: posts
        };

        expect(postsReducer([], action)).to.eql(posts);

    });
});
