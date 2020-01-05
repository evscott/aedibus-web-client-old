import { connect } from 'react-redux';
import Assignment from "./StudentAssignment";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const StudentAssignmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Assignment);

export default StudentAssignmentContainer;