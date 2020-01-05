import fetch from "cross-fetch";

export const GET_ASSIGNMENTS_REQUEST = 'GET_ASSIGNMENTS_REQUEST';
export const GET_ASSIGNMENTS_SUCCESS = 'GET_ASSIGNMENTS_SUCCESS';

function getAssignmentsRequest() {
    return {
        type: GET_ASSIGNMENTS_REQUEST,
        lastUpdated: Date.now(),
        isFetching: true
    }
}

function getAssignmentsSuccess(list) {
    return {
        type: GET_ASSIGNMENTS_SUCCESS,
        lastUpdated: Date.now(),
        isFetching: false,
        list: list
    }
}

export function GetAssignments() {
    return (dispatch) => {
        dispatch(getAssignmentsRequest());

        fetch('//127.0.0.1:8080/assignments', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then((response) => response.json())
            .then((json) => {
                dispatch(getAssignmentsSuccess(json));
        })
    }
}