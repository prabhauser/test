import { shallow } from 'enzyme';
import TabGroup from './index';

describe('TabGroup', () => {
    describe('TabGroup snapshot', () => {
        it('should take TabGroup snapshot', () => {
            const component = shallow(
                <TabGroup centered={true} tabHeadingArray={[]} value={0} handleChange={() => {}} />
            );
            expect(component).toMatchSnapshot();
        });
    });
});
