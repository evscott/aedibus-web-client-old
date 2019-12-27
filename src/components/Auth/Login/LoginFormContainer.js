import { connect } from 'react-redux';
import LoginForm from "./LoginForm";
import {Login} from "../../../redux/actions/user";

const mapStateToProps = (state) => {
    return {
        lastUpdated: state.user.lastUpdated,
        firstName: state.user.firstName,
        lastName: state.user.lastName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user) => {
            dispatch(Login(user));
        }
    };
};

const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;