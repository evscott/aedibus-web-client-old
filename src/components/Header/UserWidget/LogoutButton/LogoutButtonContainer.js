import { connect } from 'react-redux';
import LogoutButton from "./LogoutButton";
import {Logout} from "../../../../Redux/actions/authAction";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => {
            dispatch(Logout());
        }
    };
};

const LogoutButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutButton);

export default LogoutButtonContainer;