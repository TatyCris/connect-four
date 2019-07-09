export const EVENT = 'EVENT'

export function onEvent (event) {
    console.log('event', event);
    
    const { data } = event
    const rooms = JSON.parse({data})
    console.log('columns test', rooms);

    return {
        type: EVENT,
        payload: rooms
    }
}