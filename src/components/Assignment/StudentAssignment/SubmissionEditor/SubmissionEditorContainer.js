import { connect } from 'react-redux';
import Editor from "./SubmissionEditor";

const mapStateToProps = (state) => {
    return {
        firstName: state.user.firstName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const SubmissionEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);

export default SubmissionEditorContainer;