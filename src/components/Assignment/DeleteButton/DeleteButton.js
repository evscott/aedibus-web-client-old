import React, { Component } from 'react'
import './DeleteButton.css'
import { withRouter } from 'react-router-dom';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import {DeleteAssignment} from "../../../services/AssignmentServices";

class DeleteButton extends Component {
    constructor(props) {
        super(props);

        console.log('assignmentName:', this.props.assignmentName);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        DeleteAssignment(this.props.assignmentName).then(res => {
            console.log('result:', res);
            this.props.history.push('/home');
        });
    }

    render() {
        return (
            <Button className={'btn-danger'} size={'sm'} onClick={this.handleClick}> Delete </Button>
        )
    }
}

DeleteButton.propTypes = {
    assignmentName: PropTypes.string.isRequired,
};

export default withRouter(DeleteButton)