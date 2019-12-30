import { connect } from 'react-redux';
import Assignment from "./Assignment";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const AssignmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Assignment);

export default AssignmentContainer;