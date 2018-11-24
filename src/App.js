import React, { Component } from 'react';
import './App.css';
import NoteDashboard from './components/note/NoteDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteDashboard />
      </div>
    );
  }
}

export default App;
