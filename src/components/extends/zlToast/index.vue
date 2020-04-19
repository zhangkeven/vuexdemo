<template>
  <div id="zlToast" v-show="show">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        message:'',
        show:false
      }
    }
  }
</script>

<style lang="scss" scoped>
  #zlToast{
    min-width: 154px;
    height:36px;
    padding:0 24px;
    box-sizing: border-box;
    background:rgba(51,51,51,1);
    border-radius:2px;
    opacity:0.8;
    position: fixed;
    top: 40px;
    left: 50%;
    -webkit-transform: translate3d(-50%,0,0);
    transform: translate3d(-50%,0,0);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    span{
      color: #FFFFFF;
      font-size: 16px;
    }
  }
</style>
