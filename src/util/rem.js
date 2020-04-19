/**
 * @author jm
 * @create 2019-05-06 15:46
 * @desc   px转化rem配置文件
 */

const baseSize = 16

// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const clientWidth =document.documentElement.clientWidth;
  // if(clientHeight>=600){
    const scale = clientWidth / 1200
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 5)) + 'px'
  // }
}

// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
