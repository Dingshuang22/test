// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './mock.js'
import '@/api/index'
import Dialog from '@/components/dialog'

/**
 * 引入样式
 */
import '@/assets/styles/index.scss'

/**
 * 引入所有的导出
 */
import { has, dragDialog, _funs, store, axios } from '@/export/index.js'

/**
 * Element-ui
 */
import './plugins/element'

import 'element-ui/lib/theme-chalk/index.css' // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题

/**
 * pic 懒加载  v-lazy
 */
import VueLazyload from 'vue-lazyload'

/**
 * import i18n
 * 挂载
 */
import { i18n } from '@/lang/i18n'

/**
 * 无限滚动
 */
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(Dialog)

Vue.config.productionTip = false
Vue.prototype._funs = _funs
Vue.prototype.$axios = axios

Vue.use(VueLazyload)

// with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.use(infiniteScroll)

/**
* 路由跳转判断用户信息是否存在 使用钩子函数对路由进行权限跳转
* 1.不存在跳去登录
* 2.存在则作权限或其他操作
*/
/**
 *i18n在js中使用 i18n.t('')
 */
router.beforeEach((to, from, next) => {
  // console.log(to.meta.title)
  // console.log(i18n.t('i18n.excel'))
  document.title = `${i18n.t(to.meta.title)} | Manage-System`
  const role = JSON.parse(sessionStorage.getItem('userInfo')) && JSON.parse(sessionStorage.getItem('userInfo')).username || null
  if (to.meta.title !== from.meta.title) {
    if (!role && to.path !== '/Login') {
      next('/Login')
    } else if (to.meta.permission) {
      // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
      role === 'admin' ? next() : next('/403')
    } else {
      // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
      if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
        Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
          confirmButtonText: '确定'
        })
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n, // 国际化一定要挂载在实例上
  router,
  store,
  components: { App },
  template: '<App/>'
})
