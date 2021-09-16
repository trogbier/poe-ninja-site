const defaultState = {lines: []}

export default function itemsReducer(state = defaultState, action: any) {
    switch (action.type) {
        case "SET_ITEMS":
            return {...state, lines: [...action.payload]}
        default:
            return state
    }
}