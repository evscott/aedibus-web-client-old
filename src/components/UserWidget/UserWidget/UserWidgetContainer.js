import { connect } from 'react-redux';
import UserWidget from "./UserWidget";

const mapStateToProps = (state) => {
    return {
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