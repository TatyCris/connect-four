import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onEvent } from '../actions/game'
import './columns.css'

class ColumnsContainer extends Component {
    render() {
    //     const columns = this.props.rooms[0]

    //     columns.map(col =>{
    //         const rows = col.rows.map(row =>
    //             <div>{rows}</div>)
    //     })
    //     if(col.rows.length > 6) {
    //         const missing = 2 - col.rows.length

    //         for (missing = 0; missing < array.length; missing++) {
    //             rows.push(col)
                
    //         }
    //     }

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
                    {columns}
                </div>
            )
        }else {
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
