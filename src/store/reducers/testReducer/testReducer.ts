import { ACTIONS } from '../../constants/actionConstants';

const initialState = {
    isLoading: false,
    err: null,
    response: {}
};
type actionType = {
    type: string;
    payload: Object;
};
export default function Test(state = initialState, action: actionType = { type: '', payload: {} }) {
    switch (action.type) {
        case ACTIONS.testCase:
            return { ...state, isLoading: true };
        default:
            return state;
    }
}
