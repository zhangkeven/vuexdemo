<template>
    <div id="zl-dialog" class="" v-show="show" @click="closeModal">
        <transition name="zlDialog">
            <div v-if="popupTypeName == 'default'" class="modal" v-show="show">
                <div class="top-title" v-if="topTitle!=''">
                    <p class="btn-icon">
                        <i class="icon"></i>
                    </p>
                    <p class="tishi">{{topTitle}}</p>
                    <p class="btn-icon" @click="closeModal">
                        <i class="icon  iconfont iconguanbi"></i>
                    </p>
                </div>
                <p class="title" v-if="type!='input'">{{ contentText }}</p>
                <div class="tag-input-list-only" v-if="type=='input'">
                    <zl-theme-tag-input :title="inputTitle" :placeholder="inputPlaceholder" id="updatePrice1"
                                        v-model="inputValue" ref="tagInput"/>
                </div>
                <div class="btn" v-if="!onlybtn">
                    <div class="cancel">
                        <span @click="cancel">{{cancelText}}</span>
                    </div>
                  <div class="confirm">
                    <span @click="confirm">{{confirmText}}</span>
                  </div>
                </div>
                <div class="onlybtn" v-if="onlybtn">
                    <div class="confirm">
                        <span :disabled="disabled" :loading="loading" :loading_text="loadingText" @click="confirm">{{confirmText}}</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    // import zlDialog from '@/common/plugins/zlDialog';
    import {Tree} from 'element-ui'

    export default {
        data() {
            return {
                menuTreeConfirm: null,
                popupTypeName: 'default', //弹框内容类型  //权限-菜单设置
                menuData: [],
                menu_ids: [],
                default_select: [],// 默认选中 //权限-菜单设置
                cancelBoxCallBack: null,//树形菜单关闭按钮点击触发回调函数

                role_id: 0,
                TreeTitle: '选择菜单',
                topTitle: '头部标题',
                title: '提示框',
                confirmText: '确定',//右侧按钮名称
                cancelText: '取消',//左侧按钮名称
                contentText: '确定关闭吗?',//主体提示内容
                loadingText: '加载中..',//按钮加载提示文字
                show: false,
                isModalClose: false,
                confirmCallBack: null,//右侧按钮点击触发回调函数
                cancelCallBack: null,//左侧按钮点击触发回调函数
                getValueCallBack: null,
                loading: false,
                disabled: false,
                type: 'text',
                inputValue: '',
                inputTitle: '标题',//input左侧title
                inputPlaceholder: '请输入内容',//input占位符
                onlybtn: false
            };
        },
        watch: {
            show(newValue) {
                if (newValue == false) {
                    this.loading = false;
                    this.disabled = false;
                }
            },

        },
        mounted() {
            this.inputValue = '';
        },
        methods: {
            /**
             * 获取详情
             */
            getDetail() {
                let that = this;
                that.$http.post(that.adminApi.api_url + "/Role/show_edit", {
                    token: that.token,
                    role_id: that.role_id
                }, {
                    emulateJSON: true
                }).then(
                    function (res) {
                        var menuData = res.body;
                        if (menuData) {
                            that.ruleForm.name = menuData.name;
                            that.ruleForm.sort = menuData.sort;
                            that.ruleForm.status = menuData.status.toString();


                            /**重点开始*/
                            if (typeof (menuData.menu_id) == 'object') {
                                //转数组
                                menuData.menu_id = Object.keys(menuData.menu_id).map(key => menuData.menu_id[key]);
                            }
                            //赋值
                            menuData.menu_id.forEach((value) => {
                                that.default_select.push(value);
                            });

                            setTimeout(function () {
                                that.default_select.forEach((value) => {
                                    that.$refs.tree.setChecked(value, true, false)
                                });
                            }, 100);
                            that.menu_ids = menuData.menu_id;
                            /**重点结束*/
                        }
                    });
            },

            /**
             * 属性控件
             */

            // handleNodeClick(menuData) {  //树状菜单选中回调方法
            //   if (typeof this.menuTreeConfirm === 'function') {
            //     this.menuTreeConfirm(menuData);
            //   }
            // },

            getCheckedKeys(menuData) {//获取选中菜单的id并传入页面
                if (typeof this.menuTreeConfirm === 'function') {
                    this.menuTreeConfirm(this.$refs.tree.getCheckedKeys());
                }
            },
            resetChecked() {//清除菜单选择项
                if (typeof this.menuTreeConfirm === 'function') {
                    this.$refs.tree.setCheckedKeys([]);
                }
            },

            closeModal() {//默认弹出框关闭弹出框
                if (this.isModalClose && !this.loading) {
                    this.show = false;
                    // this.cancelCallBack();
                }
            },
            confirm() {//默认弹出框选择确定
                if (typeof this.confirmCallBack === 'function') {
                    this.confirmCallBack(this.inputValue);
                    if (this.type == 'input') return
                    this.loading = true;
                    this.disabled = true;
                }
            },
            cancel() {//关闭默认弹出框
                if (typeof this.cancelCallBack === 'function') {
                    this.cancelCallBack();
                    this.show = false;
                }
            },
            //关闭树形菜单
            cancelbox() {
                if (typeof this.cancelBoxCallBack === 'function') {
                    this.cancelBoxCallBack();
                    this.show = false;
                }
            }
            // getValue(e){
            //   this.inputValue=e
            // }
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../../assets/style/variable';
    @import '../../../assets/style/mixin';

    #zl-dialog {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        z-index: 9999;

        .zlDialog-enter-active {
            transition: all 0.3s;
        }

        .zlDialog-leave-active {
            display: none;
        }

        .zlDialog-enter,
        .zlDialog-leave-to {
            transform: translate3d(0, 100%, 0);
        }

        .modal {
            width: 320px;
            background: #fff;
            // border-radius: 8px;
            padding: 46px 36px 32px 36px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            border-radius: 8px;

            .top-title {
                width: 100%;
                height: 40px;
                line-height: 40px;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border-bottom: 1px solid #D6D7D8;
                box-sizing: border-box;

                .btn-icon {
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    cursor: pointer;

                    i {
                        font-size: 14px;
                        color: #999999;
                    }
                }

                .tishi {
                    font-size: 16px;
                    color: #333333;
                }
            }

            .title {
                width: 100%;
                line-height: 130%;
                text-align: center;
                font-size: 18px;
                color: #333;
                min-height: 39px;
                margin-bottom: 15px;
                word-wrap: break-word;
            }

            .tag-input-list-only {
                width: 100%;
                margin-bottom: 16px;

                div:first-child {
                    border-radius: 8px;
                }
            }

            .btn {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;

                span {
                    border-radius: 4px;
                    padding: 0 20px;
                    line-height: 28px;
                    font-size: 12px;
                    height: 28px;
                    display: inline-block;
                    text-align: center;
                    border: none;
                    cursor: pointer;
                }

                .cancel {
                    padding: 0;
                    margin-right: 40px;
                    span {
                        display: inline-block;
                        min-width: 60px;
                        height: 32px;
                        font-size: 16px;
                    }
                }

                .confirm {

                    span {
                        background: $theme-color;
                        color: #FFFFFF;
                        display: inline-block;
                        min-width: 60px;
                        height: 32px;
                        font-size: 16px;
                    }

                }
            }
        }
    }
</style>
