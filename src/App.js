import React, { Component } from 'react';
import logo from './bicycle-wheel-png.png';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

class App extends Component {
  render() {
    let mainComponent = '';
    switch (this.props.location) {
      case '':
        mainComponent = <Main {...this.props} />;
        break;
      case 'callback':
        mainComponent = <Callback />;
        break;
      case 'secret':
        mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound />;
        break;
      default:
        mainComponent = <NotFound />;
    }

    return <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">Welcome to Pedalhead, {this.props.name}!</h1>
        </header> */}
        <div class="jumbotron jumbotron-fluid" id="Jtron">
          <div class="container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 class="display-3" id="Pedalheader">
              PEDALHEAD
            </h1>
            
              <p class="lead">
                An application for the busy cyclist who has more on their
                mind than gears and wrenches...{' '}
              </p>
           
          </div>
        </div>
        {mainComponent}
      </div>;
  }
}

export default App;
