export const SET_ROW = 'SET_ROW'

export function updateRows(row) {
    return {
        type: SET_ROW,
        payload: row
    }
}