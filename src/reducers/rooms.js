import { EVENT } from '../actions/rooms'
const initialState = []

export default function getRooms (state = initialState, { type, payload }) {
    switch (type) {
        case EVENT:
            return payload
        default:
            return state
    }
}