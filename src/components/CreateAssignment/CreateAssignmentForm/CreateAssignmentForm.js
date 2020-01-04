import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreateAssignmentForm.css';
import { Form } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

class CreateAssignmentForm extends Component {
    render() {
        return (
            <Form.Group>
                <Form.Control
                    placeholder={'Assignment name'}
                    size="lg"
                    type={'input'}
                    name={'assignmentName'}
                    value={this.props.assignmentName}
                    onChange={this.props.handleChange}/>
            </Form.Group>
        );
    }
}

CreateAssignmentForm.propTypes = {
    assignmentName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default withRouter(CreateAssignmentForm);
