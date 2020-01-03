import React, { Component } from 'react';
import './CreateAssignmentForm.css';
import {Button, Form} from "react-bootstrap";
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css'

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

export default class CreateAssignmentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignmentName: '',
            readme: '',
            code: '',
            readOnly: false,
            mode: 'markdown',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCode = this.updateCode.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
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

                <div className={'border-sm'}>
                    <CodeMirror className={'create-assignment-height'} value={this.state.code} onChange={this.updateCode} options={options} />
                </div>

                <div className={'float-right padding-top-sm padding-right-sm'}>
                    <Button className={'btn-success'} type={'submit'} onClick={this.handleSubmit}>
                        Create
                    </Button>
                </div>
            </Form.Group>
        );
    }
}