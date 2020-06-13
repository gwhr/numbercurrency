<template>
  <div style="height:100%;overflow:auto;padding-bottom:50px">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
      <van-swipe-item>
        <img :src="img1" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="img1" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 内容 -->
    <div class="layout">
      <!-- 通知栏 -->
      <div class="inform_card">
        <div class="inform_swiper"></div>
        <ul class="inform_card_data">
          <li class="inform_card_list" v-for="(item,index) in 3" :key="index">
            <p class="inform_card_list_name">
              <span>BTC/USDT</span>
            </p>
            <p class="inform_card_list_number">
              <span>BTC/USDT</span>
            </p>
            <p class="inform_card_list_precent">
              <span>+0.08%</span>
            </p>
          </li>
        </ul>
      </div>
      <!-- tab列 -->
      <ul class="tab_index">
        <li class="tab_index_list" v-for="(item,index) in tabList" :key="index">
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
            <li class="home_news_list">
                <p class="home_news_list_details">
                  【数字钱包与比特币托管机构Xapo不再支持通过信用卡向账户输入资金】数字钱包与比特币托管机构Xapo在6月11日表示，从11日起用户将不再能通过信用卡向账户输入资金。除此之外，银行转账需要满足最小交易额与用户所在地点的限制。(Coindesk)
                </p>
                <p class="home_news_list_time">
                  2020-06-12 17:57:08
                </p>
            </li>
            <li class="home_news_list">
                <p class="home_news_list_details">
                  【数字钱包与比特币托管机构Xapo不再支持通过信用卡向账户输入资金】数字钱包与比特币托管机构Xapo在6月11日表示，从11日起用户将不再能通过信用卡向账户输入资金。除此之外，银行转账需要满足最小交易额与用户所在地点的限制。(Coindesk)
                </p>
                <p class="home_news_list_time">
                  2020-06-12 17:57:08
                </p>
            </li>
            <li class="home_news_list">
                <p class="home_news_list_details">
                  【数字钱包与比特币托管机构Xapo不再支持通过信用卡向账户输入资金】数字钱包与比特币托管机构Xapo在6月11日表示，从11日起用户将不再能通过信用卡向账户输入资金。除此之外，银行转账需要满足最小交易额与用户所在地点的限制。(Coindesk)
                </p>
                <p class="home_news_list_time">
                  2020-06-12 17:57:08
                </p>
            </li>
            <li class="home_news_list">
                <p class="home_news_list_details">
                  【数字钱包与比特币托管机构Xapo不再支持通过信用卡向账户输入资金】数字钱包与比特币托管机构Xapo在6月11日表示，从11日起用户将不再能通过信用卡向账户输入资金。除此之外，银行转账需要满足最小交易额与用户所在地点的限制。(Coindesk)
                </p>
                <p class="home_news_list_time">
                  2020-06-12 17:57:08
                </p>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
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
      img1,
      zixun_1,
      tabList: [
        {
          name: this.$t("notice"),
          img: xinshou
        },
        {
          name: this.$t("Gold deposit"),
          img: rujin
        },
        {
          name: this.$t("exchange"),
          img: duihuans
        },
        {
          name: this.$t("profit"),
          img: shouyi
        },
        {
          name: this.$t("USDT Recharge"),
          img: usdticon
        }
      ]
    };
  },
  methods: {},
  created() {},
  mounted() {},
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
.inform_card {
  height: 150px;
  background: #1f1f23;
  border-radius: 12px;
  @include layout;
  position: relative;
  top: -5px;
  .inform_swiper {
    height: 50px;
    margin: -90px auto 0;
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
      color: #e56e52;
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