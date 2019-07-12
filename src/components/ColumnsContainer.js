import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import './ColumnsContainer.css'
import { onEvent } from '../actions/columns'

class ColumnsContainer extends Component {
    // baseUrl = 'https://secure-ravine-16222.herokuapp.com'
    baseUrl = 'http://localhost:5000'

    url = `${this.baseUrl}/rooms/${this.props.currentRoom}/columns`

    source = new EventSource(`${this.url}/stream`)

    componentDidMount() {
        this.source.onmessage = this.props.onEvent
    }

    onClick = (column) => {
        request
            .put(`${this.url}`)
            // if (condition) {
            //implement condition to get the correct player
            // }
            .send({ player: 'i', index: column })
            .catch(err => err)
    }

    render() {
        console.log('room', this.props.currentRoom);
        console.log('rooms', this.props.rooms.find(room => room.id === this.props.currentRoom))
        console.log('room[0]', this.props.rooms[0])

        if (this.props.rooms.length) {
            const room = (this.props.rooms.find(room => room.id === this.props.currentRoom))
            const columns = room
                .columns
                .map((column, index) => {
                    const rows = column
                        .rows
                        .reverse()
                        .map(row => <div>
                            {row}
                        </div>)

                    return <div key={index} onClick={() => this.onClick(column.index)}>
                        {rows}

                        {column.id}
                    </div>
                })

            return (
                <div className='columns' >
                    {columns}
                </div>
            )
        } else {
            return 'Loading...'
        }
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        currentRoom: state.currentRoom,
        columns: state.columns
    }
}

export default connect(mapStateToProps, {onEvent})(ColumnsContainer)