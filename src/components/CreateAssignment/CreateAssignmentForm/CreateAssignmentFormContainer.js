import { connect } from 'react-redux'
import CreateAssignmentForm from "./CreateAssignmentForm";

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CreateAssignmentFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateAssignmentForm);

export default CreateAssignmentFormContainer;