import React, { Component } from 'react';
import './CreateAssignmentForm.css';
import {Button, Form} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import {CreateAssignment} from "../../../services/AssignmentServices";
import TextEditorContainer from "../../TextEditor/TextEditorContainer";

class CreateAssignmentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignmentName: '',
            readmeContent: '',
            readOnly: false,
            mode: 'markdown',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        CreateAssignment(this.state.assignmentName, this.state.readmeContent).then(res => {
           console.log('result:', res);
            this.props.history.push('/home');
        });
    }

    updateContent(newContent) {
        this.setState({
            readmeContent: newContent,
        });
    }

    render() {
        return (
            <Form.Group className={''}>
                <div>
                    <Form.Control
                        placeholder={'Assignment name'}
                        size="lg"
                        type={'input'}
                        name={'assignmentName'}
                        value={this.state.assignmentName}
                        onChange={this.handleChange}/>
                </div>

                <TextEditorContainer
                    mode={'markdown'}
                    content={this.state.readmeContent}
                    updateContent={this.updateContent}
                />

                <div className={'float-right padding-top-sm padding-right-sm padding-bottom-sm'}>
                    <Button
                        className={'btn-success'}
                        type={'submit'}
                        onClick={this.handleSubmit}>
                        Create
                    </Button>
                </div>
            </Form.Group>
        );
    }
}

export default withRouter(CreateAssignmentForm);
