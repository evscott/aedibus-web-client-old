import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>

      <nav className="App-header">
        <h1>
        <Link to="/">Aedibus</Link>
        </h1>
        <p>This is the HTML header</p>
        <Link to="/login" activeClassName="active">Login</Link>
        <Link to="/a" activeClassName="active">Assignments</Link>
        <Link to="/about" activeClassName="active">About</Link>
      </nav>

    </div>
  );
}

export default App;
