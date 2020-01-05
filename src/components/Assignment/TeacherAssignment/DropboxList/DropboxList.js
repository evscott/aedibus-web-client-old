import React, { Component } from 'react'
import {ListGroup} from "react-bootstrap";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './DropboxList.css'

class DropboxList extends Component {
    constructor(props) {
        super(props);

        this.handleDropboxClick = this.handleDropboxClick.bind(this);
    }

    handleDropboxClick(dropbox) {
        this.props.history.push({
            pathname: '/dropbox',
            state: {
                dropbox: dropbox,
            }
        });
    }

    render() {
        return (
            <ListGroup defaultActiveKey="#link1">
                {
                    this.props.dropboxList.map(dropbox =>
                        <ListGroup.Item key={dropbox.ID} name={dropbox.Name} action onClick={() => this.handleDropboxClick(dropbox)}>
                            {dropbox.Name}
                        </ListGroup.Item>)
                }

            </ListGroup>
        )
    }
}

DropboxList.propTypes = {
    dropboxList: PropTypes.array.isRequired,
};

export default withRouter(DropboxList);