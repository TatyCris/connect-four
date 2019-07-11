export const ROOMS = 'ROOMS'
export const  CURRENT_ROOM = 'CURRENT_ROOM'

export const onEvent = (event) => {
    const { data } = event
    const rooms = JSON.parse(data)

    return {
        type: ROOMS,
        payload: rooms
    }
}

export const currentRoom = (room) => {
    return {
        type: CURRENT_ROOM,
        payload: room
    }
}
