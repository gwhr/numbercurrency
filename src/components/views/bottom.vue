<template>
  <div class="bottomBtn">
    <router-view></router-view>
    <ul class="btnList">
      <li v-for="(item,index) in bottomList" :key="item.path" @click="toLink(item,index)">
        <img v-if="active != index" :src="item.img" alt />
        <img v-if="active == index" :src="item.imgs" alt />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import sy from "@/assets/image/sy.png";
import sys from "@/assets/image/sys.png";
import gmwg from "@/assets/image/gmwg.png";
import gmwgs from "@/assets/image/gmwgs.png";
import hp from "@/assets/image/hp.png";
import hps from "@/assets/image/hps.png";
import sk from "@/assets/image/sk.png";
import sks from "@/assets/image/sks.png";
import zh from "@/assets/image/zh.png";
import zhs from "@/assets/image/zhs.png";
export default {
  data() {
    return {
      sy,
      sys,
      gmwg,
      gmwgs,
      hp,
      hps,
      sk,
      sks,
      zh,
      zhs,
      active:0,
      bottomList:[
        {
          name:this.$t('index'),
          img:sy,
          imgs:sys,
          path:'/home'
        },
        {
          name:this.$t('purchasePlugin'),
          img:gmwg,
          imgs:gmwgs,
          path:'/plugin'
        },
        {
          name:this.$t('transactions'),
          img:sk,
          imgs:sks,
          path:'/transactions'
        },
        {
          name:this.$t('quotation'),
          img:hp,
          imgs:hps,
          path:'/quotation'
        },
        {
          name:this.$t('account'),
          img:zh,
          imgs:zhs,
          path:'/account'
        },
      ]
    };
  },
  methods: {
    toLink(item,index){
      this.active = index;
      this.$router.push({
        path:item.path
      })
    }
  },
  watch:{
    $route(to,from){
      console.log(to.path)
     if(to.path == '/home'){
        this.active = 0
     }else if(to.path == '/plugin'){
       this.active = 1
     }else if(to.path == '/transactions'){
       this.active = 2
     }else if(to.path == '/quotation'){
       this.active = 3
     }else if(to.path == '/account'){
       this.active = 4
     }
    }
  },
  created() {},
  mounted() {
    // 语言转换
    // this.$root.$i18n.locale = "cn";
  },
  components: {}
};
</script>

<style lang="scss">
.bottomBtn {
  color: #fff;
  height: 100%;
  position: relative;
  .btnList {
    background: #000;
    position: absolute;
    width: 100%;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    z-index:500;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding:5px 0;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>