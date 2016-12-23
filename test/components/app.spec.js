import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { App } from '../../src/components/App';

describe('App', () => {
    let component;

    beforeEach(() => {
        component = shallow(<App/>);
    });

    it('show render', () => {
        expect(component.length).to.equal(1);
    });

    it('should contain post list', () => {

    });
});