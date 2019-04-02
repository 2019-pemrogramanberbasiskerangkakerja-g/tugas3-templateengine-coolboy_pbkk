import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nama from './name';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>    
          <Route path='/nama' component={Nama}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;