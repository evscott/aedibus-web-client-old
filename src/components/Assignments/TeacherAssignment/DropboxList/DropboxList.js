import React, { Component } from 'react'
import {ListGroup} from "react-bootstrap";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './DropboxList.css'

class DropboxList extends Component {
    render() {
        return (
            <ListGroup defaultActiveKey="#link1">
                {
                    this.props.dropboxList.map(dropbox =>
                        <ListGroup.Item key={dropbox.ID} name={dropbox.Name}>
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