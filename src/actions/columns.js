export const EVENT = 'EVENT'

export function onEvent (event) {
    const { data } = event
    const columns = JSON.parse(data)
    console.log('columns test', columns);

    return {
        type: EVENT,
        payload: columns
    }
}