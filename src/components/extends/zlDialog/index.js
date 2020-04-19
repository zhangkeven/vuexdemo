import Vue from 'vue'
import vuezlLoading from './index.vue'
let Loading = Vue.extend(vuezlLoading)
let instance
let timer = null
//创建构造器
let zlDialog = (options) => {
 if (!instance) {
   instance = new Loading()
   instance.vm = instance.$mount()
   document.body.appendChild(instance.vm.$el)
    instance.show = true
    instance.inputValue = ''
 }else{
   instance.show = true
   instance.inputValue = ''
 }
 if (typeof options === 'string') {
   instance.loadingText = options
 } else if (typeof options === 'object') {
   instance.topTitle = options.topTitle ? options.topTitle :''
   instance.confirmText = options.confirmText ? options.confirmText :'确定'
   instance.cancelText = options.cancelText ? options.cancelText :'取消'
   instance.contentText = options.contentText ? options.contentText :'确定关闭吗?'
   instance.isModalClose = options.isModal ? options.isModal :false
   instance.loadingText = options.loadingText ? options.loadingText :'加载中'
   instance.inputTitle = options.inputTitle ? options.inputTitle :'标题'
   instance.onlybtn = options.onlybtn ? options.onlybtn :false
   instance.inputPlaceholder = options.inputPlaceholder ? options.inputPlaceholder :'请输入内容'
   instance.type = options.type ? options.type :'text'

     instance.TreeTitle = options.TreeTitle ? options.TreeTitle :''////权限-菜单设置 -标题
     instance.popupTypeName = options.popupTypeName ? options.popupTypeName :'default'  ////权限-菜单设置
     instance.menuProps = options.menuProps ? options.menuProps :{}  ////权限-菜单设置
     instance.menuData = options.menuData ? options.menuData :[]  ////权限-菜单设置
     if(options.cancelbox && typeof(options.cancelbox)==='function'){////权限-菜单设置
         instance.cancelBoxCallBack = options.cancelbox
     }
     if(options.confirm && typeof(options.confirm)==='function'){
     instance.confirmCallBack = options.confirm
   }
   if(options.cancel && typeof(options.cancel)==='function'){
     instance.cancelCallBack = options.cancel
   }
   if(options.getValue && typeof(options.getValue)==='function'){
     instance.getValueCallBack = options.getValue
   }
     if(options.menuTreeConfirm && typeof(options.menuTreeConfirm)==='function'){////权限-菜单设置
         instance.menuTreeConfirm = options.menuTreeConfirm
     }
 } else {
   return
 }
}
//关闭loading模态层
zlDialog.close = () => {
    instance.show = false
}
//注册组件全局
zlDialog.install = (Vue) => {
  Vue.prototype.$zlDialog = zlDialog
}
export default zlDialog
