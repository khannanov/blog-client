import { expect } from 'chai';
import { SAVE_POST, LOAD_POSTS } from '../../src/actions/types';
import { savePost, loadPosts } from '../../src/actions/posts';

describe('posts actions', () => {
    describe('save post', () => {
        it('has the correct type', () => {
            const action = savePost();
            expect(action.type).to.equal(SAVE_POST);
        });

        it('has the correct payload', () => {
            const post = {
                content: 'test content',
                title: 'test title'
            };

            const action = savePost(post);
            expect(action.payload).to.equal(post);
        });
    });

    describe('load posts', () => {
        let action;
            beforeEach(() => {
            action = loadPosts();
        });

        it('has the correct type', () => {
            expect(action.type).to.equal(LOAD_POSTS);
        });

        it('has the correct payload', () => {
            expect(action.payload[0]).to.have.all.keys(['id', 'title', 'content'])
        });
    })
});