import { connect } from 'react-redux'
import LandingPage from "./LandingPage";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        isFetching: state.user.isFetching,
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