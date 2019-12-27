import { connect } from 'react-redux';
import LoginForm from "./LoginForm";
import {Login} from "../../../redux/actions/userAction";

const mapStateToProps = (state) => {
    return {
        lastUpdated: state.user.lastUpdated,
        firstName: state.user.firstName,
        lastName: state.user.lastName
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        Login: (user) => {
            dispatch(Login(user));
        }
    };
};

const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;