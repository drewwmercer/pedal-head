import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Hello, {this.props.name}.<br/>
          Do you want to see the secret area? <a href="/secret">Click here</a>
        </p>

{/* Only showing the login button if user is not already authenticated */}
        {!this.props.auth.isAuthenticated() &&
        <div>
            <hr/>
            Please login to begin.
            <hr/>
            <button onClick={this.props.auth.login}>Login</button>
            </div>
        }
      </div>
    );
  }
}
