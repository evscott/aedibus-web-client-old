import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { assignmentReducer } from "./assignmentReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    assignments: assignmentReducer,
});

export default rootReducer;