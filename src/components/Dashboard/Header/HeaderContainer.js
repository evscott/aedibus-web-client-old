import { connect } from 'react-redux';
import Header from "./Header";

const mapStateToProps = (state) => {
    console.log('header container state:', state.user.isAuthenticated, localStorage.getItem('token'));
    return {
        isAuthenticated: state.user.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;