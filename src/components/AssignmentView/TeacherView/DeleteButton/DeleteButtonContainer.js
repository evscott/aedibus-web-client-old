import { connect } from 'react-redux';
import DeleteButton from "./DeleteButton";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const DeleteButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteButton);

export default DeleteButtonContainer;