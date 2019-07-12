import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import './ColumnsContainer.css'

class ColumnsContainer extends Component {
    state = {
        player: true
    }

    // baseUrl = 'https://connect4-the-best-game.herokuapp.com'
    baseUrl = 'http://localhost:5000'

    toggle = () => {
        this.setState({
            player: !this.state.player
        })
    }

    onClick = (room, column) => {
        const url = `${this.baseUrl}/rooms/${room.id}/columns`
        this.toggle()
        request
            .put(url)
            .send({ player: (this.state.player ? 'x' : 'o'), index: column.index })
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
                        .map(row => <div>
                            {row}
                        </div>)

                    return <div key={index} onClick={() => this.onClick(room, column)}>
                        {rows}

                        {column.index}
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
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(ColumnsContainer)