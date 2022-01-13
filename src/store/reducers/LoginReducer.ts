import { ACTIONS } from '../constants/actionConstants';
import { ILoginStarted, ILoginSuccess, ILoginFailed, ILoginReset } from '../actions/loginActions';

const initialState = {
    isLoading: false,
    err: null,
    response: {},
    isLoggedIn: false
};

type TAction = ILoginStarted & ILoginSuccess & ILoginFailed & ILoginReset;

export default function loginreducer(state = initialState, action: TAction) {
    switch (action.type) {
        case ACTIONS.loginStarted:
            return { ...state, isLoading: true, err: null };
        case ACTIONS.loginSuccess:
            return {
                ...state,
                isLoading: false,
                response: action.data,
                isLoggedIn: true,
                err: null
            };
        case ACTIONS.loginFailed:
            return {
                ...state,
                isLoading: false,
                err: action.err,
                response: {},
                isLoggedIn: false
            };
        case ACTIONS.loginReset:
            return {
                ...state,
                isLoading: false,
                err: null,
                response: {},
                isLoggedIn: false
            };
        default:
            return state;
    }
}
