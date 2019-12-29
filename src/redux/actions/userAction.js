export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function loginRequest() {
    return {
        type: LOGIN_REQUEST,
        lastUpdated: Date.now(),
        isAuthenticated: true,
        isFetching: true
    }
}

function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        lastUpdated: Date.now(),
        isAuthenticated: true,
        isFetching: false,
        firstName: user.firstName,
        lastName: user.lastName
    }
}

function logoutRequest() {
    return {
        type: LOGOUT_REQUEST,
        lastUpdated: Date.now(),
        isFetching: true
    }
}

function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
        lastUpdated: Date.now(),
        isAuthenticated: false,
        isFetching: false,
        firstName: '',
        lastName: '',
    }
}

export function Login(user) {
    return (dispatch) => {
        dispatch(loginRequest(user));
        dispatch(loginSuccess(user));
    }
}

export function Logout() {
    return (dispatch) => {
        dispatch(logoutRequest());
        dispatch(logoutSuccess());
    }
}