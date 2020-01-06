import React, { Component } from 'react';
import './CreateAssignment.css';
import {Button} from "react-bootstrap";
import { CreateAssignment as CreateAssignmentFunc } from "../../Services/AssignmentServices";
import CreateAssignmentFormContainer from "./CreateAssignmentForm/CreateAssignmentFormContainer";
import BackButtonContainer from "../Shared/BackButton/BackButtonContainer";
import TextEditorContainer from "../Shared/TextEditor/TextEditorContainer";

export default class CreateAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignmentName: '',
            readmeContent: '',
            readOnly: false,
            mode: 'markdown',
        };

        this.updateContent = this.updateContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    updateContent(newContent) {
        this.setState({
            readmeContent: newContent,
        });
    }

    handleSubmit() {
        CreateAssignmentFunc(this.state.assignmentName, this.state.readmeContent).then(res => {
            console.log(res);
            this.props.history.push('/home');
        });
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <div className={'padding-left-sm'}>
                    <BackButtonContainer path={'/home'}/>
                </div>

                <div className={'padding-top-md create-assignment-name'}>
                    <CreateAssignmentFormContainer assignmentName={this.state.assignmentName} handleChange={this.handleChange}/>
                </div>

                <div className={'text-editor'}>
                    <TextEditorContainer mode={this.state.mode} content={this.state.readmeContent} readOnly={false} updateContent={this.updateContent}/>
                </div>

                <div className={'float-right submit-button'}>
                    <Button className={'btn-success'} type={'submit'} onClick={this.handleSubmit}>
                        Create
                    </Button>
                </div>
            </div>
        );
    }
}