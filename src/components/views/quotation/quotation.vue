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
    <ul class="quotation_details" v-for="(item,index) in 5" :key="index">
        <li class='quotation_header_name'>
            <p style="color:#fff;font-size:16px;">BTC/USDT</p>
            <p style="font-size:12px;">24h量 41386</p>
        </li>
        <li class='quotation_header_price'>
            <p style="color:#fff;font-size:16px;">9814.01</p>
            <p style="font-size:12px;">NT$290393.0955</p>
        </li>
        <li class='quotation_header_upDown'>
            <p class="quotation_header_upDown_btn">+0.56%</p>
        </li>
    </ul>
    <ul class="quotation_details" v-for="(item,index) in 5" :key="index">
        <li class='quotation_header_name'>
            <p style="color:#fff;font-size:16px;">BTC/USDT</p>
            <p style="font-size:12px;">24h量 41386</p>
        </li>
        <li class='quotation_header_price'>
            <p style="color:#fff;font-size:16px;">9814.01</p>
            <p style="font-size:12px;">NT$290393.0955</p>
        </li>
        <li class='quotation_header_upDown'>
            <p class="quotation_header_upDown_btn quotation_header_upDown_btn2">+0.56%</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$t("quotation"),
      list:[]
    };
  },
  methods: {},
  created() {},
  mounted() {},
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