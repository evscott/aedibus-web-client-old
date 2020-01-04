import React, { Component } from 'react'
import './TextEditor.css'
import CodeMirror from 'react-codemirror';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css'
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/material.css');

export default class TextEditor extends Component {
    render() {
        let options = {
            lineNumbers: true,
            mode: this.props.mode,
            theme: 'material',
        };

        return (
            <div className={'border-sm'}>
                <CodeMirror
                    className={'text-editor-height'}
                    value={this.props.code}
                    onChange={this.props.updateCode}
                    options={options} />
            </div>
        )
    }
}

TextEditor.propTypes = {
    mode: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    updateCode: PropTypes.func.isRequired,
};