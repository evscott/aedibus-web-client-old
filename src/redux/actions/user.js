export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

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

export function Login(user) {
    return (dispatch) => {
        dispatch(loginRequest(user));
        dispatch(loginSuccess(user));
    }
}