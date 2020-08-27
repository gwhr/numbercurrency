<template>
  <div class="container">
    <BaseHeader :name="name">
        <div slot="operation" @click="toRecord()">
            {{$t('Deposit record')}}
        </div>
    </BaseHeader>
    <div class="deposit_card">
        <span>{{$t('Available balance')}}</span>
        <span class="money">{{userinfo.twd}} &nbsp;&nbsp;TWD</span>
    </div>
    <div class="apply_money">
        <span>
            *入金金額:
        </span>
        <van-field v-model="amount" class="money_input" />
        <span>TWD</span>
    </div>
    <div class="fukuan">
        <van-row style="margin-bottom:20px;" >
                <van-col span="9" >
                    上傳付款證明:
                </van-col>
                <van-col span="15" style="text-align:center">
                    <van-uploader style="width:100px;" v-model="fileList" multiple :after-read="afterRead" :max-count="1"/>
                </van-col>
            </van-row>
    </div>
    <van-button round block type="info" native-type="submit" class="btn" @click="recharge">
        {{$t('Apply for deposit')}}
    </van-button>
    <div class="deposit_rules">
        <p>ATM繳款最高上限十萬  7-11 ibon 最高上限五千</p>
        <p>（如需更高金額請咨詢客服人員）</p>
    </div>
    <div class="deposit_tips">
        <p>【溫馨提示】</p>
        <p>使用綠界科技金流公司入金的用戶請完成繳款后提供繳款收據給予客服加速審核程序！</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name:this.$t('Apply for deposit'),
        amount:'',
        fileList:[],
        userinfo:{}
    };
  },
  methods: {
      toRecord(){
          this.$router.push({
              path:'/depositRecord'
          })
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        //   this.fileList.push(file)
        console.log(file,this.fileList);
        },
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
    /* 
        充值
     */
    recharge(){
        const file = this.fileList[0].file;
        var formData = new FormData();
        formData.append('voucher',file);
        formData.append('amount',this.amount);
        formData.append('token',JSON.parse(sessionStorage.getItem('token')));
        console.log(formData)
        let params = {
            type:'formData',
            formData
        };
        this.globalApi.api.user.recharge(params).then(value=>{
              if(value.data.code == 200){
                  this.$toast.success(value.data.descrp);
                  this.$router.go(0)
              }else{
                  this.$toast.fail(value.data.msg)
              }
          })
    },

  },
  created() {

  },
  mounted() {
      this.get_user_info()
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
.deposit_card{
    width:90%;
    margin:0 auto;
    height:150px;
    background:url("../../../assets/image/assetBg.png") no-repeat;
    background-size:100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#fff;
    font-size:16px;
    .money{
        margin-top:20px;
        font-weight:bold;
    }
}
.apply_money{
    margin:0 auto;
    margin-top:40px;
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
.btn{
    width:80%;
    margin:50px auto;
    background:#0d9652;
    color:#fff;
    border-color:#0d9652;
}
.deposit_rules{
    color:#0d9652;
    margin:0 auto;
    margin-top:40px;
    width:90%;
    text-align:center;
    font-size:14px;
    p{
        margin-bottom:10px;
    }
}
.deposit_tips{
    margin:0 auto;
    margin-top:40px;
    width:90%;
    color:#e56e52;
    font-size:14px;
    p{
        line-height:1.2;
        margin-bottom:10px;
    }
}
.fukuan{
    padding:20px;
    color:#fff;
    margin-top:20px;
}
</style>