export const SET_ROOM = 'SET_ROOM'

export function showRooms (event) {
    const {data} = event
    const rooms = JSON.parse(data)
    console.log('rooms test', rooms)

    return {
        type: SET_ROOM,
        payload: rooms
    }
}