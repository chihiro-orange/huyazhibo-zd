import axios from './index'
// 表单注册
export let Login = (obj)=>{
    return axios('/login',obj,'POST')
}