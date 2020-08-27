<template>
  <div style="height:100%;overflow:auto;padding-bottom:50px">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false" >
      <van-swipe-item v-for="(item,index) in topList" :key="index" >
        <img :src="`${item.thumb}`" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 内容 -->
    <div class="layout">
      <!-- 通知栏 -->
      <div class="inform_card">
        <div class="inform_swiper">
          <div class="gonggao_title">
              <img src="../../../assets/image/gonggao_3.png" alt="">
              <span>[{{$t('System notification')}}]</span>
          </div>
          <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
          >
            
            <van-swipe-item v-for="(item,index) in topList" :key="index" >{{item.post_excerpt}}</van-swipe-item>
          </van-swipe>
        </div>
        <ul class="inform_card_data">
          <li class="inform_card_list" v-for="(item,index) in list" :key="index">
            <p class="inform_card_list_name">
              <span>{{item.base}}/{{item.target}}</span>
            </p>
            <p class="inform_card_list_number">
              <span>{{item.last}}</span>
            </p>
            <p class="inform_card_list_precent" v-if="item.trust_score == 'green'">
              <span>+{{(item.bid_ask_spread_percentage-0).toFixed(2)}}%</span>
            </p>
            <p class="inform_card_list_precent2" v-if="item.trust_score != 'green'">
              <span>-{{(item.bid_ask_spread_percentage-0).toFixed(2)}}%</span>
            </p>
          </li>
        </ul>
      </div>
      <!-- tab列 -->
      <ul class="tab_index">
        <li class="tab_index_list" v-for="(item,index) in tabList" :key="index" @click="toLink(item.path)">
          <div class="tab_index_list_img">
            <p>
              <img :src="item.img" alt />
            </p>
          </div>
          <p>{{item.name}}</p>
        </li>
      </ul>
      <!-- 快訊 -->
      <div class="home_news">
        <!-- 標題 -->
          <div class="home_news_title">
              <div class="home_news_title_left">
                  <div class="home_news_title_article">
                      <img :src="zixun_1" alt="">
                      <span>快訊</span>
                  </div>
                  <div class="home_news_title_tips">
                      <span>INFORMATION</span>
                  </div>
              </div>
          </div>
          <!-- 列表 -->
          <ul >
            <li class="home_news_list" @click="toDetails(item)" v-for="(item,index) in articlelist" :key="index">
                <p class="home_news_list_details">
                  {{item.post_excerpt}}
                </p>
                <p class="home_news_list_time">
                  {{item.post_date}}
                </p>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
let time;
import img1 from "../../../assets/logo.png";
import xinshou from "@/assets/image/xinshou.png";
import rujin from "@/assets/image/rujin.png";
import duihuans from "@/assets/image/duihuans.png";
import shouyi from "@/assets/image/shouyi.png";
import usdticon from "@/assets/image/usdticon.png";
import zixun_1 from "@/assets/image/zixun_1.png";
export default {
  data() {
    return {
      url:global.url,
      img1,
      articlelist:[],
      zixun_1,
      allData:[],
      list:[],
      topList:[],
      list:[],
      tabList: [
        {
          name: this.$t("notice"),
          img: xinshou,
          path:"/news"
        },
        {
          name: this.$t("Gold deposit"),
          img: rujin,
          path:"/deposit"
        },
        {
          name: this.$t("exchange"),
          img: duihuans,
          path:"/exchange"
        },
        {
          name: this.$t("profit"),
          img: shouyi,
          path:"/profitRecord"
        },
        // {
        //   name: this.$t("USDT Recharge"),
        //   img: usdticon,
        //   path:"/exchange2"
        // }
      ]
    };
  },
  methods: {
    toDetails(item){
      this.$router.push({
        path:"/acticleDetails",
        query:{
          item
        }
      })
    },
    toLink(path){
      this.$router.push({
        path
      })
    },
    // 行情
    price(){
        let params = {
          per_page:100,
          page:1,
          vs_currency:'usd'
        }
        let baseArr = []
        this.globalApi.api.coin.price(params).then(value=>{
              console.log(value)
              this.list = []
              value.data.tickers.forEach(v=>{
                if((v.base == 'BTC' || v.base == 'PAX' || v.base == 'EOS') && (v.target == "USDT") ){
                    if(baseArr.indexOf(v.base) == -1){
                      this.list.push(v);
                      baseArr.push(v.base)
                    }
                    
                }
              })
          })
      },
    // 獲取文章列表
      articles(){
        this.globalApi.api.index.articles().then(value=>{
              if(value.data.code == 200){
                this.allData = value.data.data;
                for(let i in this.allData){
                  let obj = {
                    name:this.allData[i].name,
                    objname:i
                  }
                  if(this.allData[i].name == '快訊'){
                      this.articlelist = this.allData[i].articles
                  }
                }
                this.articlelist.forEach(v=>{
                  if(v.istop == 1){
                    this.topList.push(v)
                  }
                })
              }else{
              }
          })
      }
    
  },
  created() {},
  mounted() {
    this.articles(); 
    this.price();
      time= setInterval(()=>{
      this.price()
    },5000)
  },
  destroyed(){
    clearInterval(time)
  },
  components: {}
};
</script>

<style lang='scss' scoped>
.my-swipe {
  height: 250px;
  img {
    width: 100%;
    height: 100%;
  }
}
.notice-swipe {
    height: 50px;
    line-height: 50px;
    .van-swipe-item{
      overflow: hidden;
    }
  }
.inform_card {
  height: 150px;
  background: #1f1f23;
  border-radius: 12px;
  @include layout;
  position: relative;
  top: -5px;
  margin-top:-90px;
  .inform_swiper {
    height: 50px;
    // margin: -90px auto 0;
    display:flex;
    line-height:50px;
    .gonggao_title{
      width:130px;
      img{
        width:13px;
        height:17px;
        margin-left:5px;
        margin-right:10px;
      }
    }
    .swiper{
      flex:1;
      @include green;
      line-height:1.2;
      overflow:hidden;
    }
  }
  .inform_card_data {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 20px auto;
  }
  .inform_card_list {
    color: #fff;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    width: auto;
    .inform_card_list_name {
    }
    .inform_card_list_number {
      font-size: 15px;
      font-weight: 700;
    }
    .inform_card_list_precent {
      font-size: 14px;
      color: #00b48e;
    }
    .inform_card_list_precent2 {
      font-size: 14px;
      color: #00b48e;
    }
  }
}
.tab_index {
  display: flex;
  justify-content: space-around;
  height: 115px;
  @include layout;
  .tab_index_list {
    width: 20%;
    text-align: center;
    margin: 15px 0 25px;
    color: #fff;
    .tab_index_list_img {
      width: 40px;
      height: 40px;
      margin: 0 auto;
      margin-bottom:5px;
      img{
        width:40px;
        height:40px;
      }
    }
  }
}
.home_news{
  @include layout;
  .home_news_title{
    height:50px;
    display:flex;
    justify-content: space-between;
    .home_news_title_left{
      font-size:14px;
      .home_news_title_article{
        color:#fff;
        font-size:18px;
        height:30px;
        line-height:30px;
        img{
          width:20px;
          height:20px;
        }
      }
      .home_news_title_tips{
        color: #0d9652;
        font-weight: 700;
      }
    }
  }
  .home_news_list{
    height: 102px;
    padding: 16px 16px 5px 16px;
    width: 90%;
    margin: 10px auto;
    background: #1f1f23;
    border: 1px solid transparent;
    border-radius: 7px;
    .home_news_list_details{
      font-size:12px;
      color: #999;
      border-bottom: 2px solid #0d9652;
      line-height:1.4;
      overflow: hidden;
      height:50px;
    }
    .home_news_list_time{
      padding-top:10px;
      color: #999;
      font-size: 12px;
    }
  }
}
</style>