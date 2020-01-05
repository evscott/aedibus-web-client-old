import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/authAction";

const initialState = {
    lastUpdated: null,
    isFetching: false,
    firstName: '',
    lastName: ''
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isFetching: action.isFetching,
                firstName: action.user.firstName,
                lastName: action.user.lastName
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isFetching: action.isFetching,
                firstName: action.user.firstName,
                lastName: action.user.lastName,
            };
        default:
            return state;
    }
}