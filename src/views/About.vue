<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p class="text">{{demotext}}</p>
        <p>{{maintext}}</p>
        <p>{{detailmaintext}}</p>
        <p @click="setdemo">在main里操作demo模块mutations方法</p>
        <p @click="setdetail">在detail里操作main模块actions方法</p>
        <p @click="setModule">用根mumations方法修改指定模块的值</p>
        <p>demo模块的total值{{total}}</p>
        <p>main模块下的total{{maintotal}}</p>
        <p>main模块下的detail模块中的total{{detailtotal}}</p>
        <p @click="setmain">根commit</p>
        <p @click="set">模块comit</p>
        <p @click="setchild">模块下的子模块的comitwqe</p>
    </div>
</template>
<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    import AxiosUtil from '@/util/axiosutil'
    import Storage from '@/util/setStorage'
    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState('demo', { //demo模块
                demotext: state => state.demotext,
                total: state => state.total
            }),
            ...mapState('main', { //主模块
                maintext: state => state.maintext,
                maintotal: state => state.total
            }),
            ...mapState('main/detail', { //主模块下的detail模块
                detailmaintext: state => state.maintext,
                detailtotal: state => state.total
            }),
        },
        methods: {
            ...mapActions('main', {
                setdemo: 'mainfun'
            }),
            ...mapActions('main/detail', {
                setdetail: 'mainfun'
            }),
            ...mapMutations({
                setSave: 'SAVE',
                setmain: 'set'
            }),
            ...mapMutations('main', {
                set: 'set'
            }),
            ...mapMutations('main/detail', {
                setchild: 'set'
            }),
            setModule() {
                this.setSave({
                    item: 'main/detail',
                    value: {
                        'total': 1234
                    }
                })
                this.setSave({
                    item: 'main',
                    value: {
                        'total': 2345
                    }
                })
                AxiosUtil.post({
                    url: 'login',
                    data: {
                        userName: 'admin',
                        password: '123456'
                    }
                }).then(res => {
                    if (res) {
                        let storage = new Storage();
                        storage.setItem({
                            expires: 20000,//设置过期时间
                            name: "Token",
                            value: 'Bearer' + res.Token
                        })
                    }
                    // this.$zlLoading.close()

                }).catch(err => {

                    // this.$zlLoading.close()
                })
                // this.$zlDialog({
                //     confirmText: '确定',
                //     cancelText: '取消',
                //     loadingText: '交接中...',
                //     confirm: () => {
                //     },
                //     cancel: () => {
                //     }
                // })
                // this.$zlLoading('正在加载...')
                // setTimeout(()=>{
                //     this.$zlLoading.close()
                // },2000)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .about{
        p{
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin-bottom: 10px;
        }
    }
</style>
