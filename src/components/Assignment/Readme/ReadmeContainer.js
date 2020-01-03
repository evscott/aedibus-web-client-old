import { connect } from 'react-redux';
import Readme from "./Readme";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const ReadmeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Readme);

export default ReadmeContainer;