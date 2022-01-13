import { shallow } from 'enzyme';
import Modal from './index';

describe('Modal', () => {
    describe('Modal snapshot', () => {
        it('should take Modal snapshot', () => {
            const component = shallow(<Modal isOpen={false} handleClose={() => {}} children={<div></div>} />);
            expect(component).toMatchSnapshot();
        });
    });
});
