import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'

class RoomsContainer extends Component {
    // baseUrl = 'https://secure-ravine-16222.herokuapp.com'
    baseUrl = 'http://localhost:5000'

    url = `${this.baseUrl}/rooms`

    source = new EventSource(`${this.url}/stream`)

    componentDidMount() {
        this.source.onmessage = this.props.onEvent
    }

    render() {
        const rooms = this.props.rooms
            .map((room, index) => <div key={index}>{room.name} ({room.id})</div>)

        return (
            <div>
                Rooms
                {rooms}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps, { onEvent })(RoomsContainer)
