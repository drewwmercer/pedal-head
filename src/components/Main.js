import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          Hello {this.props.name}, to get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
