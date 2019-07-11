import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onEvent } from '../actions/game'
import './columns.css'
import * as request from 'superagent'

class ColumnsContainer extends Component {

    // url = 'https://secure-ravine-16222.herokuapp.com'
    url = 'http://localhost:5000'
    onClick = (column) => {
        console.log('column test:', column)
        request
            .put(`${this.url}/rooms/1/columns`)
            .then(res => { return console.log('whats thiz?',res)})
    }

    render() {
        if (this.props.rooms.length) {
            const room = this.props.rooms[0] //find
            const columns = room
                .columns
                .map((column, index) => {
                    const rows = column
                        .rows
                        .map(row => <div onClick={() => this.onClick(column.index)}>
                            {row}
                        </div>)

                    return <div key={index} onClick={this.onClick}>
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
        rooms: state.rooms
    }
}

export default connect(mapStateToProps, { onEvent })(ColumnsContainer)
