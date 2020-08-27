<template>
  <div class="container">
    <BaseHeader :name="name">
      <!-- <div slot="operation" @click="toRecord()">
            {{$t('Deposit record')}}
      </div> -->
    </BaseHeader>
    <div class="exchange_card">
      <div class="exchange_card_list">
          <!-- <p class="exchange_card_list_name">
              {{$t('from')}}
          </p> -->
          <div class="exchange_card_list_input">
            <van-field v-model="amount" class="money_input" />
            <span>USDT</span>
          </div>
      </div>
      <!-- <div class="exchange_card_list">
          <p class="exchange_card_list_name">
              {{$t('exchange')}}
          </p>
          <div class="exchange_card_list_input">
            <van-field v-model="text" class="money_input" />
            <span>TWD</span>
          </div>
      </div> -->
      <!-- <div class="exchangeRules">1USDT=30.1TWD</div> -->
      <div class="exchange_card_list">
          <p class="exchange_card_list_name">
              {{$t('Input password')}}
          </p>
          <div class="exchange_card_list_input">
            <van-field type="password" v-model="pay_password" class="money_input" />
            <!-- <span>TWD</span> -->
          </div>
      </div>
       <van-button round block type="info" native-type="submit" class="btn" @click="twd_to_usdt">
        {{$t('confirm')}}
        </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('USDT Recharge'),
        amount:'',
        pay_password:''
    };
  },
  methods: {
    toRecord(){
      this.$router.push({
        path:'/exchangeRecord'
      })
    },
    //  提现
    twd_to_usdt(){
      let params = {
        pay_password:this.pay_password,
        amount:this.amount
      }
        this.globalApi.api.user.twd_to_usdt(params).then(value=>{
                if(value.data.code == 200){
                    console.log(value)
                    this.$toast.success(value.data.descrp)
                }else{
                  this.$toast.fail(value.data.descrp)
                }
            })
    },
  },
  created() {

  },
  mounted() {

  },
  components: {},
}
</script>

<style scoped lang="scss">
.container {
  padding-top: 44px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}
.exchange_card{
    width: 86%;
    background-color: #1f1f23;
    margin: 25px auto 0;
    color: #999;
    padding: 25px 20px;
    box-sizing: border-box;
    font-size:14px;
    .exchange_card_list{
        margin: 10px 0 0 0;
        padding: 0 0 5px 0;
        border-bottom: 1px solid #bbb;
        .exchange_card_list_name{

        }
    }
    .exchange_card_list_input{
      display:flex;
      line-height:44px;
      span{
        @include green;
      }
    }
    .exchangeRules{
      color:#fff;
      font-size:16px;
      margin-top:10px;
      margin-bottom:10px;
    }
}
.btn{
    // width:80%;
    margin:50px auto;
    background:#0d9652;
    color:#fff;
    border-color:#0d9652;
}
</style>