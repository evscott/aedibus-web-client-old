import React, { Component } from 'react'
import './Assignment.css'
import {Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import ReadmeContainer from "./Readme/ReadmeContainer";
import TextEditorContainer from "../TextEditor/TextEditorContainer";
import DeleteButtonContainer from "./DeleteButton/DeleteButtonContainer";

class Assignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
            content: `// @author: ${this.props.location.state.userFirstName} ${this.props.location.state.userLastName}\n`,
            readOnly: false,
            mode: 'javascript',
        };

        this.handleBack = this.handleBack.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    handleBack(e) {
        e.preventDefault();
        this.props.history.push('/home');
    }

    updateContent(newContent) {
        this.setState({
            content: newContent,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div className={'padding-left-sm display-inline'}>
                        <Button className={'btn btn-light'} onClick={this.handleBack}> Back </Button>
                    </div>
                    <div className={'float-right display-inline'}>
                        <DeleteButtonContainer assignmentName={this.state.assignment.name}/>
                    </div>
                    <div>
                        <h2 className={'horizontally-center'}>
                            <span> {this.state.assignment.name} </span>
                        </h2>
                    </div>
                </div>

                <div className={'margin-bottom-sm'}>
                    <ReadmeContainer
                        assignmentName={this.state.assignment.name}
                        readmeContent={this.state.assignment.readmeContent}/>
                </div>

                <TextEditorContainer
                    mode={'javascript'}
                    content={this.state.content}
                    updateContent={this.updateContent}
                />

                <div className={'float-right padding-top-sm padding-bottom-sm padding-right-md'}>
                    <Button className={"btn-success"}>Submit</Button>
                </div>
            </div>
        )
    }
}

Assignment.propTypes = {
};

export default withRouter(Assignment)