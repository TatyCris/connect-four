import { CURRENT_ROOM } from '../actions/rooms'
const initialState = ''

export default function rooms(state = initialState, { type, payload }) {
    switch (type) {
        case CURRENT_ROOM:
            return payload
        default:
            return state
    }
}