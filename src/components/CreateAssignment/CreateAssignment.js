import React, { Component } from 'react';
import './CreateAssignment.css';
import {Button} from "react-bootstrap";
import CreateAssignmentFormContainer from "./CreateAssignmentForm/CreateAssignmentFormContainer";

export default class CreateAssignment extends Component {
    constructor(props) {
        super(props);

        this.handleBack = this.handleBack.bind(this);
    }

    handleBack(e) {
        e.preventDefault();
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <div className={'padding-left-sm'}>
                    <Button className={'btn btn-light'} onClick={this.handleBack}> Back </Button>
                </div>
                <div className={'padding-top-md'}>
                    <CreateAssignmentFormContainer/>
                </div>
            </div>
        );
    }
}