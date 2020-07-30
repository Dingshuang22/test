/**
 * 拿回后台的routes 是嵌套模式 可以直接拿去sideBar使用 放在router中需要处理为平级
 */
import _ from 'lodash'
import { routes } from './child'
// console.log(routes)
var routesList = [];
_(routes).forEach(function(val){
  if(!val.children){
    routesList.push(val);
  }else{
    _(val.children).forEach(function(value){
      // 二级菜单添加
      if(!value.children){
        routesList.push(value)
      }else{
        // 三级菜单添加
        _(value.children).forEach(function(v){
          routesList.push(v)
        })
      }
  })
  }
})
export { routesList }
