<template>
  <div class="hello" @click="onNextPage">
    <div class="home home_new_year"></div>
    <div class="text-container text-center text-whole-width page-text1-1" id="text1Id">
      <p class="text-hidden text1"> 亲爱的XXX医生</p>
      <p class="text-hidden text1">值此新年到来之际</p>
      <p class="text-hidden text1">礼来艾乐明品牌组将带您回忆</p>
      <p class="text-hidden text1">爱守护与您相伴的点滴</p>
    </div>
    <div class="doctor animate__animated_slow animate__zoomIn" v-if="showDoctor">
      <img src="../../assets/doctor.png" />
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
      showText('text1Id', 'text1').then(()=> {
        this.showDoctor = true
      })
    },
    methods: {
      onNextPage(){
        if(this.showDoctor) {
          this.$emit('next')
        }
      }
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
  .doctor{
    position: absolute;
    right: 10vw;
    bottom: 10vh;
    img{
      width: 30vw;
    }
  }
  </style>
  