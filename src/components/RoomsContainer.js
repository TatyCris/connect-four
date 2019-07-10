import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

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
            .map((room, index) => <Link key={room.name} to={`/rooms/${room.id}/columns`}><div key={index}>{room.name} ({room.id})</div></Link>)

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
