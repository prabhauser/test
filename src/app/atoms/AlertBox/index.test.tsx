import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import AlertBox from './index';

describe('AlertBox', () => {
    describe('AlertBox snapshot', () => {
        it('should take AlertBox snapshot', () => {
            const component = shallow(<AlertBox handleClose={() => {}} isOpen={false} />);
            expect(component).toMatchSnapshot();
        });
    });
    describe('Check the AlertBox contents', () => {
        it('Check the Modal title', () => {
            const test1 = { title: 'Test1' };
            const test2 = {
                title: 'Test2'
            };

            const { getByText, queryByText } = render(
                <AlertBox handleClose={() => {}} isOpen={true} modalTitle={test1.title} />
            );
            expect(getByText(test1.title)).toBeInTheDocument();
            expect(queryByText(test2.title)).toBeNull();
        });
        it('Check the Modal content', () => {
            const modalContentVal = 'Sample Modal content';

            const { getByText, queryByText } = render(
                <AlertBox handleClose={() => {}} isOpen={true} modalContent={modalContentVal} />
            );
            expect(getByText(modalContentVal)).toBeInTheDocument();
        });
    });
});
