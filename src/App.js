import React, { Component } from 'react'
import './App.css';
import RoomsContainer from './components/RoomsContainer';
import ColumnsContainer from './components/ColumnsContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <RoomsContainer />
        <ColumnsContainer />
        </header>
      </div>
    )
  }
}