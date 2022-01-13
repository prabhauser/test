import { getTestData } from './index';

test('should return the test action type', () => {
    expect(getTestData()).toEqual({
        type: 'GET_TESTDATA'
    });
});
