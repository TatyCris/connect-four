import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'
import './rooms.css'

class RoomsContainer extends Component {


    render() {
        const rooms = this.props.rooms
            .map((room, index) => <div
                key={index}
                className="roomContainer"
                style={{backgroundImage: `url("https://source.unsplash.com/collection/181581/480x160")`}}
            >{room.name} ({room.id})</div>)

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
