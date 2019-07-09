export const ROOMS = 'ROOMS'

export function onEvent (event) {
    // console.log('event', event);
    
    const { data } = event
    const rooms = JSON.parse(data)
    // console.log('rooms', rooms);
    // console.log('data', data);

    return {
        type: ROOMS,
        payload: rooms
    }
}