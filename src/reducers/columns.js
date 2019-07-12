import { COLUMNS } from '../actions/columns'
const initialState = []

export default function columns(state = initialState, { type, payload }) {
    switch (type) {
        case COLUMNS:
            return payload
        default:
            return state
    }
}