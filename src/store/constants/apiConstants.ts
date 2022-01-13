export let BASEURL = process.env.REACT_APP_API_URL;
BASEURL = BASEURL ? BASEURL : 'https://'; //Todo: add ADB API URL here
export const APIURL = {
    LOGIN: `${BASEURL}/users/login`
};

export const APIErrorMsg = 'Something went wrong';
export const InvalidLogin = 'Invalid User ID or password';
