import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'

class RoomContainer extends Component {
    // url = 'https://secure-ravine-16222.herokuapp.com'
    url = 'https:/localhost:5000'

    source = new EventSource(`${this.url}/stream`)

    componentDidMount() {
        this.source.onmessage = this.props.onEvent
    }

    render() {
        console.log("this.props.columns", this.props);
        const room = this.props.getRooms.map((room, index) => <p key={index}>{room.name}</p>)

        return (
            <div>
                working!
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
