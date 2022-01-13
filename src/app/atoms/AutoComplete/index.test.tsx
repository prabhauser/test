import { shallow, mount } from 'enzyme';
import AutoComplete from './index';
import Input from '../TextInput';

describe('AutoComplete', () => {
    const options = [
        {
            value: 1,
            label: 'test1'
        },
        {
            value: 2,
            label: 'test2'
        },
        {
            value: 3,
            label: 'test3'
        }
    ];
    describe('AutoComplete view snapshot', () => {
        it('should take AutoComplete snapshot', () => {
            const component = shallow(<AutoComplete options={options} />);
            expect(component).toMatchSnapshot();
        });
    });

    it('Expects to add input in to the autocomplete', () => {
        const wrapper = shallow(<AutoComplete options={options} label="autocomplete" />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Check the length of the element', () => {
        const wrapper = shallow(<AutoComplete options={options} label="autocomplete" />);
        expect(wrapper.length).toEqual(1);
    });

    it('should check autocomplete value', () => {
        const wrapper = mount(<Input value="autoComplete-value" name="autoComplete-name" />);
        expect(wrapper.props().value).toEqual('autoComplete-value');
    });

    it('should check autocomplete name and ID', () => {
        const wrapper = mount(<Input id="autoComplete-id" name="autoComplete-name" />);
        expect(wrapper.props().name).toEqual('autoComplete-name');
        expect(wrapper.props().id).toEqual('autoComplete-id');
    });

    it('should check empty autocomplete name and ID', () => {
        const wrapper = mount(<Input id="" name="" />);
        expect(wrapper.props().name).toEqual('');
        expect(wrapper.props().id).toEqual('');
    });

    it('should check autocomplete placeholder', () => {
        const wrapper = mount(<Input placeholder="autoComplete-placeholder" name="autoComplete-name" />);
        expect(wrapper.props().placeholder).toEqual('autoComplete-placeholder');
    });
});
