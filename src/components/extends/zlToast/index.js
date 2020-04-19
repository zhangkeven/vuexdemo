import Vue from 'vue'
import vueToastMessage from './index.vue'
let ToastTem = Vue.extend(vueToastMessage)
let instance
let timer = null
let zlToast = (options) => {
  if (!instance) {
    instance = new ToastTem()
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
  }
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
    instance.message = ''
  }
  let time = options.duration ? Number(options.duration):2000
  if (typeof options === 'string') {
    instance.message = options
  } else if (typeof options === 'object') {
    let {message, duration} = options
    instance.message = message
    time = duration || 2000
  } else {
    return
  }
  instance.show = true
  timer = setTimeout(() => {
    instance.show = false
    clearTimeout(timer)
    timer = null
    instance.message = ''
  }, time)
}
zlToast.close = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
    instance.message = ''
  }
}
zlToast.install = (Vue) => {
  Vue.prototype.$zlToast = zlToast
}
export default zlToast
