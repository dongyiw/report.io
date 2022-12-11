<template>
  <div id="app">
    <audio preload="auto" id="video">
      <source src="./assets/bg.mp3" type="audio/mpeg">
      Your browser does not support this audio format.
    </audio>
    <div class="container">
      <div id="homeContainer">
        <div class="home"></div>
        <img class="header" src="./assets/header.png"/>
        <div class="person-container">
          <div class="person1-cloud"></div>
          <div class="person1"></div>
        </div>
        <div class="person-container">
          <div class="person2-cloud"></div>
          <div class="person2"></div>
        </div>
        <div class="btn-container" @click="onPlay">
          <div class="btn"></div>
          <div class="btn btn-animate"></div>
          <div class="btn-text"></div>
        </div>
        <div class="river"></div>
      </div>
      <page v-if="showPage1" @click="showPage2=true" @next="onNextpage"></page>
      <page2 v-if="showPage2" @click="showPage1=true"></page2>
    </div>
  </div>
</template>

<script>
import './styles/style.less'
import Page from '@/components/pages/Pages1.vue'
import Page2 from '@/components/pages/Pages2.vue'
// import 'animate.css';

export default {
  name: 'App',
  components: {
    Page,
    Page2,
  },
  data(){
    return {
      showPage1: false,
      showPage2: false,
    }
  },
  mounted(){
  },
  methods: {
    onPlay(){
      const home = document.getElementById('homeContainer')
      home.setAttribute('class', 'animate__animated animate__fadeOut')
      setTimeout(() => {
        const video = document.getElementById('video')
        video.play()
        this.showPage1 = true        
      }, 1000);
    },
    onNextpage(){
      this.showPage1 = false        
      this.showPage2 = true        
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
