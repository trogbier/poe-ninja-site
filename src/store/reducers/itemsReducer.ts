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

    function sortItems(name: string, type: string, name2?: any) {
        switch (type) {
            case "string":
                if (isSorted(name)) {
                    return {...state, lines: [...sortLines.sort((a, b) => collatore.compare(a[name], b[name]))]}
                } else {
                    return {...state, lines: [...sortLines.sort((a, b) => collatore.compare(b[name], a[name]))]}
                }
            case "number":
                if (isSorted(name)) {
                    return {...state, lines: [...sortLines.sort((a, b) => a[name] - b[name])]}
                } else {
                    return {...state, lines: [...sortLines.sort((a, b) => b[name] - a[name])]}
                }
            case "2":
                if (isSorted(name, name2)) {
                    return {
                        ...state, lines: [...sortLines.sort((a, b) => a[name][name2] - b[name][name2])]
                    }
                } else {
                    return {
                        ...state, lines: [...sortLines.sort((a, b) => b[name][name2] - a[name][name2])]
                    }
                }
        }
    }

    switch (action.type) {
        case "SET_ITEMS":
            return {...state, lines: [...action.payload]}
        case "SET_SORT_NAME":
            return sortItems('name', 'string')
        case "SET_SORT_VALUE":
            return sortItems('chaosValue', 'number')
        case "SET_SORT_LEVEL":
            return sortItems('levelRequired', 'number')
        case "SET_SORT_LISTED":
            return sortItems('listingCount', 'number')
        case "SET_SORT_VARIANT":
            return sortItems('variant', 'number')
        case "SET_SORT_STACK_SIZE":
            return sortItems('stackSize', 'number')
        case "SET_SORT_MAP_TIER":
            return sortItems('mapTier', 'number')
        case "SET_SORT_7DAYS":
            return sortItems('lowConfidenceSparkline', '2', 'totalChange')
        default:
            return state
    }
}