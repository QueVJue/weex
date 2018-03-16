<template>
    <div>
        <header class="heads flex_row">
            <div class="hed"><text>ALL</text></div>
            <div class="fixed-right"><text>搜索</text></div>
        </header>
        <div class="box">
            <slider auto-play="true" interval="3000" infinite="true" class="slider">
                <div class="frame">
                    <image class="image" src="src/components/img/03.PNG"></image>
                </div>
                <div class="frame">
                    <image class="image" src="src/components/img/04.PNG"></image>
                </div>
                <div class="frame">
                    <image class="image" src="src/components/img/05.PNG"></image>
                </div>
            </slider>
        </div>
        <!-- 导航-->
        <div class="nav">
            <div class="sort"><text>分类导航</text></div>
            <div class="flex_row im_text" style="">
                <div class="im_te relative">
                    <image class="image2" src="src/components/img/06.PNG"></image>
                    <text class="absolute">1</text>
                </div>
                <div class="im_te relative">
                    <image class="image2" src="src/components/img/06.PNG"></image>
                    <text class="absolute">2</text>
                </div>
                <div class="im_te1 relative">
                    <image class="image3" src="src/components/img/06.PNG"></image>
                    <text class="absolute">3</text>
                </div>
                <div class="im_te relative">
                    <image class="image2" src="src/components/img/06.PNG"></image>
                    <text class="absolute">4</text>
                </div>
                <div class="im_te relative">
                    <image class="image2" src="src/components/img/06.PNG"></image>
                    <text class="absolute">5</text>
                </div>
                <div class="im_te relative">
                    <image class="image2" src="src/components/img/06.PNG"></image>
                    <text class="absolute">6</text>
                </div>
                <div class="im_te relative">
                    <image class="image2" src="src/components/img/06.PNG"></image>
                    <text class="absolute">7</text>
                </div>
            </div>
        </div>
        <!-- 专题-->
        <div class="nav">
            <div>
                <div><image class="image4" src="src/components/img/06.PNG"></image></div>
                <div><text class="text4">5555555</text></div>
            </div>
        </div>
        <div class="nav">
            <div>
                <div><image class="image4" src="src/components/img/06.PNG"></image></div>
                <div><text class="text4">5555555</text></div>
            </div>
        </div>
        <div class="botm"></div>
    </div>
</template>
<style scoped>
    .fixed-right{
        position:fixed;
        right: 0;
    }
    .heads>.hed{
        margin: 0 auto;
    }
    .heads>div{
        top: 20px;
    }
    .image {
        width: 750px;
        height: 450px;
    }
    .box{
        border-bottom-width: 20px;
        border-bottom-style: solid;
        border-bottom-color: #bababa;
    }
    .nav{
        width: 750px;
        padding: 15px 30px;
        border-bottom-width: 20px;
        border-bottom-style: solid;
        border-bottom-color: #bababa;


    }
    .nav>.sort{
        margin-bottom: 20px;
    }
    .flex_row{
        flex-wrap: wrap;
    }
    .im_text>div>p{
        color: #ffffff;
        top: 100px;
        left: 100px;
    }

    .im_te{
        width: 160px;height: 150px;
        margin: 5px 5px;
    }
    .image2{
        width: 160px;height: 160px;
    }
    .im_te1{
        width: 320px;height: 160px;
        margin: 5px 5px;
    }
    .image3{
        width: 320px;height: 160px;
    }
    .slider {
        width: 750px;
        height: 450px;
    }
    .frame {
        width: 750px;
        height: 450px;
        position: relative;
    }
    .image4{
        margin: 30px 0;
        width: 690px;
        height: 450px;
    }
    .text4{
        margin: 20px 30px;
    }
    .botm{
        height: 110px;
        width: 750px;

    }
</style>
<script>

    export default {
        data: function () {
            return {}
        },
        created: function () {

        },
        methods: {}
    }
</script>