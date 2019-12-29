import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { assignmentReducer } from "./assignmentReducer";

const rootReducer = combineReducers({
    user: userReducer,
    assignments: assignmentReducer,
});

export default rootReducer;