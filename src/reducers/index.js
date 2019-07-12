import { combineReducers } from 'redux'
import rooms from './rooms'
import currentUser from './users'
import movement from './movement'

export default combineReducers({
    rooms,
    currentUser,
    movement
})