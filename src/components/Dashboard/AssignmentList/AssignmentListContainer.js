import { connect } from 'react-redux';
import AssignmentList from "./AssignmentList";

const mapStateToProps = (state) => {
    return {
        assignments: state.assignments.list,
        userFirstName: state.user.firstName,
        userLastName: state.user.lastName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const AssignmentListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignmentList);

export default AssignmentListContainer;