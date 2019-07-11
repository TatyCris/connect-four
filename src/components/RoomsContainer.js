import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './rooms.css'

class RoomsContainer extends Component {
    renderRooms = (room) => {
        return (
            <div key={room.name} className="roomContainer">
                <Link to={`/rooms/${room.id}/columns`}>{room.name} ({room.id})</Link>
            </div>
        )
    }

    render() {
        console.log('RoomsProps', this.props.history);
        return (
            <div>
                Rooms
                {this.props.rooms.map(this.renderRooms)}
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
