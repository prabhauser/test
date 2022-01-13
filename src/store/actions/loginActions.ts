import { APIURL } from '../constants/apiConstants';
import { ACTIONS } from '../constants/actionConstants';
import ApiService from '../../services/api/apiService';
import { setToLocalStorage } from '../../utilities/storage/storageUtility';
import StorageConstant from '../constants/storageConstants';
import { Dispatch } from 'react';

export interface ILoginStarted {
    type: string;
}
export interface ILoginSuccess {
    type: string;
    data: any;
}
export interface ILoginFailed {
    type: string;
    err: any;
}
export interface ILoginReset {
    type: string;
}

export const loginStarted = () => {
    return {
        type: ACTIONS.loginStarted
    };
};
export const loginSuccess = (data: any) => {
    return {
        type: ACTIONS.loginSuccess,
        data
    };
};
export const loginFailed = (err: any) => {
    return {
        type: ACTIONS.loginFailed,
        err
    };
};
export const loginReset = () => {
    return {
        type: ACTIONS.loginReset
    };
};
export const userLogin = (payloadState: any) => {
    return (dispatch: Dispatch<ILoginStarted | ILoginSuccess | ILoginFailed | ILoginReset>) => {
        dispatch(loginStarted());
        ApiService.post(APIURL.LOGIN, payloadState)
            .then((response) => {
                if (response?.data?.loginId) {
                    setToLocalStorage('loginId', response?.data?.loginId);
                }
                dispatch(loginSuccess(response));
            })
            .catch((err) => {
                dispatch(loginFailed(err));
            });
    };
};
