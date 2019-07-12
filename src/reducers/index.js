import { combineReducers } from 'redux'
import rooms from './rooms'
import columns from './columns'
import currentUser from './users'
import currentRoom from './room'

export default combineReducers({
    rooms,
    columns,
    currentUser,
    currentRoom,
})