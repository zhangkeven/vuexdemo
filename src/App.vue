<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import commonUtil from '@/util/commonUtil'
    import  {switchEnvironment} from  '@/config/sysconfig'
    import globalData from '@/util/globalData'
    export default {
        name: 'app',
        created() {
            window.globalData = globalData
            commonUtil.initColor()  //初始化主题色
            this.setConfig()
        },
        methods: {
            setConfig(){
                switchEnvironment('dev')
            },
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
