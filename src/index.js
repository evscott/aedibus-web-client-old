import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import LoginControl from './Login';
import Assignment from './Assignments/Assignment';
import AssignDetail from './Assignments/AssignDetail';
import About from './About';

//Debug data for populating assignment list!
const data= [
    {
        id: 1731,
        name: 'Introduction to Java',
        description: "detailed desc. goes here",
        file: 'associated file goes here'
    },
    {
        id: 2611,
        name: 'Data Structures',
        description: "detailed desc. goes here",
        file: 'associated file goes here'
    },
    {
        id: 3911,
        name: 'Operating Systems',
        description: "detailed desc. goes here",
        file: 'associated file goes here'
    },
];

ReactDOM.render(
    //Page routing can be kept in index file

    //BrowserRouter allows app to have nice webpaths w/o ugly hashing :^)
    <BrowserRouter>
        <App/>
        <Route component={App}>
            <Route 
                exact path="/a"
                render={
                    (props) => <Assignment data={data}/>
                }
            />
            <Route
               exact path="/a/:id"
                render={
                    (props) => <AssignDetail data={data}/>
                }
            />
            <Route
                path="/login"
                component={LoginControl}
            />
            <Route
                path="/about"
                component={About}
            />
        </Route>
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
