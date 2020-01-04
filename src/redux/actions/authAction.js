export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function logoutRequest() {
    return {
        type: LOGOUT_REQUEST,
        lastUpdated: Date.now(),
        isFetching: true
    }
}

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
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
        },
    }
}

function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
        lastUpdated: Date.now(),
        isAuthenticated: false,
        isFetching: false,
        user: {
            firstName: null,
            lastName: null,
        },
        assignments: {
            list: []
        }
    }
}

export function Login(user) {
    return (dispatch) => {
        dispatch(loginRequest(user));
        dispatch(loginSuccess(user));
        localStorage.setItem('token', 'abc');
    }
}

export function Logout() {
    return (dispatch) => {
        dispatch(logoutRequest());
        dispatch(logoutSuccess());
        localStorage.removeItem('token');
    }
}