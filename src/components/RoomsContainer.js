import React, { Component } from 'react'
import { onEvent } from '../actions/rooms'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as request from 'superagent'
import './RoomContainer.css'
               
class RoomsContainer extends Component {
    state = {
        value: ''
    }

    renderRooms = (room) => {
        return (
            <div key={room.name} className="roomContainer">
                <Link to={`/rooms/${room.id}/columns`}>{room.name} ({room.id})</Link>
            </div>
        )
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log('hoi!!', event)
        request
            .post('http://localhost:5000/rooms')
            .send({ name: 'game'})
            .end(err => console.log(err))
        this.setState({ value: '' })
    }

    onChange = (event) => {
        const value = event.target.value

        this.setState({
            value: value
        })
    }

    render() {
        console.log('this.props test:', this.props.rooms)
        this.props.rooms
            .map((room, index) => <div
                key={index}
                className="roomContainer"
               
            >{room.name} ({room.id})</div>)

        return (
            <div className="mainDiv">
                Rooms
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <label>Create Game: </label>
                    <input onChange={this.onChange} value={this.state.value} name={this.state.value}></input>
                    <button>Add</button>
                </form>
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
