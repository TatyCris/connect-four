import { combineReducers } from 'redux'
import rooms from './rooms'
import currentUser from './users'
import currentRoom from './room'

export default combineReducers({
    rooms,
    currentUser,
    currentRoom
})