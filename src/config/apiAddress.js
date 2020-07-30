/**
 * api接口地址管理
 */
import { axios , apiBase } from '@/export/index.js'

class Api {
    login(data) {//登录
        return axios.post('/auth', data);
    };
    password(data) {//修改密码
        return axios.post('/api/v1/change/pwd', data);
    };
    getDevices() {//获取硬件列表
        return axios.get('/api/v1/hardware/conf/list');
    };
    addDevice(data) {//添加硬件
        return axios.post('/api/v1/hardware/conf', data);
    };
    deleteDevice(data) {//删除硬件
        return axios.delete(`/api/v1/hardware/conf/${data}`);
    };
    deleteSelectedDevice(data) {//批量删除硬件
        return axios.delete(`/api/v1/hardware/conf`, { data });
    };
    getCommands(data) {//获取指令列表
        return axios.get(`/api/v1/cmd/conf/device/${data}`);
    };
    addCommand(data) {//添加指令
        return axios.post('/api/v1/cmd/conf', data);
    };
    deleteCommand(data) { //删除指令
        return axios.delete(`/api/v1/cmd/conf/${data}`);
    };
    deleteSelectedCommand(data) {//批量删除指令
        return axios.delete(`/api/v1/cmd/conf`, { data });
    };
    export() { //下载
        return apiBase.baseUrl + 'api/v1/export';
    };
    import() { //上传
        return apiBase.baseUrl + 'api/v1/import';
    }
}
const api = new Api();
export { api };