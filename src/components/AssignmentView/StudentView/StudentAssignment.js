import React, { Component } from 'react'
import './StudentAssignment.css'
import {Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import ReadmeContainer from "../Readme/ReadmeContainer";
import TextEditorContainer from "../../Shared/TextEditor/TextEditorContainer";
import BackButtonContainer from "../../Shared/BackButton/BackButtonContainer";

class StudentAssignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
            content: `// @author: ${this.props.location.state.firstName} ${this.props.location.state.lastName}\n`,
            readOnly: false,
            mode: 'javascript',
        };

        this.updateContent = this.updateContent.bind(this);
    }

    updateContent(newContent) {
        this.setState({
            content: newContent,
        });
    }

    render() {
        return (
            <div>
                <div className={'padding-left-sm display-inline'}>
                    <BackButtonContainer path={'/home'}/>
                </div>

                <div>
                    <h2 className={'horizontally-center'}>
                        <span> {this.state.assignment.name} </span>
                    </h2>
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
                    <Button className={"btn-success"}>Save</Button>
                </div>
            </div>
        )
    }
}

StudentAssignment.propTypes = {
};

export default withRouter(StudentAssignment)