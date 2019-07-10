import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onEvent } from '../actions/game'
import './columns.css'

class ColumnsContainer extends Component {
    render() {
        if (this.props.rooms.length) {
            const room = this.props.rooms[0] //find
            const columns = room
                .columns
                .map((column, index) => {
                    const rows = column
                        .rows
                        .map(row => <div>{row}</div>)

                    return <div key={index}>
                        {rows}
                        
                        {column.id}
                    </div>
                })

            return (
                <div className='columns'>
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
        rooms: state.rooms
    }
}

export default connect(mapStateToProps, { onEvent })(ColumnsContainer)