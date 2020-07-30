import router from "../router";

export const _funs = {
    /**
     * 清楚对象所有属性
     */
    emptyObj(obj){
        if(typeof(obj) == 'object'){
            for(var key of Object.keys(obj)){
                obj[key] = '';
            }
            return obj;
        }
    },

    /**
     * 设置本地储存
     */
    setS(k,v,t){
        if(typeof(v) == 'object'){
            v= JSON.stringify(v);
        }
        if(t == 'session'){
            window.sessionStorage.setItem(k,v);
        }else{
            window.localStorage.setItem(k,v);
        }
    },

    /**
     * 获取本地储存
     */
    getS(k,t){
        let val;
        if(t == 'session'){
            val = window.sessionStorage.getItem(k);
        }else{
            val = window.localStorage.getItem(k);
        }
        if(val = null || val.length < 1){
            return val;
        }
        let valPreFix = val.substring(0,1);
        let valSubFix = val.substr(val.length-1);
        // 判断是否为对象
        if(
            (valPreFix == '[' && valSubFix == ']') ||
            (valPreFix == '{' && valSubFix == '}')
        ){
            return JSON.parse(val);
        }
        return val;
    },

     /**
     * 删除本地存储
     */
    delS(k, t) {
        if (t == 'session') {
            window.sessionStorage.removeItem(k);
        } else {
            window.localStorage.removeItem(k);
        }
    },

    /**
     * 检查token
     */
    checkToken(){
        let token = this.getS('token','sessioon');
        if(token == '' || token == null){
            router.replace('/login');
        }
    },

    /**
     * 将10位数字时间戳转化为时间
     */
    dateFormat(time){
        if(time == '' || time == null){
            return '';
        }
        let date = new Date();
        let year = date.getFullYear()+'-';
        let month = date.getMonth() + 1 < 10 ? '0'+ (date.getMonth()+1) + '-' : date.getMonth()+1 + '-';
        let currentDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        let hour = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
        let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
        let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return year + month + currentDate + ' ' + hour + minute + second;
    },

}