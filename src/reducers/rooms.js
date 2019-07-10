import { ROOMS } from '../actions/rooms'
const initialState = []

export default function rooms (state = initialState, { type, payload }) {
    switch (type) {
        case ROOMS:
            return payload
        default:
            return state
    }
}