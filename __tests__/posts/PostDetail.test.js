import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PostDetails from '../../src/components/posts/PostDetails';

describe('post details', () => {
    const props = {
        title: 'i am title',
        content: 'i am content'
    };

    it('it should render a post details', () => {
        const wrapper = shallow(<PostDetails {...props}/>);

        const rendered = renderer.create(<PostDetails {...props}/>).toJSON();
        expect(rendered).toMatchSnapshot();

        // wrapper.toMatchSnapshot();
        expect(wrapper.find('.post-content').length).toBe(1);
        expect(wrapper.find('h1').length).toBe(1);
    })
});