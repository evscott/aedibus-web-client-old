import React, { Component } from 'react'
import './TextEditor.css'
import CodeMirror from 'react-codemirror';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css'
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/material.css');
require('codemirror/theme/xq-light.css');


export default class TextEditor extends Component {
    render() {
        let options = {
            lineNumbers: true,
            mode: this.props.mode,
            theme: 'xq-light',
            readOnly: this.props.readOnly,
        };

        return (
            <div className={'border-sm'}>
                <CodeMirror
                    className={'text-editor-height'}
                    value={this.props.content}
                    onChange={this.props.updateContent}
                    options={options} />
            </div>
        )
    }
}

TextEditor.propTypes = {
    mode: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    updateContent: PropTypes.func.isRequired,
};