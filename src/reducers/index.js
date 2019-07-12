import { combineReducers } from 'redux'
import rooms from './rooms'
import currentUser from './users'

export default combineReducers({
    rooms,
    currentUser,
})