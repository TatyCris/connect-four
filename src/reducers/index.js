import { combineReducers } from 'redux'
import columns from './columns.js'
import room from './room'

export default combineReducers({
    columns,
    room
})