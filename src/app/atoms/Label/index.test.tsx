import { shallow, mount } from 'enzyme';
import Label from './index';

describe('Input Component Tests', () => {
    it('Expects to add input in to the DOM', () => {
        const wrapper = shallow(<Label label="test" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Check the length of the DOM', () => {
        const wrapper = shallow(<Label label="test" />);
        expect(wrapper.length).toEqual(1);
    });

    it('should check Input box name', () => {
        const wrapper = mount(<Label label="edituser-name" />);
        expect(wrapper.props().name).toEqual('edituser-name');
    });
});
