import { shallow } from 'enzyme';
import SnackbarAlert from './index';

describe('SnackbarAlert', () => {
    describe('SnackbarAlert snapshot', () => {
        it('should take SnackbarAlert snapshot', () => {
            const component = shallow(<SnackbarAlert handleClose={() => {}} />);
            expect(component).toMatchSnapshot();
        });
    });
});
