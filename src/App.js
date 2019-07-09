import React, { Component } from 'react'
import './App.css';
import RoomContainer from './components/roomContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <RoomContainer />

      </div>
    )
  }
}