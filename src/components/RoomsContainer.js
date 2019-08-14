import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as request from 'superagent'
import { onEvent } from '../actions/rooms'
import { currentRoom } from '../actions/rooms'
import './RoomContainer.css'

class RoomsContainer extends Component {
    state = {
        value: ''
    }

    url = 'https://server-connect-four.herokuapp.com'
    // url = 'http://localhost:5000'

    setRoom = (roomId) => {
        this.props.currentRoom(roomId)
    }

    renderRooms = (room) => {
        return (
            <div key={room.name} className="roomContainer" onClick={() => this.setRoom(room.id)}>
                <Link to={`/rooms/${room.id}/columns`}>{room.name}</Link>
            </div>
        )
    }

    onSubmit = (event) => {
        event.preventDefault()
        request
            .post(`${this.url}/rooms`)
            .send({ name: this.state.value })
            .catch(err => console.log(err))
        this.setState({ value: '' })
    }

    onChange = (event) => {
        const value = event.target.value

        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div className="mainDiv">
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <label>Create Game: </label>
                    <input onChange={this.onChange} value={this.state.value} name={this.state.value}></input>
                    <button>Add</button>
                </form>
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

export default connect(mapStateToProps, { onEvent, currentRoom })(RoomsContainer)
