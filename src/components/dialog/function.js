import Vue from 'vue'
import Component from './func-dialog'

const DialogConstructor = Vue.extend(Component)
let seed = 1

// 删除组件
const removeDialog = (instance) => {
  document.body.removeChild(instance.vm.$el)
  instance.vm.$destroy()
}

const dialog = (options) => {
  if (Vue.prototype.$isSercer) return
  const instance = new DialogConstructor({
    propsData: options
  })
  const id = `dialog_instance_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  // 插入组件
  document.body.appendChild(instance.vm.$el)

  // 关闭遮罩层
  const closeMask = () => {
    instance.vm.value = false
  }

  // 监听事件
  instance.vm.$on('close', () => {
    closeMask()
    removeDialog(instance)
  })

  instance.vm.$on('cancel', () => {
    instance.vm.$props.parentclick('cancel')
    removeDialog(instance)
  })

  instance.vm.$on('confirm', () => {
    instance.vm.$props.parentclick('confirm')
    removeDialog(instance)
  })

  instance.vm.$on('danger', () => {
    instance.vm.$props.parentclick('danger')
    removeDialog(instance)
  })

  // 返回组件实例 可进行下一步操作
  return instance.vm // 可以操作dom
}

export default dialog
