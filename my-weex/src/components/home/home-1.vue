<template>
    <div class="article">
        <!-- 第一篇文章-->
        <div>
            <div><image class="iMg" src="src/components/img/01.PNG"></image></div>
            <div class="text justify-around">
                <div><text class="writer">黄宗泽 | 王浩信</text></div>
                <div><text class="content">xxxxxxxxxxxxxxxx考试累怎么办xxxxxxxxxxxxxxxxx</text></div>
                <div><text class="writer">《逃学》</text></div>
            </div>
            <div class="flex_row justify-between pad">
                <div><text class="icon">发现</text></div>
                <div class="flex_row">
                    <span><text class="icon">评论</text></span>
                    <span><text class="icon">收藏</text></span>
                    <span><text class="icon">分享</text></span>
                    <span><text class="icon">喜欢</text></span>
                </div>
            </div>
        </div>
        <!-- 下拉选择其他文章-->
        <div class="pull-down" >
            <div class="more" @click="more"><text class="gray fot_26">更多</text></div>
            <list v-if="ls">
                <cell class="flex_row cel_l"><text>&gt;</text><div><text>123456</text><text>6666666</text></div></cell>
                <cell class="flex_row cel_l"><text>&gt;</text><div><text>223456</text><text>6666666</text></div></cell>
                <cell class="flex_row cel_l"><text>&gt;</text><div><text>323456</text><text>6666666</text></div></cell>
                <cell class="flex_row cel_l"><text>&gt;</text><div><text>423456</text><text>6666666</text></div></cell>
                <cell class="flex_row cel_l"><text>&gt;</text><div><text>523456</text><text>6666666</text></div></cell>
                <cell class="flex_row cel_l"><text>&gt;</text><div><text>623456</text><text>6666666</text></div></cell>

            </list>
        </div>

        <!--加载其他文章 -->
        <div class="arti">
            <div class="margin0"><text class="gray fot_26">- 标 题 -</text></div>
            <div><text class="fot_42">Big标题</text></div>
            <div><text class="fot_36">writer/作者</text></div>
            <div><image class="iMgs" src="src/components/img/02.PNG"></image>
                <text class="padbom">文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本</text>
            </div>
            <div class="flex_row justify-between">
                <div class="time"><text class="icon">time</text></div>
                <div class="flex_row">
                    <text class="icon">喜欢</text>
                    <text class="icon">分享</text>
                </div>
            </div>
        </div>

        <div class="arti">
            <div class="margin0"><text class="gray fot_26">- 标 题 -</text></div>
            <div><text class="fot_42">Big标题</text></div>
            <div><text class="fot_36">writer/作者</text></div>
            <div><image class="iMgs" src="src/components/img/02.PNG"></image>
                <text class="padbom">文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本</text>
            </div>
            <div class="flex_row justify-between">
                <div class="time"><text class="icon">time</text></div>
                <div class="flex_row">
                    <text class="icon">喜欢</text>
                    <text class="icon">分享</text>
                </div>
            </div>
        </div>

        <div style="height: 300px">
            <image></image>
            <text>下一页</text>
        </div>
    </div>

</template>
<style scoped>
    .gray{
        color: #818181;}
    .fot_26{font-size: 26px}
    .article{
        top: 80px;
    }
    .iMg{height: 450px;width: 750px;}
    .iMgs{height: 400px;width: 690px;margin: 20px 0}
    .writer{
        font-size: 28px;
        color: #666666;
    }
    .content{
        width: 600px;text-align: center;
        font-size: 36px;
        color: #212121;
    }
    .pad{padding: 5px 30px}
    .icon{
        font-size: 24px;
        color: #555555;
        padding: 0 5px;
    }
    .more{
        padding-left: 333px;padding-top:15px;height: 70px;width: 750px;
    }
    .pull-down{
        margin: 10px 0;
        width: 750px;
        /*height: 80px;*/
        border-style:solid;
        border-color: #bababa;
        border-bottom-width: 8px;
        border-top-width: 8px;
    }
    .cel_l{
        height: 150px;
        padding: 30px 30px;
    }
    .cel_l>div{
        bottom: 15px;
        left: 20px;
    }
    .li-st{
        display: none;
    }
    .fot_42{
        font-size: 42px;
        padding: 10px 0;
    }
    .fot_36{font-size: 28px}
    .padbom{
        padding-bottom:50px;
    }
    .text{height: 450px;width: 750px; align-items:center}
    .arti{
        /*height: 700px;*/
        width: 750px;
        padding: 10px 30px;
        border-style: solid;
        border-color: #bababa;
        border-bottom-width:10px;
    }



</style>
<script>


    export default {
        data: function () {
            return {
                ls:false
            }
        },
        created: function () {

        },
        methods: {
            more:function(){
                this.ls=!this.ls
                console.log(1)
            }
        }
    }
</script>