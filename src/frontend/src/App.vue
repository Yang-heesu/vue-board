<template>
  <div id="app">
    <Header />
    <!--img alt="Vue logo" src="./assets/logo.png">-->
    <router-view/>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
  import request from 'request'
  import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      Header,
    },
    mounted(){
        request('http://localhost:8080/api/hello', function (error, response, body) {
            window.console.log('error: ', error);
            window.console.log('statusCode: ', response && response.statusCode);
            window.console.log('body: ', body);
        });
     }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
