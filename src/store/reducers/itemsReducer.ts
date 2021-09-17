const defaultState = {lines: []}
const collatore = new Intl.Collator()

export default function itemsReducer(state = defaultState, action: any) {
    const sortLines = state.lines

    const isSorted = (atr: any, atr2?: any) => {
        if (atr2){
            for (let i = 1; i < sortLines.length; i++) {
                if (sortLines[i][atr][atr2] < sortLines[i - 1][atr][atr2]) {
                    return true
                }
            }
        }else{
            for (let i = 1; i < sortLines.length; i++) {
                if (sortLines[i][atr] < sortLines[i - 1][atr]) {
                    return true
                }
            }
        }
    }

    switch (action.type) {
        case "SET_ITEMS":
            return {...state, lines: [...action.payload]}
        case "SET_SORT_NAME":
            // @ts-ignore
            if (isSorted('name')) {
                // @ts-ignore
                return {...state, lines: [...sortLines.sort((a, b) => collatore.compare(a.name, b.name))]}
            } else {
                // @ts-ignore
                return {...state, lines: [...sortLines.sort((a, b) => collatore.compare(b.name, a.name))]}
            }
        case "SET_SORT_VALUE":
            // @ts-ignore
            if (isSorted('chaosValue')) {
                // @ts-ignore
                return {...state, lines: [...sortLines.sort((a, b) => a.chaosValue - b.chaosValue)]}
            } else {
                // @ts-ignore
                return {...state, lines: [...sortLines.sort((a, b) => b.chaosValue - a.chaosValue)]}
            }
        case "SET_SORT_LISTED":
            // @ts-ignore
            if (isSorted('listingCount')) {
                // @ts-ignore
                return {...state, lines: [...sortLines.sort((a, b) => a.listingCount - b.listingCount)]}
            } else {
                // @ts-ignore
                return {...state, lines: [...sortLines.sort((a, b) => b.listingCount - a.listingCount)]}
            }
        case "SET_SORT_7DAYS":
            // @ts-ignore
            if (isSorted('lowConfidenceSparkline', 'totalChange')) {
                return {
                    ...state,
                    // @ts-ignore
                    lines: [...sortLines.sort((a, b) => a.lowConfidenceSparkline.totalChange - b.lowConfidenceSparkline.totalChange)]
                }
            } else {
                return {
                    ...state,
                    // @ts-ignore
                    lines: [...sortLines.sort((a, b) => b.lowConfidenceSparkline.totalChange - a.lowConfidenceSparkline.totalChange)]
                }
            }
        default:
            return state
    }
}