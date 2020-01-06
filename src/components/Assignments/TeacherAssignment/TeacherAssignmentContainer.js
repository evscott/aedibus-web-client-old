import { connect } from 'react-redux';
import Assignment from "./TeacherAssignment";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const TeacherAssignmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Assignment);

export default TeacherAssignmentContainer;