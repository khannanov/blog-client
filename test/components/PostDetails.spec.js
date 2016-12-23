import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PostDetails from '../../src/components/PostDetails';

describe('<PostDetails/>', () => {
    const props = {
        test: ' yeah!'
    };

    it('should render', () => {
        expect(shallow(<PostDetails {...props}/>).length).to.equal(1);
    });
});