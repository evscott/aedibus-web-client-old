import React, { Component } from 'react'
import './BackButton.css'
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class BackButton extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        this.props.history.push(this.props.path);
    }
    render() {
        return (
            <Button className={'btn btn-light'} onClick={this.handleBack}> Back </Button>
        )
    }
}

BackButton.propTypes = {
    path: PropTypes.string.isRequired,
};

export default withRouter(BackButton)