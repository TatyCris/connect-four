import React, { Component } from 'react'
import './App.css';
import RoomsContainer from './components/RoomsContainer';
import ColumnsContainer from './components/ColumnsContainer';
import {Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Route path="/rooms" component={RoomsContainer} /> 
        <Route path="/rooms/:id/columns" component={ColumnsContainer} />
        </header>
      </div>
    )
  }
}