export const GAME = 'GAME'

export function onEvent (event) {
    console.log('event', event);
    
    const { data } = event
    const game = JSON.parse(data)
    console.log('rooms', game);
    console.log('data', data);
    return {
        type: GAME,
        payload: game
    }
}