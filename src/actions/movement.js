export const MOVEMENT = 'MOVEMENT'

export const currentMovement = (value) => {
    return {
        type: MOVEMENT,
        payload: value
    }
}