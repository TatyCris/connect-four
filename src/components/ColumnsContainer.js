import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import './ColumnsContainer.css'
import { currentMovement } from '../actions/movement'

class ColumnsContainer extends Component {
    baseUrl = 'https://server-connect-four.herokuapp.com'
    // baseUrl = 'http://localhost:5000'

    onClick = (room, column) => {
        const url = `${this.baseUrl}/rooms/${room.id}/columns`

        request
            .put(url)
            .send({ index: column.index })
            .catch(err => err)
    }

    render() {
        const ricky = <img src={require('../images/ricky.png')} alt="ricky" />
        const morty = <img src={require('../images/morty.jpeg')} alt="morty"/>

        const room = (this.props.rooms.find(room => room.id === parseInt(this.props.match.params.id)))
        const columns = room
            ? room
                .columns
                .map((column, index) => {
                    const rows = column
                        .rows
                        .reverse()
                        .map(row => {
                            const image = row === 'x'
                                ? ricky
                                : morty
                            return <div>
                                <table>{image}</table>
                            </div>
                        })
                    
                    const missing = 6 - column.rows.length
                    const empty = []
                    for (let i = 0; i < missing; i++) {
                        empty.push(<div><table></table></div>)
                    }

                    return <div key={index} onClick={() => this.onClick(room, column)}>
                        {empty}
                        {rows} 
                    </div>
                })
            : 'Loading...'

        return (
            <div className='columns' >
                {columns}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        value: state.movement
    }
}

export default connect(mapStateToProps, { currentMovement })(ColumnsContainer)