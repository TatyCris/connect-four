import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'
import './roomContainer.css'

class RoomContainer extends Component {
    url = 'https://secure-ravine-16222.herokuapp.com'
    // url = 'https:/localhost:5000'

    source = new EventSource(`${this.url}/stream`)

    componentDidMount() {
        this.source.onmessage = this.props.onEvent
    }

    render() {
        console.log("this.props.columns", this.props);
        const room = this.props.getRooms.map((room, index) => <div className='divs' key={index}>{room.id}</div>)

        return (
            <div className='wrapper'>
                {room}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { getRooms } = state
    return { getRooms }
  }
  
  export default connect(mapStateToProps, { onEvent })(RoomContainer)
