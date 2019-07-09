import { ROOMS } from '../actions/rooms'
const initialState = []

export default function getRooms (state = initialState, { type, payload }) {
    switch (type) {
        case ROOMS:
            return payload
        default:
            return state
    }
}