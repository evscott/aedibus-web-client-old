import { connect } from 'react-redux';
import BackButton from "./BackButton";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const BackButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BackButton);

export default BackButtonContainer;