const defaultState = {count1: 'expedition',count2:'',form:'welcome'}

export default function reducerLink(state = defaultState, action: any) {
    switch (action.type) {
        case "CHANGE":
            return {...state, count1:`${action.payload}`,form:'welcome'}
        case "CHANGE2":
            return {...state, count2:`${action.payload}`,form:'weq'}
        default:
            return state
    }
}