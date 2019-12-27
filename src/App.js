import React, { Component } from 'react';
import Routes from './components/Routes';
import HeaderContainer from "./components/HomeComponents/Header/HeaderContainer";
import FooterContainer from "./components/HomeComponents/Footer/FooterContainer";

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