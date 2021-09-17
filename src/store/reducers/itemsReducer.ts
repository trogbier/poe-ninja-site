const defaultState = {lines: []}
const collatore = new Intl.Collator()

export default function itemsReducer(state = defaultState, action: any) {
    switch (action.type) {
        case "SET_ITEMS":
            return {...state, lines: [...action.payload]}
        case "SET_SORT_NAME":
            // @ts-ignore
            if (state.lines[0].name < state.lines[1].name) {
                // @ts-ignore
                return {...state, lines: [...state.lines.sort((a, b) => collatore.compare(b.name, a.name))]}
            } else {
                // @ts-ignore
                return {...state, lines: [...state.lines.sort((a, b) => collatore.compare(a.name, b.name))]}
            }
        case "SET_SORT_VALUE":
            // @ts-ignore
            if (state.lines[0].chaosValue > state.lines[1].chaosValue) {
                // @ts-ignore
                return {...state, lines: [...state.lines.sort((a, b) => a.chaosValue - b.chaosValue)]}
            } else {
                // @ts-ignore
                return {...state, lines: [...state.lines.sort((a, b) => b.chaosValue - a.chaosValue)]}
            }
        default:
            return state
    }
}