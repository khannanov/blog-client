import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Foo from '../../src/components/foo';

describe('<Foo/>', () => {
    it('should render', () => {
        expect(shallow(<Foo />).contains(<div className="foo">i am a Foo</div>)).to.equal(true);
    });
});