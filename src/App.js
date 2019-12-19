import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import LoginControl from './Login';
import Assignments from './Assignments';
import About from './About';
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>
        Aedibus
        </h1>
        <h4>This is the HTML header</h4>
        <Link to="/login">Login</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/about">About</Link>
      </header>

      <div style={{paddingLeft: 15}}>
      <Route 
        path="/assignments"
        component={Assignments}
      />
      <Route
        path="/login"
        component={LoginControl}
      />
      <Route
        path="/about"
        component={About}
      />
      </div>
    </div>
  );
}

export default App;
