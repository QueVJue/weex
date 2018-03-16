<template>
    <div :class="{back:bg}">
        <WxcMinibar title="设置">
            <text style="font-size: 75px;
            font-stretch:condensed" slot="left" @click="set('login')">&lt;</text>
        </WxcMinibar>

        <!--设置-->
        <div>
            <text class="text1">设置</text>
            <div :class="{bag:bg}">
                <WxcCheckbox title="夜间模式"
                             @wxcCheckBoxItemChecked="ckbox"
                        ></WxcCheckbox>
                <WxcCheckbox title="流量播放提醒"></WxcCheckbox>

                <div class="text2 flex_row relative" @click="cache">
                    <text class="fot">清除缓存</text>
                    <text class="inp fot">&gt;</text>
                </div>
            </div>
        </div>
        <!-- 隐私-->
        <div>
            <text class="text1">隐私</text>
            <div :class="{bag:bg}">
                <WxcCheckbox title="隐藏小记"></WxcCheckbox>
                <WxcCheckbox title="隐藏歌单"></WxcCheckbox>
                <WxcCheckbox title="隐藏其他收藏"></WxcCheckbox>
            </div>
        </div>
        <!-- 反馈-->
        <div>
            <text class="text1">反馈</text>
            <div>
                <div class="text2 flex_row relative">
                    <text class="fot">意见与反馈</text>
                    <text class="inp fot">&gt;</text>
                </div>
                <div class="text2 flex_row relative">
                    <text class="fot">关注我们</text>
                    <text class="inp fot">&gt;</text>
                </div>
                <div class="text2 flex_row relative">
                    <text class="fot">给一个评分</text>
                    <text class="inp fot">&gt;</text>
                </div>
            </div>
        </div>
        <!-- 关于-->
        <div>
            <text class="text1">关于</text>
            <div class="text2 flex_row relative">
                <text class="fot">用户协议</text>
                <text class="inp fot">&gt;</text>
            </div>
            <div class="text2 relative">
                <text class="fot">版本号</text>
                <text>4.5.2</text>
            </div>
        </div>
        <WxcDialog title="确认要清除缓存？"
                   :show="show"
                   @wxcDialogCancelBtnClicked="cancel"
                   @wxcDialogConfirmBtnClicked="confirmation"
                ></WxcDialog>
        <div class="botm"></div>
    </div>
</template>
<style scoped>
    .text1{
        height: 60px;
        font-size: 28px;
        background-color: #dddddd;
        color: #8e8e8e;
        padding:10px 5px;
    }
    .text2{
        width: 750px;
        height: 100px;
        border-style: solid;
        border-bottom-color: #d6d6d6;
        border-bottom-width:1px ;
        padding: 20px 20px;
    }
    .inp{
        /*left: 540px;*/
        position:absolute;
        width: 40px;
        height: 40px;
        right: 0;
    }
    .fot{
        font-size: 30px;
        color:rgb(61, 61, 61);
    }
    .botm{
        height: 130px;
        width: 750px;

    }
    .bag>div{background-color: #cccccc;
    }
    .back{background-color: #cccccc;
    }


</style>
<script>
    import {WxcMinibar,WxcCheckbox,WxcDialog} from 'weex-ui'


    export default {
        components:{WxcMinibar,WxcCheckbox,WxcDialog},
        data: function () {
            return {
                bg:false,
                show:false
            }
        },
        created: function () {

        },
        methods: {
            set:function(e){
                this.$router.push(e);
            },
            ckbox:function(){
                this.bg=!this.bg;
            },
            cache:function(){
                this.show = true;
            },
            cancel:function(){
                this.show = false;
            },
            confirmation:function(){
                this.show = false;
            }

        }
    }
</script>