import { connect } from 'react-redux'
import LandingPage from "./LandingPage";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const LandingPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LandingPage);

export default LandingPageContainer;