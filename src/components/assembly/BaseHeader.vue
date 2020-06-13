
<template>
  <div class="header">
      <span>{{name}}</span>
      <span class="back" @click="toback" v-show='backShow'>
        <i class="iconfont iconfanhui"></i>
      </span>
      <div class="operation">
        <slot name="operation" ></slot>
      </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props:{
    name:{
      default(){
        return '名字'
      }
    },
    backShow:{
      default(){
        return true
      }
    }
  },
  methods: {
    toback(){
      this.$router.go(-1);
    } 
  },
  created() {

  },
  mounted() {

  },
  components: {},
}
</script>

<style lang='scss'>
    .header{
        height:44px;
        line-height:44px;
        position: fixed;
        background:rgb(19,19,21);
        color:#fff;
        text-align:center;
        font-size:16px;
        width:100%;
        top:0;
        left:0;
        z-index:500;
        .back{
          position: absolute;
          left:0;
          top:0;
          padding-left:10px;
        }
        .operation{
          color:#fff;
          position: absolute;
          right:0;
          top:0;
          width:auto;
          padding-right:10px;
        }
    }
</style>