import { connect } from 'react-redux';
import TextEditor from "./TextEditor";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const TextEditorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextEditor);

export default TextEditorContainer;