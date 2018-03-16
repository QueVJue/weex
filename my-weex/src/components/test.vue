<template>
    <div>
    <WxcDialog title="标题"
            content="是是是"
               :show="show">
    </WxcDialog>
    <div>
        <div @click="open">
            <text>duihuakuang</text>
        </div>
    </div>
    </div>
</template>

<script>
    import {WxcDialog} from 'weex-ui'


    export default {
        components:{WxcDialog},
        data: function () {
            return {
                bg:false,
                show:false
            }
        },
        created: function () {

        },
        methods: {
            open:function(){
                this.show=true;
            }
        }
    }
</script>