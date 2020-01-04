import { connect } from 'react-redux'
import Dashboard from "./Dashboard";
import {GetAssignments} from "../../redux/actions/assignmentAction";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching,
        firstName: state.user.firstName,
        lastName: state.user.lastName,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetAssignments: () => {
            dispatch(GetAssignments());
        },
    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;