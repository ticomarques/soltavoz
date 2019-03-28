import React, { Component } from 'react';

import { AppHeader }  from './components/AppHeader'
import AppForm from './components/AppForm'

import './App.css';
import './components/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppForm />
      </div>
    );
  }
}

export default App;
