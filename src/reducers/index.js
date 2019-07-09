import { combineReducers } from 'redux'
import getRooms from './rooms'
import getGame from './game'

export default combineReducers({
    getRooms,
    getGame
})