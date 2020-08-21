/**
 * vueI18n  cnpm install vue-i18n --save-dev
 */
import zh from './zh'
import en from './en'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) // 通过插件的形式挂载
const messages = {
  zh,
  en
}
// console.log("***")
// console.log(messages)
const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages
})
export { messages, i18n}
