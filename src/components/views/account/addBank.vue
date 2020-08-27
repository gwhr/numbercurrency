<template>
  <div class="container">
      <!-- 头部 -->
      <BaseHeader
        :name='name'
      ></BaseHeader>
      <!--  -->
      <div class="register">
          <div class="registerForm">
              <ul>
                  <!-- <li class="form_li">
                      <input class="form-control"  type='number' placeholder="輸入手機號" v-model="registers.PhoneNumber" >
                  </li> -->
                  <li class="form_li">
                      <input class="form-control"  :placeholder="$t('selectType')" v-model="bankShow" readonly @click="getCardType">
                      <van-action-sheet v-model="show" :title="$t('selectType')" style="line-height:44px">
                        <van-picker  :columns="columns" @change="onChange" />
                      </van-action-sheet>
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="number" :placeholder="$t('banknumber')" v-model="registers.bank_num">
                  </li>
                  <li class="form_li">
                      <input class="form-control"  :placeholder="$t('bankname')" v-model="registers.title">
                  </li>
                  <li class="form_li">
                      <input class="form-control"  :placeholder="$t('Transaction password')" v-model="registers.pay_password">
                  </li>
              </ul>
              <div class="registerBtn" @click="register">
                  {{$t('submit')}}
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        show:false,
        columns: [],
        option1: [],
        name:'新增銀行帳號',
        time:60,
        codeFlag:true,
        bankCardList:[],
        bankShow:'',
        registers:{
            title:'',
            bank_type_id:'',
            bank_num:'',
            pay_password:"",
        }
    };
  },
  computed: {},
  watch: {},
  methods: {
    getCardType(){
        this.show = true
    },
    onConfirm(value,index){
        this.registers.bank_type_id = value;
        this.show = false;
    },
    onCancel(value,index){
        this.registers.bank_type_id = value;
        this.show = false;
    },
    onChange(picker, value, index) {
        console.log(picker,value,index)
        this.registers.bank_type_id = value;
        this.bankShow = `${value}(${this.bankCardList[index].code})`
    //   Toast(`当前值：${value}, 当前索引：${index}`);
    },
    //   注册
    register(){
        this.submitMethod();
         // 注册成功
        console.log('注册成功')
        
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
    /* 
        添加银行卡
    */
   submitMethod(){
        let params = {
            bank_type_id:this.registers.bank_type_id ,
            title:this.registers.title,
            account:this.registers.account,
            bank_num:this.registers.bank_num,
            pay_password:this.registers.pay_password
        }
        this.bankCardList.forEach(v=>{
            if(v.name == params.bank_type_id){
                params.bank_type_id = v.id;
            }
       })
        this.globalApi.api.user.add_bank(params).then(value=>{
              if(value.data.code == 200){
                  console.log(value)
                  this.$toast.success(value.data.descrp)
                  this.$router.go(-1);
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    },
  },
  created() {

  },
  mounted() {
      this.getPaymentType();
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 44px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}
    .register{
        @include layout;
        .form_li{
            width:100%;
            position: relative;
            margin-bottom: 10px;
            .getCode{
                margin-top: 5px;
                position: absolute;
                right: 4px;
                bottom: 5px;
                background: #0d9652;
                color: #fff;
                padding: 3px 5px;
                border-radius: 4px;
                height:100%;
                height: 40px;
                line-height:40px;
                font-size: 16px;
            }
        }
        .form-control{
            display: block;
            width: 100%;
            height:55px;
            font-weight: 400;
            line-height: 1.5;
            background-color: transparent;
            padding: 6px 0;
            font-size: 12px;
            border:none;
            border-bottom:1px solid #3e536b;
            color:#fff;
            &::-webkit-input-placeholder{
                    color: #fff;
                }
            &::-moz-placeholder{  //不知道为何火狐的placeholder的颜色是粉红色，怎么改都不行，希望有大牛路过帮忙指点
                    color: #fff;        
            }
            &:-ms-input-placeholder{  //由于我的IE刚好是IE9，支持不了placeholder，所以也测试不了(⊙﹏⊙)，有IE10以上的娃可以帮我试试
                    color: #fff;        
            }
        }
        .registerBtn{
                background: #0d9652;
                color: #fff;
                width: 100%;
                font-size: 14px;
                margin-top: 35px;
                border-radius: 3px;
                padding: 8px 0;
                font-weight: 400;
                line-height: 1.5;
                text-align: center;
        }
    }
    .shangchuan{
        position: relative;
        text-align:center;
        img{
            width:200px;
            height:200px;
        }
        margin:20px 0;
        .submit{
            position: absolute;
            width:200px;
            height:200px;
            opacity: 0;
            left:50%;
            margin-left:-100px;
        }
    }
    .van-dropdown-menu{
        background:transparent;
    }
</style>