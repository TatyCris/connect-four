import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'

class RoomContainer extends Component {
    url = 'https://secure-ravine-16222.herokuapp.com/rooms'

    source = new EventSource(`${this.url}/stream`)

    componentDidMount() {
        this.source.onmessage = this.props.onEvent
    }

    render() {
        console.log("this.props.getRooms", this.props.getRooms);
        const room = this.props.getRooms.map((room, index) => <div key={index}>{room.id}</div>)

        return (
            <div>
                room!
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
