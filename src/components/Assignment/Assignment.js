import React, { Component } from 'react'
import './Assignment.css'
import {Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import ReadmeContainer from "./Readme/ReadmeContainer";
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'

class Assignment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignment: this.props.location.state.assignment,
            code: '',
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
        let options = {
            lineNumbers: true,
            readOnly: this.state.readOnly,
            mode: this.state.mode
        };

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
                <div className={'border-sm light-grey margin-bottom-sm'}>
                    <ReadmeContainer assignmentName={this.state.assignment.name}/>
                </div>
                <div className={'border-sm'}>
                    <CodeMirror className={'create-assignment-height'} value={this.state.code} onChange={this.updateCode} options={options} />
                </div>
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