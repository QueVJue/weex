<template>
    <div class="bgimg">

        <WxcMinibar title="登录">
            <text style="font-size: 75px;font-stretch:condensed"
                  slot="left"
                  @click="set('login')">&lt;</text>
        </WxcMinibar>
        <div class="t">
            <div class="ta">
                <div class="tab"><text>微信</text></div>
                <div class="tab"><text>微博</text></div>
                <div class="tab"><text>QQ</text></div>
                <div><text>或者</text><text><i></i>使用手机号登录</text></div>
            </div>
            <div>
                <a href=""><text>创建账户即代表您同意</text></a>
                <a href=""><text>使用条款和隐私政策</text></a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bgimg{
        background-image:linear-gradient(to top,#0074D9,#dddddd)}
    .t{margin: 0 auto}
    .ta{width: 550px;height: 1000px;top:100px;
        }
    .tab{width: 500px;
        height: 80px;
        border-style:solid;
        border-width: 1px;
        border-color: #006600;
        border-radius:10px;
        margin: 20px 0;
        text-align: center;
    }
    .tab>p{
        margin: auto;
    }

</style>
<script>
    import {WxcMinibar} from 'weex-ui'
    export default {
        components:{WxcMinibar},
        data: function () {
            return {

            }
        },
        created: function () {

        },
        methods: {
            set:function(e){
                this.$router.push(e);
            }
        }
    }
</script>