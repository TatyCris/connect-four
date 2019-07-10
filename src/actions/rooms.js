export const ROOMS = 'ROOMS'

export function onEvent (event) {
    const { data } = event
    const rooms = JSON.parse(data)

    return {
        type: ROOMS,
        payload: rooms
    }
}