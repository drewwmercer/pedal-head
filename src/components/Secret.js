import React, { Component } from 'react';

export default class Secret extends Component {
  render() {
    return (
      <div>
        <p>
          This area is secret. Click to return <a href='/'>home</a>.
          <br/>
          <button onClick={this.props.auth.logout}>Logout</button>
        </p>
      </div>
    );
  }
}
