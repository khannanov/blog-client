import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { PostsList } from '../../src/components/PostsList';

describe('PostsList', () => {
    let component;

    const props = { posts: [{
        id: 1,
        title: 'test title',
        content: 'test text'
    }]};

    beforeEach(() => {
        component = shallow(<PostsList posts={props.posts}/>);
    });

    it('should render', () => {
        expect(component.length).to.equal(1);
    });

    it('should render PostsForm', () => {
        const component = mount(<PostsList posts={props.posts}/>);
        expect(component.find('.posts-form').length).to.eql(1);
    });

    it('shows each post that provided', () => {
        const post = component.find('.post-item').at(0);
        expect(post.find('h1').text()).to.equal('test title');
        expect(post.find('p').text()).to.equal('test text');
    });

});