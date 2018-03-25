import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Hello, {this.props.name}.<br/>
          Do you want to see the secret area? <a href="/secret">Click here</a>
        </p>

        <div>
            <hr/>
            Please login to begin.
            <hr/>
            <button onClick={this.props.auth.login}>Login</button>
            </div>
      </div>
    );
  }
}
