import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onEvent } from '../actions/game'
import { updateRows} from '../actions/column'
import './columns.css'
import * as request from 'superagent'

class ColumnsContainer extends Component {
    // url = 'https://secure-ravine-16222.herokuapp.com'
    url = 'http://localhost:5000/rooms/1'

    onClick = () => {
        console.log('DOESTHISCLICKS?!')
        request
            .put(`${this.url}/columns`)
            .then(res => {
                console.log('res?', res)
            })
    }
    
    render() {
        console.log(this.props.row)
        if (this.props.rooms.length) {
            const room = this.props.rooms[0] //find
            const columns = room
                .columns
                .map((column, index) => {
                    const rows = column
                        .rows
                        .map(row => <div>{row}</div>)
                        if(rows.length < 6){
                            const missing = 6 - rows.length

                            for(missing; missing< rows.length; missing++){
                                rows.push('e')
                            }
                            return column.id
                        }
                    return <div key={index}>
                        {rows}

                        {column.id}
                    </div>
                })

            return (
                <div className='columns' onClick={this.onClick}>
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
        row: state.rooms
    }
}

export default connect(mapStateToProps, { onEvent, updateRows })(ColumnsContainer)
