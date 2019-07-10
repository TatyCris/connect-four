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
                if(!column){
                    res.status(404).send(column)
                } else {
                    column.map(col =>{
                        const rows = col.rows.map(row=>{
                            {<div>{row}</div>}
                        })
            
                        if(col.rows.length > 6){
                            const missing = 6 - col.rows.length
            
                            for (missing; missing < rows; missing++) {
                                rows.push(col)
                            }
                        }
                    })
                }
            })
    }



    render() {
        console.log('whatsthis?',this.props.columns[0])
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
        columns: state.rooms
    }
}

export default connect(mapStateToProps, { onEvent, updateRows })(ColumnsContainer)
