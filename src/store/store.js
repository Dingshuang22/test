/**
 * vuex状态管理
 */

import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
//  import getters from './getters';
Vue.use(Vuex)
//  console.log("***")
//  console.log(index)
// console.log(getters)

// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)

// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

const store = new Vuex.Store({
  modules: {
    index
  }
})

export {store}
