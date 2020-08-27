<template>
  <div class="container">
    <BaseHeader :name="name"></BaseHeader>
    <div class="payment_card">
        <div class="useCash">
            <p>{{$t('Available withdrawal amount')}}</p>
            <p class="money">{{userinfo.twd}}TWD</p>
        </div>
        <div class="useCash">
            <p>{{$t('Profit earning')}}</p>
            <p class="money">{{userinfo.sum_income-0}}TWD</p>
        </div>
    </div>
    <ul>
      <li class="apply_money">
          <span>
              *{{$t('Payment amount')}}:
          </span>
          <van-field v-model="amount" class="money_input" />
          <span>TWD</span>
      </li>
      <!-- <li class="apply_money">
          <span>
              *{{$t('Way of gold payment')}}:
          </span>
          <van-field v-model="text" class="money_input" />
          <span>TWD</span>
      </li> -->
      <!-- <li class="apply_money">
          <span>
              *{{$t('bank name')}}:
          </span>
          <van-field v-model="text" class="money_input" />
      </li> -->
    </ul>
    <!-- <div class="bank_info">
        <p>
          {{$t('Account no. of issuing bank')}}
        </p>
        <p>
          {{$t('Code of issuing bank')}}
        </p>
    </div> -->
    <div class="password">
      <p>{{$t('Transaction password')}}</p>
      <van-field type="password" v-model="pay_password" class="money_input" :placeholder="$t('Please enter the transaction password')"/>
    </div>
    <van-button round block type="info" native-type="submit" class="btn" @click="twd_to_usdt">
        {{$t('Apply for payment')}}
    </van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('Apply for payment'),
        text:'',
        userinfo:'',
        amount:'',
        pay_password:''
    };
  },
  methods: {
    get_user_info(){
        this.globalApi.api.user.get_user_info().then(value=>{
              if(value.data.code == 200){
                  console.log(value)
                  this.userinfo = value.data.data;
              }else{
                  this.$toast.fail()
              }
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
    this.get_user_info();
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
.payment_card{
    width:90%;
    margin:20px auto;
    height:150px;
    background:url("../../../assets/image/assetBg.png") no-repeat left center;
    background-size:100% 100%;
    color:#fff;
    box-sizing: border-box;
    padding:0 15px;
    display:flex;
    font-size:14px;
    font-weight:bold;
    .useCash{
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p{
          margin:20px 0;
          text-align:center;
        }
        .money{
          font-size:20px;
        }
    }
}
.apply_money{
    margin:0 auto;
    margin-bottom:20px;
    width:90%;
    border-bottom: 1px solid #999;
    display: flex;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
    .money_input{
        flex:1;
        /deep/.van-field__control{
           line-height:30px;
           font-size:14px;
        }
    }
}
.bank_info{
  margin:0 auto;
  width:90%;
  color:#999;
  display: flex;
  justify-content: space-between;
}
.password{
  width:90%;
  margin:20px auto;
  color:#fff;
  border-bottom: 1px solid #999;
  font-size:14px;
  .money_input{
        /deep/.van-field__control{
           line-height:30px;
           font-size:14px;
        }
    }
}
.btn{
    width:80%;
    margin:50px auto;
    background:#0d9652;
    color:#fff;
    border-color:#0d9652;
}
</style>