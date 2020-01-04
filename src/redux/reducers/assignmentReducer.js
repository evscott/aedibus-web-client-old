import * as AssignmentActions from '../actions/assignmentAction';
import {LOGOUT_SUCCESS} from "../actions/authAction";

const initialState = {
    lastUpdated: null,
    isFetching: null,
    list: [],
};

export function assignmentReducer(state = initialState, action) {
    switch (action.type) {
        case AssignmentActions.GET_ASSIGNMENTS_REQUEST:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isFetching: action.isFetching,
            };
        case AssignmentActions.GET_ASSIGNMENTS_SUCCESS:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isFetching: action.isFetching,
                list: action.list,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                lastUpdated: action.lastUpdated,
                isFetching: action.isFetching,
                list: action.assignments.list,
            };
        default:
            return state;
    }
}