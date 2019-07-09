import React, { Component } from 'react'
import {showRooms} from '../actions/rooms'
import {connect} from 'react-redux'

class RoomContainer extends Component {
    state ={
        room: ''
    }

    url = 'https://secure-ravine-16222.herokuapp.com'
    source = new EventSource(`${this.url}/stream`)

    componentDidMount(){
        console.log('props', this.props.rooms)
        this.source.onmessage = this.props.showRooms
    }

    onChange = (event) => {
        const {value} = event.target
        this.setState({room: value})
    }

    render() {
        const rooms = this.props.rooms.map((room, index) => <div key={index}>{room}</div>)
        return (
            <div>
                Is this working then ?
                
            </div>
        )
    }
}

function mapStateToProps(rState) {
    const {rooms} = rState
    return {rooms}
}

export default connect(mapStateToProps, {showRooms})(RoomContainer)
