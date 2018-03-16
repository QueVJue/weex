<template>
    <div class="bgli">
        <WxcMinibar title=""
                    background-color="rgb(107, 0, 50)"
                    text-color="#ffffff"
                    left-text="设置"
                >
            <text slot="left" @click="jump('set')" style="color: #ffffff">设置</text>
        </WxcMinibar>
        <div class="auto">
            <div @click="jump('register')" class="auto1 relative">
                <image class="imgstyle" src="src/components/img/home.png"></image>
                <text class="textc absolute">点击登录</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bgli{
        height: 1300px;
        background: linear-gradient(#5c002c, #ffb5b8);
    }
    .auto{
        width: 750px;
        height: 800px;

    }
    .auto1{
        width: 200px;
        height: 200px;
        margin: auto;
    }
    .imgstyle{
        width: 150px;
        height: 150px;
        margin: auto;
        background-color: #000000;
    }
    .textc{
        top: 80px;
        left: 45px;
        color: #ffffff;
        font-size: 28px;
    }

</style>
<script>
    import {WxcMinibar} from 'weex-ui'
    export default {
        components:{WxcMinibar},
        data: function () {
            return {}
        },
        created: function () {

        },
        methods: {
            jump:function(e){
                this.$router.push(e);
            }
        }
    }
</script>