import * as UserActions from '../actions/user';

const initialState = {
    lastUpdated: null,
    isAuthenticated: false,
    isFetching: null,
    firstName: '',
    lastName: ''
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOGIN_REQUEST:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isAuthenticated: action.isAuthenticated,
                isFetching: action.isFetching,
            };
        case UserActions.LOGIN_SUCCESS:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isAuthenticated: action.isAuthenticated,
                isFetching: action.isFetching,
                firstName: action.firstName,
                lastName: action.lastName
            };
        default:
            return state;
    }
}