<template>
    <div class="flex_row justify-around fixed-bottom footer">
        <div class="wit33"><router-link to="/"><text>home</text></router-link></div>
        <div class="wit33"><router-link to="/all"><text>ALL</text></router-link></div>
        <div class="wit33"><router-link to="/login"><text>ME</text></router-link></div>
    </div>
</template>
<style scoped>
    .footer{
        width: 750px;
        height: 100px;
        border-top-style: solid;
        border-top-width:1px;
        border-top-color:#696969;
        background-color: #ffffff;
        z-index: 999;
    }
    .wit33{
        width: 33%;
    }
    .wit33>a>p{margin: 0 auto;
        padding-top: 25px;height: 80px}

</style>
<script>
//    import {WxcMinibar} from 'weex-ui';
    export default {
        data: function () {
            return {}
        },
        created: function () {

        },
        methods: {}
    }
</script>