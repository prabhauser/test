import { shallow } from 'enzyme';
import ButtonTab from './index';

describe('ButtonTab', () => {
    describe('ButtonTab snapshot', () => {
        const tabsArray = [
            {
                heading: 'Supervisors'
            },
            {
                heading: 'Municipal Links(ML)'
            },
            {
                heading: 'SWA'
            },
            {
                heading: 'Health Facilities'
            },
            {
                heading: 'Educational Facilities'
            },
            {
                heading: 'Households'
            }
        ];
        it('should take ButtonTab snapshot', () => {
            const component = shallow(
                <ButtonTab tabsArray={tabsArray} setSelectedTab={() => void 0} selectedTab={0} />
            );
            expect(component).toMatchSnapshot();
        });
    });
});
