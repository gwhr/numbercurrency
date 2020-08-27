
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
                  <li class="form_li">
                      <input class="form-control" type="number" :placeholder="$t('Please enter your mobile phone number')" v-model="registers.PhoneNumber">
                  </li>
                  <li class="form_li"> 
                      <input class="form-control" type="number" :placeholder="$t('Please enter the Verification code')" v-model="registers.verificationCode">
                      <span class="getCode" v-if="codeFlag" @click="getCode">{{$t('Get captcha')}}</span>
                      <span class="getCode" v-if="!codeFlag">{{time}}</span>
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="password" :placeholder="$t('Please input a password')" v-model="registers.password">
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="password" :placeholder="$t('Please enter the password again')" v-model="registers.passwordAgain">
                  </li>
                  <li class="form_li">
                      <input class="form-control" type="password" :placeholder="$t('Please enter the transaction password')" v-model="registers.pwd2">
                  </li>
                  <li class="form_li" v-if="!$route.params.id">
                      <input class="form-control" type="password"  :placeholder="$t('Please enter the transaction password again')" v-model="registers.parent_mid">
                  </li>
                  <li class="form_li" v-if="$route.params.id">
                      <!-- <input class="form-control"  :placeholder="$t('login.my')" v-model="registers.parent_mid" readonly> -->
                  </li>
                  <li class="form_li">
                      <input class="form-control" :placeholder="$t('Please enter the invitation code')" v-model="registers.invitation_code">
                  </li>
                  <!-- <li class="form_li" style="color:#fff">
                      <van-checkbox   v-model="checked">我已閱讀並同意<span style="color:#1881d2;" @click="agreement">用戶協議</span></van-checkbox>
                  </li> -->
              </ul>
              <div class="registerBtn" @click="toConfirm">
                  {{$t('register')}}
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        checked:true,
        radio:1,
        name:this.$t('register'),
        time:60,
        codeFlag:true,
        urlIvate:'',
        registers:{
            PhoneNumber:'',
            verificationCode:'',
            password:'',
            passwordAgain:'',
            nickname:'',
            pwd2:'',
            parent_mid:'',
            invitation_code:""
            // transactionPassword:'',
            // transactionPasswordAgain:'',
            // invitationCode:''
        }
    };
  },
  computed: {},
  watch: {},
  methods: {
    //   注册
    toConfirm(){
        // 进行校验
        var reg = new RegExp("^[0-9]*$");
        if(!reg.test(this.registers.pwd2)){
            this.$toast.fail('密碼只能為數字')
            return
            }
        this.register()
         // 注册成功
        console.log('注册成功')
        
    },
    /* 
        注册
    */
    register(){
        let params = {
            mobile_num:this.registers.PhoneNumber,
            code:this.registers.verificationCode,
            invitation_code:this.registers.invitation_code,
            password:this.registers.password,
            repassword:this.registers.passwordAgain,
            pay_password:this.registers.pwd2,
            pay_repassword:this.registers.pwd2,
            mid:this.registers.parent_mid || this.$route.params.id
        }
        this.globalApi.api.login.register(params).then(value=>{
              if(value.data.code == 200){
                  this.$toast.success()
                  this.storeSession.save('token',value.data.data.api_token);
                  this.$router.push({
                        path:'/home'
                    })
              }else{
                  this.$toast.fail()
              }
          })
    },
    // 获取验证码
    getCode(){
        
        if(!this.registers.PhoneNumber){
            this.$toast.fail('請輸入手機號')
            return
        }
        
        this.sms_reg()
        
    },
    /*
        获取验证码 
     */
    sms_reg(){
        let params = {
            mobile_num:this.registers.PhoneNumber,
            type:'sms_reg'
        }
        this.globalApi.api.login.get_phone_varcode(params).then(value=>{
              if(value.data.code == 200){
                  this.$toast.success(value.data.descrp);
                  this.codeFlag = false;
                    var timer = setInterval(() => {
                        this.time--;
                        if (this.time === 0) {
                            clearInterval(timer);
                            this.codeFlag = true;
                            this.time = 60;
                        }
                    }, 1000)
              }else{
                  this.$toast.fail(value.data.descrp)
              }
          })
    },
    /* 
        獲取邀請碼
    */
    getCodeIvate(){
        let url = window.location.href.split('/');
        if(this.$route.params.id){
            this.registers.parent_mid = this.$route.params.id
        }
        
    },
    // 用戶協議
    agreement(){
        this.$router.push({
            path:'/agreement'
        })
    }
  },
  created() {
      this.getCodeIvate();
  },
  mounted() {

  },
  components: {},
}
</script>

<style lang="scss" scoped>
.container{
    padding-top:44px;
    box-sizing: border-box;
    height: 100%;
    overflow: auto;
    padding-bottom:50px;
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
                background: #1881d2;
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
                background: #1881d2;
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
   /deep/ .van-checkbox{
       color:#fff;
        .van-checkbox__icon{
            width:auto;
        }
        .van-checkbox__label{
            color:#fff;
        }
    }
    
</style>