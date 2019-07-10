import {SET_ROW} from '../actions/column'
const initialState = []

export default function row (state = initialState, {type, payload}) {
    switch (type) {
        case SET_ROW:
            return payload
        default: return state
    }
}