import React, { Component } from 'react'
import './App.css';
import RoomContainer from './components/RoomContainer';
import GameContainer from './components/GameContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <RoomContainer />
        <GameContainer />
        </header>
      </div>
    )
  }
}