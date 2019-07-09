import { EVENT } from '../actions/columns'
const initialState =[]

export default function columns (state = initialState, { type, payload }) {
    switch (type) {
        case EVENT:
            return payload
        default:
            return state
    }
}