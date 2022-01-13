import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Accordion from './index';

test('check the content of Accordion summary', () => {
    const accordionSummary = { title: 'Sample Summary text for Accordion' };

    const { getByText, queryByText } = render(
        <Accordion label={accordionSummary.title} expanded={false} onChange={() => {}}>
            <button>Test</button>
        </Accordion>
    );
    expect(getByText(accordionSummary.title)).toBeInTheDocument();
});

test('check the children of Accordion to be enabled', () => {
    const wrapper = shallow(
        <Accordion label="Test Accordion" expanded={false} onChange={() => {}}>
            <button id="Test">Test</button>
        </Accordion>
    );

    const testBtn = wrapper.find('button#Test').prop('disabled');
    expect(testBtn).toBeFalsy();
});

test('can open accordion items to see the contents', () => {
    const test1 = { title: 'Test1' };
    const test2 = {
        title: 'Test2'
    };

    const { getByText, queryByText } = render(
        <Accordion label={test1.title} expanded={false} onChange={() => {}}>
            <button>Test</button>
        </Accordion>
    );
    expect(getByText(test1.title)).toBeInTheDocument();
    expect(queryByText(test2.title)).toBeNull();
});
