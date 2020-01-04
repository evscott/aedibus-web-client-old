import React, { Component } from 'react'
import './Assignment.css'
import {Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import ReadmeContainer from "./Readme/ReadmeContainer";
import TextEditorContainer from "../TextEditor/TextEditorContainer";

class Assignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
            code: `// @author: ${this.props.location.state.userFirstName} ${this.props.location.state.userLastName}\n`,
            readOnly: false,
            mode: 'javascript',
        };

        this.handleBack = this.handleBack.bind(this);
        this.updateCode = this.updateCode.bind(this);
    }

    handleBack(e) {
        e.preventDefault();
        this.props.history.push('/home');
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div className={'padding-left-sm'}>
                        <Button className={'btn btn-light'} onClick={this.handleBack}> Back </Button>
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
                    code={this.state.code}
                    updateCode={this.updateCode}
                />

                <div className={'float-right padding-top-sm padding-bottom-sm padding-right-sm'}>
                    <Button className={"btn-success"}>Submit</Button>
                </div>
            </div>
        )
    }
}

Assignment.propTypes = {
};

export default withRouter(Assignment)