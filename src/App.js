import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Secret from "./components/Secret";

class App extends Component {
  render() {
let mainComponent = "";
switch(this.props.location) {
  case "":
    mainComponent = <Main />;
    break;
  case "secret":
    mainComponent = <Secret />;
    break;
  default:
    mainComponent = <Main />;

}

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {this.props.name}</h1>
        </header>
       {mainComponent}
      </div>
    );
  }
}

export default App;
