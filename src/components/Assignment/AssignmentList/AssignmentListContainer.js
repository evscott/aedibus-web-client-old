import { connect } from 'react-redux';
import AssignmentList from "./AssignmentList";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const AssignmentListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignmentList);

export default AssignmentListContainer;