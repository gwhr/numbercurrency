<template>
  <div class="container">
    <BaseHeader :name="name"></BaseHeader>
    <!-- 表頭 -->
    <ul class="quotation_header">
        <li class='quotation_header_name'>
            {{$t('name/volume')}}
        </li>
        <li class='quotation_header_price'>
            {{$t('Latest price')}}
        </li>
        <li class='quotation_header_upDown'>
            {{$t('Up and down')}}
        </li>
    </ul>
    <ul class="quotation_details" v-for="(item,index) in list" :key="index" >
        <li class='quotation_header_name'>
            <p style="color:#fff;font-size:16px;">{{item.base}}/{{item.target}}</p>
            <p style="font-size:12px;">24h量 {{(item.volume).toFixed(0)}}</p>
        </li>
        <li class='quotation_header_price'>
            <p style="color:#fff;font-size:16px;">{{item.last}}</p>
            <!-- <p style="font-size:12px;">NT${{(item.last*2.94).toFixed(0)}}</p> -->
        </li>
        <li class='quotation_header_upDown' v-if="item.trust_score == 'green'">
            <p class="quotation_header_upDown_btn">+{{(item.bid_ask_spread_percentage).toFixed(2)}}%</p>
        </li>
        <li class='quotation_header_upDown' v-if="item.trust_score != 'green'">
            <p class="quotation_header_upDown_btn quotation_header_upDown_btn2">-{{(item.bid_ask_spread_percentage).toFixed(2)}}%</p>
        </li>
    </ul>
  </div>
</template>

<script>
let time;
export default {
  data() {
    return {
      name: this.$t("quotation"),
      list:[]
    };
  },
  methods: {
    // 行情
    articles(){
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
      }
  },
  created() {},
  mounted() {
    this.articles()
   time= setInterval(()=>{
    this.articles()
    },5000)
  },
  destroyed(){
    clearInterval(time)
  },
  components: {}
};
</script>

<style scoped lang="scss">
.container {
  padding-top: 44px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}
.quotation_header{
  display:flex;
  align-items: center;
  padding:20px;
  .quotation_header_name{
    width: 40%;
    font-size: 15px;
    color: #909caf
  }
  .quotation_header_price{
    width: 32.5%;
    font-size: 15px;
    color: #909caf;
  }
  .quotation_header_upDown{
    width: 28.5%;
    font-size: 15px;
    text-align: right;
    color: #909caf;
  }
}
.quotation_details{
    display: flex;
    align-items: center;
    padding: 20px 20px;
    line-height:normal;
    border-bottom: 1px solid #314054;
    .quotation_header_name{
        width: 40%;
        font-size: 15px;
        color: #909caf
    }
    .quotation_header_price{
        width: 32.5%;
        font-size: 15px;
        color: #909caf;
    }
    .quotation_header_upDown{
        width: 28.5%;
        font-size: 15px;
        text-align: right;
        color: #909caf;
        .quotation_header_upDown_btn{
            display: block;
            width: 75px;
            color: #fff;
            text-align: center;
            float: right;
            border-radius: 2px;
            padding: 4px 0;
            background: #00b48e;
        }
        .quotation_header_upDown_btn2{
                background: #d14b64;
        }
    }
}
</style>