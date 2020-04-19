<template>
  <div id="zl-loading" v-show="show">
    <div class="loading-content">
      <i class="el-icon-loading"></i>
      <span class="text">{{loadingText}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        loadingText:'正在加载',
        show:false
      }
    }
  }
</script>

<style lang="scss" scoped>
   @import "../../../assets/style/variable";
  @import "../../../assets/style/mixin";
  #zl-loading{
    position: fixed;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    z-index: 9999;
    .loading-content{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-icon-loading {
        font-size: 30px;
        @include font_color($theme_color);
        -webkit-animation: rotating 2s linear infinite;
        animation: rotating 2s linear infinite;
        margin-bottom: 10px;
       }
      .text{
        font-size: 14px;
        @include font_color($theme_color);
      }
    }
  }
</style>
