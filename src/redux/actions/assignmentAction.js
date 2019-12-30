export const GET_ASSIGNMENTS_REQUEST = 'GET_ASSIGNMENTS_REQUEST';
export const GET_ASSIGNMENTS_SUCCESS = 'GET_ASSIGNMENTS_SUCCESS';

function getAssignmentsRequest() {
    return {
        type: GET_ASSIGNMENTS_REQUEST,
        lastUpdated: Date.now(),
        isFetching: true
    }
}

function getAssignmentsSuccess() {
    return {
        type: GET_ASSIGNMENTS_SUCCESS,
        lastUpdated: Date.now(),
        isFetching: false,
        list: [
            {
                id: 1,
                title: 'AssignmentViewer 1',
            },
            {
                id: 2,
                title: 'AssignmentViewer 2',
            },
            {
                id: 3,
                title: 'AssignmentViewer 3',
            }
        ]
    }
}

export function GetAssignments() {
    return (dispatch) => {
        dispatch(getAssignmentsRequest());
        dispatch(getAssignmentsSuccess())
    }
}