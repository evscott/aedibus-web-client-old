import { connect } from 'react-redux';
import UserWidget from "./UserWidget";

const mapStateToProps = (state) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        isAuthenticated: state.user.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const UserWidgetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserWidget);

export default UserWidgetContainer;