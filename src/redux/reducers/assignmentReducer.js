import * as AssignmentActions from '../actions/assignmentAction';

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
        default:
            return state;
    }
}