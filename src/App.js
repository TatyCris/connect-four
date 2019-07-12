import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from "react-router-dom"
import { onEvent } from './actions/rooms'
import LoginContainer from './components/LogInContainer'
import RoomsContainer from './components/RoomsContainer'
import ColumnsContainer from './components/ColumnsContainer'
import './App.css';
import FooterContainer from './components/FooterContainer';


class App extends Component {
  // baseUrl = 'https://connect4-the-best-game.herokuapp.com'
  baseUrl = 'http://localhost:5000'

  url = `${this.baseUrl}/rooms`

  source = new EventSource(`${this.url}/stream`)

  componentDidMount() {
    this.source.onmessage = this.props.onEvent
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <h1>Connect 4</h1>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/rooms" component={RoomsContainer} />
        <Route exact path="/rooms/:id/columns" component={ColumnsContainer} />
        <FooterContainer />
      </div>
    )
  }
}

export default connect(null, { onEvent })(App)