import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import './ColumnsContainer.css'
import { currentMovement } from '../actions/movement'

class ColumnsContainer extends Component {
    // baseUrl = 'https://connect4-the-best-game.herokuapp.com'
    baseUrl = 'http://localhost:5000'

    onClick = (room, column) => {
        const url = `${this.baseUrl}/rooms/${room.id}/columns`

        request
            .put(url)
            .send({ index: column.index })
            .catch(err => err)
    }

    render() {
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
                                ? 'Ex'
                                : 'Ohe'
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

                        {column.index}
                    </div>
                })
            : 'Loading...'

        return (
            <div className='columns' >
                {columns}
                {/* <Column /> */}
                {/* <div id="connect-four">
                    <ul className="board" cols="7" rows="6">
                    </ul>
                </div> */}
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