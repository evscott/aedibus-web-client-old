import React, { Component } from 'react';
import './LoginForm.css'
import {Button, Form} from 'react-bootstrap';
import PropTypes from 'prop-types'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.Login({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
        this.props.GetAssignments();
    }


    render() {
        return (
            <div className={'width-half'}>
                <Form.Group className={''}>
                    <Form.Control
                        placeholder={'first name'}
                        type={'input'}
                        name={'firstName'}
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <Form.Control
                        placeholder={'last name'}
                        type={'input'}
                        name={'lastName'}
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <Button className={'btn btn-default float-right'} type={'submit'} onClick={this.handleSubmit}>
                        Login
                    </Button>
                </Form.Group>
            </div>
        )
    }
}

LoginForm.propTypes = {
    lastUpdated: PropTypes.any,
    firstName: PropTypes.string,
    lastName: PropTypes.string
};