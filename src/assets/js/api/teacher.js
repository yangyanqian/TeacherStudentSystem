/* 
 * 老师模块接口列表
 */
import axios from '../http'
import store from '../../../vuex/store'

const baseUrl = store.state.baseUrl;
const apiName = {
    //获取请假申请列表
    getList(){
        return axios.post(`${baseUrl}/study/leaveApplyList`, {});
    },
    //老师审批学生请假申请
    operLeave(params){
        return axios.post(`${baseUrl}/study/operLeave`, {
            params
        });
    }
}   

export default apiName;