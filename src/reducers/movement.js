import { MOVEMENT } from '../actions/movement'
const initialState = ''

export default function user(state = initialState, { type, payload }) {
    switch (type) {
        case MOVEMENT:
            return payload
        default:
            return state
    }
}