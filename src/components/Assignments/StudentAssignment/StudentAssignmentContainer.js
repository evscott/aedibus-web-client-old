import { connect } from 'react-redux';
import Assignment from "./StudentAssignment";

const mapStateToProps = (state) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const StudentAssignmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Assignment);

export default StudentAssignmentContainer;