import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import './ColumnsContainer.css'

class ColumnsContainer extends Component {
    // url = 'https://secure-ravine-16222.herokuapp.com'
    url = 'http://localhost:5000'

    onClick = (column) => {
        request
            .put(`${this.url}/rooms/${this.props.currentRoom}/columns`)
            // if (condition) {
                
            // }
            .send({player: 'i', index: column})
            .catch(err => err)
    }

    render() {
        console.log( 'room' ,this.props.currentRoom);
        console.log( 'rooms' ,this.props.rooms.find(room => room.id === this.props.currentRoom))
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
        currentRoom: state.currentRoom
    }
}

export default connect(mapStateToProps)(ColumnsContainer)