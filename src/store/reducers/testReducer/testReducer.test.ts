import Test from './testReducer';

test('should return the initial state', () => {
    expect(Test(undefined)).toEqual({
        isLoading: false,
        err: null,
        response: {}
    });
});

test('should update the isLoading property to true in state value', () => {
    const action = { type: 'GET_TESTDATA', payload: {} };
    expect(Test(undefined, action)).toEqual({
        isLoading: true,
        err: null,
        response: {}
    });
});
