import * as TYPES from '../action-types'
import {getBaidu} from '../../api/home'
let home = {
    updateInput(value){
        return {
            type:TYPES.INPUTVALUE,
            value
        }
    },
    click(value){
        return function(dispath,getState){
            getBaidu({wd:value}).then(res=>{
                dispath({
                    type:TYPES.CLICK,
                    list:res.s
                })
                let result = res.s
                return result
            })
        }
    }
}
export default home