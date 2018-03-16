<template>
  <div class="wrapper">

    <router-view/>
    <fot></fot>
  </div>
</template>

<script>
  import fot from './components/foter'
export default {
  name: 'App',
  data:function(){
    return {

    }
  },
  components:{
    fot
  }
}
</script>

<style>
@import "./components/css/style.css";
</style>
