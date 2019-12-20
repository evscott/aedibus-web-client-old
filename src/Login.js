import React from 'react';
import './index.css';

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = 
        {
          isLoggedIn: null,
          username: '',
          password: '',
          dbUser: 'aedibus',
          dbPass: 'ahdibus'
        };
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleChange.bind(this);
    }
  
    handleLoginClick() { this.setState({isLoggedIn: true}); }
    handleLogoutClick() { this.setState({isLoggedIn: false}); }
    handleChange(event) {
        this.setState({
            username: event.target.username,
            password: event.target.password            
        });
    }
    handleSubmit(event) {
        if(this.state.username === this.state.dbUser && this.state.password === this.state.dbPass) {
            this.setState({isLoggedIn: true});
        } else {
            this.setState({isLoggedIn: false});
        }
        event.preventDefault();
    }



    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const username = this.state.username;
        const password = this.state.password;
        const handleChange = this.state.handleChange;
        const handleSubmit = this.state.handleSubmit;
        let button;
        
        if(isLoggedIn) {
            button = <LoginButton isLoggedIn={isLoggedIn} onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton isLoggedIn={isLoggedIn} onClick={this.handleLoginClick}/>;
        }

        return (
        //returns actual page layout of components
        <div style={{paddingLeft: 15}}>
          <Message isLoggedIn={isLoggedIn} />
          <Credentials onChange={handleChange} onSubmit={handleSubmit}/>
          
          <div>
            {button}
          </div>
        </div> 
      );
    }
  }
  
  function Message(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
      return <h1>You are logged in!</h1>;
    }
    return <h1>Login:</h1>;
  }

  function LoginButton(props) {
      const isLoggedIn = props.isLoggedIn;
      if(isLoggedIn) {
        return <button onClick={props.onClick}>Log out!</button>;
      }
      return <button onClick={props.onClick}>Log in!</button>;
  }

  function Credentials(props) {  
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
              <div>
                <label>
                    User:
                </label>
                <div>
                  <input type="text" name="username" onChange={props.handleChange} />
                </div>
              </div>
              <label>
                  Pass:
                  <div>
                    <input type="password" name="password" onChange={props.handleChange} />
                  </div>
              </label>
          </form>
        </div>
      );
  }

export default LoginControl;