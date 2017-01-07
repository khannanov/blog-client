import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import PostsForm from '../../src/components/posts/PostsForm';

describe('PostsForm', () => {
    let component;

    beforeEach(() => {
        const props = {
            savePost: () => {}
        };

        component = mount(<PostsForm {...props}/>);
    });

    it('has correct class', () => {
        expect(component.find('.posts-form')).to.have.length(1);
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.have.length(1);
    });

    it('has a title input', () => {
        expect(component.find('input[type="text"]')).to.have.length(1);
    });

    it('has a button', () => {
        expect(component.find('button')).to.have.length(1);
    });

    describe('entering post', () => {

        beforeEach(() => {
            component.find('textarea').simulate('change', { target: { value : 'new post text' } });
        });


        it('shows that text in the textarea', () => {
            expect(component.find('textarea').props()).to.have.property('value', 'new post text')
        });

        it('when submitted, clears the fields', () => {
            component.simulate('submit');
            expect(component.find('textarea').props()).to.have.property('value', '');
        });
    })
});