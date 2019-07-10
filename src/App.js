import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoomsContainer from './components/RoomsContainer'
import ColumnsContainer from './components/ColumnsContainer'
import { onEvent } from './actions/rooms'
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
          {/* <RoomsContainer /> */}
          <ColumnsContainer />
        </header>
      </div>
    )
  }
}

export default connect(null, { onEvent })(App)
