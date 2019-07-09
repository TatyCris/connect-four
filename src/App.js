import React, { Component } from 'react'
import './App.css';
import GameContainer from './components/GameContainer';
import RoomContainer from './components/RoomContainer';


export default class App extends Component {

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <GameContainer />
        <RoomContainer />
        </header>
      </div>
    )
  }
}