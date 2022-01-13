import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import DropDown from './index';

describe('DropDown', () => {
    describe('DropDown snapshot', () => {
        it('should take DropDown snapshot', () => {
            const component = shallow(<DropDown label={'test'} onChange={() => {}} name={'test'} />);
            expect(component).toMatchSnapshot();
        });
    });
    describe('Dropdown should have the label text', () => {
        const { getByText } = render(<DropDown label={'Test Dropdown'} onChange={() => {}} name={'test'} />);
        expect(getByText('Test Dropdown')).toBeInTheDocument();
    });
});
