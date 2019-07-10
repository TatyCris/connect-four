import React, { Component } from 'react'
import { onEvent } from '../actions/game'
import { connect } from 'react-redux'
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
                        .map(row => <div key={index}>{row}</div>)

                    return <div key={index}>
                        {rows}
                        
                        {column.id}
                    </div>
                })

            return (
                <div className='columns'>
                    Columns:

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
