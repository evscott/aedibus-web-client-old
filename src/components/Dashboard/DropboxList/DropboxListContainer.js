import { connect } from 'react-redux';
import DropboxList from "./DropboxList";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const DropboxListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DropboxList);

export default DropboxListContainer;