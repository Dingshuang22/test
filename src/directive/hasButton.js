/**
 * 判断用户按钮权限
 */
import Vue from 'vue'
import { store } from '@/export/index.js'
// 自定义指令，判断按钮有没有权限，没有的话移除按钮
export const has = Vue.directive('has',{
    // 按钮上绑定的校验值 v-has = 'LIST'
    inserted:function(el,bindding,vnode){
        var buttonCode = bindding.value;
        // 按钮权限字符串 'DELETE  ADD LIST'
        // console.log('***');
        // console.log(bindding)
        // console.log(buttonCode)
        var buttons = store.state.index.buttons;//从状态中获取按钮权限（逗号拼接的字符串）
        if(buttons.indexOf(buttonCode) <= -1){
            // 没有检索到对应权限，移除按钮
            el.parentNode.removeChild(el);
        }
    }
})