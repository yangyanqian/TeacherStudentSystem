/* 
 * 学生模块接口列表
 */
import axios from '../http'
import qs from 'qs'
import store from '../../../vuex/store'

const baseUrl = store.state.baseUrl;
const apiName = {
    //保存请假信息
    save_leave(params){
        return axios.post(`${baseUrl}/study/saveLeave`, qs.stringify(params));
    },
    //获取请假历史列表
    getList(){
        return axios.post(`${baseUrl}/study/leaveList`, {});
    }
}   

export default apiName;