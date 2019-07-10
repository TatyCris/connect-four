import { combineReducers } from 'redux'
import rooms from './rooms'
import currentUser from './users'
import row from './column'

export default combineReducers({
    rooms,
    currentUser,
    row
})