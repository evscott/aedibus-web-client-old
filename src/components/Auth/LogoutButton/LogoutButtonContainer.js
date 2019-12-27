import { connect } from 'react-redux';
import LogoutButton from "./LogoutButton";
import {Logout} from "../../../redux/actions/user";

const mapStateToProps = (state) => {
    return {

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