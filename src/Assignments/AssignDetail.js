import React, {Component, useState} from 'react';
import {useRouteMatch} from 'react-router-dom';
import samples from "./data";
function AssignDetail(props) {
    let match = useRouteMatch({
        path: '/a/:id',
        strict: true,
        sensitive: true
    })
    const data = samples.data;
    return (
        <div>
            <Detail data={data} match={match}/>
        </div>
    )
}

function Detail(props) {
    const id = props.match.params.id;
    const data = props.data;

    const assignment = data.filter(n => n.id == id)

    return(
        <div>
            <h1>{assignment.id}</h1>
            <p>ID: {id}</p>
            <p>{assignment.name}</p>
        </div>
    )
}

function NotFound() {
    return (
    
        <div>
            <h1>assignment not found!</h1>
        </div>

    )
}

export default AssignDetail;
