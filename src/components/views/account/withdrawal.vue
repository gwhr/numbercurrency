<template>
  <div class="container">
    <BaseHeader :name="name">
      <template v-slot:operation>
        <div @click="addAcount">{{$t('Add account')}}</div>
      </template>
    </BaseHeader>
    <div class="form_label">
      <van-form>
        <!-- <div class="form_li">
                      <input class="form-control"  :placeholder="$t('selectType')" v-model="bankShow" readonly @click="getCardType">
                      <van-action-sheet v-model="show" :title="$t('selectType')" style="line-height:44px">
                        <van-picker  :columns="columns" @change="onChange" />
                      </van-action-sheet>
                  </div> -->
        <van-field
          readonly
          clickable
          name="picker"
          :value="form.bank_id"
          :label="$t('selectType')"
          :placeholder="$t('selectType')"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
          style="line-height:44px"
            @change="onChange"
            :columns="columns"
          />
        </van-popup>
        <van-field
          v-model="form.amount"
          :name="$t('bank account')"
          :label="$t('bank account')"
        />
        <van-field
          v-model="form.pay_password"
          :name="$t('Transaction password')"
          :label="$t('Transaction password')"
          type="password"
        />
      </van-form>
      
    </div>
    <van-button round block type="info" native-type="submit" class="btn" @click="withdraw">
        {{$t('confirm')}}
        </van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$t("Withdrawal account"),
      username:'',
      showPicker:false,
      columns:[],
      bankCardList:[],
      form:{
          pay_password: "",
          amount: "",
          bank_id:''
      }
      
    };
  },
  methods: {
    addAcount(){
        this.$router.push({
          path:'/addBank'
        })
    },
    onChange(picker, value, index) {
        console.log(picker,value,index)
        this.form.bank_id = value;
        this.bankShow = `${value}(${this.bankCardList[index].code})`
    //   Toast(`当前值：${value}, 当前索引：${index}`);
    },
    /* 
        获取银行卡类别
    */
   getPaymentType(){
       this.globalApi.api.user.banks().then(value=>{
              if(value.data.code == 200){
                  console.log(value)
                  this.bankCardList = value.data.data;
                  value.data.data.forEach(v=>{
                        this.columns.push(v.name)
                  })
              }
          })
   },
  //  提现
  withdraw(){
    let params = {
      pay_password:this.form.pay_password,
      amount:this.form.amount,
      bank_id:this.form.bank_id
    }
    this.bankCardList.forEach(v=>{
            if(v.name == params.bank_id){
                params.bank_id = v.id;
            }
       })
       this.globalApi.api.user.withdraw(params).then(value=>{
              if(value.data.code == 200){
                  console.log(value)
                  this.$toast.success(value.data.descrp)
              }else{
                this.$toast.fail(value.data.descrp)
              }
          })
   },
  },
  created() {},
  mounted() {
    this.getPaymentType();
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
.form_label {
  background: #1f1f23;
  padding-left: 15px;
  padding-bottom: 15px;
  .van-cell {
    background: transparent;
    color: #fff;
    /deep/.van-field__control{
        color:#fff;
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