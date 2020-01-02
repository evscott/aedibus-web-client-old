import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import HeaderContainer from "./components/Header/HeaderContainer";
import FooterContainer from "./components/Footer/FooterContainer";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <HeaderContainer/>
                <Routes />
                <FooterContainer/>
            </div>
        </Router>
    );
  }
}

export default App;