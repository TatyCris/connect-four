import React, { Component } from 'react'
import { onEvent } from '../actions/game'
import { connect } from 'react-redux'

class GameContainer extends Component {
    // id = this.props.id
    id = 7
    url = `https://secure-ravine-16222.herokuapp.com/rooms/${this.id}/games`

    source = new EventSource(`${this.url}/stream`)

    componentDidMount() {
        this.source.onmessage = this.props.onEvent
    }

    render() {
        console.log("this.props.getGame", this.props.getGame);
        const gameBoard = this.props.getGame.map((game, index) => <div key={index}>{game.id}</div>)

        return (
            <div>
                gameBoard!
                {gameBoard}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { getGame } = state
    return { getGame }
  }
  
  export default connect(mapStateToProps, { onEvent })(GameContainer)
