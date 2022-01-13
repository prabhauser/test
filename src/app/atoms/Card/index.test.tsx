import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './index';

describe('CardView', () => {
    describe('card view snapshot', () => {
        it('should take card snapshot', () => {
            const component = shallow(<Card heading="card-heading" />);
            expect(component).toMatchSnapshot();
        });
    });
    it('should check card heading', () => {
        const wrapper = mount(<Card heading="card-heading" />);
        expect(wrapper.props().heading).toEqual('card-heading');
    });
});
