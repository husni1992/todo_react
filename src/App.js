import React, { Component } from 'react';
import TodoHome from './containers/TodoHome';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoHome />
        </header>
      </div>
    );
  }
}

export default App;
