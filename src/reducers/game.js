import { GAME } from '../actions/game'
const initialState = []

export default function getGames (state = initialState, { type, payload }) {
    switch (type) {
        case GAME:
            return payload
        default:
            return state
    }
}