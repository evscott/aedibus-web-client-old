import { connect } from 'react-redux';
import Editor from "./SubmissionViewer";

const mapStateToProps = (state) => {
    return {
        firstName: state.user.firstName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const SubmissionViewerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Editor);

export default SubmissionViewerContainer;