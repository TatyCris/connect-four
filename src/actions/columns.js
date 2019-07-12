export const COLUMNS = 'COLUMNS'

export const onEvent = (event) => {
    const { data } = event
    const columns = JSON.parse(data)

    return {
        type: COLUMNS,
        payload: columns
    }
}