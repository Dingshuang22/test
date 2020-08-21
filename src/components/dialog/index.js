import Dialog from './Dialog.vue'
import dialog from './function'

export default (Vue) => {
  Vue.component(Dialog.name, Dialog)
  Vue.prototype.$dialog = dialog
}
