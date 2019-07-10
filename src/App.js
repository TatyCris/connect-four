import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { onEvent } from './actions/rooms'
import LoginContainer from './components/LoginContainer'
import RoomsContainer from './components/RoomsContainer'
import ColumnsContainer from './components/ColumnsContainer'
import './App.css';


class App extends Component {
  // baseUrl = 'https://secure-ravine-16222.herokuapp.com'
  baseUrl = 'http://localhost:5000'

  url = `${this.baseUrl}/rooms`

  source = new EventSource(`${this.url}/stream`)

  componentDidMount() {
    this.source.onmessage = this.props.onEvent
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={LoginContainer} />
          <Route path="/rooms" component={RoomsContainer} />
          <Route path="/rooms/:id/columns" component={ColumnsContainer} />
        </header>
      </div>
    )
  }
}

export default connect(null, { onEvent })(App)
