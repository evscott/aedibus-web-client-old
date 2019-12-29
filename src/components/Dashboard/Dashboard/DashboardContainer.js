import { connect } from 'react-redux'
import Dashboard from "./Dashboard";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        isFetching: state.user.isFetching,
        firstName: state.user.firstName,
        lastName: state.user.lastName,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;