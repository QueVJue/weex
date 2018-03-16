<template>
    <div id="home" >
        <!-- 页头-->
        <!--<WxcMinibar title="标123题" background-color="#0009Fa" text-color="#ffffff">-->

        <!--</WxcMinibar>-->
        <div class="heads">
            <router-link to="/home2">
                <div class="flex_row">
                    <div class="flex_row date">
                        <text class="day">00</text>
                        <text class="year">Mar.0000</text>
                    </div>
                    <div class="time">
                        <text class="">00:00</text>
                    </div>
                </div>
            </router-link>
        </div>
        <router-view></router-view>


    </div>
</template>
<style scoped>

    .date{
        align-items:baseline;
    }
    .day{
        font-size: 72px;
        font-stretch: ultra-condensed;
        font-weight: 600;
    }
    .year{
        font-size: 24px;padding: 0px 10px;
    }
    .time{
        left: 480px;
        top: 40px;
    }



</style>
<script>
//    import {WxcMinibar} from 'weex-ui';

    export default {
        data: function () {
            return {}
        },
//        components:{WxcMinibar},
        created: function () {

        },
        methods: {}
    }
</script>