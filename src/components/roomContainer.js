import React, { Component } from 'react'
import { onEvent } from '../actions/columns'
import { connect } from 'react-redux'

class RoomContainer extends Component {
    state = {
        game: ''
    }

    url = 'https://secure-ravine-16222.herokuapp.com'

    source = new EventSource(`${this.url}/stream`)

    componentDidMount() {
        console.log('props', this.props.onEvent);

        this.source.onmessage = this.props.onEvent
    }

    onChange = (event) => {
        const { value } = event.target
        this.setState({ game: value })
    }

    render() {
        console.log("this.props.columns", this.state);

        const columns = this.props.columns.map((column, index) => <p key={index}>{column.name}</p>)

        return (
            <div>
                working!
                {columns}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { columns } = state
    return { columns }
  }
  
  export default connect(mapStateToProps, { onEvent })(RoomContainer)
