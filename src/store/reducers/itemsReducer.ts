const defaultState = {lines: []}
const collatore = new Intl.Collator()

export default function itemsReducer(state = defaultState, action: any) {
    const sortLines = state.lines

    const isSorted = (atr: any, atr2?: any) => {
        if (atr2) {
            for (let i = 1; i < sortLines.length; i++) {
                if (sortLines[i][atr][atr2] < sortLines[i - 1][atr][atr2]) {
                    return true
                }
            }
        } else {
            for (let i = 1; i < sortLines.length; i++) {
                if (sortLines[i][atr] < sortLines[i - 1][atr]) {
                    return true
                }
            }
        }
    }

    // @ts-ignore

    function sortItems(name: str, type: str,name2?:string) {
        switch (type) {
            case "string":
                if (isSorted(name)) {
                    // @ts-ignore
                    return {...state, lines: [...sortLines.sort((a, b) => collatore.compare(a[name], b[name]))]}
                } else {
                    // @ts-ignore
                    return {...state, lines: [...sortLines.sort((a, b) => collatore.compare(b[name], a[name]))]}
                }
            case "number":
                if (isSorted(name)) {
                    // @ts-ignore
                    return {...state, lines: [...sortLines.sort((a, b) => a.chaosValue - b.chaosValue)]}
                } else {
                    // @ts-ignore
                    return {...state, lines: [...sortLines.sort((a, b) => b.chaosValue - a.chaosValue)]}
                }
            case "2":
                if (isSorted(name, name2)) {
                    return {
                        ...state,
                        // @ts-ignore
                        lines: [...sortLines.sort((a, b) => a[name][name2] - b.a[name][name2] )]
                    }
                } else {
                    return {
                        ...state,
                        // @ts-ignore
                        lines: [...sortLines.sort((a, b) => b.a[name][name2] - a.a[name][name2] )]
                    }
                }
        }
    }

    switch (action.type) {
        case "SET_ITEMS":
            return {...state, lines: [...action.payload]}
        case "SET_SORT_NAME":
            return sortItems('name','string')
        case "SET_SORT_VALUE":
            return sortItems('chaosValue','number')
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