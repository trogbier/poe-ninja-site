const defaultState = {count1: 'expedition',count2:''}

export default function reducerLink(state = defaultState, action: any) {
    switch (action.type) {
        case "CHANGE":
            return {...state, count1:`${action.payload}`}
        case "CHANGE2":
            return {...state, count2:`${action.payload}`}
        default:
            return state
    }
}