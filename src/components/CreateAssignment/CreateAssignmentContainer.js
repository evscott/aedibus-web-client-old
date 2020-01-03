import { connect } from 'react-redux'
import CreateAssignment from "./CreateAssignment";

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CreateAssignmentContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateAssignment);

export default CreateAssignmentContainer;