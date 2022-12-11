<template>
  <div class="hello">
    <div class="home home_new_year"></div>
    <div class="text-container text-center text-whole-width page-text1-1" id="text1Id">
      <p class="text-hidden text1">这是我们一起走过的第</p>
      <p class="text-hidden text1"><span class="text-blod">365</span>天。</p>
      <p class="text-hidden text1"><span class="text-blod">20xx年x月x日</span></p>
      <p class="text-hidden text1">从这一天开始，感谢有您！</p>
      <p class="text-hidden text1">爱守护就与您相伴左右。</p>
      <p class="text-hidden text1"><span class="text-blod">感谢有您！</span></p>
    </div>
    <div class="rose" v-if="showDoctor">
      <img src="../../assets/rose.png" class="animate__animated_slow animate__bounceIn"/>
    </div>
  </div>
</template>
  
  <script>
  import { showText } from '@/utils/index' 
  export default {
    name: 'PageOne',
    data(){
      return {
        showDoctor: false
      }
    },
    props: {
      msg: String
    },
    mounted(){
      showText('text1Id', 'text1', 'animate__animated animate__fadeIn').then(()=> {
        this.showDoctor = true
      })
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="less">
  .home_new_year{
    background: url('../../assets/new_year.jpeg');
    background-size: cover;
  }
  .page-text1-1{
    margin-top: 20vh;
  }
  .rose{
    position: absolute;
    right: 10vw;
    bottom: 10vh;
    img{
      width: 30vw;
    }
  }
  </style>
  