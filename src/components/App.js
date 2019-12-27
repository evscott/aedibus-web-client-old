import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import HeaderContainer from "./Header/HeaderContainer";
import FooterContainer from "./Footer/FooterContainer";

class App extends Component {
  render() {
    return (
        <div className="App">
            <HeaderContainer/>
            <Routes />
            <FooterContainer/>
        </div>
    );
  }
}

export default App;