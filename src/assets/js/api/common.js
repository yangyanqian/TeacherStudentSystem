/* 
 *  公共接口列表
 */
import axios from '../http'
import store from '../../../vuex/store'

const baseUrl = store.state.baseUrl;
const apiName = {
    //登录
    login(params){
        return axios.post(`${baseUrl}/study/login`, {
            params: params
        })
    }
}   

export default apiName;