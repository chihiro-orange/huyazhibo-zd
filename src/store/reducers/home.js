import * as types from '../action-types'
let initState = {
    value:'',
    list:[]
}
export default function(state = initState,action){
    let newstate = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.INPUTVALUE:
            newstate.value = action.value
            return newstate
        case types.CLICK:
            newstate.list = action.list
            return newstate
        default:
            return newstate
    }
}