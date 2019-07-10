import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class RoomsContainer extends Component {
   

    render() {
        const rooms = this.props.rooms
            .map((room, index) => <Link key={room.id} to={`/rooms/${room.id}/columns`} > <div key={index}>{room.name} ({room.id})</div> </Link>)

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
