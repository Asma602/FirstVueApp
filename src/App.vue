<template>
  <div id="app" class="container-fluid p-0">

    <app-navbar></app-navbar>
<!--    <app-hello-world></app-hello-world>-->
    <router-view></router-view>

<!--    <h3>Test Input component</h3>-->
<!--    <h4>{{ message }}</h4>-->
<!--    <app-input :msg="message" @msgUpdated="message = $event"></app-input>-->
  </div>
</template>

<script>
// import Input from './components/input.vue';
// import HelloWorld from "@/components/HelloWorld";
import navbar from "@/components/navbar";

export default {
  name: 'App',
  components: {
    // 'app-input': Input,
    // 'app-hello-world': HelloWorld,
    'app-navbar': navbar
  },
  data(){
    return{
      message: 'Message from parent to child'
    }
  }
}
</script>

<style>
body{
  margin:0
}

</style>
